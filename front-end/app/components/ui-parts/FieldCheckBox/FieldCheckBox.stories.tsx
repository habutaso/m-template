import React from "react";
import { FieldCheckBox } from "./FieldCheckBox";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "UiParts/FieldCheckBox",
  component: FieldCheckBox,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof FieldCheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    textfieldProps: {
      label: "placeholder",
    },
    checkboxProps: {},
  },
};
