const sharp = require("sharp");
const { resolve } = require("node:path");

const hero = resolve(__dirname, "..", "public", "media", "skymavan-hero-instrument-desktop.webp");
const out = resolve(__dirname, "..", "public", "og.png");

sharp(hero)
  .resize(1200, 630, { fit: "cover", position: "center" })
  .png({ compressionLevel: 9 })
  .toFile(out)
  .then(({ width, height, size }) => {
    console.log(
      `\u2713 OG image written to public/og.png from hero artwork (${width}x${height}, ${(size / 1024).toFixed(1)} KB)`,
    );
  })
  .catch((error) => {
    console.error("OG image generation failed:", error);
    process.exit(1);
  });
