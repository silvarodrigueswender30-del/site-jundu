const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const DOCS_DIR = 'C:\\Users\\Teste\\Downloads\\Restaurante\\docs\\photo-audit';
const SOURCE_DIR = 'C:\\Users\\Teste\\Downloads\\IMG-RESTAURANTE';
const CONTACT_SHEETS_DIR = path.join(DOCS_DIR, 'contact-sheets');

const inventory = JSON.parse(fs.readFileSync(path.join(DOCS_DIR, 'audit-summary.json'), 'utf8'));

// 1. Assign short codes
const prefixes = {
    'JUNDU-ITAGUA': 'ITA',
    'JUNDU-PRAIA-GRANDE': 'PRG',
    'JUNDU-PRUMIRIM': 'PRU',
    'Red Beach Club': 'RBC'
};

const counts = { ITA: 1, PRG: 1, PRU: 1, RBC: 1 };
const groupedByFolder = {};

inventory.forEach(img => {
    const pfx = prefixes[img.pasta] || 'UNK';
    const code = `${pfx}-${counts[pfx].toString().padStart(2, '0')}`;
    img.shortCode = code;
    counts[pfx]++;
    
    if (!groupedByFolder[img.pasta]) groupedByFolder[img.pasta] = [];
    groupedByFolder[img.pasta].push(img);
});

// Helper to find image
function getImg(searchStr) {
    const found = inventory.find(i => i.nome.includes(searchStr));
    if (!found) throw new Error('Not found: ' + searchStr);
    return found;
}

// 2. Generate CONTACT-SHEET-INDEX.md
console.log('Generating CONTACT-SHEET-INDEX.md...');
let indexMd = '# Índice das Pranchas de Contato\n\n| Código | Nome completo | Caminho relativo | Unidade |\n|---|---|---|---|\n';
inventory.forEach(img => {
    indexMd += `| ${img.shortCode} | \`${img.nome}\` | \`${img.caminho_relativo.replace(/\\/g, '/')}\` | ${img.pasta} |\n`;
});
fs.writeFileSync(path.join(DOCS_DIR, 'CONTACT-SHEET-INDEX.md'), indexMd);

// 3. Regenerate contact sheets
async function regenContactSheets() {
    console.log('Regenerating contact sheets...');
    for (const folder of Object.keys(groupedByFolder)) {
        const images = groupedByFolder[folder];
        if (images.length === 0) continue;
        
        const THUMB_SIZE = 300;
        const SPACING = 20;
        const COLS = 4;
        const ROWS = Math.ceil(images.length / COLS);
        
        const sheetWidth = COLS * THUMB_SIZE + (COLS + 1) * SPACING;
        const sheetHeight = ROWS * (THUMB_SIZE + 40) + (ROWS + 1) * SPACING;
        
        const canvas = sharp({
            create: { width: sheetWidth, height: sheetHeight, channels: 4, background: { r: 240, g: 240, b: 240, alpha: 1 } }
        });
        
        const composites = [];
        for (let i = 0; i < images.length; i++) {
            const img = images[i];
            const col = i % COLS;
            const row = Math.floor(i / COLS);
            const x = SPACING + col * (THUMB_SIZE + SPACING);
            const y = SPACING + row * (THUMB_SIZE + 40 + SPACING);
            const fullPath = path.join(SOURCE_DIR, img.caminho_relativo);
            
            try {
                // If it's a video, just put a gray box
                let thumb;
                if (img.is_video) {
                    thumb = await sharp({ create: { width: THUMB_SIZE, height: THUMB_SIZE, channels: 4, background: { r: 100, g: 100, b: 100, alpha: 1 } } }).jpeg().toBuffer();
                } else {
                    thumb = await sharp(fullPath).resize(THUMB_SIZE, THUMB_SIZE, { fit: 'inside' }).toBuffer();
                }
                
                composites.push({ input: thumb, left: x, top: y });
                
                const textSvg = `
                    <svg width="${THUMB_SIZE}" height="30">
                        <text x="50%" y="20" font-family="Arial" font-size="20" font-weight="bold" fill="#333" text-anchor="middle">
                            ${img.shortCode}
                        </text>
                    </svg>
                `;
                composites.push({ input: Buffer.from(textSvg), left: x, top: y + THUMB_SIZE + 5 });
            } catch (e) {
                console.log(`Error thumbnailing ${fullPath}`);
            }
        }
        
        if (composites.length > 0) {
            const safeFolderName = folder.replace(/[^a-zA-Z0-9]/g, '-');
            const sheetPath = path.join(CONTACT_SHEETS_DIR, `contact-sheet-${safeFolderName}.jpg`);
            await canvas.composite(composites).jpeg({ quality: 80 }).toFile(sheetPath);
        }
    }
}

