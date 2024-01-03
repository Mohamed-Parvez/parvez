import React from "react";

interface Props {
  label: string;
  variant: string;
  type: "button";
}

const Button = ({ label, type, variant }: Props) => {
  return (
    <button type={type} className={`${variant}`}>
      {label}
    </button>
  );
};

export default Button;
