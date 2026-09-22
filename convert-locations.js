const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

const srcDir = 'C:\\Users\\Teste\\Downloads\\Restaurante\\ARQUIVOS\\fotos-tratada';
const destDir = 'C:\\Users\\Teste\\Downloads\\Restaurante\\public\\images\\units';

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, {recursive: true});

async function processImage(filename, destName, width, quality) {
  const src = path.join(srcDir, filename);
  const dest = path.join(destDir, destName);
  
  const metadata = await sharp(src).metadata();
  const origSize = fs.statSync(src).size;
  console.log(`Original ${filename}: ${metadata.width}x${metadata.height}, ${(origSize/1024).toFixed(1)} KB`);
  
  await sharp(src)
    .resize({ width: Math.min(metadata.width, width), withoutEnlargement: true })
    .avif({ quality: quality, effort: 6 })
    .toFile(dest);
    
  const newSize = fs.statSync(dest).size;
  const newMetadata = await sharp(dest).metadata();
  console.log(`Converted ${destName}: ${newMetadata.width}x${newMetadata.height}, ${(newSize/1024).toFixed(1)} KB, reduction: ${(100 - (newSize/origSize)*100).toFixed(1)}%`);
}

async function run() {
  await processImage('Itagua.jpeg', 'jundu-unit-itagua.avif', 1600, 72);
  await processImage('Prumirim.jpeg', 'jundu-unit-prumirim.avif', 1600, 72);
  await processImage('Praia Grande.jpeg', 'jundu-unit-praia-grande.avif', 1600, 72);
}
run();
