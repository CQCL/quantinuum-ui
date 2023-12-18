import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Badge } from "src/atoms/badge";

const meta: Meta<typeof Badge> = {
  component: () => {
    return (
      <div className="flex flex-col gap-2 w-32">
        <Badge variant="default">Default</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outlined</Badge>
        <Badge variant="secondary">Secondary</Badge>
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {},
};
