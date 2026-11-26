import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, ExternalLink } from "lucide-react";
import { productsData } from "@/data/productsData";

export const metadata = {
  title: "Proprietary Platforms & Products | Finic Global Solutions",
  description: "Explore our genuine enterprise software systems — LeadsCRM, MediFlow ERP, TaxPro ERP, and Nexa ERP."
};

export default function ProductsPage() {
  const products = Object.values(productsData);

  return (
    <div className="pt-28 pb-24 bg-white">
      {/* Header */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto mb-20 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Proprietary Software Systems
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.05]">
            Built for Scale, Concurrency &amp;{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent font-serif italic">
              Real Impact.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our enterprise product suite replaces fragile spreadsheets, disjointed tools, and manual guesswork with high-velocity automated platforms.
          </p>
        </div>
      </section>

      {/* Product Cards */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto space-y-16">
        {products.map((product, idx) => (
          <div
            key={product.slug}
            className={`p-8 sm:p-12 rounded-[2.5rem] border border-slate-200 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}
          >
            <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
                <Sparkles className="w-3.5 h-3.5" />
                {product.eyebrow}
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
                {product.name}
              </h2>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                {product.tagline}
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {product.summary}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {product.keyPoints.slice(0, 4).map((pt, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href={`/product/${product.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#102b68] hover:bg-blue-600 text-white font-semibold text-xs shadow-md transition-all"
                >
                  <span>Explore Product Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                {product.cta.href.startsWith("http") && (
                  <a
                    href={product.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-all"
                  >
                    <span>Launch Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 aspect-[16/11]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.heroImage}
                  alt={`${product.name} interface`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
