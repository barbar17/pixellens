import type { Metadata } from "next";
import { Playfair_Display, Raleway } from 'next/font/google'
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Flip, ToastContainer } from "react-toastify";
import ToastProvider from "@/components/ToastProvidet";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-raleway',
})

export const metadata: Metadata = {
  metadataBase: new URL("https://pixellens-three.vercel.app"),

  title: {
    default: "PixelLens — Fine Art Photography",
    template: "%s | PixelLens",
  },

  description:
    "PixelLens is a fine art photography and videography portfolio showcasing cinematic portraits, landscapes, and visual storytelling through lens.",

  keywords: [
    "photography",
    "fine art photography",
    "portrait photography",
    "landscape photography",
    "cinematic photography",
    "wedding photography",
    "graduation photography",
    "photographer portfolio",
    "videography",
    "wedding videography",
    "cinematic videography",
    "graduation videography",
    "PixelLens",
    "Lampung fotografi",
    "Lampung photography",
  ],

  authors: [{ name: "PixelLens" }],
  creator: "PixelLens",
  publisher: "PixelLens",

  openGraph: {
    title: "PixelLens — Fine Art Photography",
    description:
      "Explore cinematic portraits and landscapes captured through PixelLens.",
    url: "https://pixellens-three.vercel.app",
    siteName: "PixelLens",
    // images: [
    //   {
    //     url: "/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "PixelLens Photography",
    //   },
    // ],
    locale: "id_ID",
    type: "website",
  },

  // twitter: {
  //   card: "summary_large_image",
  //   title: "PixelLens — Fine Art Photography",
  //   description:
  //     "A fine art photography portfolio featuring cinematic visuals.",
  //   images: ["/og-image.jpg"],
  // },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://pixellens-three.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${raleway.variable} antialiased`}>
      <body
        className={`font-body`}
      >
        <div>
          <ToastProvider/>
          <Header />
          <TooltipProvider>
            <div className="bg-black pb-10 min-h-dvh">
              {children}
            </div>
            <Footer />
          </TooltipProvider>
        </div>
      </body>
    </html>
  );
}
