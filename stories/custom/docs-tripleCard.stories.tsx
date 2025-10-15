import { Meta, StoryObj } from "@storybook/react-vite";
import { ComponentProps } from "react";

import { DocsTripleCard } from "src";

 const tripleCardProps = [
    {
      "title": "Guides",
      "subtitle": "How to navigate Quantinuum’s full-stack quantum computing platform.",
      "image_link": "",
      "icon": "BookOpenText",
      "image_description": "description",
      "links": [
        {
          "title": "User Guide",
          "description": "How to use Nexus, understand core concepts and navigate our user interface.",
          "link": "user_guide/sign_up.html"
        },
        {
          "title": "Administrator Guide",
          "description": "Learn about our tools for managing users, allocating resources, and visualizing activity.",
          "link": "admin_guide/accessing_org_page.html"
        }
      ]
    },
    {
      "title": "Getting Started",
      "icon": "SquarePlay",
      "subtitle": "Get up and running using Nexus for your Python quantum computing workflows",

      "image_link": "",
      "image_description": "description",
      "links": [
        {
          "title": "Get Started With qnexus",
          "description": "Get started with using client Python package to run workflows and retrieve your data.",
          "link": "examples/notebooks/getting_started.html"
        },
        {
          "title": "Nexus Lab",
          "description": "Use our hosted Nexus Lab JupyterHub environment to get started coding in Python immediately, pre-configured with Quantinuum software packages like TKET and qnexus.",
          "link": "concepts/lab.html"
        }
      ]
    },
    {
      "title": "Advanced Users",
      "icon": "GraduationCap",
      "subtitle": "In-depth code examples and API documentation.",
      "image_link": "",
      "image_description": "description",
      "links": [
        {
          "title": "API Reference For qnexus",
          "description": "View API documentation and examples for the qnexus package.",
          "link": "qnexus_api/index.html"
        },
        {
          "title": "Code Examples Using qnexus",
          "description": "Examples of core qnexus usage and tutorials for more complex applied workflows using Nexus.",
          "link": "examples/overview.html"
        }
      ]
    }
  ]


export function DocsTripleCardDemo() {
  return <DocsTripleCard cards={tripleCardProps} linkComponent={(props: ComponentProps<'a'>) => <a {...props}></a>}  imageComponent={(props: ComponentProps<'img'>) => <img {...props}></img>} />;
}

const meta: Meta<typeof DocsTripleCardDemo> = {
  component: DocsTripleCardDemo,
};

export default meta;

export const Default: StoryObj<typeof DocsTripleCardDemo> = {
  args: {},
};
