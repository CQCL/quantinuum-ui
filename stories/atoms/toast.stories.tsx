import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "src/atoms/button";
import { Toaster } from "src/atoms/toaster";
import { useToast } from "src/atoms/use-toast";

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
  args: {
    color: "red",
  },
};

export default meta;

export const Default: StoryObj<typeof Toaster> = {
  args: {},
};
