"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { label: "Software Development", to: "/service/software-development" },
    { label: "Mobile App Development", to: "/service/mobile-app-development" },
    { label: "Web App Development", to: "/service/web-development" },
    { label: "Cloud & DevOps Solutions", to: "/service/cloud-devops" },
    { label: "AI & Machine Learning", to: "/service/ai-machine-learning" },
    { label: "CRM / ERP Solutions", to: "/service/crm-erp-solutions" },
    { label: "UI / UX Design", to: "/service/ui-ux-design" },
    { label: "Digital Marketing", to: "/service/digital-marketing" },
    { label: "SEO Services", to: "/service/seo" }
  ];

  const products = [
    { label: "LeadsCRM", to: "/product/salespilot-crm", desc: "AI-Powered Lead Engine" },
    { label: "MediFlow ERP", to: "/product/mediflow-erp", desc: "Pharmacy & Clinic ERP" },
    { label: "TaxPro ERP", to: "/product/taxpro-erp", desc: "Automated Tax Operations" },
    { label: "Nexa ERP", to: "/product/nexa-erp", desc: "Connected Enterprise ERP" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6">
      <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg shadow-blue-900/5 border border-slate-200/80 px-4 sm:px-6 py-2.5"
          : "bg-white/80 backdrop-blur-md border border-slate-100 shadow-sm px-4 sm:px-6 py-3"
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/finic-logo.svg"
              alt="Finic Global Solutions"
              className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                pathname === "/" ? "text-blue-600 font-semibold" : "text-slate-700 hover:text-blue-600"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                pathname === "/about" ? "text-blue-600 font-semibold" : "text-slate-700 hover:text-blue-600"
              }`}
            >
              About Us
            </Link>

            <Link
              href="/portfolio"
              className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                pathname === "/portfolio" ? "text-blue-600 font-semibold" : "text-slate-700 hover:text-blue-600"
              }`}
            >
              Portfolio
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                  pathname.startsWith("/service") ? "text-blue-600 font-semibold" : "text-slate-700 hover:text-blue-600"
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-2 border-b border-slate-100 mb-1">
                    <Link
                      href="/services"
                      className="text-xs font-bold uppercase tracking-wider text-blue-600 hover:underline flex items-center justify-between"
                      onClick={() => setServicesOpen(false)}
                    >
                      All Services
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  {services.map((s) => (
                    <Link
                      key={s.to}
                      href={s.to}
                      onClick={() => setServicesOpen(false)}
                      className="block px-3 py-2 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl transition-colors font-medium"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                  pathname.startsWith("/product") ? "text-blue-600 font-semibold" : "text-slate-700 hover:text-blue-600"
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-2 border-b border-slate-100 mb-1">
                    <Link
                      href="/product"
                      className="text-xs font-bold uppercase tracking-wider text-blue-600 hover:underline flex items-center justify-between"
                      onClick={() => setProductsOpen(false)}
                    >
                      Proprietary Platforms
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  {products.map((p) => (
                    <Link
                      key={p.to}
                      href={p.to}
                      onClick={() => setProductsOpen(false)}
                      className="block px-3 py-2.5 text-slate-800 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl transition-colors group"
                    >
                      <div className="text-sm font-semibold">{p.label}</div>
                      <div className="text-xs text-slate-500 group-hover:text-slate-600">{p.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                pathname === "/contact" ? "text-blue-600 font-semibold" : "text-slate-700 hover:text-blue-600"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#102b68] hover:bg-blue-700 text-white text-sm font-semibold shadow-md shadow-blue-950/10 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Start a project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 max-h-[85vh] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-semibold text-slate-800 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-semibold text-slate-800 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl"
            >
              About Us
            </Link>
            <Link
              href="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-semibold text-slate-800 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl"
            >
              Portfolio
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-semibold text-slate-800 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl"
            >
              Services Directory
            </Link>
            <Link
              href="/product"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-semibold text-slate-800 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl"
            >
              Products & Platforms
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-semibold text-slate-800 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl"
            >
              Contact Us
            </Link>
            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 rounded-2xl bg-[#102b68] text-white font-semibold text-sm shadow-md"
              >
                Discuss a Project
              </Link>
              <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-2">
                <a href="mailto:info@finicglobal.com" className="flex items-center gap-1 hover:text-blue-600">
                  <Mail className="w-3.5 h-3.5" />
                  info@finicglobal.com
                </a>
                <a href="tel:+918860646745" className="flex items-center gap-1 hover:text-blue-600">
                  <Phone className="w-3.5 h-3.5" />
                  +91 8860646745
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
