import type { Metadata } from "next";
import { Playfair_Display, Raleway } from 'next/font/google'
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer";

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
  title: "Pixellens",
  description: "Your excelent photographer",
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
          <div className="bg-[#F9F6EE] pb-10">
          {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
