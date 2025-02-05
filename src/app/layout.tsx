import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Be Brand Festival",
  description: "Created by Jawad Khan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body
  className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-primary to-secondary font-poppins`}
>
<nav>
  <Navbar />
</nav>
       <div className="">
       {children}
       </div>
       <div>
       <Footer />
       </div>
      </body>
    </html>
  );
}
