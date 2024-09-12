import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button, SonnerToast } from "src";
import * as sonner from 'sonner'

const SonnerDemo = (props: {defaultStyles: Boolean}) => {
    return props.defaultStyles ? (
      <div>
        <SonnerToast closeButton duration={9000000}/>
        <Button onClick={() => sonner.toast.success('Success!')}>Show Toast</Button>
      </div>
    ) : (
      <div>
        <SonnerToast closeButton duration={9000000} toastOptions={{classNames: {toast: 'group-[.toaster]:bg-green-500 group-[.toaster]:border-green-700'}}}/>
        <Button onClick={() => sonner.toast.info('Info: this toast has overriden styles.')}>
          Show Styled Toast
        </Button>
      </div>
    )
}

const meta: Meta<typeof SonnerDemo> = {
  component: SonnerDemo,
};

export default meta;

export const Default: StoryObj<typeof SonnerDemo> = {
  args: {defaultStyles: true},
};