// 4. Generate SHORTLIST.md
function imgToMd(img, desc, uso, trat, expansao, pos, nota) {
    return `- **Arquivo:** \`${img.nome}\`
- **Caminho absoluto:** \`${path.join(SOURCE_DIR, img.caminho_relativo).replace(/\\/g, '/')}\`
- **Caminho relativo:** \`${img.caminho_relativo.replace(/\\/g, '/')}\`
- **Unidade:** ${img.pasta}
- **Dimensões:** ${img.largura}x${img.altura} (${img.proporcao})
- **Descrição Visual:** ${desc}
- **Uso Recomendado:** ${uso}
- **Dispositivo:** ${img.largura >= 1440 ? (img.altura >= 800 ? 'Ambos (Desktop e Mobile)' : 'Desktop') : 'Mobile'}
- **Tratamento Necessário:** ${trat}
- **Direção da Expansão:** ${expansao}
- **Posicionamento:** ${pos}
- **Classificação:** ${nota}/5
`;
}

console.log('Generating SHORTLIST.md...');
let sl = '# Lista Curta (Shortlist) Corrigida\n\nEsta seleção ignora arquivos descartados ou de outras unidades não centrais (como Red Beach Club).\n\n';

sl += '## 1. Hero — Candidatas Principais\n\n';
sl += imgToMd(getImg('571453473'), 'Placa Praia Bar pendurada, mar azul paradisíaco ao fundo.', 'Hero principal (primeira dobra)', 'Correção leve de cor para vibratilidade', 'Bilateral (esquerda para texto, direita para completar mar)', 'Placa centralizada com leve deslocamento direito', 5) + '\n';
sl += imgToMd(getImg('801580921'), 'Vista do quiosque a partir da areia com amplo céu azul e nuvens.', 'Hero principal ou seção Manifesto', 'Remoção de pequenas impurezas na areia se necessário', 'Esquerda (para criar respiro para o texto)', 'Estrutura do quiosque à direita', 5) + '\n';

sl += '## 2. Hero — Alternativas\n\n';
sl += imgToMd(getImg('571135459'), 'Salão rústico de madeira com mesas e vista do mar ao fundo.', 'Hero alternativo ou background', 'Escurecimento geral (overlay) para garantir leitura de texto', 'Nenhuma para desktop; Corte lateral para mobile', 'Centro', 4) + '\n';
sl += imgToMd(getImg('626378659'), 'Moqueca em panela de barro fumegante.', 'Pilares gastronômicos ou Hero secundário', 'Realce de contraste e nitidez na comida', 'Bilateral e superior (para estender a mesa e espaço escuro)', 'Centro inferior', 5) + '\n';

sl += '## 3. Pessoas e Equipe\n\n';
sl += imgToMd(getImg('CHEFE-JUNDU'), 'Equipe reunida na cozinha, sorrindo de avental verde.', 'Seção Equipe/Colaboradores', 'Nenhum', 'Nenhuma', 'Centro', 5) + '\n';
sl += imgToMd(getImg('616376453'), 'Atendente sorridente segurando panela de barro.', 'Seção Equipe ou Hospitalidade', 'Desfoque de fundo se necessário', 'Esquerda', 'Atendente à direita', 4) + '\n';
sl += imgToMd(getImg('491496994'), 'Chef mulher sorridente segurando prato.', 'Retrato de Chef / Nossa História', 'Nenhum', 'Nenhuma', 'Centro', 4) + '\n';

sl += '## 4. Gastronomia\n\n';
sl += imgToMd(getImg('591146559'), 'Camarões grelhados na folha de bananeira.', 'Mosaico Gastronômico', 'Nenhum', 'Nenhuma', 'Centro', 5) + '\n';
sl += imgToMd(getImg('590409498'), 'Peixe fresco com legumes.', 'Mosaico Gastronômico', 'Nenhum', 'Nenhuma', 'Centro', 4) + '\n';

sl += '## 5. Coquetelaria\n\n';
sl += imgToMd(getImg('696735633'), 'Drinks tropicais amarelos e verdes, mar ao fundo.', 'Mosaico ou Background', 'Ajuste de saturação', 'Esquerda (se usado como background)', 'Centro', 4) + '\n';

sl += '## 6. Arquitetura\n\n';
sl += imgToMd(getImg('591165529'), 'Salão de madeira com iluminação amarela quente.', 'Galeria Arquitetônica', 'Equilíbrio de branco', 'Nenhuma', 'Centro', 5) + '\n';
sl += imgToMd(getImg('Jundu Restaurante Lounge Bar.jpg'), 'Fachada rústica iluminada à noite.', 'Unidades (Itaguá)', 'Redução de ruído e realce de sombras', 'Nenhuma', 'Centro', 4) + '\n';

sl += '## 7. Unidades\n\n';
sl += imgToMd(getImg('unnamed.webp'), 'Gramado, quiosque e vista.', 'Localizações', 'Nenhum', 'Nenhuma', 'Centro', 3) + '\n';

