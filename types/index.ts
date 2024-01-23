export interface ButtonPopupProps {
  label: string;
  variant: string;
  type: "button";
  href: string;
}

export interface ButtonProps {
  label: string;
  variant: string;
  type: "button";
  href: string;
}

export interface SubmitButtonProps {
  label: string;
  variant: string;
  type: "submit";
  disabled: boolean;
}

export type MessageUsEmailProps = {
  name: string;
  email: string;
  message: string;
};
