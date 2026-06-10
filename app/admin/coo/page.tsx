import Link from "next/link";
import {
  departmentMetrics,
  internalRequestQueue,
  operationsReports,
} from "../lib/adminData";

function priorityColor(priority: string) {
  if (priority === "High") return "bg-red-100 text-red-700";
  if (priority === "Medium") return "bg-amber-100 text-amber-700";
  return "bg-sky-100 text-sky-700";
}

function statusColor(status: string) {
  if (status === "In Review") return "bg-blue-100 text-blue-700";
  if (status === "Pending") return "bg-slate-200 text-slate-700";
  return "bg-emerald-100 text-emerald-700";
}

function departmentStatusColor(status: string) {
  if (status === "On Track") return "bg-emerald-100 text-emerald-700";
  return "bg-red-100 text-red-700";
}

function getCompletionColor(completion: number) {
  if (completion >= 90) return "from-emerald-500 to-emerald-400";
  if (completion >= 80) return "from-sky-500 to-sky-400";
  return "from-amber-500 to-amber-400";
}

export default function COODashboard() {
  const totalHeadcount = departmentMetrics.reduce((sum, dept) => sum + dept.headcount, 0);
  const avgTaskCompletion = Math.round(
    departmentMetrics.reduce((sum, dept) => sum + dept.taskCompletion, 0) /
      departmentMetrics.length
  );
  const totalActiveProjects = departmentMetrics.reduce((sum, dept) => sum + dept.activeProjects, 0);
  const queueLength = internalRequestQueue.length;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(229,231,255,0.9),transparent_26%),radial-gradient(circle_at_top_right,_rgba(217,234,255,0.85),transparent_24%),linear-gradient(180deg,#ffffff_0%,#eff6ff_100%)] text-slate-950">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 rounded-[2rem] border border-white/80 bg-white/85 px-6 py-6 shadow-xl shadow-slate-200/70 backdrop-blur-xl sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                Operations Dashboard
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                COO Dashboard
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Department performance, team headcount, operational requests, and strategic reports.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-1 lg:gap-4">
              <Link
                href="/admin"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Back to Admin
              </Link>
            </div>
          </div>
        </header>

        <main className="space-y-6">
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Team Headcount
              </p>
              <p className="mt-4 text-3xl font-semibold text-slate-950">{totalHeadcount}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Across all departments</p>
            </article>

            <article className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Avg Task Completion
              </p>
              <p className="mt-4 text-3xl font-semibold text-slate-950">{avgTaskCompletion}%</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Department average</p>
            </article>

            <article className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Active Projects
              </p>
              <p className="mt-4 text-3xl font-semibold text-slate-950">{totalActiveProjects}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Organization-wide</p>
            </article>

            <article className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Request Queue
              </p>
              <p className="mt-4 text-3xl font-semibold text-slate-950">{queueLength}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Pending internal requests</p>
            </article>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur-xl">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Department Performance
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                  Metrics by Department
                </h2>
              </div>

              <div className="mt-6 space-y-4">
                {departmentMetrics.map((dept) => (
                  <div
                    key={dept.department}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <p className="font-semibold text-slate-900">{dept.department}</p>
                        <p className="mt-1 text-xs text-slate-600">
                          {dept.headcount} team members • {dept.activeProjects} projects
                        </p>
                      </div>
                      <span
                        className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${departmentStatusColor(
                          dept.status
                        )}`}
                      >
                        {dept.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${getCompletionColor(dept.taskCompletion)}`}
                            style={{ width: `${dept.taskCompletion}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-slate-700 w-10 text-right">
                        {dept.taskCompletion}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur-xl">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Internal Request Queue
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                  Operations-Related Requests
                </h2>
              </div>

              <div className="mt-6 space-y-3">
                {internalRequestQueue.map((request) => (
                  <div
                    key={request.id}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 flex-1">
                        <span className="inline-flex rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                          {request.type}
                        </span>
                        <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${priorityColor(request.priority)}`}>
                          {request.priority}
                        </span>
                      </div>
                      <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusColor(request.status)}`}>
                        {request.status}
                      </span>
                    </div>
                    <p className="font-semibold text-slate-900 text-sm">{request.title}</p>
                    <p className="mt-2 text-xs text-slate-600">
                      {request.department} • Waiting {request.daysWaiting} days
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur-xl">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Operations Reports
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                Downloadable Analytics
              </h2>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {operationsReports.map((report, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <p className="font-semibold text-slate-900">{report.title}</p>
                    <span className="inline-flex rounded-lg bg-slate-200 px-2 py-1 text-xs font-semibold text-slate-700">
                      {report.format}
                    </span>
                  </div>
                  <div className="space-y-2 text-xs text-slate-600">
                    <p>
                      <span className="font-semibold">Coverage:</span> {report.departments}
                    </p>
                    <p>
                      <span className="font-semibold">Metrics:</span> {report.metrics}
                    </p>
                    <p className="text-slate-500">Generated: {report.lastGenerated}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
