import React, { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ShieldCheck, ChevronRight, HelpCircle } from "lucide-react";
import { servicesData } from "@/data/servicesData";

interface PageProps {
  params: Promise<{ serviceSlug: string }>;
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    serviceSlug: slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { serviceSlug } = await params;
  const service = servicesData[serviceSlug];
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | Finic Global Solutions`,
    description: service.desc
  };
}

function ServiceDetailFallback() {
  return (
    <div className="pt-28 pb-24 bg-white">
      <div className="px-6 sm:px-8 max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="h-3 w-28 rounded bg-slate-200 animate-pulse inline-block" />
        </div>
      </div>
      <div className="px-6 sm:px-8 max-w-4xl mx-auto space-y-6 text-center animate-pulse">
        <div className="h-7 w-48 rounded-full bg-blue-50 mx-auto" />
        <div className="h-14 w-3/4 rounded-2xl bg-slate-200 mx-auto" />
        <div className="h-6 w-2/3 rounded-xl bg-slate-100 mx-auto" />
      </div>
    </div>
  );
}

export default function ServiceDetailPage({ params }: PageProps) {
  return (
    <Suspense fallback={<ServiceDetailFallback />}>
      <ServiceDetailContent params={params} />
    </Suspense>
  );
}

async function ServiceDetailContent({ params }: PageProps) {
  const { serviceSlug } = await params;
  const service = servicesData[serviceSlug];

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-28 pb-24 bg-white">
      {/* Breadcrumb */}
      <div className="px-6 sm:px-8 max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-900 font-bold">{service.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto mb-20 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
            CAPABILITY • {service.eyebrow}
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.05]">
            {service.title}
          </h1>

          <p className="text-xl sm:text-2xl font-serif italic text-slate-700">
            &ldquo;{service.headline}&rdquo;
          </p>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {service.desc}
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#102b68] hover:bg-blue-600 text-white font-semibold text-sm shadow-xl transition-all"
            >
              <span>Book a consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all"
            >
              Explore Capabilities
            </a>
          </div>
        </div>
      </section>

      {/* What We Offer / Capabilities */}
      <section id="capabilities" className="py-20 bg-slate-50 border-y border-slate-200/80 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">CAPABILITY DETAILS</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950">What We Offer</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We leverage modern technology frameworks and clean architectural processes to deliver outcomes that grow conversion dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.capabilities.map((cap, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{cap.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables & Tech Stack */}
      <section className="py-20 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Deliverables */}
          {service.deliverables && (
            <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
                <span>Core Deliverables</span>
              </h3>
              <ul className="space-y-4">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          {service.techStack && (
            <div className="p-8 rounded-3xl bg-blue-50/60 border border-blue-200 space-y-6">
              <h3 className="text-2xl font-bold text-slate-950">Technology Ecosystem</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Battle-tested production technologies chosen for horizontal scalability, high developer velocity, and active ecosystem support.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {service.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-xl bg-white border border-blue-200 text-blue-900 text-xs font-semibold shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQs */}
      {service.faqs && (
        <section className="py-16 bg-slate-50 border-t border-slate-200/80 px-6 sm:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Frequently Asked Questions</p>
              <h2 className="text-3xl font-bold text-slate-950">Clarifying Questions</h2>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                    {faq.q}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="pt-20 px-6 sm:px-8 max-w-7xl mx-auto text-center">
        <div className="p-12 sm:p-16 rounded-[2.5rem] bg-[#102b68] text-white space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to begin your project?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Get in touch with Finic Global Solutions engineering leaders today for a confidential project scoping call.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#102b68] font-bold text-sm shadow-xl hover:bg-slate-100 transition-colors"
          >
            <span>Start a conversation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
