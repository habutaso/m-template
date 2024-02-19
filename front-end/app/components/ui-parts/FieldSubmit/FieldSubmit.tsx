import React from "react";
import { Textfield } from "@/app/components/ui-elements/mtextfield/Textfield";
import type { TextfieldProps } from "@/app/components/ui-elements/mtextfield/Textfield";
import { Button } from "@/app/components/ui-elements/mbuttons/Button";
import type { ButtonProps } from "@/app/components/ui-elements/mbuttons/Button";
import { ListItem } from "@mui/material";

export interface FieldSubmitProps {
  textfieldProps: TextfieldProps;
  buttonProps: ButtonProps;
}

export const FieldSubmit = ({ ...rest }: FieldSubmitProps) => (
  <>
    <ListItem>
      <Textfield {...rest.textfieldProps} />
      <Button {...rest.buttonProps} />
    </ListItem>
  </>
);
