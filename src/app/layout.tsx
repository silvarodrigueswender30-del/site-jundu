import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Preloader } from "@/components/layout/preloader";

const elsie = localFont({
  src: "../../src/fonts/elsie-regular.woff2",
  variable: "--font-display",
  weight: "400",
  style: "normal",
  display: "swap",
});

const arimo = localFont({
  src: "../../src/fonts/arimo-regular.woff2",
  variable: "--font-body",
  weight: "400 700",
  style: "normal",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://site-jundu.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jundu Ubatuba | Gastronomia Autoral e Experiência à Beira-Mar",
    template: "%s | Jundu Ubatuba",
  },
  description: "Descubra o Jundu em Ubatuba: três unidades exclusivas (Itaguá, Prumirim, Praia Grande) oferecendo o melhor da gastronomia caiçara, coquetéis autorais e vista mar pé na areia.",
  keywords: [
    "Jundu Ubatuba", 
    "restaurante Ubatuba", 
    "gastronomia caiçara", 
    "frutos do mar Ubatuba", 
    "pé na areia Ubatuba", 
    "Prumirim restaurante", 
    "Praia Grande Ubatuba restaurante", 
    "Itaguá restaurante"
  ],
  authors: [{ name: "Jundu" }],
  creator: "Jundu",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Jundu Ubatuba",
    title: "Jundu Ubatuba | Gastronomia Autoral e Experiência à Beira-Mar",
    description: "Três unidades exclusivas em Ubatuba com gastronomia autoral, coquetelaria e pé na areia.",
    images: [{
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: "Jundu Ubatuba - Gastronomia Autoral e Vista Mar",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jundu Ubatuba | Gastronomia e Experiência",
    description: "Três unidades exclusivas em Ubatuba com gastronomia autoral e pé na areia.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${elsie.variable} ${arimo.variable} antialiased`}
      >
        <Preloader />
        {children}
      </body>
    </html>
  );
}
