export const menuItems = [
  { label: "Overview", active: true },
  { label: "User Management", active: false },
  { label: "Role Assignment", active: false },
  { label: "Departments", active: false },
  { label: "Platform Config", active: false },
  { label: "Audit Logs", active: false },
];

export const dashboardCards = [
  {
    title: "Users",
    value: "312",
    detail: "Active administrators and staff",
    accent: "from-violet-200 to-violet-100",
  },
  {
    title: "Roles",
    value: "8",
    detail: "Permission tiers enabled",
    accent: "from-sky-200 to-sky-100",
  },
  {
    title: "Departments",
    value: "12",
    detail: "HR, Finance, PM, and support",
    accent: "from-indigo-200 to-sky-100",
  },
  {
    title: "Feature Flags",
    value: "14",
    detail: "Live platform toggles",
    accent: "from-purple-200 to-sky-100",
  },
];

export const users = [
  {
    name: "Amara Johnson",
    email: "amara.johnson@xensiq.com",
    role: "Administrator",
    department: "Platform",
    lastLogin: "Today, 09:12",
    status: "Active",
  },
  {
    name: "Ethan Wells",
    email: "ethan.wells@xensiq.com",
    role: "COO",
    department: "Operations",
    lastLogin: "Yesterday, 18:04",
    status: "Pending",
  },
  {
    name: "Priya Singh",
    email: "priya.singh@xensiq.com",
    role: "Finance Lead",
    department: "Finance",
    lastLogin: "Jun 8, 2026",
    status: "Active",
  },
  {
    name: "Kai Martinez",
    email: "kai.martinez@xensiq.com",
    role: "HR Manager",
    department: "HR",
    lastLogin: "Jun 7, 2026",
    status: "Inactive",
  },
];

export const platformSettings = [
  {
    label: "Enable session timeout",
    description: "Force re-authentication after 30 minutes of inactivity.",
    enabled: true,
  },
  {
    label: "Branding mode",
    description: "Apply enterprise theme and logos across modules.",
    enabled: true,
  },
  {
    label: "Notifications",
    description: "Send daily summary emails to admin users.",
    enabled: false,
  },
  {
    label: "Beta feature access",
    description: "Allow early testing for internal teams.",
    enabled: true,
  },
];

export const auditLogs = [
  {
    time: "2m ago",
    action: "User account deactivated",
    target: "Kai Martinez",
    actor: "Amara Johnson",
  },
  {
    time: "12m ago",
    action: "Role changed to COO approval",
    target: "Ethan Wells",
    actor: "Platform Engine",
  },
  {
    time: "45m ago",
    action: "Department record created",
    target: "Customer Success",
    actor: "Amara Johnson",
  },
  {
    time: "1h ago",
    action: "Feature flag toggled",
    target: "Notifications: Digest Email",
    actor: "Priya Singh",
  },
];

export const ceoWidgets = [
  {
    title: "Total Employees",
    value: "312",
    detail: "Live count from users table, grouped by department",
    metric: "Active across all departments",
  },
  {
    title: "Active Projects",
    value: "24",
    detail: "Count of projects with status = ACTIVE",
    metric: "In-progress and on-track",
  },
  {
    title: "Recruitment Metrics",
    value: "18",
    detail: "Applications by stage, open roles count",
    metric: "Open roles | Avg time-to-hire: 21 days",
  },
  {
    title: "Financial Overview",
    value: "$847K",
    detail: "Total approved spend MTD",
    metric: "Pending: $124K | Payroll: $420K",
  },
];

export const pendingApprovals = [
  {
    id: 1,
    type: "Finance Request",
    title: "Equipment Budget - Q3",
    requester: "Sarah Chen",
    amount: "$45,000",
    status: "Pending",
    date: "Jun 8, 2026",
  },
  {
    id: 2,
    type: "Leave Request",
    title: "30-day sabbatical",
    requester: "Marcus Thompson",
    amount: "N/A",
    status: "Pending",
    date: "Jun 7, 2026",
  },
  {
    id: 3,
    type: "Role Change",
    title: "Promotion to Senior Lead",
    requester: "Jennifer Liu",
    amount: "$18,500",
    status: "Pending",
    date: "Jun 6, 2026",
  },
];

export const productStatus = [
  {
    name: "AI Solutions",
    status: "Operational",
    uptime: "99.9%",
    activeUsers: "1,247",
    color: "emerald",
  },
  {
    name: "E-Commerce",
    status: "Operational",
    uptime: "99.8%",
    activeUsers: "3,421",
    color: "sky",
  },
];

