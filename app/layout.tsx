import type { Metadata } from "next";
import "../styles/globals.css";
import Nav from "./Nav";
import React from "react";

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
      </body>
    </html>
  );
}
