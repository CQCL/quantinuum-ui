import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "src/atoms/button";

const meta: Meta<typeof Button> = {
  component: () => {
    return (
      <div className="flex flex-col">
        <p className="block text-9xl">9XL</p>
        <p className="text-8xl">8XL</p>
        <p className="text-7xl">7XL</p>
        <p className="text-6xl">6XL</p>
        <p className="text-5xl">5XL</p>
        <p className="text-4xl">4XL</p>
        <p className="text-3xl">3XL</p>
        <p className="text-3xl">3XL</p>
        <p className="text-2xl">2XL</p>
        <p className="text-xl">XL</p>
        <p className="text-lg">LG</p>
        <p className="text-base">Base</p>
        <p className="text-sm">SM</p>
        <p className="text-xs">XS</p>

        <div className="prose dark:prose-invert">
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
        </div>
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "default",
  },
};
