import Link from "next/link";
import {
  executiveReports,
  advisorKpis,
  strategyMetrics,
} from "../lib/adminData";

export default function AdviserDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 rounded-[2rem] bg-white/95 px-8 py-8 shadow-2xl shadow-slate-200/70 ring-1 ring-slate-200">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-violet-700">
                Executive advisory
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Chief Adviser Dashboard
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Read-only executive analytics, company KPIs, and cross-department strategic metrics.
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
            {advisorKpis.map((kpi) => (
              <article key={kpi.title} className="rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200/60 ring-1 ring-slate-200">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{kpi.title}</p>
                <p className="mt-4 text-3xl font-semibold text-slate-950">{kpi.value}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{kpi.detail}</p>
              </article>
            ))}
          </section>

          <section className="rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200/60 ring-1 ring-slate-200">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Strategic metrics</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">Company-level strategy scorecard</h2>
              </div>
              <span className="rounded-3xl bg-slate-100 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
                Read-only view
              </span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {strategyMetrics.map((metric) => (
                <div key={metric.metric} className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200">
                  <p className="text-sm font-semibold text-slate-900">{metric.metric}</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-950">{metric.value}</p>
                  <p className="mt-2 text-sm text-slate-600">{metric.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200/60 ring-1 ring-slate-200">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Executive reports</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">Read-only analytics & reports</h2>
              </div>
              <p className="text-sm text-slate-600">Company-wide insights compiled for the advisory board.</p>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {executiveReports.map((report) => (
                <div key={report.title} className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <p className="font-semibold text-slate-950">{report.title}</p>
                    <span className="inline-flex rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
                      {report.format}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>
                      <span className="font-semibold text-slate-900">Coverage:</span> {report.coverage}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900">Generated:</span> {report.lastGenerated}
                    </p>
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
