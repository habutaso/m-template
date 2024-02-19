import React from "react";
import { Checkbox as MuiCheckbox } from "@mui/material";

export interface CheckboxProps {
  disabled?: boolean | undefined;
  checked?: boolean | undefined;
  defaultChecked?: boolean | undefined;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  indeterminate?: boolean | undefined;
  onChange?: () => void | undefined;
}

export const Checkbox = ({ ...rest }: CheckboxProps) => (
  <MuiCheckbox {...rest} />
);
