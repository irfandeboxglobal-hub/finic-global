export interface ProductComparison {
  title: string;
  without: string;
  with: string;
}

export interface ProductModule {
  title: string;
  summary: string;
  items: string[];
}

export interface ProductDetail {
  slug: string;
  name: string;
  tagline: string;
  eyebrow: string;
  headline: string;
  summary: string;
  status: string;
  heroImage: string;
  heroStats: { label: string; value: string }[];
  keyPoints: string[];
  cta: {
    label: string;
    href: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
  accent: string;
  comparisonTitle: string;
  comparisonDesc: string;
  comparisonCards: ProductComparison[];
  moduleGroups: ProductModule[];
  techStack: string[];
}

export const productsData: Record<string, ProductDetail> = {
  "salespilot-crm": {
    slug: "salespilot-crm",
    name: "LeadsCRM",
    tagline: "Lead Generation & CRM Platform",
    eyebrow: "Live product",
    headline: "We don't just give you a dashboard — we give you genuine, ready-to-close leads.",
    summary: "Leads CRM is a lead generation and CRM platform that helps businesses get genuine, ready-to-talk customer leads through targeted Facebook, WhatsApp, and Google campaigns — run entirely by our performance marketing team — and manage them effortlessly in one simple dashboard with AI-powered Hot, Warm, and Cold lead scoring.",
    status: "Live platform",
    heroImage: "/assets/salespilot-crm-DJTy_N4v.webp",
    heroStats: [
      { label: "Trial period", value: "10 Days Free" },
      { label: "Lead sources", value: "FB, WA, Google" },
      { label: "AI Lead scoring", value: "Hot/Warm/Cold" },
      { label: "Dashboard", value: "Auto-scheduler" }
    ],
    keyPoints: [
      "Facebook ad campaigns",
      "Google search campaigns",
      "WhatsApp lead capture",
      "AI hot/warm/cold scoring",
      "Daily follow-up scheduler",
      "Team member accounts"
    ],
    cta: {
      label: "Launch CRM Platform",
      href: "https://leads.crm.finicglobal.com",
      secondaryLabel: "Talk to an Expert",
      secondaryHref: "/contact"
    },
    accent: "from-blue-500 to-cyan-500",
    comparisonTitle: "Manual tracking vs LeadsCRM",
    comparisonDesc: "See exactly what changes when you move from manual lead chasing to our automated, high-intent pipeline.",
    comparisonCards: [
      { title: "Lead flow", without: "Wondering where to get consistent, genuine leads and running ads manually.", with: "Genuine leads generated daily by our expert team and delivered in real-time." },
      { title: "Lead priority", without: "Calling cold leads or old numbers, wasting time guessing who is ready.", with: "AI lead scoring flags Hot 🔥, Warm ☀️, or Cold ❄️ leads instantly." },
      { title: "Follow-up tracking", without: "Hundreds of leads scattered on spreadsheets or notes, missing follow-ups.", with: "Daily auto-scheduler shows today's follow-ups automatically in one dashboard." },
      { title: "Campaign management", without: "Planning, running, monitoring, and optimizing ad campaigns on your own.", with: "Our dedicated team manages your campaigns end-to-end so you just close." },
      { title: "Data flexibility", without: "Locked into proprietary formats, unable to upload existing lead sheets.", with: "Easily import your old leads and export your data anytime." },
      { title: "Team scaling", without: "Individual logins with no collaboration or centralized pipeline tracking.", with: "Add unlimited team members under your subscription with separate logins." }
    ],
    moduleGroups: [
      {
        title: "Lead campaigns",
        summary: "Targeted campaigns planned, run, and optimized entirely by our expert marketing team.",
        items: ["Facebook & Instagram Ads", "WhatsApp campaigns", "Google search campaigns", "Dedicated campaign team", "Real-time lead delivery", "Location & budget targeting"]
      },
      {
        title: "AI lead scoring",
        summary: "Every incoming lead is automatically categorized based on engagement and buying intent.",
        items: ["Hot leads highlighting", "Warm leads nurturing", "Cold leads categorization", "Activity-based scoring", "Instant activity alerts", "Intent-based priority queue"]
      },
      {
        title: "CRM dashboard",
        summary: "A single center to track follow-ups, set reminders, manage schedules, and scale your sales pipeline.",
        items: ["Centralized leads pipeline", "Daily auto-scheduler", "Manual call logging", "Follow-up reminder alerts", "Activity timeline tracking", "Centralized contacts card"]
      },
      {
        title: "Data & team",
        summary: "Scale your sales department with support for team members, existing lead spreadsheets, and easy data exports.",
        items: ["Team member accounts", "Excel/CSV leads upload", "Pipeline data export", "Duplicate checks", "Multi-agent assignment", "Sub-agent permissions"]
      }
    ],
    techStack: ["React + Vite Frontend", "SpringBoot Backend", "PostgreSQL Database", "AI Intent Scorer", "Meta Conversions API"]
  },
  "mediflow-erp": {
    slug: "mediflow-erp",
    name: "MediFlow ERP",
    tagline: "Multi-tenant pharmacy and inventory platform",
    eyebrow: "Healthcare Operations",
    headline: "Smart inventory, billing, and analytics for modern pharmacies.",
    summary: "MediFlow is a multi-tenant pharmacy management system designed to replace manual stock tracking with real-time inventory, fast billing, customer management, supplier workflows, and AI-driven alerts.",
    status: "Enterprise platform",
    heroImage: "/assets/aboutpage2-DQJIBMQL.webp",
    heroStats: [
      { label: "User roles", value: "5 RBAC" },
      { label: "Core modules", value: "6+" },
      { label: "Alert types", value: "4 Real-time" },
      { label: "Tenants supported", value: "Multi-tenant" }
    ],
    keyPoints: [
      "Multi-tenant SaaS architecture",
      "RBAC security",
      "Inventory intelligence",
      "Real-time analytics",
      "Pharmacy POS automation",
      "Smart notification system"
    ],
    cta: {
      label: "Launch MediFlow Platform",
      href: "https://mediflow.finicglobal.com/login",
      secondaryLabel: "Request Demo",
      secondaryHref: "/contact"
    },
    accent: "from-indigo-500 to-violet-500",
    comparisonTitle: "Manual pharmacy vs MediFlow",
    comparisonDesc: "Here's what actually changes when pharmacies move from paper-based workflows to MediFlow.",
    comparisonCards: [
      { title: "Inventory tracking", without: "Paper-based stock counts with frequent errors, stockouts, and slow reconciliation.", with: "Real-time inventory with batch tracking, auto-alerts, and instant adjustments." },
      { title: "Expiry management", without: "Expired medicines go unnoticed until stock checks — costing money and compliance.", with: "Automated expiry alerts flag at-risk stock before it's too late." },
      { title: "Billing speed", without: "Slow manual checkout frustrates staff and customers during peak hours.", with: "Fast POS with barcode, prescription OCR, and GST invoicing in seconds." },
      { title: "Business insights", without: "Stock and margin decisions are made on guesswork with no live data.", with: "Live analytics for sales, profit, top medicines, and demand trends." }
    ],
    moduleGroups: [
      {
        title: "Inventory & Batch Tracking",
        summary: "Central medicine master with batch-level control and warehouse organization.",
        items: ["Batch tracking", "Expiry monitoring", "Multi-unit support", "Rack and bin location", "GST and HSN management", "Stock adjustment"]
      },
      {
        title: "Fast POS & Billing",
        summary: "Fast, compliant checkout with return handling and thermal printer support.",
        items: ["Barcode scanning", "Prescription OCR", "GST compliant receipts", "UPI / Card / Cash split", "Thermal printer support", "Returns & credits"]
      },
      {
        title: "Supplier & Purchase Orders",
        summary: "Automated replenishment workflows and invoice auditing.",
        items: ["Purchase orders", "Supplier ledgers", "Pending dues tracking", "Stock inward verification", "Payment reminders"]
      }
    ],
    techStack: ["Next.js", "Java Spring Boot", "PostgreSQL", "Docker", "Redis"]
  },
  "taxpro-erp": {
    slug: "taxpro-erp",
    name: "TaxPro ERP",
    tagline: "Tax Management & Financial Compliance",
    eyebrow: "Finance & Taxation",
    headline: "Automated tax calculations, audit trails, and multi-entity filings.",
    summary: "TaxPro ERP provides complete operational control over tax liabilities, filing schedules, invoices, and calculations across enterprise corporate structures.",
    status: "Live product",
    heroImage: "/assets/taxpro-erp-BdOyrDo0.webp",
    heroStats: [
      { label: "Compliance Rate", value: "99.9%" },
      { label: "Calculation Speed", value: "<100ms" },
      { label: "Entities Supported", value: "Multi-Org" },
      { label: "Audit Readiness", value: "Instant" }
    ],
    keyPoints: [
      "Automated GST & TDS calculation",
      "Multi-entity consolidation",
      "Instant e-way bill generation",
      "Audit trail logging",
      "Automated reconciliation",
      "Secure encrypted vault"
    ],
    cta: {
      label: "Explore TaxPro ERP",
      href: "/contact",
      secondaryLabel: "Request Demo",
      secondaryHref: "/contact"
    },
    accent: "from-emerald-500 to-teal-500",
    comparisonTitle: "Spreadsheets vs TaxPro ERP",
    comparisonDesc: "Eliminate manual tax errors and penalties with automated verification.",
    comparisonCards: [
      { title: "Calculation accuracy", without: "Spreadsheet formulas break with changing slabs and tax brackets.", with: "Dynamic tax rules engine kept up-to-date with latest regulations." },
      { title: "Audit preparedness", without: "Frantic searches for missing receipts and purchase vouchers.", with: "Every ledger entry backed by immutable digital attachments and logs." }
    ],
    moduleGroups: [
      {
        title: "Tax Engine & Calculation",
        summary: "Automated tax classification across all goods, services, and transactions.",
        items: ["GST Slabs & Rules", "TDS/TCS deduction", "ITC reconciliation", "Reverse charge automation"]
      },
      {
        title: "Reporting & Filings",
        summary: "One-click export ready for government filing portals.",
        items: ["GSTR-1, GSTR-3B exports", "Audit balance sheets", "Profit & Loss statements", "Cash flow reports"]
      }
    ],
    techStack: ["React", "Python / FastAPI", "PostgreSQL", "Celery", "AWS KMS"]
  },
  "nexa-erp": {
    slug: "nexa-erp",
    name: "Nexa ERP",
    tagline: "Connected Operations & Multi-Branch Enterprise ERP",
    eyebrow: "Enterprise Operations",
    headline: "A unified system to manage inventory, billing, multi-tenant accounts, and real-time operations.",
    summary: "Nexa ERP brings every department of your enterprise under one high-velocity system — managing procurement, warehouse storage, distribution logistics, and accounting with real-time telemetry.",
    status: "Enterprise platform",
    heroImage: "/assets/nexa-erp-b6Kahzza.webp",
    heroStats: [
      { label: "Multi-branch", value: "Supported" },
      { label: "Data sync", value: "Real-time" },
      { label: "Security", value: "Enterprise SSO" },
      { label: "Uptime", value: "99.99%" }
    ],
    keyPoints: [
      "Unified inventory across branches",
      "Centralized financial ledger",
      "Role-based staff permissions",
      "Live order dispatch tracking",
      "Automated procurement orders",
      "Executive business intelligence"
    ],
    cta: {
      label: "Schedule Enterprise Demo",
      href: "/contact",
      secondaryLabel: "Contact Sales",
      secondaryHref: "/contact"
    },
    accent: "from-blue-600 to-indigo-600",
    comparisonTitle: "Disconnected systems vs Nexa ERP",
    comparisonDesc: "Stop copying data between disparate tools and run your entire business from a single pane of glass.",
    comparisonCards: [
      { title: "Branch synchronization", without: "Headquarters waits until end-of-month to understand remote branch sales.", with: "Real-time consolidated views across all branches and warehouses." },
      { title: "Supply chain efficiency", without: "Overstocking in one warehouse while another suffers stockouts.", with: "Automated inter-branch transfers and smart reorder suggestions." }
    ],
    moduleGroups: [
      {
        title: "Supply Chain & Warehouse",
        summary: "Multi-location inventory tracking with batch and serial numbering.",
        items: ["Multi-warehouse management", "Inter-branch stock transfer", "Low stock triggers", "Barcode dispatching"]
      },
      {
        title: "Sales & Invoicing",
        summary: "High-volume sales dispatch and credit management.",
        items: ["Quotations to invoices", "Credit limit controls", "Payment gateways", "Customer ledger tracking"]
      }
    ],
    techStack: ["Next.js", "Java Spring Boot", "Kafka", "PostgreSQL", "Kubernetes"]
  }
};
