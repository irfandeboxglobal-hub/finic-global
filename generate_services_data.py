import re
import json

with open('/home/dmi7/harixis/assets/ServiceScopeEstimator-DzfixFin.js', 'r') as f:
    code = f.read()

# Let's inspect capabilities and features of services
# We can create a rich, strongly typed TypeScript dataset
ts_content = '''export interface ServiceCapability {
  title: string;
  desc: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  eyebrow: string;
  tagline: string;
  headline: string;
  desc: string;
  accent: string;
  capabilities: ServiceCapability[];
  deliverables?: string[];
  techStack?: string[];
  faqs?: { q: string; a: string }[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "software-development": {
    slug: "software-development",
    title: "Software Development",
    eyebrow: "Enterprise Systems",
    tagline: "Custom Modular Backend Architectures",
    headline: "Engineered for speed, durability, and absolute data integrity.",
    desc: "We design and build robust customized backend software solutions, scalable API nodes, database architectures, and core microservices that keep complex business logics operating smoothly under high query pressure.",
    accent: "from-emerald-500 via-teal-600 to-cyan-600",
    capabilities: [
      { title: "Microservices Architecture", desc: "Decoupled server nodes communicating over lightweight protocols for horizontal scale." },
      { title: "Database Optimization", desc: "Query optimizations, indexed schemas, and customized replication sets on PostgreSQL & MongoDB." },
      { title: "RESTful & GraphQL APIs", desc: "Clean endpoints designed for high accessibility, security, and developer clarity." },
      { title: "High-Load Infrastructure", desc: "Clustered load balancing and caching systems configured to handle tens of thousands of concurrent queries." }
    ],
    deliverables: ["Modular Microservice Repositories", "API Documentation (Swagger / Postman)", "Database Schemas & Migrations", "Automated CI/CD Pipelines"],
    techStack: ["Java / Spring Boot", ".NET Core", "Python", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    faqs: [
      { q: "How do you ensure architecture reliability under peak traffic?", a: "We utilize horizontally scalable stateless microservices, distributed Redis caching, and resilient database read replicas." },
      { q: "Can you modernize existing legacy monolithic systems?", a: "Yes, we specialize in Strangler Fig migration patterns, breaking monoliths into microservices without operational downtime." }
    ]
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    eyebrow: "Native & Cross-Platform",
    tagline: "Fluid, Responsive Mobile Experiences",
    headline: "Apps that feel instantaneous and engage customers on every touch.",
    desc: "We engineer high-performance mobile applications across iOS and Android with intuitive user interactions, offline persistence, and seamless cloud syncing.",
    accent: "from-blue-500 via-indigo-600 to-violet-600",
    capabilities: [
      { title: "React Native & Flutter", desc: "Unified codebases delivering native performance and 60fps animations across platforms." },
      { title: "Offline-First Sync", desc: "Local SQLite/WatermelonDB storage with robust cloud conflict resolution." },
      { title: "Biometric & Native APIs", desc: "Hardware-level security using FaceID, Fingerprint, NFC, and geolocation." },
      { title: "App Store & Play Store CI/CD", desc: "Automated test flights, fastlane distribution, and store submission pipelines." }
    ],
    deliverables: ["Cross-platform iOS & Android binaries", "Design System & UI Component Library", "Push Notification Architecture", "Store Submission & Launch"],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "App Store Connect"],
    faqs: [
      { q: "Do you build both iOS and Android simultaneously?", a: "Yes, using modern Flutter and React Native toolchains, we build and test concurrently for both platforms." },
      { q: "How do you handle background sync and push notifications?", a: "We implement FCM and APNs with battery-optimized background task executors." }
    ]
  },
  "web-development": {
    slug: "web-development",
    title: "Web App Development",
    eyebrow: "High-Speed SPAs",
    tagline: "Next-Generation Web Architectures",
    headline: "Blazingly fast, accessible, and conversion-engineered web platforms.",
    desc: "From complex single-page enterprise web applications to hyper-optimized customer portals, we craft accessible web experiences with sub-second page loads.",
    accent: "from-cyan-500 via-blue-600 to-indigo-600",
    capabilities: [
      { title: "Next.js & React Ecosystem", desc: "Server-side rendering, streaming SSR, and edge compute for unparalleled responsiveness." },
      { title: "Interactive Dashboards", desc: "Real-time charts, WebSocket telemetry, and responsive canvas visualizers." },
      { title: "Enterprise Design Systems", desc: "Tailwind CSS tokens, accessible WCAG 2.1 AA primitives, and rich micro-interactions." },
      { title: "Core Web Vitals Excellence", desc: "95+ Google Lighthouse scores, aggressive asset tree-shaking, and lazy hydration." }
    ],
    deliverables: ["Full-Stack Next.js Application", "Interactive Component Storybook", "Edge-optimized CDN Setup", "SEO & Meta Configuration"],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Vercel / AWS"],
    faqs: [
      { q: "Is the web application optimized for search engines?", a: "Yes, all marketing and dynamic pages implement Next.js SSR/SSG with automatic OpenGraph and schema markup." }
    ]
  },
  "cloud-devops": {
    slug: "cloud-devops",
    title: "Cloud & DevOps Solutions",
    eyebrow: "Cloud-Native Infrastructure",
    tagline: "Resilient Cloud & Automated Delivery",
    headline: "Zero-downtime deployments with observable cloud reliability.",
    desc: "We configure, automate, and monitor multi-cloud infrastructure on AWS, Google Cloud, and Azure with Infrastructure as Code and self-healing pipelines.",
    accent: "from-purple-500 via-indigo-600 to-blue-600",
    capabilities: [
      { title: "Kubernetes & Containers", desc: "Containerized deployments orchestrated with automated pod scaling and health monitoring." },
      { title: "Infrastructure as Code", desc: "Declarative Terraform and Pulumi blueprints ensuring repeatable staging and prod environments." },
      { title: "CI/CD Automation", desc: "GitHub Actions and GitLab CI workflows with security linting, Docker builds, and zero-downtime rollouts." },
      { title: "24/7 Observability", desc: "Prometheus, Grafana, and Datadog dashboards with automated anomaly alerting." }
    ],
    deliverables: ["Terraform Infrastructure Blueprints", "Kubernetes Helm Charts", "Automated Deployment Pipelines", "Cloud Cost Optimization Report"],
    techStack: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    faqs: [
      { q: "Can you help reduce our existing cloud bill?", a: "Our cloud audits identify idle workloads, right-size cluster instances, and implement spot policies to cut costs by 30-50%." }
    ]
  },
  "ai-machine-learning": {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    eyebrow: "Intelligent Automation",
    tagline: "Applied AI, LLMs & Predictive Systems",
    headline: "Transforming proprietary business data into competitive advantage.",
    desc: "We build and integrate AI agents, fine-tuned LLMs, automated document intelligence, computer vision, and predictive analytics directly into your workflow.",
    accent: "from-amber-500 via-orange-600 to-rose-600",
    capabilities: [
      { title: "AI Agents & RAG Systems", desc: "Vector database search, hybrid semantic retrieval, and agentic business logic orchestration." },
      { title: "Predictive Analytics", desc: "Customer churn forecasting, sales prediction, and automated inventory reordering models." },
      { title: "Computer Vision & OCR", desc: "Facial recognition attendance, automated document parsing, and invoice verification." },
      { title: "NLP & Conversational Bots", desc: "Human-grade multilingual chatbots with function-calling integrations." }
    ],
    deliverables: ["Custom Model Endpoints", "Vector Database Pipeline", "Interactive AI Chatbot Embed", "Evaluation Benchmarks & Guardrails"],
    techStack: ["Python", "PyTorch", "LangChain", "OpenAI / Gemini", "Pinecone", "FastAPI"],
    faqs: [
      { q: "How do you protect private company data during AI training?", a: "All RAG pipelines and model deployments run within your private VPC or on-premise hardware with strict zero-retention policies." }
    ]
  },
  "crm-erp-solutions": {
    slug: "crm-erp-solutions",
    title: "CRM / ERP Solutions",
    eyebrow: "Enterprise Platforms",
    tagline: "Connected Operations & Enterprise Resource Planning",
    headline: "Consolidate fragmented business processes into one coherent platform.",
    desc: "Tailored ERP and CRM platforms designed around your exact business logic — integrating sales pipelines, inventory, multi-branch billing, and staff tracking.",
    accent: "from-blue-600 via-indigo-700 to-slate-800",
    capabilities: [
      { title: "Custom Workflow Engines", desc: "Automate approvals, invoicing, purchase orders, and supplier reconciliation." },
      { title: "Multi-Tenant Architecture", desc: "Isolated branch accounts with consolidated organizational dashboards." },
      { title: "Real-Time Stock & POS", desc: "Barcode scanning, prescription OCR, GST invoice generation, and audit logging." },
      { title: "Lead Scoring & Auto-Schedules", desc: "High-intent customer prioritization with WhatsApp and email triggers." }
    ],
    deliverables: ["Full ERP/CRM Core Platform", "Role-Based Access Control (RBAC)", "Custom Reports & PDF Generators", "Migration from Legacy Sheets"],
    techStack: ["React", "Next.js", "Spring Boot", "PostgreSQL", "Redis", "AWS"],
    faqs: [
      { q: "Can your ERP integrate with existing accounting software?", a: "Yes, we integrate with Tally, QuickBooks, Zoho, and custom banking gateways." }
    ]
  },
  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI / UX Design",
    eyebrow: "Product Strategy",
    tagline: "Human-Centric Digital Product Design",
    headline: "Interfaces that captivate users and drive commercial results.",
    desc: "We research, wireframe, prototype, and refine digital experiences that simplify complex tasks and delight users across all screen form factors.",
    accent: "from-pink-500 via-rose-600 to-amber-600",
    capabilities: [
      { title: "User Journey & Wireframing", desc: "Deep user research, persona definition, and information architecture mapping." },
      { title: "Interactive Design Systems", desc: "Atomic component libraries built in Figma with scalable typography and tokens." },
      { title: "Clickable High-Fi Prototypes", desc: "Micro-interactions and motion prototypes ready for developer handoff." },
      { title: "Usability Audits & Redesigns", desc: "Heuristic evaluation, funnel friction analysis, and CRO-oriented redesigns." }
    ],
    deliverables: ["Figma Design System", "High-Fidelity Wireframes", "Interactive Prototype", "Developer Handoff Specs"],
    techStack: ["Figma", "Design Tokens", "Tailwind CSS", "Framer", "Lottie"],
    faqs: [
      { q: "How long does a product design sprint take?", a: "A typical MVP design sprint takes 2 to 4 weeks from discovery to final developer handoff." }
    ]
  },
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing",
    eyebrow: "Performance Growth",
    tagline: "Data-Driven Performance Growth & CAC Optimization",
    headline: "Acquire high-intent customers profitably and predictably.",
    desc: "Full-funnel digital marketing campaigns spanning Google Search, Meta Ads, WhatsApp automation, and retargeting that deliver real revenue.",
    accent: "from-emerald-500 via-teal-600 to-blue-600",
    capabilities: [
      { title: "Google & Meta Paid Acquisition", desc: "Highly targeted search, display, and social campaigns optimized for conversions." },
      { title: "Conversion Rate Optimization (CRO)", desc: "A/B testing, heatmaps, and landing page engineering that double conversion rates." },
      { title: "WhatsApp & Email Funnels", desc: "Automated nurture sequences that reactivate leads and increase customer LTV." },
      { title: "Multi-Touch Attribution", desc: "Transparent ROAS reporting and server-side tracking via Meta Conversions API." }
    ],
    deliverables: ["Ad Creative & Copy Deck", "Targeting & Audience Configuration", "Weekly ROAS & CAC Analytics", "Landing Page Funnels"],
    techStack: ["Google Ads", "Meta Ads Manager", "GA4", "Hotjar", "WhatsApp Business API"],
    faqs: [
      { q: "How do you measure campaign success?", a: "We focus on bottom-line metrics: Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), and qualified pipeline value." }
    ]
  },
  "seo": {
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    eyebrow: "Organic Visibility",
    tagline: "Sustainable Organic Rankings & Authority",
    headline: "Dominate search engine results for high-intent business terms.",
    desc: "Comprehensive technical SEO, keyword architecture, content engineering, and backlink strategies that drive qualified organic traffic.",
    accent: "from-blue-600 via-indigo-600 to-sky-500",
    capabilities: [
      { title: "Technical SEO Audits", desc: "Core Web Vitals tuning, crawl budget optimization, and structured data schemas." },
      { title: "High-Intent Keyword Strategy", desc: "Identifying transactional queries with strong commercial conversion intent." },
      { title: "Content Architecture", desc: "Topic clusters and cornerstone service pages designed to outrank competition." },
      { title: "Digital PR & Backlinks", desc: "White-hat authority building in relevant industry niches." }
    ],
    deliverables: ["Full Technical Audit & Remediation", "Keyword Blueprint & Gap Analysis", "Structured Schema Markup", "Monthly Ranking Reports"],
    techStack: ["Ahrefs", "SEMrush", "Google Search Console", "Screaming Frog", "Next.js Metadata"],
    faqs: [
      { q: "How fast can we see SEO improvements?", a: "Technical fixes often show indexation improvements within 2-4 weeks, while ranking gains compound over 3-6 months." }
    ]
  }
};
'''

with open('/home/dmi7/harixis/src/data/servicesData.ts', 'w') as f:
    f.write(ts_content)

print("Generated src/data/servicesData.ts successfully!")
