import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import localFont from 'next/font/local'
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StructuredData } from "@/components/StructuredData";
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

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

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
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.openGraph.title,
    description: siteConfig.openGraph.description,
    images: [...siteConfig.openGraph.images],
  },
  verification: {
    google: "9aiCBvre6SQqDTBXhnf07EoRlrOoj-Laj2fpSJNo2lw",
  },
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
      className={`${sourceSerif.variable} ${VG.variable} ${inter.variable}`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="antialiased flex min-h-svh flex-col">
        <ThemeProvider>
          <SmoothScroll />
          <Loader />
          <Header />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}