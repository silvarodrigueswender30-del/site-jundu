import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  weight: "400 700", // Adjusting variable or standard weight
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jundu Ubatuba",
  description: "Sinta o Jundu antes de chegar.",
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
        {children}
      </body>
    </html>
  );
}
