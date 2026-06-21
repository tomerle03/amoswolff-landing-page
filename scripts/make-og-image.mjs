import sharp from "sharp";

// Standard Open Graph size. The white-text logo is centered on the site's
// dark background so it reads well on both light and dark preview cards.
const W = 1200;
const H = 630;

const logo = await sharp("src/assets/logo.png")
  .resize({ width: 960, withoutEnlargement: true })
  .toBuffer();

const background = await sharp({
  create: {
    width: W,
    height: H,
    channels: 4,
    background: { r: 15, g: 15, b: 15, alpha: 1 },
  },
})
  .png()
  .toBuffer();

await sharp(background)
  .composite([{ input: logo, gravity: "center" }])
  .png()
  .toFile("src/assets/og-image.png");

console.log("Wrote src/assets/og-image.png (1200x630)");
