const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

const srcPath = 'C:\\Users\\Teste\\Downloads\\Restaurante\\ARQUIVOS\\fotos-tratada\\hero.jpeg';
const destPath = 'C:\\Users\\Teste\\Downloads\\Restaurante\\public\\images\\editorial\\jundu-events.avif';
const destDir = path.dirname(destPath);

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, {recursive: true});

async function processImage() {
  const metadata = await sharp(srcPath).metadata();
  console.log(`Original: ${metadata.width}x${metadata.height}`);
  
  // Crop right side / bottom to focus on tables and interior, avoiding the left horizon
  // Assuming the interior is mainly in the center and right side.
  const cropWidth = Math.floor(metadata.width * 0.65);
  const cropHeight = Math.floor(metadata.height * 0.85);
  const left = Math.floor(metadata.width * 0.35); // Start 35% from left
  const top = Math.floor(metadata.height * 0.15); // Start 15% from top
  
  await sharp(srcPath)
    .extract({ left, top, width: cropWidth, height: cropHeight })
    // Increase saturation slightly, and contrast slightly
    .modulate({
      saturation: 1.15,
      lightness: 0.95 // slightly darker for more mood/contrast
    })
    .resize(1600)
    .avif({ quality: 75, effort: 6 })
    .toFile(destPath);
    
  console.log(`Processed and saved to ${destPath}`);
}

processImage().catch(console.error);
