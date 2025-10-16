import Link from "next/link";

export default function TopNav() {
  return (
    <header className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
      <span className="text-lg font-semibold tracking-tight">✨ MyApp</span>
      <nav className="flex items-center gap-3">
        <Link
          href="/signup"
          className="rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/20"
        >
          Sign Up
        </Link>
      </nav>
    </header>
  );
}
