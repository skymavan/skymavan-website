import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";

import { siteConfig } from "@/content/site";

import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.canonicalUrl),
  title: "SkyMavan | AI Agents, Automation & AI SaaS Development",
  description:
    "SkyMavan designs and builds custom AI agents, workflow automation, and AI SaaS products for startups and growing businesses.",
  alternates: { canonical: siteConfig.canonicalUrl },
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    url: siteConfig.canonicalUrl,
    siteName: siteConfig.name,
    title: "SkyMavan | Intelligence built for real work",
    description:
      "Custom AI agents, connected automations, and AI products designed for dependable progress.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "SkyMavan — AI systems that move work forward",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyMavan | Intelligence built for real work",
    description:
      "Custom AI agents, workflow automation, and AI SaaS products designed for real operations.",
    images: ["/opengraph-image.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#002b42",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} dark`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
