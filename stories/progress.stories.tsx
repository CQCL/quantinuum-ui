import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "src/components/ui/progress";

const meta: Meta<typeof Progress> = {
  component: Progress,
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    children: "default",
    value: 25,
  },
};
