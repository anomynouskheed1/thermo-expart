import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Thermo Expert Construction Company Ltd | Construction Contractor, Kenya",
  description:
    "Thermo Expert Construction Company Ltd is a construction contractor delivering quality building works for residential, commercial and development projects across Kenya.",
  keywords: [
    "construction company Kenya",
    "construction contractor Kenya",
    "building construction",
    "residential construction",
    "commercial construction",
    "renovation and remodeling",
    "Thermo Expert Construction",
  ],
  openGraph: {
    title: "Thermo Expert Construction Company Ltd",
    description:
      "Professional construction works for residential, commercial and development projects, delivered with quality, precision and care.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-navy text-white font-body antialiased selection:bg-cyan selection:text-navy">
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}