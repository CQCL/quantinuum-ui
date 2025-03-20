import { Meta, StoryObj } from "@storybook/react";
import { LifeBuoyIcon, BookIcon } from 'lucide-react'
import { DocsHelpCard } from 'index'

const helpSectionConfig = {
    columns: [{
        title: "Get in touch for support",
        icon_description: "Support Icon",
        icon: LifeBuoyIcon,
        link: "https://www.quantinuum.com/contact/docs",
        description: "Need help? Fill out our support form here",

    },
    {
        title: "Publications",
        icon_description: "Publications Icon",
        icon: BookIcon,
        link: "https://quantinuum.com/publications",
        description: "Find our latest research publications here",
    }],
};


function DocsHelpCardDemo() {
    return <DocsHelpCard {...helpSectionConfig} />
}

const meta: Meta<typeof DocsHelpCardDemo> = {
    component: DocsHelpCardDemo,
};

export default meta;

export const Default: StoryObj<typeof DocsHelpCardDemo> = {
    args: {},
};
