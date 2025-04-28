import Image from "next/image";
import type { Metadata } from "next";
import { Poppins, Italianno } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const italianno = Italianno({
  variable: "--font-italianno",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Angelo's Gourmet Deli",
  description: "Angelo's Gourmet Deli Sandwich Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          root
          ${poppins.variable}
          ${italianno.variable}
          antialiased
        `}
      >
        <section className="relative">
          <Image src="/vegetables.webp" alt="vegetables" fill className="absolute top-0 z-[-100] object-cover"/>
          <Header />
          <main className="max-w-[1200px] h-full mx-auto bg-white border-l border-r pt-[60px] pb-[30px] scroll-y overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </section>
        
          
      </body>
    </html>
  );
}
