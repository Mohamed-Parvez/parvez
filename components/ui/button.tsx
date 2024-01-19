import React from "react";
import { ButtonProps } from "@/types";
import Link from "next/link";

export const ButtonPopup = ({ label, type, variant, href }: ButtonProps) => {
  return (
    <Link href={href} rel="noopener noreferrer" target="_blank">
      <button type={type} className={`${variant}`}>
        {label}
      </button>
    </Link>
  );
};

export const Button = ({ label, type, variant, href }: ButtonProps) => {
  return (
    <Link href={href}>
      <button type={type} className={`${variant}`}>
        {label}
      </button>
    </Link>
  );
};
