import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  children: ReactNode;
  variant: 'primary' | 'ghost';
  arrow?: 'right' | 'down' | 'none';
}