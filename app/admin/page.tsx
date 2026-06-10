import Link from "next/link";
import {
  auditLogs,
  ceoWidgets,
  dashboardCards,
  executiveReports,
  menuItems,
  pendingApprovals,
  platformSettings,
  productStatus,
  users,
} from "./lib/adminData";

function badgeClass(status: string) {
  if (status === "Active") return "bg-emerald-100 text-emerald-700";
  if (status === "Pending") return "bg-amber-100 text-amber-700";
  if (status === "Inactive") return "bg-slate-100 text-slate-700";
  return "bg-slate-100 text-slate-700";
}

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(229,231,255,0.9),transparent_26%),radial-gradient(circle_at_top_right,_rgba(217,234,255,0.85),transparent_24%),linear-gradient(180deg,#ffffff_0%,#eff6ff_100%)] text-slate-950">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 rounded-[2rem] border border-white/80 bg-white/85 px-6 py-6 shadow-xl shadow-slate-200/70 backdrop-blur-xl sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-violet-700">
                Executive Dashboard
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                CEO Dashboard
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Executive overview of key metrics, approvals, product status, and strategic reports.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-1 lg:gap-4">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                CEO access verified
              </button>
            </div>
          </div>
        </header>

        <div className="grid gap-6 xl:grid-cols-[280px_1fr]">
          <aside className="space-y-4 rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/70 backdrop-blur-xl">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Quick navigation
              </p>
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      item.active
                        ? "bg-violet-100 text-violet-900 shadow-sm"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-slate-950/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                Approval rule
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Level 3+ role assignments require CEO or COO approval before the
                update is applied.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-slate-950/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                Department health
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-3xl bg-white p-4 shadow-sm shadow-slate-100">
                  <p className="text-sm font-semibold text-slate-900">HR</p>
                  <p className="mt-1 text-sm text-slate-600">Shared across HR & Finance modules.</p>
                </div>
                <div className="rounded-3xl bg-white p-4 shadow-sm shadow-slate-100">
                  <p className="text-sm font-semibold text-slate-900">Platform</p>
                  <p className="mt-1 text-sm text-slate-600">Used for admin and system control.</p>
                </div>
              </div>
            </div>
          </aside>

          <main className="space-y-6">
            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {ceoWidgets.map((widget) => (
                <article
                  key={widget.title}
                  className={`rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur-xl`}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                    {widget.title}
                  </p>
                  <p className="mt-4 text-3xl font-semibold text-slate-950">{widget.value}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{widget.detail}</p>
                  <p className="mt-3 text-xs font-semibold text-violet-700">{widget.metric}</p>
                </article>
              ))}
            </section>

            <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-6 rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur-xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Pending Approvals
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                      Awaiting CEO Action
                    </h2>
                  </div>
                  <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                    {pendingApprovals.length} Pending
                  </span>
                </div>

                <div className="space-y-3">
                  {pendingApprovals.map((approval) => (
                    <div
                      key={approval.id}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="inline-flex rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                              {approval.type}
                            </span>
                            {approval.amount !== "N/A" && (
                              <span className="text-sm font-semibold text-slate-950">
                                {approval.amount}
                              </span>
                            )}
                          </div>
                          <p className="mt-2 font-semibold text-slate-900">{approval.title}</p>
                          <p className="mt-1 text-xs text-slate-600">
                            from {approval.requester} • {approval.date}
                          </p>
                        </div>
                        <button className="rounded-lg bg-violet-600 px-3 py-2 text-xs font-semibold text-white hover:bg-violet-700">
                          Review
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur-xl">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Product Status
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                      System Operations
                    </h2>
                  </div>
                  <div className="mt-6 space-y-4">
                    {productStatus.map((product) => (
                      <div
                        key={product.name}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <p className="font-semibold text-slate-900">{product.name}</p>
                            <p className="mt-1 text-xs text-slate-600">
                              {product.activeUsers} active users
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="inline-flex rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                              {product.status}
                            </div>
                            <p className="mt-1 text-xs font-semibold text-slate-700">
                              {product.uptime} uptime
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur-xl">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Executive Reports
                    </p>
                    <h2 className="mt-2 text-lg font-semibold text-slate-950">
                      Downloadable Exports
                    </h2>
                  </div>
                  <div className="mt-4 space-y-3">
                    {executiveReports.map((report, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-slate-900">{report.title}</p>
                            <p className="mt-1 text-xs text-slate-600">
                              {report.coverage}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              Generated: {report.lastGenerated}
                            </p>
                          </div>
                          <span className="inline-flex rounded-lg bg-slate-200 px-2 py-1 text-xs font-semibold text-slate-700">
                            {report.format}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="grid gap-6 grid-cols-1 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur-xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                      User Management
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                      Active users and role controls
                    </h2>
                  </div>
                  <button className="rounded-2xl bg-violet-950 px-4 py-3 text-sm font-semibold text-white hover:bg-violet-800">
                    Create user
                  </button>
                </div>

                <div className="overflow-hidden rounded-[1.75rem] border border-slate-200">
                  <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-slate-500">Name</th>
                        <th className="px-4 py-3 font-semibold text-slate-500">Role</th>
                        <th className="px-4 py-3 font-semibold text-slate-500">Department</th>
                        <th className="px-4 py-3 font-semibold text-slate-500">Last login</th>
                        <th className="px-4 py-3 font-semibold text-slate-500">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {users.map((user) => (
                        <tr key={user.email} className="hover:bg-slate-50">
                          <td className="px-4 py-4">
                            <div className="font-semibold text-slate-900">{user.name}</div>
                            <div className="text-xs text-slate-500">{user.email}</div>
                          </td>
                          <td className="px-4 py-4 text-slate-700">{user.role}</td>
                          <td className="px-4 py-4 text-slate-700">{user.department}</td>
                          <td className="px-4 py-4 text-slate-700">{user.lastLogin}</td>
                          <td className="px-4 py-4">
                            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${badgeClass(user.status)}`}>
                              {user.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur-xl">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Platform Configuration
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                      Configurable platform controls
                    </h2>
                  </div>
                  <div className="mt-6 space-y-5">
                    {platformSettings.map((setting) => (
                      <div
                        key={setting.label}
                        className="rounded-3xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="font-semibold text-slate-900">{setting.label}</p>
                            <p className="mt-1 text-sm text-slate-600">{setting.description}</p>
                          </div>
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                              setting.enabled
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-slate-200 text-slate-700"
                            }`}
                          >
                            {setting.enabled ? "Enabled" : "Disabled"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                        Audit Logs
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                        Immutable action history
                      </h2>
                    </div>
                    <div className="rounded-2xl bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700">
                      Append-only
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    {auditLogs.map((entry) => (
                      <div key={`${entry.time}-${entry.target}`} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                        <div className="flex items-center justify-between gap-4 text-sm text-slate-500">
                          <span>{entry.time}</span>
                          <span>{entry.actor}</span>
                        </div>
                        <p className="mt-3 text-sm font-semibold text-slate-900">{entry.action}</p>
                        <p className="mt-1 text-sm text-slate-600">Target: {entry.target}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
