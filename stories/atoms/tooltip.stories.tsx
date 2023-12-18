import { Meta, StoryObj } from "@storybook/react";
import { Button } from "src/atoms/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "src/atoms/tooltip";
function TooltipDemo() {
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

export const Default: StoryObj<typeof Tooltip> = {
  args: {},
};
