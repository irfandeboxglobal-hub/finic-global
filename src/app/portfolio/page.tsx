"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Filter } from "lucide-react";
import { projectsData } from "@/data/projectsData";

export default function PortfolioPage() {
  const [selectedTag, setSelectedTag] = useState("All Masterpieces");

  const filterTabs = [
    "All Masterpieces",
    "SaaS & Enterprise ERP",
    "Web Applications",
    "Mobile Solutions",
    "AI & Automation",
    "Cloud & Infrastructure"
  ];

  const filteredProjects = selectedTag === "All Masterpieces"
    ? projectsData
    : projectsData.filter((p) => p.tags.includes(selectedTag));

  return (
    <div className="pt-28 pb-24 bg-white">
      {/* Header */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto mb-16 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Innovation • Craftsmanship • Scalability
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.05]">
            Empowering Enterprise Through{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent font-serif italic">
              Modern Digital Products
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore our showcase of enterprise SaaS platforms, AI systems, mobile applications, and cloud architectures built with precision, speed, and modern engineering standards.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 pt-10">
          {filterTabs.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedTag === tag
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={project.slug ? `/product/${project.slug}` : (project.href || "/contact")}
              className="group block overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-200"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={`${project.title} interface`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold shadow-md">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {project.summary}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
                  <span>View project details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-24 px-6 sm:px-8 max-w-7xl mx-auto text-center">
        <div className="p-12 sm:p-16 rounded-[2.5rem] bg-slate-950 text-white space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Have a project in mind?</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Let&apos;s build software that moves your business forward. Schedule an architecture review today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl transition-all"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
