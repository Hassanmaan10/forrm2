import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-500 text-white">
      {/* top nav */}
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
          <Link
            href="/signup"
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-slate-100"
          >
            Logout
          </Link>
        </nav>
      </header>

      {/* content */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        {/* heading */}
        <div className="text-center">
          <div className="mx-auto w-fit rounded-2xl border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">
            Dashboard
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Welcome back 👋
          </h1>
          <p className="mt-2 text-white/85">
            Here’s a quick snapshot of what’s happening today.
          </p>
        </div>

        {/* KPI cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "New Signups", value: "128" },
            { label: "Active Users", value: "2,431" },
            { label: "Conversion", value: "4.7%" },
            { label: "Revenue", value: "$8,920" },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-3xl border border-white/25 bg-white/10 p-5 backdrop-blur-xl shadow-2xl"
            >
              <p className="text-sm text-white/80">{kpi.label}</p>
              <p className="mt-2 text-3xl font-semibold">{kpi.value}</p>
            </div>
          ))}
        </div>

        {/* Actions + search */}
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
            </div>
          </div>

          <div className="rounded-3xl border border-white/25 bg-white/10 p-6 backdrop-blur-xl shadow-2xl">
            <h2 className="text-lg font-semibold">Search</h2>
            <div className="mt-4 flex items-center gap-2 rounded-2xl border border-white/25 bg-white/10 p-2 backdrop-blur">
              <input
                placeholder="Search users, orders, reports…"
                className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder-white/70 outline-none"
              />
              <button className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-slate-100">
                Go
              </button>
            </div>
          </div>
        </div>

        {/* Recent activity */}
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
              <thead className="text-white/80">
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
                    <td className="px-3 py-3 text-white/80">{row.when}</td>
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
      </section>

      {/* footer */}
      <footer className="mx-auto max-w-7xl px-6 pb-10 text-center text-sm text-white/80">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </main>
  );
}
