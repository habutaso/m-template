import type { Meta, StoryObj } from "@storybook/react";
import { Textfield } from "./Textfield";

const meta = {
  title: "UIElements/Textfield",
  component: Textfield,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Textfield>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "placeholder",
  },
};

export const Multiline: Story = {
  args: {
    label: "placeholder",
    multiline: true,
  },
};
