"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { createContext, ReactNode, useContext, useState } from "react";

type DialogAPI = {
  open: (content: ReactNode) => void;
  close: () => void;
};

const DialogCtx = createContext<DialogAPI | null>(null);

export function useDialog() {
  const ctx = useContext(DialogCtx);
  if (!ctx)
    throw new Error("useDialog must be used within <AppDialogProvider>");
  return ctx;
}

export function AppDialogProvider({ children }: { children: ReactNode }) {
  const [openState, setOpenState] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);

  function open(c: ReactNode) {
    setContent(c);
    setOpenState(true);
  }
  function close() {
    setOpenState(false);
  }

  return (
    <DialogCtx.Provider value={{ open, close }}>
      <Dialog open={openState} onOpenChange={setOpenState}>
        <DialogContent className="sm:max-w-[425px]">{content}</DialogContent>
      </Dialog>
      {children}
    </DialogCtx.Provider>
  );
}
