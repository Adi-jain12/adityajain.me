import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import localFont from 'next/font/local'
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-source-serif",
});

const iAMono = localFont({
  src: [
    {
      path: '../public/fonts/iaWriter400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/iaWriter400.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-ia-mono',
})

const VG = localFont({
  src: [
    {
      path: '../public/fonts/VG.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-vg',
})

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${iAMono.variable} ${VG.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
