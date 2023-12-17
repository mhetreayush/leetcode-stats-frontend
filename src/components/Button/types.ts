import { ReactNode } from "react";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  children: ReactNode;
}
