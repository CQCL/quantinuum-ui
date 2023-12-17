import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "src/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "src/components/ui/tooltip";
export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

const meta: Meta<typeof TooltipDemo> = {
  component: TooltipDemo,
};

export default meta;
type Story = StoryObj<typeof TooltipDemo>;

export const Default: Story = {
  args: {},
};
