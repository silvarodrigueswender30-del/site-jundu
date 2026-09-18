import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = resolve(projectRoot, "ARQUIVOS/testuras/bambu.jpeg");
const outputPath = resolve(
  projectRoot,
  "public/brand/textures/bamboo-alpha.png",
);

// Same luminance → alpha principle used for territory
// bambu.jpeg is white background with fine dark lines (trama)
// → white becomes transparent, dark lines are preserved
const blackPoint = 20;
const whitePoint = 240;

const { data, info } = await sharp(sourcePath)
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const pixels = Buffer.alloc(info.width * info.height * 4);

for (let source = 0, target = 0; source < data.length; source += 3, target += 4) {
  const luminance =
    data[source] * 0.2126 +
    data[source + 1] * 0.7152 +
    data[source + 2] * 0.0722;
  const alpha = Math.round(
    255 *
      Math.min(
        1,
        Math.max(0, (whitePoint - luminance) / (whitePoint - blackPoint)),
      ),
  );

  pixels[target] = 255;
  pixels[target + 1] = 255;
  pixels[target + 2] = 255;
  pixels[target + 3] = alpha;
}

await mkdir(dirname(outputPath), { recursive: true });
await sharp(pixels, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(outputPath);

console.log(`Generated ${outputPath} (${info.width}x${info.height})`);
