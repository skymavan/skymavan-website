const { ImageResponse } = require("next/og");
const React = require("react");
const { writeFileSync, mkdirSync } = require("node:fs");
const { dirname, resolve } = require("node:path");

const e = React.createElement;

const FONT_URLS = {
  serif: "https://cdn.jsdelivr.net/fontsource/fonts/instrument-serif@latest/latin-400-normal.ttf",
  inter: "https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-500-normal.ttf",
};

async function loadFont(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

const ROUTE = [
  { index: "01", label: "Input", human: false },
  { index: "02", label: "Reason", human: false },
  { index: "03", label: "Human approval", human: true },
  { index: "04", label: "Act", human: false },
];

async function main() {
  const [serif, inter] = await Promise.all([loadFont(FONT_URLS.serif), loadFont(FONT_URLS.inter)]);
  const fonts = [
    ...(serif ? [{ name: "Instrument Serif", data: serif, weight: 400, style: "normal" }] : []),
    ...(inter ? [{ name: "Inter", data: inter, weight: 500, style: "normal" }] : []),
  ];

  const routePills = ROUTE.map((stage) =>
    e(
      "div",
      {
        key: stage.index,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "14px 20px",
          borderRadius: 9999,
          background: stage.human ? "rgba(255,211,106,0.10)" : "rgba(121,207,232,0.08)",
          border: `1.5px solid ${stage.human ? "rgba(255,211,106,0.55)" : "rgba(121,207,232,0.45)"}`,
        },
      },
      e(
        "span",
        {
          style: {
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: 1,
            color: stage.human ? "#FFD36A" : "#79CFE8",
          },
        },
        stage.index,
      ),
      e("span", { style: { fontSize: 22, fontWeight: 500, color: "#FFFFFF" } }, stage.label),
    ),
  );

  const tree = e(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "linear-gradient(135deg, #002B42 0%, #071A24 100%)",
        padding: "82px 92px",
        fontFamily: "Inter",
        color: "#FFFFFF",
      },
    },
    e(
      "div",
      { style: { display: "flex", alignItems: "center", gap: 16 } },
      e("div", {
        style: {
          width: 12,
          height: 12,
          borderRadius: 9999,
          background: "#79CFE8",
          boxShadow: "0 0 0 6px rgba(121,207,232,0.18)",
        },
      }),
      e(
        "div",
        { style: { fontSize: 25, fontWeight: 500, letterSpacing: 5, color: "#79CFE8" } },
        "AI AGENTS · WORKFLOW AUTOMATION · AI SOFTWARE",
      ),
    ),
    e(
      "div",
      { style: { display: "flex", flexDirection: "column" } },
      e(
        "div",
        {
          style: {
            fontFamily: "Instrument Serif",
            fontSize: 156,
            lineHeight: 0.95,
            letterSpacing: -5,
          },
        },
        "Skymavan",
      ),
      e(
        "div",
        {
          style: {
            fontFamily: "Instrument Serif",
            fontStyle: "italic",
            fontSize: 60,
            lineHeight: 1.08,
            marginTop: 16,
            maxWidth: 980,
            color: "rgba(255,255,255,0.66)",
          },
        },
        "AI systems that solve operational problems.",
      ),
    ),
    e("div", { style: { display: "flex", alignItems: "center", gap: 16 } }, ...routePills),
  );

  const response = new ImageResponse(tree, { width: 1200, height: 630, fonts });
  const buffer = Buffer.from(await response.arrayBuffer());

  const outPath = resolve(__dirname, "..", "public", "og.png");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, buffer);
  console.log(`\u2713 OG image written to public/og.png (${(buffer.length / 1024).toFixed(1)} KB)`);
}

main().catch((error) => {
  console.error("OG image generation failed:", error);
  process.exit(1);
});