sl += '## 8. Eventos\n\n';
sl += '*(Nenhuma imagem com clara configuração de evento social (casamento/festa) foi identificada no acervo inicial de curadoria. Imagens de salão noturno podem ser usadas provisoriamente)*\n\n';

sl += '## 9. Natureza/Praia\n\n';
sl += imgToMd(getImg('763249548'), 'Cadeiras na areia, guarda-sóis e mar calmo.', 'Sustentabilidade/Praia', 'Nenhum', 'Bilateral', 'Centro', 4) + '\n';

sl += '## 10. Histórias Verticais\n\n';
sl += imgToMd(getImg('488648206'), 'Close de prato na praia com pães e mariscos.', 'Story', 'Nenhum', 'Nenhuma', 'Centro', 4) + '\n';

sl += '## 11. Vídeos\n\n';
sl += imgToMd(getImg('VIDEO-DO-RESTAURANTE.mp4'), 'Tomada drone/ambiente.', 'Background de vídeo', 'Compressão para web', 'N/A', 'N/A', 5) + '\n';

fs.writeFileSync(path.join(DOCS_DIR, 'SHORTLIST.md'), sl);

// 5. Generate PHOTO-CURATION-AUDIT.md
console.log('Generating PHOTO-CURATION-AUDIT.md...');
let audit = `# Relatório de Auditoria e Curadoria Fotográfica — Grupo Jundu

## Resumo Executivo
Foi realizada uma auditoria completa no diretório \`IMG-RESTAURANTE\`, que continha fotografias e vídeos distribuídos em quatro subpastas: JUNDU-ITAGUA, JUNDU-PRAIA-GRANDE, JUNDU-PRUMIRIM e Red Beach Club. O acervo consiste de **60 arquivos no total**. O material apresenta excelente valor institucional, forte apelo gastronômico e representação fiel do "clima" da marca, mas possui restrições técnicas devido à origem dos arquivos (maioria proveniente de *stories* do Instagram, com proporção vertical 0.80 ou 0.75).

## Tabela Comparativa de Candidatas à Hero

| Nome completo | Unidade | Dimensões | Qualidade | Força Institucional | Espaço para Texto | Dificuldade Expansão | Risco Artefatos | Desktop | Mobile | Nota | Recomendação |
|---|---|---|---|---|---|---|---|---|---|---|---|
| \`${getImg('571453473').nome}\` | Prumirim | 1440x1800 | Alta | 5/5 | Precisa expandir | Média (Mar liso) | Baixo (Mar e céu fáceis de clonar) | Não (nativa) | Sim | 5.0 | **Vencedora Principal** |
| \`${getImg('801580921').nome}\` | Prumirim | 1440x1920 | Alta | 4.5/5 | Precisa expandir | Alta (Cadeiras e areia complexa) | Médio | Não (nativa) | Sim | 4.8 | Alternativa 1 |
| \`${getImg('571135459').nome}\` | Itaguá | 1440x960 | Média | 4/5 | Ocupado | Baixa (Já horizontal) | Baixo | Sim | Não (corta) | 4.5 | Alternativa 2 |
| \`${getImg('626378659').nome}\` | Praia G. | 1440x1920 | Alta | 4/5 (Foco comida) | Precisa expandir | Alta (Mesa de madeira texturizada) | Alto | Não (nativa) | Sim | 4.2 | Descartada para Hero (usar Gastronomia) |
| \`${getImg('616376453').nome}\` | Praia G. | 1440x1920 | Alta | 4/5 (Hospitalidade) | Precisa expandir | Alta (Fundo com objetos e luzes) | Alto | Não (nativa) | Sim | 4.0 | Descartada para Hero (usar Equipe) |

## Diagnóstico Técnico Geral

- **Resolução e Orientação**: Mais de 80% das imagens são **Verticais (9:16 / 4:5)**. São perfeitas nativamente para Mobile.
- **Uso em Desktop**: O uso direto como Hero no Desktop (16:9) é **inviável sem edição**.
- **Expansão Generativa**: Recomendação mandatória de usar IA generativa para **expandir as laterais** das candidatas à hero.

## Próximos Passos (Recomendação para Especialista)

1. **Expansão Generativa**: Extrair a Vencedora Principal e aplicar *Generative Fill* nas bordas até atingir 16:9.
2. **Correção de Cor**: Padronizar levemente a temperatura das fotos.
3. **Conversão de Formatos**: Converter para \`.webp\` com compressão \`q=80\`.
4. **Implementação**: Ajustar os componentes para carregar os vídeos e imagens.
`;

fs.writeFileSync(path.join(DOCS_DIR, '..', 'PHOTO-CURATION-AUDIT.md'), audit);

regenContactSheets().then(() => {
    console.log('Done script.');
});

