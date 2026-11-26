"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Globe2,
  Cloud,
  Cpu,
  Database,
  Palette,
  TrendingUp,
  Search,
  CheckCircle2,
  Sparkles,
  ArrowUpRight
} from "lucide-react";

export default function HomePage() {
  // Hero rotating canvas slides
  const heroSlides = [
    { image: "/assets/homepage-BMTzJoMU.webp", label: "LeadsCRM", type: "Customer intelligence" },
    { image: "/assets/nexa-erp-b6Kahzza.webp", label: "Nexa ERP", type: "Connected operations" },
    { image: "/assets/homepage3-TkaIwJLS.webp", label: "Cloud & AI", type: "Built to perform" },
    { image: "/assets/homepage4-PNXcQRIT.webp", label: "MediFlow ERP", type: "Systems that simplify" },
    { image: "/assets/homepage5-CfwftEr9.webp", label: "Digital growth", type: "Performance marketing" }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Recent products list for marquee
  const recentProducts = [
    {
      title: "LeadsCRM",
      type: "CRM platform",
      image: "/assets/salespilot-crm-DJTy_N4v.webp",
      href: "/product/salespilot-crm"
    },
    {
      title: "MediFlow ERP",
      type: "Healthcare operations",
      image: "/assets/web-DJDUIFE2.webp",
      href: "/product/mediflow-erp"
    },
    {
      title: "Nexa ERP",
      type: "Connected operations platform",
      image: "/assets/nexa-erp-b6Kahzza.webp",
      href: "/product/nexa-erp"
    },
    {
      title: "TaxPro ERP",
      type: "Tax management",
      image: "/assets/taxpro-erp-BdOyrDo0.webp",
      href: "/product/taxpro-erp"
    },
    {
      title: "Face attendance",
      type: "AI-enabled HR",
      image: "/assets/attendance-app-Bw1CwsZL.webp",
      href: "/contact"
    }
  ];

  // Infinite marquee doubled array
  const marqueeItems = [...recentProducts, ...recentProducts, ...recentProducts];

  // Premium services timeline
  const premiumServices = [
    {
      num: "01",
      title: "Web Development",
      desc: "Responsive, scalable web applications.",
      image: "/assets/web-DJDUIFE2.webp",
      slug: "web-development",
      points: [
        { title: "Modern React 19 & Next.js Engine", desc: "Engineered for sub-second page loads, instant edge hydration, and 99+ Lighthouse performance scores." },
        { title: "Custom API & Microservices", desc: "Resilient RESTful and GraphQL backend architectures designed for high-throughput." },
        { title: "SEO & Conversion Optimized", desc: "Fully responsive, mobile-first layouts tailored for high organic search rankings and lead capture." }
      ]
    },
    {
      num: "02",
      title: "Mobile App Development",
      desc: "Cross-platform Android & iOS apps.",
      image: "/assets/app-CEAgOh8g.webp",
      slug: "mobile-app-development",
      points: [
        { title: "Flutter & React Native Cross-Platform", desc: "Delivers smooth 60 FPS mobile performance across iOS and Android from a single codebase." },
        { title: "Native Device API Integrations", desc: "Full access to biometric auth, push notifications, camera hardware, and offline local caching." },
        { title: "Store Publishing & Maintenance", desc: "End-to-end App Store and Google Play deployment, compliance audits, and ongoing support." }
      ]
    },
    {
      num: "03",
      title: "Software Development",
      desc: "Custom software tailored to your business.",
      image: "/assets/softwareDevelopment-CE1_nNjM.webp",
      slug: "software-development",
      points: [
        { title: "Custom Enterprise Systems", desc: "Tailored software platforms engineered specifically around your organization's unique workflows." },
        { title: "Resilient Microservices Core", desc: "Decoupled architecture with secure API gateways, message queues, and high-throughput databases." },
        { title: "Automated Process Engine", desc: "Eliminates manual operational bottlenecks and speeds up daily team productivity." }
      ]
    },
    {
      num: "04",
      title: "Cloud & DevOps",
      desc: "Cloud-native deployment and automation.",
      image: "/assets/cloud-Bgq551j6.webp",
      slug: "cloud-devops",
      points: [
        { title: "Multi-Cloud Infrastructure (AWS/GCP/Azure)", desc: "Automated cloud environment setup with production-grade Kubernetes cluster management." },
        { title: "Automated CI/CD Pipeline", desc: "Zero-downtime blue-green deployments, instant rollbacks, and automated security scans." },
        { title: "99.99% Uptime & Dynamic Scaling", desc: "24/7 cluster monitoring, auto-healing containers, and traffic peak auto-scaling." }
      ]
    },
    {
      num: "05",
      title: "AI & Machine Learning",
      desc: "Intelligent automation and predictive analytics.",
      image: "/assets/ai-DahqniGb.webp",
      slug: "ai-machine-learning",
      points: [
        { title: "Custom LLMs & Intelligent Chatbots", desc: "Domain-specific AI agents, automated customer support, and natural language processing." },
        { title: "Predictive Analytics & Forecasting", desc: "Transforms complex raw datasets into actionable forecasts and automated executive insights." },
        { title: "Sub-10ms Model Inference", desc: "Optimized model deployment with automated data processing pipelines and continuous self-learning." }
      ]
    },
    {
      num: "06",
      title: "CRM / ERP Solutions",
      desc: "Business platforms to streamline operations.",
      image: "/assets/nexa-erp-b6Kahzza.webp",
      slug: "crm-erp-solutions",
      points: [
        { title: "Leads & Sales Funnel CRM", desc: "Real-time pipeline visibility, automated lead assignment, and multi-channel deal tracking." },
        { title: "Multi-Branch Enterprise ERP", desc: "Consolidates inventory management, finance, procurement, and HR into one central platform." },
        { title: "Seamless Toolstack Sync", desc: "Integrates effortlessly with existing accounting software, payment gateways, and communications." }
      ]
    },
    {
      num: "07",
      title: "UI / UX Design",
      desc: "Modern interfaces focused on usability.",
      image: "/assets/ui-_tqkgt0G.webp",
      slug: "ui-ux-design",
      points: [
        { title: "Figma Design Systems & Tokens", desc: "Reusable UI components, HSL design token variables, and brand typography guidelines." },
        { title: "User-Centered Wireframing & UX", desc: "Intuitive user flows, interactive prototypes, and usability testing built for high engagement." },
        { title: "WCAG AAA Accessibility Standards", desc: "Pixel-perfect responsive interfaces compliant with dark/light mode and accessibility norms." }
      ]
    },
    {
      num: "08",
      title: "Digital Marketing",
      desc: "SEO, social media and paid campaigns.",
      image: "/assets/digital-Bte0AFYO.webp",
      slug: "digital-marketing",
      points: [
        { title: "ROAS-Driven Paid Campaigns", desc: "Data-optimized Google, Meta, and LinkedIn ad management targeted for high return on ad spend." },
        { title: "Conversion Rate Optimization (CRO)", desc: "A/B testing, high-converting landing page designs, and retargeting funnel strategies." },
        { title: "Omnichannel Growth Strategy", desc: "Cohesive brand visibility across search engines, social media platforms, and email automation." }
      ]
    },
    {
      num: "09",
      title: "SEO Services",
      desc: "Improve visibility and organic search rankings.",
      image: "/assets/seo-C60Xb5yY.webp",
      slug: "seo",
      points: [
        { title: "Google #1 Keyword Optimization", desc: "Technical SEO audits and semantic content structures engineered to dominate search results." },
        { title: "100/100 Core Web Vitals Performance", desc: "Optimizes LCP, CLS, and FID page load speed for rapid search engine indexing." },
        { title: "Authoritative Link & Rank Scaling", desc: "High-authority backlink building, local search optimization, and continuous rank tracking." }
      ]
    }
  ];

  return (
    <div className="relative overflow-hidden bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#eef5ff] pb-16 pt-28 sm:pb-20 sm:pt-32 lg:min-h-[720px] lg:pt-36">
        {/* Authentic live site backdrop */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,.18),transparent_28%),radial-gradient(circle_at_80%_40%,rgba(20,184,166,.17),transparent_23%),linear-gradient(115deg,#e7efff_0%,#f9fbff_54%,#eaf3ff_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(37,99,235,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,.07)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute -left-32 top-28 -z-10 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-cyan-200/50 blur-3xl" />

        <div className="mx-auto grid max-w-[1280px] items-center gap-8 px-4 sm:px-6 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-8">
          {/* Left Text */}
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#1d4ed8] shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#14b8a6]" />
              Digital systems, built to move
            </div>

            <h1 className="hero-headline">
              Turn <br />
              complex <br />
              work into <br />
              <span className="hero-gradient-blue">
                clear
              </span>{" "}
              <br />
              <span className="hero-gradient-teal">
                momentum.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Finic Global Solutions unites software engineering, ERP and CRM platforms, cloud operations, AI, and digital growth to help ambitious businesses operate smarter and scale with confidence.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#102b68] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-950/20 transition hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <span>Start a conversation</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                  <ArrowRight className="h-4 w-4 text-[#102b68] -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-[#2563eb] hover:bg-white"
              >
                Explore capabilities
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-600">
              <span>
                <b className="text-[#102b68] font-bold">01</b> Strategy to launch
              </span>
              <span>
                <b className="text-[#102b68] font-bold">02</b> Built for scale
              </span>
              <span>
                <b className="text-[#102b68] font-bold">03</b> One accountable team
              </span>
            </div>
          </div>

          {/* Right Floating Interactive Composition */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-[560px] [perspective:1200px]">
              <div className="absolute inset-10 rounded-full border border-blue-200/70 bg-white/30 blur-[1px]" />
              <div className="relative aspect-[1.08]">
                {/* Floating Card 1: Experience design (top-left) */}
                <div className="absolute left-2 top-8 z-20 w-[37%] overflow-hidden rounded-2xl border border-white/80 bg-white p-2 shadow-2xl shadow-blue-950/20 sm:left-5 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/homepage5-CfwftEr9.webp"
                    alt="Finic Global Solutions digital experience"
                    className="aspect-[1.2] w-full rounded-xl object-cover"
                  />
                  <p className="px-1 pb-1 pt-2 text-[10px] font-semibold text-slate-700 sm:text-xs">
                    Experience design
                  </p>
                </div>

                {/* Floating Card 2: Cloud ready (top-right) */}
                <div className="absolute right-0 top-1 z-20 w-[35%] overflow-hidden rounded-2xl border border-white/80 bg-[#102b68] p-2 shadow-2xl shadow-blue-950/25 sm:right-3 transform rotate-4 hover:rotate-0 transition-transform duration-300">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/homepage3-TkaIwJLS.webp"
                    alt="Finic Global Solutions cloud infrastructure"
                    className="aspect-[1.28] w-full rounded-xl object-cover opacity-90"
                  />
                  <p className="px-1 pb-1 pt-2 text-[10px] font-semibold text-white sm:text-xs">
                    Cloud ready
                  </p>
                </div>

                {/* Center Rotating Canvas */}
                <div className="absolute bottom-0 left-[13%] z-10 w-[70%] rounded-[26px] border border-white/90 bg-white/80 p-3 shadow-2xl shadow-blue-950/20 backdrop-blur-xl sm:p-4">
                  <div className="mb-3 flex items-center justify-between px-1">
                    <span className="text-xs font-semibold text-[#102b68]">Finic Global Solutions platform canvas</span>
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                      Live
                    </span>
                  </div>

                  <div className="relative aspect-[1.17] overflow-hidden rounded-2xl bg-slate-950">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={heroSlides[activeSlide].image}
                      alt={heroSlides[activeSlide].label}
                      className="h-full w-full object-cover opacity-80 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061126]/90 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-xs font-medium text-cyan-200">{heroSlides[activeSlide].type}</p>
                      <p className="mt-1 text-lg font-semibold text-white">{heroSlides[activeSlide].label}</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 3 (bottom-right) */}
                <div className="absolute bottom-7 right-[4%] z-20 rounded-full border border-white/80 bg-white px-3.5 py-2 text-[11px] font-semibold text-[#102b68] shadow-lg sm:text-xs flex items-center gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#14b8a6]" />
                  <span>Built for what&apos;s next</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION ABOVE RECENT PRODUCTS: CINEMATIC FULL-WIDTH VIDEO SECTION */}
      <section className="relative h-[280px] sm:h-[450px] lg:h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/heroSection-D2sZDoTI.mp4?v=finic" type="video/mp4" />
        </video>
      </section>

      {/* 3. SOME OF OUR RECENT PRODUCTS SECTION */}
      <section className="bg-[#f7f9fd] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-center sm:text-left text-4xl sm:text-5xl lg:text-6xl leading-tight text-slate-950">
                <span className="font-bold">Some of our </span>
                <span className="font-instrument-serif italic text-blue-600">recent products</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Smooth Infinite Marquee */}
        <div className="overflow-hidden">
          <div className="animate-marquee flex gap-6 px-6 sm:px-8">
            {marqueeItems.map((prod, idx) => (
              <Link
                key={`${prod.title}-${idx}`}
                href={prod.href}
                className="group relative w-[300px] sm:w-[420px] flex-shrink-0 overflow-hidden rounded-3xl bg-slate-900 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div className="relative h-[260px] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07142d]/95 via-[#07142d]/30 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">
                  <div>
                    <p className="text-xs sm:text-sm text-cyan-200 font-medium">{prod.type}</p>
                    <h3 className="mt-1 text-xl sm:text-2xl font-bold text-white">{prod.title}</h3>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#102b68] shadow-lg opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Products Button */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/portfolio"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/30 bg-[linear-gradient(135deg,#2859b4_0%,#102b68_52%,#0a1d48_100%)] px-8 py-4 text-sm font-semibold text-white shadow-[0_6px_0_#071735,0_15px_28px_rgba(16,43,104,.28)] transition hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="absolute inset-y-0 w-16 -skew-x-12 bg-white/20 blur-sm animate-shine" />
            <span className="relative">View All Products</span>
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#102b68] transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* 4. OUR PREMIUM SERVICES TIMELINE */}
      <section className="relative overflow-x-hidden bg-slate-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 sm:mb-16 lg:mb-24 text-center space-y-3">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Our Premium Services
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
              Every service grows from the same mission: helping businesses scale with better technology.
            </p>
          </div>

          <div className="relative">
            {/* Center Vertical Gradient Timeline Line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 origin-top rounded-full bg-gradient-to-b from-cyan-400 via-blue-600 to-indigo-700 lg:block pointer-events-none" />

            <div className="space-y-12 sm:space-y-20 lg:space-y-28">
              {premiumServices.map((service, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={service.slug}
                    className="relative grid items-center gap-8 lg:grid-cols-2"
                  >
                    {/* Center Step Number Badge */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden items-center justify-center lg:flex pointer-events-none">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#102b68] text-white font-bold text-xs ring-4 ring-blue-100 shadow-md">
                        {service.num}
                      </div>
                    </div>

                    {/* Left Column */}
                    <div className={`${isEven ? "" : "lg:order-2"}`}>
                      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-lg space-y-6">
                        <div>
                          <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                            Service {service.num}
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                            {service.title}
                          </h3>
                          <p className="text-sm text-slate-600 mt-2">{service.desc}</p>
                        </div>

                        <div className="space-y-4 pt-2">
                          {service.points.map((pt, pIdx) => (
                            <div key={pIdx} className="space-y-1">
                              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                                <span>{pt.title}</span>
                              </h4>
                              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                                {pt.desc}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-slate-100">
                          <Link
                            href={`/service/${service.slug}`}
                            className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider"
                          >
                            <span>Learn more about {service.title}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Right Column (Image Showcase) */}
                    <div className={`${isEven ? "" : "lg:order-1"}`}>
                      <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 aspect-[16/11] relative group">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                          <span className="text-white text-xs font-semibold">
                            Finic Global Solutions {service.title} Suite
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. METRICS & STATS SECTION */}
      <section className="bg-slate-950 text-white py-16 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80">
              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">120+</div>
              <div className="text-sm font-semibold text-sky-400 mt-2">Projects Shipped</div>
              <div className="text-xs text-slate-400 mt-1">Across global client teams</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80">
              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">98%</div>
              <div className="text-sm font-semibold text-sky-400 mt-2">Client Retention</div>
              <div className="text-xs text-slate-400 mt-1">Long-term product partnerships</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80">
              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">15+</div>
              <div className="text-sm font-semibold text-sky-400 mt-2">Tech Frameworks</div>
              <div className="text-xs text-slate-400 mt-1">Modern polyglot toolchains</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80">
              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">24/7</div>
              <div className="text-sm font-semibold text-sky-400 mt-2">Enterprise SLA Support</div>
              <div className="text-xs text-slate-400 mt-1">Zero downtime reliability</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LEADERSHIP / WHY FINIC GLOBAL SOLUTIONS */}
      <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb]">
              Why Finic Global Solutions
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
              Built by builders. Designed for outcomes.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Every business has unique challenges, which is why every system we engineer is tailored to solve real operational bottlenecks. We combine thoughtful design, scalable engineering, and modern technologies to create software that grows alongside your business.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct Engineering Leadership</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Work with senior architects directly, eliminating bureaucratic layers and communication drift.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Production-Hardened Systems</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Strict typing, automated testing, load benchmarks, and fault-tolerant infrastructure.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Total Ownership &amp; IP Protection</h4>
                  <p className="text-xs text-slate-600 mt-0.5">You own 100% of your source code, architectural schemas, and intellectual property from day one.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/30 text-blue-400 flex items-center justify-center font-bold">
                AS
              </div>
              <blockquote className="text-sm leading-relaxed text-slate-300 italic">
                &ldquo;Empowering teams, shaping strategy, and turning ideas into impactful results.&rdquo;
              </blockquote>
              <div className="pt-4 border-t border-slate-800">
                <div className="font-bold text-sm text-white">Anamika Shrivastav</div>
                <div className="text-xs text-sky-400 font-medium">Director</div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#102b68] text-white space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-white/20 text-sky-200 flex items-center justify-center font-bold">
                PT
              </div>
              <blockquote className="text-sm leading-relaxed text-sky-100 italic">
                &ldquo;Leading with vision, driving growth, and building a future-ready organization.&rdquo;
              </blockquote>
              <div className="pt-4 border-t border-blue-900">
                <div className="font-bold text-sm text-white">Poonam Tiwari</div>
                <div className="text-xs text-sky-300 font-medium">Managing Director</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. READY TO BUILD BANNER */}
      <section className="py-20 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] bg-gradient-to-tr from-slate-950 via-[#102b68] to-slate-900 text-white p-10 sm:p-16 overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-sky-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Start your transformation
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Ready to turn complex work into clear momentum?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Schedule a technical discovery session with our architects today. We will review your requirements, propose a system architecture, and map out an execution roadmap.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#102b68] font-bold text-sm shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <span>Book a Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
