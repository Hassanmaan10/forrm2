"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useDialog } from "@/app/providers/dialog";

export default function DialogDemo() {
  const { open, close } = useDialog();

  function openEditProfile() {
    // This JSX becomes the body inside the global dialog
    open(
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: read form data and save...
          close(); // close after submit
        }}
      >
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name-1">Name</Label>
            <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username-1">Username</Label>
            <Input id="username-1" name="username" defaultValue="@peduarte" />
          </div>
        </div>

        <DialogFooter className="mt-6">
          <Button variant="outline" type="button" onClick={close}>
            Cancel
          </Button>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </form>
    );
  }

  return (
    <Button
      className="bg-purple-600 hover:bg-purple-500"
      onClick={openEditProfile}
    >
      Open Dialog
    </Button>
  );
}
