import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button, sonner } from "src";

const SonnerDemo = () => {
    return (
        <div>
           
     
        <sonner.Toaster closeButton duration={1}>

        </sonner.Toaster>
         <Button onClick={() => sonner.toast.success('Success!')}>Show Toast</Button>   </div>
    );
}

const meta: Meta<typeof SonnerDemo> = {
    component: SonnerDemo,
  };
  
  export default meta;
  
  export const Default: StoryObj<typeof SonnerDemo> = {
    args: {},
  };
  