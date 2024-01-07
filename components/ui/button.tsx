import React from "react";
import { ButtonProps } from "@/types";
import Link from "next/link";

const Button = ({ label, type, variant, href }: ButtonProps) => {
  return (
    <Link href={href}>
      <button type={type} className={`${variant}`}>
        {label}
      </button>
    </Link>
  );
};

export default Button;
