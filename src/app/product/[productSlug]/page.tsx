import React, { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Zap,
  Layers,
  ArrowUpRight
} from "lucide-react";
import { productsData } from "@/data/productsData";

interface PageProps {
  params: Promise<{ productSlug: string }>;
}

export function generateStaticParams() {
  return Object.keys(productsData).map((slug) => ({
    productSlug: slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { productSlug } = await params;
  const product = productsData[productSlug];
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | Finic Global Solutions`,
    description: product.summary
  };
}

function ProductDetailFallback() {
  return (
    <div className="pt-28 pb-24 bg-white">
      <div className="px-6 sm:px-8 max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/product" className="hover:text-blue-600 transition-colors">Products</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="h-3 w-28 rounded bg-slate-200 animate-pulse inline-block" />
        </div>
      </div>
      <div className="px-6 sm:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-pulse">
        <div className="lg:col-span-7 space-y-6">
          <div className="h-7 w-40 rounded-full bg-blue-50" />
          <div className="h-14 w-5/6 rounded-2xl bg-slate-200" />
          <div className="h-20 w-full rounded-2xl bg-slate-100" />
        </div>
        <div className="lg:col-span-5">
          <div className="h-72 rounded-3xl bg-slate-100" />
        </div>
      </div>
    </div>
  );
}

export default function ProductDetailPage({ params }: PageProps) {
  return (
    <Suspense fallback={<ProductDetailFallback />}>
      <ProductDetailContent params={params} />
    </Suspense>
  );
}

async function ProductDetailContent({ params }: PageProps) {
  const { productSlug } = await params;
  const product = productsData[productSlug];

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-28 pb-24 bg-white">
      {/* Breadcrumbs */}
      <div className="px-6 sm:px-8 max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/product" className="hover:text-blue-600 transition-colors">Products</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-900 font-bold">{product.name}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
                {product.eyebrow}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                {product.status}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
              {product.headline}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {product.summary}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {product.cta.href.startsWith("http") ? (
                <a
                  href={product.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#102b68] hover:bg-blue-600 text-white font-semibold text-sm shadow-xl transition-all"
                >
                  <span>{product.cta.label}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <Link
                  href={product.cta.href}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#102b68] hover:bg-blue-600 text-white font-semibold text-sm shadow-xl transition-all"
                >
                  <span>{product.cta.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}

              {product.cta.secondaryHref && (
                <Link
                  href={product.cta.secondaryHref}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all"
                >
                  <span>{product.cta.secondaryLabel || "Request Demo"}</span>
                </Link>
              )}
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
              {product.heroStats.map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    {stat.label}
                  </span>
                  <span className="text-base sm:text-lg font-extrabold text-slate-900 mt-1 block">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Key feature pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {product.keyPoints.map((kp, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  {kp}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.heroImage}
                alt={`${product.name} Preview`}
                className="w-full rounded-2xl object-cover shadow-inner"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Manual vs System */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Operational Comparison
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              {product.comparisonTitle}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {product.comparisonDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.comparisonCards.map((card, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                <div className="space-y-3 text-xs leading-relaxed">
                  <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-100 text-rose-950">
                    <span className="font-bold text-rose-600 block mb-1">Without {product.name}:</span>
                    {card.without}
                  </div>
                  <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-emerald-950">
                    <span className="font-bold text-emerald-600 block mb-1">With {product.name}:</span>
                    {card.with}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12 space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Platform Modules</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">System Architecture &amp; Features</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {product.moduleGroups.map((mod, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-900 text-white space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{mod.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{mod.summary}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800">
                {mod.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/80 px-6 sm:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h3 className="text-2xl font-bold text-slate-950">Built With Proven Engineering Standards</h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {product.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-semibold shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-20 px-6 sm:px-8 max-w-7xl mx-auto text-center">
        <div className="p-12 sm:p-16 rounded-[2.5rem] bg-[#102b68] text-white space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Experience {product.name} in Action</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Schedule a walkthrough with our engineering team or begin your free 10-day trial today.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#102b68] font-bold text-sm shadow-xl hover:bg-slate-100 transition-colors"
            >
              <span>Schedule Product Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
