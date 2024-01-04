import React from "react";
import { ButtonProps } from "@/types";

const Button = ({ label, type, variant }: ButtonProps) => {
  return (
    <button type={type} className={`${variant}`}>
      {label}
    </button>
  );
};

export default Button;
