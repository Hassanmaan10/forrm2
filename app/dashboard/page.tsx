"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    router.replace("/signup");
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-500 text-white">
      {/* Top nav */}
      <header className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <span className="text-lg font-semibold tracking-tight">✨ MyApp</span>
        <nav className="flex items-center gap-3">
          <Link
            href="/"
            className="rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/20"
          >
            Home
          </Link>
          <Link
            href="/settings"
            className="rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/20"
          >
            Settings
          </Link>
          <button
            onClick={handleLogout}
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-slate-100"
          >
            Logout
          </button>
        </nav>
      </header>

      {/* Page heading */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="mx-auto w-fit rounded-2xl border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">
            Dashboard
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Welcome back 👋
          </h1>
          <p className="mt-2 text-white/85">
            Quick snapshot of your product today.
          </p>
        </div>

        {/* KPIs */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "New Signups", value: "128", emoji: "🆕" },
            { label: "Active Users", value: "2,431", emoji: "👥" },
            { label: "Conversion", value: "4.7%", emoji: "📈" },
            { label: "Revenue", value: "$8,920", emoji: "💸" },
          ].map((k) => (
            <div
              key={k.label}
              className="group rounded-3xl border border-white/25 bg-white/10 p-5 backdrop-blur-xl shadow-2xl transition hover:bg-white/15"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/85">{k.label}</p>
                <span className="text-lg">{k.emoji}</span>
              </div>
              <p className="mt-3 text-3xl font-semibold">{k.value}</p>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
                <div className="h-full w-2/3 bg-white/70 transition group-hover:w-4/5" />
              </div>
            </div>
          ))}
        </div>

        {/* Two-column: Actions + Search (left) / Announcements (right) */}
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/25 bg-white/10 p-6 backdrop-blur-xl shadow-2xl lg:col-span-2">
            <h2 className="text-lg font-semibold">Quick actions</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/users/new"
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-slate-100"
              >
                + New User
              </Link>
              <Link
                href="/reports"
                className="rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/20"
              >
                View Reports
              </Link>
              <Link
                href="/billing"
                className="rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/20"
              >
                Billing
              </Link>
              <Link
                href="/activity"
                className="rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/20"
              >
                Activity
              </Link>
            </div>

            {/* Search bar */}
            <div className="mt-6 flex items-center gap-2 rounded-2xl border border-white/25 bg-white/10 p-2 backdrop-blur">
              <input
                placeholder="Search users, orders, reports…"
                className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder-white/70 outline-none"
              />
              <button className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-slate-100">
                Go
              </button>
            </div>
          </div>

          {/* Announcements / Tips */}
          <div className="rounded-3xl border border-white/25 bg-white/10 p-6 backdrop-blur-xl shadow-2xl">
            <h2 className="text-lg font-semibold">Announcements</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="rounded-2xl border border-white/20 bg-white/10 p-3">
                ✅ New analytics endpoint rolling out Tuesday.
              </li>
              <li className="rounded-2xl border border-white/20 bg-white/10 p-3">
                🔒 Remember to rotate API keys this month.
              </li>
              <li className="rounded-2xl border border-white/20 bg-white/10 p-3">
                🚀 Beta access for “Smart Segments” is live.
              </li>
            </ul>
          </div>
        </div>

        {/* Recent activity table */}
        <div className="mt-8 rounded-3xl border border-white/25 bg-white/10 p-6 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent activity</h2>
            <Link
              href="/activity"
              className="text-sm underline decoration-white/60 underline-offset-4 hover:text-white"
            >
              View all
            </Link>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="text-white/85">
                <tr>
                  <th className="px-3 py-2 font-medium">User</th>
                  <th className="px-3 py-2 font-medium">Action</th>
                  <th className="px-3 py-2 font-medium">When</th>
                  <th className="px-3 py-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  {
                    user: "Roa Noureddine",
                    action: "Created account",
                    when: "2m ago",
                    status: "Success",
                  },
                  {
                    user: "Ali M.",
                    action: "Updated billing",
                    when: "10m ago",
                    status: "Pending",
                  },
                  {
                    user: "Sara K.",
                    action: "Exported report",
                    when: "1h ago",
                    status: "Success",
                  },
                  {
                    user: "Maya J.",
                    action: "Password reset",
                    when: "3h ago",
                    status: "Failed",
                  },
                ].map((row) => (
                  <tr key={row.user}>
                    <td className="px-3 py-3">{row.user}</td>
                    <td className="px-3 py-3">{row.action}</td>
                    <td className="px-3 py-3 text-white/85">{row.when}</td>
                    <td className="px-3 py-3">
                      <span
                        className={[
                          "rounded-full px-2 py-1 text-xs font-semibold",
                          row.status === "Success" && "bg-white/20",
                          row.status === "Pending" && "bg-yellow-300/20",
                          row.status === "Failed" && "bg-rose-400/20",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <footer className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-white/80">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </footer>
      </section>
    </main>
  );
}
