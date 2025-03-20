import { Avatar, AvatarFallback, AvatarImage } from "index";
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

export const Default: StoryObj<typeof AvatarDemo> = {
  args: {},
};
