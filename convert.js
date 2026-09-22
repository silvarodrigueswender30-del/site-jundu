const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

const srcDir = 'C:\\Users\\Teste\\Downloads\\Restaurante\\ARQUIVOS\\fotos-tratada';
const destDir = 'C:\\Users\\Teste\\Downloads\\Restaurante\\public\\images\\architecture';

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, {recursive: true});

async function processImage(filename, destName, width, quality) {
  const src = path.join(srcDir, filename);
  const dest = path.join(destDir, destName);
  
  const metadata = await sharp(src).metadata();
  console.log(`Original ${filename}: ${metadata.width}x${metadata.height}, ${(fs.statSync(src).size/1024).toFixed(1)} KB`);
  
  await sharp(src)
    .resize({ width: Math.min(metadata.width, width), withoutEnlargement: true })
    .avif({ quality: quality, effort: 6 })
    .toFile(dest);
    
  const newSize = fs.statSync(dest).size;
  const newMetadata = await sharp(dest).metadata();
  console.log(`Converted ${destName}: ${newMetadata.width}x${newMetadata.height}, ${(newSize/1024).toFixed(1)} KB, reduction: ${(100 - (newSize/fs.statSync(src).size)*100).toFixed(1)}%`);
}

async function run() {
  await processImage('ARQUITETURA.jpeg', 'jundu-architecture-presence.avif', 1600, 74);
  await processImage('MATeRIA.jpeg', 'jundu-material-light.avif', 1200, 74);
  await processImage('PAISAGEM.jpg', 'jundu-landscape-meeting.avif', 1200, 74);
}
run();
