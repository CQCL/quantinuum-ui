
import { Meta, StoryObj } from "@storybook/react";
import {
  DocsNavigationBar,
} from "src";


const navConfig = { 

    navTextLinks: [
    {
        "title": "API Docs",
        "href": "../api-docs",
        "pathMatch": "somewhere",
    },
    {
        "title": "Examples",
        "href": "../examples",
        "pathMatch": "somewhere",
    },
    {
        "title": "Blog",
        "href": "../blog/",
        "pathMatch": "somewhere",
    },
    {
        "title": "User Manual",
        "href": "../user-manual",
        "pathMatch": "somewhere",
    },
],
navProductName: "TKET",
navIconLinks: [
    {
        "title": "TKET Github",
        "href": "https://github.com/CQCL/tket",
        "pathMatch": "somewhere",
        "iconImageURL": "/github.svg",
    },
    {
        "title": "TKET Slack Channel",
        "href": "https://tketusers.slack.com/",
        "pathMatch": "somewhere",
        "iconImageURL": "/slack.svg",
    },
    {
        "title": "TKET Stack Exchange",
        "href": "https://quantumcomputing.stackexchange.com/questions/tagged/pytket",
        "pathMatch": "somewhere",
        "iconImageURL": "/stack.svg",
    },
],
}

function DocsDocsNavigationBarDemo() {
  return (
    <DocsNavigationBar {...navConfig} activePath="/"  ></DocsNavigationBar>
  );
}


const meta: Meta<typeof DocsDocsNavigationBarDemo> = {
  component: DocsDocsNavigationBarDemo,
};

export default meta;

export const Default: StoryObj<typeof DocsDocsNavigationBarDemo> = {
  args: {},
};
