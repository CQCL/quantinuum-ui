import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "src/atoms/avatar";
export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AvatarDemo> = {
  component: AvatarDemo,
};

export default meta;
type Story = StoryObj<typeof AvatarDemo>;

export const Default: Story = {
  args: {},
};
