import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
