import { Meta, StoryObj } from "@storybook/react";
import {DocsNavBar } from "src";
const navConfig = {
    navTextLinks: [
      {
        title: 'Nexus Concepts',
        href: 'concepts/projects.html',
        pathMatch: 'somewhere',
      },
      {
        title: 'User Guide',
        href: 'user_guide/sign_up.html',
        pathMatch: 'somewhere',
      },
      {
        title: 'Admin Guide',
        href: 'admin_guide/quotas.html',
        pathMatch: 'somewhere',
      },
      {
        title: 'Code Examples',
        href: 'examples/overview.html',
        pathMatch: 'somewhere',
      },
      {
        title: 'API Reference',
        href: '"qnexus_api/auth.html',
        pathMatch: 'somewhere',
      },
    ],
    navProductName: 'Nexus',
    navIconLinks: [
      {
        title: 'TKET Github',
        href: 'https://github.com/CQCL/tket',
        pathMatch: 'somewhere',
        iconImageURL: '/github.svg',
      },
      {
        title: 'TKET Slack Channel',
        href: 'https://tketusers.slack.com/',
        pathMatch: 'somewhere',
        iconImageURL: '/slack.svg',
      },
      {
        title: 'TKET Stack Exchange',
        href: 'https://quantumcomputing.stackexchange.com/questions/tagged/pytket',
        pathMatch: 'somewhere',
        iconImageURL: '/stack.svg',
      },
    ],
  }

export function DocsNavDemo() {
  return <DocsNavBar {...navConfig }activePath="/" />;
}

const meta: Meta<typeof DocsNavDemo> = {
  component: DocsNavDemo,
};

export default meta;

export const Default: StoryObj<typeof DocsNavDemo> = {
  args: {},
};
