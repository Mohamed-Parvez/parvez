import type { Metadata } from "next";
import "../../styles/globals.css";
import Nav from "@/components/shared/Navbar";
import React from "react";
import Footer from "@/components/shared/Footer";
import SmoothScrolling from "@/components/ui/smoothscrolling";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Parvez",
  description: "Parvez's portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Toaster position="bottom-center" />
        <Nav />
        <main className="mx-5 mt-[110px] min-h-screen md:mx-10 md:mt-[126px] xl:mx-28">
          <SmoothScrolling>
            {children}
            <Analytics />
          </SmoothScrolling>
        </main>
        <Footer />
      </body>
    </html>
  );
}
