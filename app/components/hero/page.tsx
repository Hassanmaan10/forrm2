import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="mx-auto w-fit rounded-2xl border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">
        Welcome
      </div>

      <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
        A clean, modern starter for your app
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-white/85">
        Fast to load, easy to customize. Sign in to continue or create a free
        account to get started right away.
      </p>

      <div className="mt-8 flex items-center justify-center gap-3">
        <Link
          href="/signup"
          className="rounded-2xl bg-white px-6 py-3 text-base font-semibold text-indigo-700 shadow-md transition hover:shadow-lg"
          aria-label="Go to login"
        >
          Sign Up
        </Link>
      </div>
    </section>
  );
}
