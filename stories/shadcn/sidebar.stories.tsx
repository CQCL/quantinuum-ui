
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Box,
  BoxIcon,
  ChevronDown,
  Command,
  FolderIcon,
  FoldersIcon,
  Frame,
  GalleryVerticalEnd,
  HammerIcon,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  TerminalIcon,
  Zap,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarRail,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  SidebarTrigger,
  Separator,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
  SidebarMenuButton,
  DropdownMenuContent,
  DropdownMenuItem,
} from "index"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,

      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },


  ],

}



  import type { Meta, StoryObj } from "@storybook/react";




const SidebarDemo = () => {
    const data = {
        user: {
          name: "shadcn",
          email: "m@example.com",
          avatar: "/avatars/shadcn.jpg",
        },
        teams: [
          {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
          },
          {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
          },
          {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
          },
        ],
        navMain: [
          {
            title: "folder123",
            url: "#",
            icon: FolderIcon,

            items: [
              {
                title: "circuitA",
                url: "#",
              },
              {
                title: "circuitB",
                url: "#",
              },
              {
                title: "circuitC",
                url: "#",
              },
            ],
          },
          {
            title: "folder123",
            url: "#",
            icon: FolderIcon,

            items: [
              {
                title: "circuitA",
                url: "#",
              },
              {
                title: "circuitB",
                url: "#",
              },
              {
                title: "circuitC",
                url: "#",
              },
            ],
          },
          {
            title: "folder123vv",
            url: "#",
            icon: FolderIcon,

            items: [
              {
                title: "circuitA",
                url: "#",
              },
              {
                title: "circuitB",
                url: "#",
              },
              {
                title: "circuitC",
                url: "#",
              },
            ],
          },
          {
            title: "foldeav",
            url: "#",
            icon: FolderIcon,

            items: [
              {
                title: "circuitA",
                url: "#",
              },
              {
                title: "circuitB",
                url: "#",
              },
              {
                title: "circuitC",
                url: "#",
              },
            ],
          },
          {
            title: "folder1234",
            url: "#",
            icon: FolderIcon,

            items: [
              {
                title: "circuitA",
                url: "#",
              },
              {
                title: "circuitB",
                url: "#",
              },
              {
                title: "circuitC",
                url: "#",
              },
            ],
          },


        ],
        jobs: [
            {
                title: "All",
                url: "#",
                icon: BoxIcon,
              },
            {
              title: "Compile",
              url: "#",
              icon: HammerIcon,

              items: [
                {
                  title: "job1",
                  url: "#",
                },
                {
                  title: "job2",
                  url: "#",
                  icon: Box,
                },
                {
                  title: "job3",
                  url: "#",
                },
              ],
            },
            {
              title: "Execute",
              url: "#",
              icon: Zap,
              items: [
                {
                  title: "Genesis",
                  url: "#",
                },
                {
                  title: "Explorer",
                  url: "#",
                },
                {
                  title: "Quantum",
                  url: "#",
                },
              ],
            },
            {
              title: "QMCI",
              url: "#",
              icon: TerminalIcon,
              items: [
                {
                  title: "Introduction",
                  url: "#",
                },
                {
                  title: "Get Started",
                  url: "#",
                },
                {
                  title: "Tutorials",
                  url: "#",
                },
                {
                  title: "Changelog",
                  url: "#",
                },
              ],
            },

          ],
        projects: [
          {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
          },
          {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
          },
          {
            name: "Travel",
            url: "#",
            icon: Map,
          },
        ],
      }
  return (
    <SidebarProvider>
    <Sidebar collapsible="icon" >
      <SidebarHeader>
    Header
      </SidebarHeader>
      <SidebarContent>

        Content
      </SidebarContent>
      <SidebarFooter>
      <div>Footer</div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
    <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>

  );
};
const meta: Meta<typeof SidebarDemo> = {
  component: SidebarDemo,

};

export default meta;

export const Default: StoryObj<typeof SidebarDemo> = {
  args: {},
};
