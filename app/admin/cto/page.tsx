import Link from "next/link";
import {
  deploymentHistory,
  engineeringMetrics,
  bugSummary,
  sprintProgress,
} from "../lib/adminData";

function deploymentStatusColor(status: string) {
  if (status === "Success") return "bg-emerald-100 text-emerald-700";
  if (status === "Warning") return "bg-amber-100 text-amber-700";
  return "bg-red-100 text-red-700";
}

export default function CTODashboard() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 rounded-[2rem] bg-white/95 px-8 py-8 shadow-2xl shadow-slate-200/70 ring-1 ring-slate-200">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-slate-700">
                Technology leadership
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                CTO Dashboard
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Track sprint delivery, engineering performance, bug severity, and deployment cadence.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-1 lg:gap-4">
              <Link
                href="/admin"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Return to Admin
              </Link>
            </div>
          </div>
        </header>

        <main className="space-y-6">
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200/60 ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Sprint progress</p>
              <p className="mt-4 text-3xl font-semibold text-slate-950">{sprintProgress[0].progress}%</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{sprintProgress[0].sprint} delivered</p>
            </article>

            <article className="rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200/60 ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Engineering completion</p>
              <p className="mt-4 text-3xl font-semibold text-slate-950">{engineeringMetrics.completionRate}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Task completion rate this sprint</p>
            </article>

            <article className="rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200/60 ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Open bugs</p>
              <p className="mt-4 text-3xl font-semibold text-slate-950">{bugSummary.reduce((sum, item) => sum + item.open, 0)}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Open bugs across all severity levels</p>
            </article>

            <article className="rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200/60 ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Recent deployments</p>
              <p className="mt-4 text-3xl font-semibold text-slate-950">{deploymentHistory.length}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Deployments in the last 7 days</p>
            </article>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200/60 ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Sprint progress</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-950">Product development by sprint</h2>
                </div>
                <span className="rounded-3xl bg-slate-100 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
                  Latest sprints
                </span>
              </div>
              <div className="mt-6 space-y-4">
                {sprintProgress.map((sprint) => (
                  <div key={sprint.sprint} className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-200">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-slate-950">{sprint.sprint}</p>
                        <p className="mt-1 text-xs text-slate-500">{sprint.focus}</p>
                      </div>
                      <span className="text-sm font-semibold text-slate-700">{sprint.status}</span>
                    </div>
                    <div className="mt-3 h-3 rounded-full bg-slate-200 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-sky-500 to-violet-500" style={{ width: `${sprint.progress}%` }}></div>
                    </div>
                    <p className="mt-2 text-xs text-slate-500">{sprint.progress}% complete</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200/60 ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Bug count</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-950">Severity & resolution</h2>
                </div>
                <span className="rounded-3xl bg-slate-100 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
                  Current status
                </span>
              </div>
              <div className="mt-6 space-y-4">
                {bugSummary.map((bug) => (
                  <div key={bug.severity} className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-200">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-slate-950">{bug.severity}</p>
                        <p className="mt-1 text-xs text-slate-500">Open / Resolved</p>
                      </div>
                      <div className="text-right text-sm text-slate-700">
                        <p>{bug.open} open</p>
                        <p>{bug.resolved} resolved</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200/60 ring-1 ring-slate-200">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Deployment history</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">Recent release log</h2>
              </div>
              <p className="text-sm text-slate-600">Review deployment status, environment, and version details.</p>
            </div>
            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50">
              <div className="grid gap-0 divide-y divide-slate-200">
                {deploymentHistory.map((release) => (
                  <div key={release.id} className="flex flex-col gap-3 px-5 py-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-slate-950">{release.environment} • {release.version}</p>
                        <p className="mt-1 text-xs text-slate-500">{release.deployedOn} • {release.details}</p>
                        <p className="mt-2 text-xs text-slate-600">Deployed by: <span className="font-semibold text-slate-950">{release.deployedBy}</span></p>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${deploymentStatusColor(release.status)}`}>
                        {release.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
