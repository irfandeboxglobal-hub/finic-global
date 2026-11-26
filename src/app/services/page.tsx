import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/data/servicesData";

export const metadata = {
  title: "Engineering Services | Finic Global Solutions",
  description: "End-to-end digital solutions — custom software development, web & mobile applications, AI, cloud infrastructure, CRM/ERP, and UI/UX."
};

export default function ServicesPage() {
  const serviceList = Object.values(servicesData);

  return (
    <div className="pt-28 pb-24 bg-white">
      {/* Header */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto mb-20 text-center">
        <div className="max-w-3xl mx-auto space-y-5">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Our Services • End-to-End Digital Solutions
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.05]">
            Everything Your Business Needs to{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent font-serif italic">
              Build, Scale &amp; Grow.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Finic Global Solutions delivers complete digital solutions—from custom software, web and mobile applications to AI, cloud infrastructure, CRM &amp; ERP, UI/UX design, SEO, and digital marketing—helping businesses innovate, automate, and grow with confidence.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#102b68] hover:bg-blue-600 text-white font-semibold text-sm shadow-xl transition-all"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service) => (
            <div
              key={service.slug}
              className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold uppercase tracking-wider mb-4">
                  {service.eyebrow}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-8">
                  {service.capabilities.slice(0, 3).map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{cap.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={`/service/${service.slug}`}
                className="inline-flex items-center justify-between w-full px-5 py-3 rounded-2xl bg-slate-50 group-hover:bg-blue-600 text-slate-800 group-hover:text-white font-semibold text-xs transition-all duration-300"
              >
                <span>View Full Scope</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
