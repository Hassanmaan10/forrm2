"use client";

import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useDialog } from "@/app/providers/dialog";

export default function SignupDialog() {
  const { open, close } = useDialog();

  function openEditProfile() {
    // This JSX becomes the body inside the global dialog
    open(
      <div>
        <DialogHeader>
          <DialogTitle>Password rules</DialogTitle>
          <DialogDescription>
            Your password must meet these requirements.
          </DialogDescription>
        </DialogHeader>

        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
          <li>At least 8 characters</li>
          <li>Maximum 72 characters</li>
          <li>At least one letter (A–Z)</li>
          <li>At least one number (0–9)</li>
          <li>At least one special character (!@#$…)</li>
        </ul>

        <DialogFooter className="mt-6">
          <Button onClick={close}>Got it</Button>
        </DialogFooter>
      </div>
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
