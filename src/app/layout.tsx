import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { MotionConfig } from "motion/react";

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
  title: "Skymavan | Custom AI Agents, Workflow Automation & AI Software Development",
  description:
    "Skymavan builds custom AI agents, workflow automation, and AI software for businesses that need reliable systems, human oversight, and measurable operational results.",
  alternates: { canonical: siteConfig.canonicalUrl },
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.canonicalUrl,
    siteName: siteConfig.name,
    title: "Skymavan | Custom AI Agents & Workflow Automation",
    description:
      "Skymavan builds custom AI agents, workflow automation, and AI software for enterprise operations.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Skymavan — Custom AI systems for business operations",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skymavan | Custom AI Agents & Automation",
    description:
      "Custom AI agents, workflow automation, and AI software built for business-critical operations.",
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
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
