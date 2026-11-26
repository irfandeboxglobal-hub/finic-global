import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Target, Users, Lightbulb } from "lucide-react";

export const metadata = {
  title: "About Us | Finic Global Solutions",
  description: "Learn about Finic Global Solutions — our mission, vision, leadership, and how we engineer modern digital products and enterprise platforms."
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 bg-white">
      {/* Hero */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              About Finic Global Solutions
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
              We are the{" "}
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent font-serif italic">
                builders, architects &amp; innovators.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Finic Global Solutions helps businesses turn ambitious ideas into scalable ERP platforms, CRM systems, AI products, cloud experiences, websites, and mobile apps.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#102b68] hover:bg-blue-600 text-white font-semibold text-sm shadow-xl transition-all"
              >
                <span>Talk to us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl p-3 bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/aboutpage-BD769KqV.webp"
                alt="About Finic Global Solutions"
                className="w-full aspect-[4/3] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY FINIC GLOBAL SOLUTIONS */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
              Why <span className="italic font-serif text-blue-600">Finic Global Solutions?</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Every business has unique challenges, which is why every product we build is tailored to solve real operational problems. We combine thoughtful design, scalable engineering, and modern technologies to create software that grows alongside your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Outcome-Driven Engineering</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We don&apos;t just write lines of code. We align architecture with business KPIs, revenue targets, and operational turnaround speed.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Enterprise Security</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Data isolation, granular role-based permissions, zero-trust cloud network policies, and regulatory compliance standards.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">End-to-End Delivery</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From technical discovery and design prototypes to production deployment and 24/7 infrastructure SLA monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Our Leadership</p>
          <h2 className="text-4xl font-bold text-slate-950">Guiding the Mission</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/30 text-blue-400 flex items-center justify-center font-bold text-lg">
              AS
            </div>
            <p className="text-sm italic text-slate-300 leading-relaxed">
              &ldquo;Empowering teams, shaping strategy, and turning ideas into impactful results.&rdquo;
            </p>
            <div className="pt-4 border-t border-slate-800">
              <h3 className="font-bold text-lg text-white">Anamika Shrivastav</h3>
              <p className="text-xs font-semibold text-sky-400">Director</p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#102b68] text-white space-y-4 shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-white/20 text-sky-200 flex items-center justify-center font-bold text-lg">
              PT
            </div>
            <p className="text-sm italic text-sky-100 leading-relaxed">
              &ldquo;Leading with vision, driving growth, and building a future-ready organization.&rdquo;
            </p>
            <div className="pt-4 border-t border-blue-900">
              <h3 className="font-bold text-lg text-white">Poonam Tiwari</h3>
              <p className="text-xs font-semibold text-sky-300">Managing Director</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
