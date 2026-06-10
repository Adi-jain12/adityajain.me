import type { Metadata } from "next";
import { Source_Serif_4, Caveat, Playfair_Display, Inter } from "next/font/google";
import localFont from 'next/font/local'
import { Header } from "@/components/layout/Header";
import { Loader } from "@/components/ui/Loader";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { siteConfig } from "@/config/site";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-source-serif",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-caveat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
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
  display: 'swap',
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
  display: 'swap',
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sourceSerif.variable} ${iAMono.variable} ${VG.variable} ${caveat.variable} ${playfair.variable} ${inter.variable}`}
    >
      <body className="antialiased flex min-h-svh flex-col">
        <ThemeProvider>
          <SmoothScroll />
          <Loader />
          <Header />
          <main className="flex flex-1 flex-col">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}