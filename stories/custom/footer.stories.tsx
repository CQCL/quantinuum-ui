
import { Meta, StoryObj } from "@storybook/react";
import {
  Footer,
  QuantinuumLogo,
} from "src";

function FooterDemo() {
  return (
  <Footer columns={ [{
    title: 'Documentation',
    items: [
      { name: 'API Docs', href: 'api-docs' },
      { name: 'Examples', href: 'examples' },
      { name: 'Blog', href: 'blog' },
      { name: 'User Manual', href: 'user-manual' },
    ],
  },
  {
    title: 'Help and Support',
    items: [
      { name: 'Slack', href: 'https://tketusers.slack.com/' },
      {
        name: 'Stack Exchange',
        href: 'https://quantumcomputing.stackexchange.com/questions/tagged/pytket',
      },
      { name: 'Github', href: 'https://github.com/CQCL/tket' },
    ],
  },
  {
    title: "What We're Up To",
    items: [
      { name: 'About Quantinuum', href: ' https://www.quantinuum.com/about' },
      { name: 'Research', href: 'https://www.quantinuum.com/publications' },
      { name: 'Events', href: 'https://www.quantinuum.com/events' },
    ],
  }]} logo={<QuantinuumLogo></QuantinuumLogo>} subtitle="TKET is registered trademark of Quantinuum."></Footer>
  );
}


const meta: Meta<typeof FooterDemo> = {
  component: FooterDemo,
};

export default meta;

export const Default: StoryObj<typeof FooterDemo> = {
  args: {},
};
