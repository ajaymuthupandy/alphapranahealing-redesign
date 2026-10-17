import type { Metadata, Viewport } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { img } from "@/lib/images";
import { SITE } from "@/lib/site";
import "./globals.css";

// Two families only: Playfair Display for headings, Lato for everything else (both from the original site).
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-playfair", display: "swap" });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Alpha Prana Healing Bali — Yoga, Energy Healing & Balinese Blessings",
    template: "%s - Alpha Prana Healing",
  },
  description:
    "Discover holistic wellness in Bali through yoga, meditation, Reiki, chakra balancing and sound healing. Find balance, inner peace and renewed vitality at Alpha Prana Healing.",
  applicationName: SITE.name,
  icons: { icon: "/brand/logo-sage.png", apple: "/brand/logo-sage.png" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
    images: [{ url: img.yogaGroupTriangle.src.src, width: 1179, height: 977, alt: img.yogaGroupTriangle.alt }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#466d68",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable}`}
    >
      <body>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
