import Link from "next/link";
import {
  campaignPerformance,
  leadPipeline,
  marketingCampaigns,
  websiteTraffic,
} from "../lib/adminData";

function campaignStatusColor(status: string) {
  if (status === "Active") return "bg-emerald-100 text-emerald-700";
  if (status === "Paused") return "bg-amber-100 text-amber-700";
  return "bg-sky-100 text-sky-700";
}

export default function CMODashboard() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 rounded-[2rem] bg-white/95 px-8 py-8 shadow-2xl shadow-slate-200/70 ring-1 ring-violet-100">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-violet-700">
                Marketing leadership
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                CMO Dashboard
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Website traffic, campaign health, lead pipeline progress, and campaign ROI in one view.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-1 lg:gap-4">
              <Link
                href="/admin"
                className="inline-flex items-center justify-center rounded-2xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
              >
                Return to Admin
              </Link>
            </div>
          </div>
        </header>

        <main className="space-y-6">
          <section className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="space-y-6">
              <div className="rounded-[2rem] bg-white shadow-lg shadow-slate-200/70 ring-1 ring-violet-100 p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-600">
                      Website traffic
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold text-slate-950">Google Analytics overview</h2>
                  </div>
                  <div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
                    Top channel: {websiteTraffic.topChannel}
                  </div>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <div className="rounded-3xl bg-violet-50 p-4 text-slate-800">
                    <p className="text-xs uppercase tracking-[0.24em] text-violet-600">Users</p>
                    <p className="mt-3 text-2xl font-semibold">{websiteTraffic.users}</p>
                  </div>
                  <div className="rounded-3xl bg-sky-50 p-4 text-slate-800">
                    <p className="text-xs uppercase tracking-[0.24em] text-sky-600">Sessions</p>
                    <p className="mt-3 text-2xl font-semibold">{websiteTraffic.sessions}</p>
                  </div>
                  <div className="rounded-3xl bg-violet-50 p-4 text-slate-800">
                    <p className="text-xs uppercase tracking-[0.24em] text-violet-600">Bounce rate</p>
                    <p className="mt-3 text-2xl font-semibold">{websiteTraffic.bounceRate}</p>
                  </div>
                  <div className="rounded-3xl bg-sky-50 p-4 text-slate-800">
                    <p className="text-xs uppercase tracking-[0.24em] text-sky-600">Avg session</p>
                    <p className="mt-3 text-2xl font-semibold">{websiteTraffic.avgSession}</p>
                  </div>
                </div>
                <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-700">Google Analytics snapshot</p>
                    <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
                      Live API
                    </span>
                  </div>
                  <div className="mt-5 h-44 rounded-[1.5rem] bg-white p-4 shadow-inner shadow-slate-200/50">
                    <div className="h-full w-full rounded-[1.25rem] bg-gradient-to-br from-violet-100 via-slate-50 to-sky-100"></div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] bg-white shadow-lg shadow-slate-200/70 ring-1 ring-violet-100 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-600">
                      Lead pipeline
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-950">Conversion funnel</h3>
                  </div>
                  <span className="rounded-3xl bg-sky-50 px-3 py-2 text-xs font-semibold uppercase text-sky-700">
                    Target {leadPipeline.target}
                  </span>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-violet-50 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-violet-600">Total leads</p>
                    <p className="mt-3 text-3xl font-semibold text-slate-950">{leadPipeline.total}</p>
                  </div>
                  <div className="rounded-3xl bg-sky-50 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-sky-600">MQLs</p>
                    <p className="mt-3 text-3xl font-semibold text-slate-950">{leadPipeline.mql}</p>
                  </div>
                  <div className="rounded-3xl bg-violet-50 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-violet-600">SQLs</p>
                    <p className="mt-3 text-3xl font-semibold text-slate-950">{leadPipeline.sql}</p>
                  </div>
                  <div className="rounded-3xl bg-sky-50 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-sky-600">Opportunities</p>
                    <p className="mt-3 text-3xl font-semibold text-slate-950">{leadPipeline.opportunities}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] bg-white shadow-lg shadow-slate-200/70 ring-1 ring-violet-100 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-600">
                      Campaigns
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-950">Active marketing campaigns</h3>
                  </div>
                  <span className="rounded-3xl bg-slate-100 px-3 py-2 text-xs font-semibold uppercase text-slate-700">
                    Current status
                  </span>
                </div>
                <div className="mt-6 space-y-4">
                  {marketingCampaigns.map((campaign) => (
                    <div key={campaign.name} className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-200">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="font-semibold text-slate-950">{campaign.name}</p>
                          <p className="mt-1 text-xs text-slate-500">{campaign.channel} • Budget {campaign.budget}</p>
                        </div>
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${campaignStatusColor(campaign.status)}`}>
                          {campaign.status}
                        </span>
                      </div>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        <p className="text-sm text-slate-600">Spend: {campaign.currentSpend}</p>
                        <p className="text-sm text-slate-600">Performance: {campaign.performance}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] bg-white shadow-lg shadow-slate-200/70 ring-1 ring-violet-100 p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-600">
                  Performance metrics
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950">Campaign ROI and engagement</h3>
              </div>
              <p className="text-sm text-slate-600">Review campaign lift and conversion impact.</p>
            </div>
            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50">
              <div className="grid gap-4 p-5 md:grid-cols-3">
                {campaignPerformance.map((metric) => (
                  <div key={metric.campaign} className="rounded-[1.5rem] bg-white p-4 shadow-sm shadow-slate-200/50">
                    <p className="text-sm font-semibold text-slate-900">{metric.campaign}</p>
                    <div className="mt-4 grid gap-2 text-sm text-slate-600">
                      <p>Impressions: {metric.impressions}</p>
                      <p>Clicks: {metric.clicks}</p>
                      <p>Conversions: {metric.conversions}</p>
                    </div>
                    <p className="mt-4 rounded-3xl bg-violet-50 px-3 py-2 text-sm font-semibold text-violet-700">
                      ROI {metric.roi}
                    </p>
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
