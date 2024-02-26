import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button, SonnerToast } from "src";
import * as sonner from 'sonner'
const SonnerDemo = () => {
    return (
        <div>
        <SonnerToast closeButton duration={1}>

        </SonnerToast>
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
  