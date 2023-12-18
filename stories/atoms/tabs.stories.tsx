import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "src/atoms/tabs";

const meta: Meta<typeof Tabs> = {
  component: () => {
    return (
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    children: "default",
  },
};
