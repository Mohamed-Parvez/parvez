import React from "react";
import { ButtonProps, ButtonPopupProps, SubmitButtonProps } from "@/types";
import Link from "next/link";

export const ButtonPopup = ({
  label,
  type,
  variant,
  href,
}: ButtonPopupProps) => {
  return (
    <Link href={href} rel="noopener noreferrer" target="_blank">
      <button type={type} className={`${variant}`}>
        {label}
      </button>
    </Link>
  );
};

export const Button = ({ href, label, variant, type }: ButtonProps) => {
  return (
    <Link href={href}>
      <button type={"button"} className={`${variant}`}>
        {label}
      </button>
    </Link>
  );
};

export const SubmitButton = ({
  type,
  label,
  variant,
  disabled,
}: SubmitButtonProps) => {
  return (
    <button type={type} className={`${variant}`} disabled={disabled}>
      {label}
    </button>
  );
};
