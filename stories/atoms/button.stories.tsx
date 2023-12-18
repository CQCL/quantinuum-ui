import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "src/atoms/button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "default",
    value: 50,
  },
};
