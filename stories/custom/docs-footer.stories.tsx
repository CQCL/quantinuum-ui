import { Meta, StoryObj } from "@storybook/react";
import {Footer } from "src/custom/docs";
import { QuantinuumLogo } from "src/custom/docs/QuantinuumLogo";

 const footerConfig = {
    logo: <QuantinuumLogo />,
    columns: [
      {
        title: 'Solutions',
        items: [
          {
            href: 'https://docs.quantinuum.com/nexus/index.html',
            name: 'Quantinuum Nexus',
          },
          {
            href: 'https://docs.quantinuum.com/inquanto/index.html',
            name: 'Inquanto',
          },
          {
            href: 'https://tket.quantinuum.com/',
            name: 'TKET',
          },
          {
            href: 'https://docs.quantinuum.com/lambeq',
            name: 'Lambeq',
          },
        ],
      },
      {
        title: 'Hardware',
        items: [
          {
            href: 'https://docs.quantinuum.com/h-series/index.html',
            name: 'System Model H1',
          },
          {
            href: 'https://docs.quantinuum.com/h-series/index.html',
            name: 'System Model H2',
          },
          {
            href: 'https://www.quantinuum.com/hardware#access',
            name: 'Get Access',
          },
        ],
      },
      {
        title: 'What We Do?',
        items: [
          {
            href: 'https://www.quantinuum.com/about',
            name: 'About Quantinuum',
          },
          {
            href: '"https://www.quantinuum.com/publications',
            name: 'Research',
          },
          {
            href: 'https://www.quantinuum.com/events',
            name: 'Events',
          },
        ],
      },
    ],
    subtitle: '',
  }

export function DocsNavDemo() {
  return <Footer {...footerConfig} />;
}

const meta: Meta<typeof DocsNavDemo> = {
  component: DocsNavDemo,
};

export default meta;

export const Default: StoryObj<typeof DocsNavDemo> = {
  args: {},
};
