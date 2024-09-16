import { Meta, StoryObj } from "@storybook/react";
import { Wrapper, Right, Left, CodeCopy, LeftTitle, LeftSubtitle } from "src/custom/docs";
import { NexusLogo } from "./NexusLogo";
import { Button } from "src";
import { RocketIcon } from "lucide-react";


export function DocsHeaderDemo() {
  return <Wrapper>
    <Left>  
        <NexusLogo
          variant="horizontal"
          className="w-[18rem] md:w-[23rem]"
        />
        <LeftSubtitle>The Full Stack Quantum Computing Platform</LeftSubtitle>
     

        <div className=" mt-4 flex flex-col max-w-[32rem] gap-3">
        <CodeCopy textToCopy="pip install qnexus"></CodeCopy>
        <Button
            variant="secondary"
            className="-mt-px flex-grow py-[1.38rem] border-border border bg-background"
            asChild
        >
            <a href="user_guide/sign_up.html">
            <RocketIcon className="mr-2"></RocketIcon>Getting Started
            </a>
        </Button>
        </div>
    </Left>

  <Right>
    <img
      className="rounded-xl overflow-hidden dark:hidden brightness-110"
      src="nexusw.png"
      height={360}
    //   priority
      width={375}
      alt=""
    />
    <img
      className="rounded-xl overflow-hidden  hidden dark:block"
      src="nexusd2.png"
    //   priority
      height={360}
      width={375}
      alt=""
    />

    </Right>
 </Wrapper>
}

const meta: Meta<typeof DocsHeaderDemo> = {
  component: DocsHeaderDemo,
};

export default meta;

export const Default: StoryObj<typeof DocsHeaderDemo> = {
  args: {},
};


