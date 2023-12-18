import { FontBoldIcon } from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Toggle } from "src/atoms/toggle";

const meta: Meta<typeof Toggle> = {
  component: () => {
    return (
      <Toggle aria-label="Toggle italic">
        <FontBoldIcon className="h-4 w-4" />
      </Toggle>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {},
};
