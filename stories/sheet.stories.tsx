import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "src/components/ui/sheet";

const meta: Meta<typeof Sheet> = {
  component: (args) => {
    return (
      <Sheet {...args}>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Search: Story = {
  args: {},
};
