import React from "react";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 pb-10 text-center text-sm text-white/80">
      © {new Date().getFullYear()} MyApp. All rights reserved.
    </footer>
  );
}
