import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "src/atoms/textarea";

const meta: Meta<typeof Textarea> = {
  component: Textarea,
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Type your message here.",
  },
};
