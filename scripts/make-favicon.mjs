import sharp from "sharp";

// Extract just the bike mark (left side of the logo), trim the transparent
// padding, then fit it into a square transparent canvas for the favicon.
await sharp("logo_new.png")
  .extract({ left: 0, top: 0, width: 950, height: 572 })
  .trim()
  .resize(512, 512, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toFile("public/favicon.png");

console.log("Wrote public/favicon.png (512x512)");