export const executiveReports = [
  {
    title: "Monthly Performance Report",
    format: "PDF/CSV",
    lastGenerated: "Jun 1, 2026",
    coverage: "All modules",
  },
  {
    title: "Department Analytics",
    format: "PDF/CSV",
    lastGenerated: "Jun 5, 2026",
    coverage: "HR, Finance, Operations",
  },
  {
    title: "Financial Summary",
    format: "PDF/CSV",
    lastGenerated: "Jun 7, 2026",
    coverage: "Budget, Spend, Payroll",
  },
];

export const departmentMetrics = [
  {
    department: "HR",
    taskCompletion: 94,
    activeProjects: 8,
    headcount: 12,
    status: "On Track",
  },
  {
    department: "Finance",
    taskCompletion: 87,
    activeProjects: 6,
    headcount: 15,
    status: "On Track",
  },
  {
    department: "Operations",
    taskCompletion: 91,
    activeProjects: 11,
    headcount: 18,
    status: "On Track",
  },
  {
    department: "Product",
    taskCompletion: 85,
    activeProjects: 14,
    headcount: 22,
    status: "At Risk",
  },
  {
    department: "Sales",
    taskCompletion: 92,
    activeProjects: 9,
    headcount: 16,
    status: "On Track",
  },
];

export const internalRequestQueue = [
  {
    id: 1,
    type: "Process Optimization",
    title: "Streamline expense approval workflow",
    department: "Finance",
    priority: "High",
    status: "In Review",
    daysWaiting: 3,
  },
  {
    id: 2,
    type: "Resource Request",
    title: "Additional hiring budget for Q3",
    department: "HR",
    priority: "Medium",
    status: "Pending",
    daysWaiting: 5,
  },
  {
    id: 3,
    type: "System Improvement",
    title: "Upgrade to new project management tool",
    department: "Operations",
    priority: "High",
    status: "In Review",
    daysWaiting: 7,
  },
  {
    id: 4,
    type: "Capacity Planning",
    title: "Q4 headcount forecasting",
    department: "Product",
    priority: "Medium",
    status: "Pending",
    daysWaiting: 2,
  },
];

export const operationsReports = [
  {
    title: "Weekly Operations Summary",
    format: "PDF/CSV",
    lastGenerated: "Jun 6, 2026",
    departments: "All departments",
    metrics: "Task completion, project velocity",
  },
  {
    title: "Department Headcount Report",
    format: "PDF/CSV",
    lastGenerated: "Jun 5, 2026",
    departments: "By department",
    metrics: "Current headcount, utilization rate",
  },
  {
    title: "Request Queue Analytics",
    format: "PDF/CSV",
    lastGenerated: "Jun 7, 2026",
    departments: "Cross-functional",
    metrics: "Queue length, avg wait time, priority distribution",
  },
];

export const cfoRevenueOverview = {
  totalRevenue: "$4.2M",
  period: "MTD",
  forecast: "$5.0M",
  variance: "+8.4% vs plan",
};

export const expenseByDepartment = [
  {
    department: "Marketing",
    expense: "$196K",
    budget: "$220K",
    utilization: 89,
  },
  {
    department: "Operations",
    expense: "$312K",
    budget: "$305K",
    utilization: 102,
  },
  {
    department: "Finance",
    expense: "$142K",
    budget: "$155K",
    utilization: 92,
  },
  {
    department: "HR",
    expense: "$88K",
    budget: "$95K",
    utilization: 93,
  },
  {
    department: "Product",
    expense: "$276K",
    budget: "$255K",
    utilization: 108,
  },
];

export const payrollSummary = {
  totalMonthlyPayroll: "$780K",
  nextPaymentDate: "Jun 25, 2026",
  employeeCount: 198,
  payrollRunStatus: "Ready",
};

export const paymentRequestQueue = [
  {
    id: 1,
    department: "Procurement",
    requester: "Nina Patel",
    amount: "$24,500",
    purpose: "Supplier invoice approval",
    status: "Awaiting CFO",
    requestedOn: "Jun 8, 2026",
  },
  {
    id: 2,
    department: "Sales",
    requester: "Jalen Brooks",
    amount: "$18,200",
    purpose: "Commission payout",
    status: "Awaiting CFO",
    requestedOn: "Jun 7, 2026",
  },
  {
    id: 3,
    department: "HR",
    requester: "Maya Torres",
    amount: "$9,800",
    purpose: "Recruiting budget top-up",
    status: "Pending review",
    requestedOn: "Jun 6, 2026",
  },
];

export const budgetAllocations = [
  {
    department: "Marketing",
    budget: "$240K",
    actual: "$196K",
    variance: "$44K",
  },
  {
    department: "Operations",
    budget: "$320K",
    actual: "$312K",
    variance: "$8K",
  },
  {
    department: "Finance",
    budget: "$160K",
    actual: "$142K",
    variance: "$18K",
  },
  {
    department: "HR",
    budget: "$100K",
    actual: "$88K",
    variance: "$12K",
  },
  {
    department: "Product",
    budget: "$260K",
    actual: "$276K",
    variance: "-$16K",
  },
];

