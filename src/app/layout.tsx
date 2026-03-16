import type { Metadata } from "next";
import { Playfair_Display, Raleway } from 'next/font/google'
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

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
  title: "PixelLens",
  description: "Fine Art Photography",
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
          <Header/>
          <div className="bg-black pb-10">
          {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
