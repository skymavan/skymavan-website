import type { Metadata, Viewport } from "next";
import { Anybody, Source_Sans_3 } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/content/site";

import "./globals.css";

const anybody = Anybody({
  variable: "--font-anybody",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
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
    title: "SkyMavan | AI systems that move work forward",
    description:
      "Custom AI agents, workflow automation, and AI SaaS products designed for real operations.",
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
    title: "SkyMavan | AI systems that move work forward",
    description:
      "Custom AI agents, workflow automation, and AI SaaS products designed for real operations.",
    images: ["/opengraph-image.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d0b" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${anybody.variable} ${sourceSans.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
