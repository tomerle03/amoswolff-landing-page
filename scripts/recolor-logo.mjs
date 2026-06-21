import sharp from "sharp";

const src = "logo_new.png";
const out = "src/assets/logo.png";

const img = sharp(src);
const { data, info } = await img
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const a = channels === 4 ? data[i + 3] : 255;
  // Recolor the dark (black) text to white; leave the blue mark untouched.
  if (a > 0 && Math.max(r, g, b) < 90) {
    data[i] = 255;
    data[i + 1] = 255;
    data[i + 2] = 255;
  }
}

await sharp(data, { raw: { width, height, channels } })
  .png()
  .toFile(out);

console.log(`Wrote ${out} (${width}x${height})`);
