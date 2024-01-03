import type { Metadata } from "next";
import "../styles/globals.css";
import Nav from "../components/shared/Navbar";
import React from "react";
import Footer from "@/components/shared/Footer";

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
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
