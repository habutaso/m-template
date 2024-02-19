import React from "react";
import { Textfield } from "@/app/components/ui-elements/mtextfield/Textfield";
import type { TextfieldProps } from "@/app/components/ui-elements/mtextfield/Textfield";
import { Checkbox } from "@/app/components/ui-elements/mcheckbox/Checkbox";
import type { CheckboxProps } from "@/app/components/ui-elements/mcheckbox/Checkbox";
import { ListItem } from "@mui/material";

export interface FieldCheckBoxProps {
  textfieldProps: TextfieldProps;
  checkboxProps: CheckboxProps;
}

export const FieldCheckBox = ({ ...rest }: FieldCheckBoxProps) => (
  <>
    <ListItem>
      <Checkbox {...rest.checkboxProps} />
      <Textfield {...rest.textfieldProps} />
    </ListItem>
  </>
);
