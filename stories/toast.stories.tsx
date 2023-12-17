import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "src/components/ui/button";
import { Toaster } from "src/components/ui/toaster";
import { useToast } from "src/components/ui/use-toast";

const meta: Meta<typeof Toaster> = {
  component: () => {
    const { toast } = useToast();
    return (
      <div>
        <Button onClick={() => toast({ type: "foreground", title: "hello" })}>
          Go for toast
        </Button>
        <Toaster />
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Toasty: Story = {
  args: {
    color: "red",
  },
};
