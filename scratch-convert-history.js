const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = 'ARQUIVOS/fotos-tratada';
const outDir = 'public/images/history';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, {recursive: true});

const files = [
  { in: 'Praia Bar.jpeg', out: 'jundu-history-prumirim.avif' },
  { in: 'Lounge.jpeg', out: 'jundu-history-itagua.avif' },
  { in: 'Gastrobar.jpeg', out: 'jundu-history-gastrobar.avif' },
  { in: 'Pessoas.jpeg', out: 'jundu-history-people.avif' }
];

async function processImages() {
  for (let f of files) {
    const src = path.join(srcDir, f.in);
    const buf = fs.readFileSync(src);
    const meta = await sharp(buf).metadata();
    
    // Testing different qualities to ensure target 80-220 KB
    let quality = 72;
    let outBuf = await sharp(buf)
      .resize(1200, null, { withoutEnlargement: true })
      .avif({ quality, effort: 6 })
      .toBuffer();
    
    if (outBuf.length / 1024 > 250) {
      quality = 68;
      outBuf = await sharp(buf)
        .resize(1200, null, { withoutEnlargement: true })
        .avif({ quality, effort: 6 })
        .toBuffer();
    } else if (outBuf.length / 1024 < 80) {
       quality = 75;
       outBuf = await sharp(buf)
        .resize(1200, null, { withoutEnlargement: true })
        .avif({ quality, effort: 6 })
        .toBuffer();
    }
    
    fs.writeFileSync(path.join(outDir, f.out), outBuf);
    
    const outMeta = await sharp(outBuf).metadata();
    console.log(f.in, '->', f.out);
    console.log('Orig:', meta.width + 'x' + meta.height, (buf.length/1024).toFixed(2) + ' KB');
    console.log('AVIF:', outMeta.width + 'x' + outMeta.height, (outBuf.length/1024).toFixed(2) + ' KB', 'Quality:', quality, 'Reduction:', (100 - (outBuf.length/buf.length*100)).toFixed(1) + '%');
    console.log('---');
  }
}
processImages().catch(console.error);
