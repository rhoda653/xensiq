import Link from "next/link";
import {
  budgetAllocations,
  cfoRevenueOverview,
  expenseByDepartment,
  payrollSummary,
  paymentRequestQueue,
} from "../lib/adminData";

function statusBadge(status: string) {
  if (status === "Awaiting CFO") return "bg-violet-100 text-violet-700";
  if (status === "Pending review") return "bg-sky-100 text-sky-700";
  return "bg-emerald-100 text-emerald-700";
}

function utilizationBarColor(value: number) {
  if (value >= 100) return "from-violet-500 to-fuchsia-400";
  if (value >= 90) return "from-sky-500 to-cyan-400";
  return "from-slate-400 to-slate-300";
}

function getAllocationWidth(actual: string, budget: string) {
  const actualValue = parseInt(actual.replace(/[^0-9]/g, ""), 10) || 0;
  const budgetValue = parseInt(budget.replace(/[^0-9]/g, ""), 10) || 1;
  return Math.min((actualValue / budgetValue) * 100, 100);
}

export default function CFODashboard() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 rounded-[2rem] bg-white/95 px-8 py-8 shadow-2xl shadow-slate-200/60 ring-1 ring-violet-100">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-violet-700">
                Finance leadership
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                CFO Dashboard
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                A finance-first view of revenue, spending, payroll, payments, and budget performance.
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
                      Revenue overview
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold text-slate-950">
                      {cfoRevenueOverview.totalRevenue}
                    </h2>
                  </div>
                  <div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
                    {cfoRevenueOverview.period} • Forecast {cfoRevenueOverview.forecast}
                  </div>
                </div>
                <div className="mt-6 rounded-3xl bg-violet-50 p-5 text-slate-700">
                  <p className="text-sm">Revenue variance versus plan</p>
                  <p className="mt-2 text-2xl font-semibold text-violet-700">{cfoRevenueOverview.variance}</p>
                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-violet-400 to-sky-400"></div>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-[2rem] bg-white shadow-lg shadow-slate-200/70 ring-1 ring-violet-100 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-600">
                    Payroll summary
                  </p>
                  <p className="mt-4 text-3xl font-semibold text-slate-950">{payrollSummary.totalMonthlyPayroll}</p>
                  <p className="mt-2 text-sm text-slate-600">Employees covered: {payrollSummary.employeeCount}</p>
                  <p className="mt-4 rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
                    Next payment date: <span className="font-semibold text-violet-700">{payrollSummary.nextPaymentDate}</span>
                  </p>
                </div>

                <div className="rounded-[2rem] bg-white shadow-lg shadow-slate-200/70 ring-1 ring-violet-100 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-600">
                    Payment queue
                  </p>
                  <p className="mt-4 text-3xl font-semibold text-slate-950">{paymentRequestQueue.length}</p>
                  <p className="mt-2 text-sm text-slate-600">Requests awaiting CFO approval</p>
                  <div className="mt-4 rounded-3xl bg-violet-50 px-4 py-3 text-sm text-slate-700">
                    Approve or reject payment requests with one click.
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] bg-white shadow-lg shadow-slate-200/70 ring-1 ring-violet-100 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-600">
                      Budget snapshot
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-950">Expense allocation</h3>
                  </div>
                  <div className="rounded-3xl bg-violet-50 px-3 py-2 text-xs font-semibold uppercase text-violet-700">
                    Live finance view
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  {budgetAllocations.map((item) => (
                    <div key={item.department} className="rounded-3xl bg-slate-50 p-4 ring-1 ring-violet-100">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="font-semibold text-slate-950">{item.department}</p>
                          <p className="mt-1 text-xs text-slate-500">Budget {item.budget} • Actual {item.actual}</p>
                        </div>
                        <span className="text-xs font-semibold text-violet-700">{item.variance}</span>
                      </div>
                      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-violet-400 to-sky-400"
                          style={{ width: `${getAllocationWidth(item.actual, item.budget)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] bg-white shadow-lg shadow-slate-200/70 ring-1 ring-violet-100 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-600">
                      Expense tracking
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-950">Department spend</h3>
                  </div>
                  <span className="rounded-3xl bg-violet-50 px-3 py-2 text-xs font-semibold text-violet-700">
                    {expenseByDepartment.length} departments
                  </span>
                </div>
                <div className="mt-6 space-y-4">
                  {expenseByDepartment.map((dept) => (
                    <div
                      key={dept.department}
                      className="rounded-3xl bg-slate-50 p-4 ring-1 ring-violet-100"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <p className="font-semibold text-slate-950">{dept.department}</p>
                        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${utilizationBarColor(dept.utilization)}`}>
                          {dept.utilization}%
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-slate-500">Budget {dept.budget} • Spend {dept.expense}</p>
                      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${utilizationBarColor(dept.utilization)}`}
                          style={{ width: `${Math.min(dept.utilization, 100)}%` }}
                        ></div>
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
                  Payment queue
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950">Approve or reject payments</h3>
              </div>
              <p className="text-sm text-slate-600">Manage all finance approvals in one place.</p>
            </div>

            <div className="mt-6 grid gap-4">
              {paymentRequestQueue.map((request) => (
                <div key={request.id} className="rounded-3xl bg-slate-50 p-5 ring-1 ring-violet-100">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <p className="font-semibold text-slate-950">{request.purpose}</p>
                      <p className="mt-1 text-xs text-slate-500">{request.department} • {request.requester}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusBadge(request.status)}`}>
                        {request.status}
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {request.amount}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-slate-500">Requested on {request.requestedOn}</p>
                    <div className="flex gap-2">
                      <button className="rounded-2xl bg-violet-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-violet-400">
                        Approve
                      </button>
                      <button className="rounded-2xl bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-300">
                        Reject
                      </button>
                    </div>
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