export const websiteTraffic = {
  users: "9.2K",
  sessions: "14.3K",
  bounceRate: "38%",
  avgSession: "3m 12s",
  topChannel: "Organic Search",
};

export const marketingCampaigns = [
  {
    name: "Q3 Brand Lift",
    status: "Active",
    channel: "TV",
    budget: "$85K",
    currentSpend: "$54K",
    performance: "High",
  },
  {
    name: "Spring Email Blast",
    status: "Paused",
    channel: "Email",
    budget: "$42K",
    currentSpend: "$42K",
    performance: "Moderate",
  },
  {
    name: "Paid Social Growth",
    status: "Active",
    channel: "Social",
    budget: "$68K",
    currentSpend: "$47K",
    performance: "Strong",
  },
  {
    name: "Content SEO Push",
    status: "Live",
    channel: "Content",
    budget: "$31K",
    currentSpend: "$18K",
    performance: "Rising",
  },
];

export const leadPipeline = {
  total: "4,180",
  mql: "1,240",
  sql: "720",
  opportunities: "360",
  target: "5,200",
};

export const campaignPerformance = [
  {
    campaign: "Q3 Brand Lift",
    impressions: "1.2M",
    clicks: "48K",
    conversions: "1.5K",
    roi: "4.8x",
  },
  {
    campaign: "Paid Social Growth",
    impressions: "980K",
    clicks: "32K",
    conversions: "1.0K",
    roi: "3.1x",
  },
  {
    campaign: "Content SEO Push",
    impressions: "420K",
    clicks: "25K",
    conversions: "720",
    roi: "5.2x",
  },
];

export const advisorKpis = [
  {
    title: "Company Revenue",
    value: "$7.8M",
    detail: "Trailing 30-day consolidated revenue",
  },
  {
    title: "Customer Satisfaction",
    value: "87%",
    detail: "Average CSAT across support and product",
  },
  {
    title: "Strategy Alignment",
    value: "92%",
    detail: "Department goals aligned with company strategy",
  },
  {
    title: "Executive Health",
    value: "Stable",
    detail: "Risk and performance are within target bounds",
  },
];

export const strategyMetrics = [
  {
    metric: "Portfolio Balance",
    value: "60/40",
    description: "Revenue vs strategic investment split",
  },
  {
    metric: "Innovation Index",
    value: "74",
    description: "Cross-department new product and R&D velocity",
  },
  {
    metric: "Operational Leverage",
    value: "1.3x",
    description: "Efficiency gains across finance, engineering, and ops",
  },
  {
    metric: "Growth Momentum",
    value: "+18%",
    description: "YoY combined growth for key business units",
  },
];

export const sprintProgress = [
  {
    sprint: "Sprint 14",
    focus: "Feature completion and regression fixes",
    progress: 82,
    status: "On Track",
  },
  {
    sprint: "Sprint 13",
    focus: "API stabilization and release prep",
    progress: 95,
    status: "Completed",
  },
  {
    sprint: "Sprint 12",
    focus: "UI polish and integration testing",
    progress: 74,
    status: "At Risk",
  },
];

export const engineeringMetrics = {
  completionRate: "88%",
  activeTasks: 146,
  reviewRate: "72%",
  sprintVelocity: "42 points",
};

export const bugSummary = [
  {
    severity: "Critical",
    open: 12,
    resolved: 28,
  },
  {
    severity: "Major",
    open: 24,
    resolved: 52,
  },
  {
    severity: "Minor",
    open: 38,
    resolved: 76,
  },
];

export const deploymentHistory = [
  {
    id: 1,
    environment: "Production",
    status: "Success",
    deployedOn: "Jun 9, 2026 09:22",
    version: "v2.14.0",
    details: "Backend and API service release",
    deployedBy: "Sarah Chen",
  },
  {
    id: 2,
    environment: "Staging",
    status: "Success",
    deployedOn: "Jun 8, 2026 16:43",
    version: "v2.14.0-rc",
    details: "Smoke test completed",
    deployedBy: "Marcus Thompson",
  },
  {
    id: 3,
    environment: "Canary",
    status: "Warning",
    deployedOn: "Jun 7, 2026 13:10",
    version: "v2.14.0-canary",
    details: "Partial rollout in progress",
    deployedBy: "Jennifer Liu",
  },
  {
    id: 4,
    environment: "Production",
    status: "Success",
    deployedOn: "Jun 5, 2026 10:05",
    version: "v2.13.5",
    details: "Hotfix for release rollback",
    deployedBy: "Alex Rodriguez",
  },
];
