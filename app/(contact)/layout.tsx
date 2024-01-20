import React from "react";
import "../../styles/globals.css";
import Footer from "@/components/shared/Footer";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
