import React from "react";
import { TextField } from "@mui/material";

export interface TextfieldProps {
  label?: string;
  variant?: "standard" | "outlined" | "filled" | undefined;
  error?: boolean | undefined;
  id?: string | undefined;
  multiline?: boolean | undefined;
  value?: string | number | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Textfield = ({ ...rest }: TextfieldProps) => (
  <TextField {...rest} />
);
