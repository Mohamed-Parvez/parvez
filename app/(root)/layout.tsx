import type { Metadata } from "next";
import "../../styles/globals.css";
import Nav from "@/components/shared/Navbar";
import React from "react";
import Footer from "@/components/shared/Footer";
import SmoothScrolling from "@/components/ui/smoothscrolling";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Parvez",
  description: "Parvez's Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Toaster position="bottom-center" />
        <Nav />
        <main className="mx-5 mt-[110px] min-h-screen font-poppins md:mx-10 xl:mx-28">
          <SmoothScrolling>{children}</SmoothScrolling>
        </main>
        <Footer />
      </body>
    </html>
  );
}
