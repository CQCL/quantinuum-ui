import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Input } from "src/atoms/input";

const meta: Meta<typeof Input> = {
  component: () => {
    return (
      <div className="flex flex-col gap-20">
        <div className="w-full h-16 bg-muted">Muted</div>
        <div className="w-full h-16 bg-muted-foreground">Muted Foreground</div>
        <div className="w-full h-16 bg-primary">Primary</div>
        <div className="w-full h-16 bg-primary-foreground">
          Primary Foreground
        </div>
        <div className="w-full h-16 bg-secondary">Secondary</div>
        <div className="w-full h-16 bg-secondary-foreground">
          Secondary Foreground
        </div>
        <div className="w-full h-16 bg-destructive">Destructive</div>
        <div className="w-full h-16 bg-destructive-foreground">
          Destructive Foreground
        </div>
        <div className="w-full h-16 bg-accent">Accent</div>
        <div className="w-full h-16 bg-accent-foreground">
          Accent Foreground
        </div>
        <div className="w-full h-16 bg-popover">Popover</div>
        <div className="w-full h-16 bg-popover-foreground">
          Popover Foreground
        </div>
        <div className="w-full h-16 bg-card">Card</div>
        <div className="w-full h-16 bg-card-foreground">Card Foreground</div>
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    type: "text",
  },
};
