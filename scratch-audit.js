const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const sharp = require('sharp');

const SOURCE_DIR = 'C:\\Users\\Teste\\Downloads\\IMG-RESTAURANTE';
const DOCS_DIR = path.join(__dirname, 'docs', 'photo-audit');
const CONTACT_SHEETS_DIR = path.join(DOCS_DIR, 'contact-sheets');

// Create output directories
if (!fs.existsSync(DOCS_DIR)) fs.mkdirSync(DOCS_DIR, { recursive: true });
if (!fs.existsSync(CONTACT_SHEETS_DIR)) fs.mkdirSync(CONTACT_SHEETS_DIR, { recursive: true });

async function getDHash(imageBuffer) {
    try {
        const { data, info } = await sharp(imageBuffer)
            .greyscale()
            .resize(9, 8, { fit: 'fill' })
            .raw()
            .toBuffer({ resolveWithObject: true });
        
        let hash = '';
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {
                const left = data[y * 9 + x];
                const right = data[y * 9 + x + 1];
                hash += left > right ? '1' : '0';
            }
        }
        return BigInt('0b' + hash).toString(16);
    } catch (e) {
        return null;
    }
}

async function scanDirectory(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            await scanDirectory(fullPath, fileList);
        } else {
            fileList.push({ fullPath, stat });
        }
    }
    return fileList;
}

async function run() {
    console.log('Scanning directories...');
    const allFiles = await scanDirectory(SOURCE_DIR);
    
    const inventory = [];
    const groupedByFolder = {};

    console.log(`Found ${allFiles.length} files. Processing metadata...`);
    
    for (const file of allFiles) {
        const ext = path.extname(file.fullPath).toLowerCase();
        const relPath = path.relative(SOURCE_DIR, file.fullPath);
        const folder = path.dirname(relPath);
        
        if (!groupedByFolder[folder]) groupedByFolder[folder] = [];
        
        const fileBuffer = fs.readFileSync(file.fullPath);
        const exactHash = crypto.createHash('md5').update(fileBuffer).digest('hex');
        
        let width = 0, height = 0, ratio = '', orientation = '', pHash = '', hasColorProfile = false;
        let isVideo = ['.mp4', '.mov', '.avi', '.webm'].includes(ext);
        
        if (isVideo) {
            orientation = 'Unknown (Video)';
        } else if (['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(ext)) {
            try {
                const metadata = await sharp(fileBuffer).metadata();
                width = metadata.width || 0;
                height = metadata.height || 0;
                if (width > 0 && height > 0) {
                    const r = width / height;
                    ratio = r.toFixed(2);
                    orientation = r > 1.1 ? 'Horizontal' : r < 0.9 ? 'Vertical' : 'Square';
                }
                hasColorProfile = !!metadata.icc;
                pHash = await getDHash(fileBuffer) || '';
            } catch (e) {
                console.log(`Error processing image ${file.fullPath}: ${e.message}`);
            }
        }
        
        const sizeMb = (file.stat.size / (1024 * 1024)).toFixed(2);
        const resWeb = (width >= 1920 || height >= 1920) ? 'Suficiente' : (width === 0 ? 'N/A' : 'Insuficiente');
        const deskUse = width >= 1440 ? 'Sim' : 'Não';
        const mobUse = height >= 800 ? 'Sim' : 'Não';

        const record = {
            nome: path.basename(file.fullPath),
            caminho_relativo: relPath,
            pasta: folder,
            extensao: ext,
            largura: width,
            altura: height,
            proporcao: ratio,
            orientacao: orientation,
            tamanho_mb: sizeMb,
            perfil_cor: hasColorProfile ? 'Sim' : 'Não',
            resolucao_web: resWeb,
            uso_desktop: deskUse,
            uso_mobile: mobUse,
            exact_hash: exactHash,
            perceptual_hash: pHash,
            is_video: isVideo
        };
        
        inventory.push(record);
        if (!isVideo) {
            groupedByFolder[folder].push({ ...record, fullPath: file.fullPath });
        }
    }

    console.log('Writing inventory CSV...');
    const csvHeader = 'Nome,Caminho,Pasta,Extensao,Largura,Altura,Proporcao,Orientacao,Tamanho_MB,Perfil_Cor,Resolucao_Web,Uso_Desktop,Uso_Mobile,Exact_Hash,Perceptual_Hash\n';
    const csvRows = inventory.map(r => 
        `"${r.nome}","${r.caminho_relativo.replace(/\\/g, '/')}","${r.pasta.replace(/\\/g, '/')}","${r.extensao}",${r.largura},${r.altura},${r.proporcao},"${r.orientacao}",${r.tamanho_mb},"${r.perfil_cor}","${r.resolucao_web}","${r.uso_desktop}","${r.uso_mobile}","${r.exact_hash}","${r.perceptual_hash}"`
    ).join('\n');
    
    fs.writeFileSync(path.join(DOCS_DIR, 'photo-inventory.csv'), csvHeader + csvRows);
    fs.writeFileSync(path.join(DOCS_DIR, 'audit-summary.json'), JSON.stringify(inventory, null, 2));

    console.log('Generating contact sheets...');
    // Create contact sheets per folder
    for (const folder of Object.keys(groupedByFolder)) {
        const images = groupedByFolder[folder];
        if (images.length === 0) continue;
        
        const THUMB_SIZE = 300;
        const SPACING = 20;
        const COLS = 4;
        const ROWS = Math.ceil(images.length / COLS);
        
        const sheetWidth = COLS * THUMB_SIZE + (COLS + 1) * SPACING;
        const sheetHeight = ROWS * (THUMB_SIZE + 40) + (ROWS + 1) * SPACING; // +40 for text
        
        const canvas = sharp({
            create: {
                width: sheetWidth,
                height: sheetHeight,
                channels: 4,
                background: { r: 240, g: 240, b: 240, alpha: 1 }
            }
        });
        
        const composites = [];
        for (let i = 0; i < images.length; i++) {
            const img = images[i];
            const col = i % COLS;
            const row = Math.floor(i / COLS);
            const x = SPACING + col * (THUMB_SIZE + SPACING);
            const y = SPACING + row * (THUMB_SIZE + 40 + SPACING);
            
            try {
                const thumb = await sharp(img.fullPath)
                    .resize(THUMB_SIZE, THUMB_SIZE, { fit: 'inside' })
                    .toBuffer();
                
                composites.push({ input: thumb, left: x, top: y });
                
                // Text overlay using SVG
                const textSvg = `
                    <svg width="${THUMB_SIZE}" height="30">
                        <text x="50%" y="20" font-family="Arial" font-size="12" fill="#333" text-anchor="middle">
                            ${img.nome.length > 35 ? img.nome.substring(0,32)+'...' : img.nome}
                        </text>
                    </svg>
                `;
                composites.push({ input: Buffer.from(textSvg), left: x, top: y + THUMB_SIZE + 5 });
            } catch (e) {
                console.log(`Could not thumbnail ${img.fullPath}`);
            }
        }
        
        if (composites.length > 0) {
            const safeFolderName = folder === '.' ? 'root' : folder.replace(/[^a-zA-Z0-9]/g, '-');
            const sheetPath = path.join(CONTACT_SHEETS_DIR, `contact-sheet-${safeFolderName}.jpg`);
            await canvas.composite(composites).jpeg({ quality: 80 }).toFile(sheetPath);
            console.log(`Generated contact sheet: ${sheetPath}`);
        }
    }
    console.log('Audit complete.');
}

run().catch(console.error);
