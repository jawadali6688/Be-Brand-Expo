import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html lang="en" className="dark">
     <body
  className={`antialiased bg-gradient-to-r from-primary to-secondary font-poppins`}
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
