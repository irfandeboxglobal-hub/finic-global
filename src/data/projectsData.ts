export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  orientation: "portrait" | "landscape";
  slug?: string;
  href?: string;
  tags: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "leadscrm",
    title: "LeadsCRM",
    category: "CRM platform",
    summary: "A focused lead-management experience that keeps teams close to their customer pipeline with AI hot/warm lead scoring.",
    image: "/assets/salespilot-crm-DJTy_N4v.webp",
    orientation: "portrait",
    slug: "salespilot-crm",
    tags: ["SaaS & Enterprise ERP", "AI & Automation"]
  },
  {
    id: "mediflow",
    title: "MediFlow ERP",
    category: "Healthcare operations",
    summary: "A connected dashboard for patient care, pharmacy inventory, fast billing, and multi-tenant department performance.",
    image: "/assets/aboutpage2-DQJIBMQL.webp",
    orientation: "landscape",
    slug: "mediflow-erp",
    tags: ["SaaS & Enterprise ERP", "Web Applications"]
  },
  {
    id: "nexa",
    title: "Nexa ERP",
    category: "Connected operations platform",
    summary: "A unified system to manage multi-branch inventory control, billing, user accounts, and real-time operations.",
    image: "/assets/nexa-erp-b6Kahzza.webp",
    orientation: "landscape",
    slug: "nexa-erp",
    tags: ["SaaS & Enterprise ERP", "Cloud & Infrastructure"]
  },
  {
    id: "taxpro",
    title: "TaxPro ERP",
    category: "Tax management",
    summary: "A clear operational view of corporate tax liability, filing status, automated invoice reconciliation, and calculations.",
    image: "/assets/taxpro-erp-BdOyrDo0.webp",
    orientation: "landscape",
    slug: "taxpro-erp",
    tags: ["SaaS & Enterprise ERP", "Web Applications"]
  },
  {
    id: "face-attendance",
    title: "Face Attendance App",
    category: "AI-enabled HR",
    summary: "A fast, intuitive mobile attendance workflow powered by high-accuracy biometric facial recognition.",
    image: "/assets/attendance-app-Bw1CwsZL.webp",
    orientation: "portrait",
    href: "/contact",
    tags: ["Mobile Solutions", "AI & Automation"]
  }
];
