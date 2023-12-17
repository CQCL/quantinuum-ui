import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SlideIn } from "src/components/ui/slide-in";

const meta: Meta<typeof SlideIn> = {
  component: () => {
    return (
      <div className="flex flex-col gap-[32rem] pb-24">
        {["Item 1", "Item 2", "Item 3"].map((item) => (
          <SlideIn key={item}>{item}</SlideIn>
        ))}
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof SlideIn>;

export const Default: Story = {
  args: {},
};
