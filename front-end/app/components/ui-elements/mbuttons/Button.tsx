import React from "react";
import { Button as MuiButton } from "@mui/material";

export interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large" | undefined;
  disabled?: boolean | undefined;
  href?: string | undefined;
  variant?: "text" | "outlined" | "contained" | undefined;
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | undefined;
  onClick?: () => void | undefined;
}

export const Button = ({ label, ...rest }: ButtonProps) => (
  <MuiButton {...rest}>{label}</MuiButton>
);
