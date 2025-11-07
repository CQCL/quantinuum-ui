import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button
} from "src";

export const BottomDialogDemo = () => {
  return (
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

      <Dialog open={true}>
        <DialogContent
          isDismissable={false}
          isBottomDialog={true}
          isBackgroundVisible={true}
        >
          <DialogHeader>
            <DialogTitle>Privacy Notice</DialogTitle>
            <DialogDescription>
              <div className="flex">
                <p className="flex-col-9">
                  We use cookies and similar technologies to improve your experience on our site, to analyze our traffic, and to understand where our audience is coming from.
                </p>
                <div className="flex-col-3">
                  <Button className="w-full">Accept</Button>
                  <div className="mt-2 flex">
                    <Button variant="outline">Decline</Button>
                    <Button variant="outline" className="ml-2">Preferences</Button>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const DialogDemo = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const meta: Meta<typeof DialogDemo> = {
  component: DialogDemo,
};

export default meta;

export const Default: StoryObj<typeof DialogDemo> = {
  args: {},
};
