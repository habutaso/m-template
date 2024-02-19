import React from "react";
import { FieldSubmit } from "./FieldSubmit";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "UiParts/FieldSubmit",
  component: FieldSubmit,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof FieldSubmit>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    textfieldProps: {
      label: "placeholder",
    },
    buttonProps: {
      size: "large",
      label: "Submit",
    },
  },
};
