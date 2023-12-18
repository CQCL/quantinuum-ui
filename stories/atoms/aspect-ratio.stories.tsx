import type { Meta } from "@storybook/react";
import { AspectRatio } from "src";
export function AspectRatioDemo() {
  return (
    <AspectRatio ratio={1 / 1} className="bg-muted">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        className="rounded-md object-cover bg-cover"
      />
    </AspectRatio>
  );
}

import type { StoryObj } from "@storybook/react";

const meta: Meta<typeof AspectRatioDemo> = {
  component: AspectRatioDemo,
};

export default meta;

export const Default: StoryObj<typeof AspectRatioDemo> = {
  args: {},
};
