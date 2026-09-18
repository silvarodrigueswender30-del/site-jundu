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

// Calibrated specifically for bambu.jpeg:
// - Background is near-white: lum >= 248 → alpha = 0
// - JPEG halo range 230-248 → very low alpha (fade to transparent)
// - The actual ink lines span lum 0-220 broadly
// - We use a tight whitePoint and aggressive gamma to amplify the lines
// - blackPoint=0 (lines go fully dark), whitePoint=245 (cut off at near-white)
// - gamma < 1 compresses the curve: midtone lines become denser without
//   adding new geometry — only the opacity of existing pixels changes.
const blackPoint = 0;
const whitePoint = 245;
const gamma = 0.45; // gamma < 1 makes the alpha curve convex: lifts midtones strongly

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

  // Linear ratio: 0 = black line, 1 = white background
  const linear = Math.min(
    1,
    Math.max(0, (whitePoint - luminance) / (whitePoint - blackPoint)),
  );
  // Apply gamma to lift midtone lines (gamma < 1 → convex curve)
  const alpha = Math.round(255 * Math.pow(linear, gamma));

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
