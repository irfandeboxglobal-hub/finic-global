import React from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/product" },
  { label: "Contact Us", href: "/contact" },
];

const productLinks = [
  { label: "LeadsCRM", href: "https://leads.crm.finicglobal.com", isExternal: true },
  { label: "MediFlow ERP", href: "https://mediflow.finicglobal.com/login", isExternal: true },
  { label: "TaxPro ERP", href: "/product/taxpro-erp" },
  { label: "Nexa ERP", href: "/product/nexa-erp" },
];

const serviceLinks = [
  { label: "Software Development", href: "/service/software-development" },
  { label: "Mobile App Development", href: "/service/mobile-app-development" },
  { label: "Web App Development", href: "/service/web-development" },
  { label: "Cloud & DevOps", href: "/service/cloud-devops" },
  { label: "AI & Machine Learning", href: "/service/ai-machine-learning" },
  { label: "Digital Marketing", href: "/services" },
  { label: "CRM / ERP", href: "/service/crm-erp-solutions" },
  { label: "UI / UX Design", href: "/service/ui-ux-design" },
  { label: "SEO", href: "/service/seo" },
];

const policyLinks = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookies-policy" },
];

function FooterLink({
  children,
  href,
  isExternal,
}: {
  children: React.ReactNode;
  href: string;
  isExternal?: boolean;
}) {
  const linkClassName =
    "group inline-flex text-sm text-black/80 transition hover:text-[#102b68]";
  const innerContent = (
    <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#102b68] after:transition-transform group-hover:after:scale-x-100">
      {children}
    </span>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={linkClassName}>
        {innerContent}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClassName}>
      {innerContent}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative mx-2 sm:mx-3 mt-10 min-h-0 lg:min-h-[650px] overflow-hidden rounded-t-[32px] sm:rounded-t-[42px] bg-[#D0E7E6] text-black shadow-[0_-12px_35px_rgba(37,99,235,0.12)] sm:mx-5 sm:rounded-t-[56px]">
      <div className="relative z-10 mx-0 max-w-none px-4 sm:px-6 pb-10 pt-10 sm:pb-20 sm:pt-16 lg:px-14 lg:pt-20 lg:pb-28">
        <div className="grid gap-7 sm:gap-11 pb-8 sm:pb-14 sm:grid-cols-2 lg:grid-cols-[1.25fr_.75fr_1fr_1fr]">
          {/* Column 1: About / Company info */}
          <div>
            <Link href="/" className="inline-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/finic-logo.svg"
                alt="Finic Global Solutions"
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-6 text-black/80">
              Finic Global Solutions helps ambitious businesses design, build, and scale exceptional digital products.
            </p>
            <div className="mt-4 sm:mt-7 space-y-2 sm:space-y-3 text-sm font-medium text-[#102b68]">
              <a
                href="mailto:info@finicglobal.com"
                className="flex items-center gap-2 hover:text-black transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@finicglobal.com</span>
              </a>
              <a
                href="tel:+918860646745"
                className="flex items-center gap-2 hover:text-black transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+91 8860646745</span>
              </a>
            </div>

            <div className="mt-4 sm:mt-7 flex items-center gap-3">
              <span className="mr-1 text-sm font-medium text-[#102b68]">Follow us</span>
              <a
                href="https://www.instagram.com/finicglobalsolutions/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-black/35 p-2 text-[#102b68] transition hover:-translate-y-1 hover:bg-[#102b68] hover:text-white"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/finic-global-solutions/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-black/35 p-2 text-[#102b68] transition hover:-translate-y-1 hover:bg-[#102b68] hover:text-white"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61591691289301"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-black/35 p-2 text-[#102b68] transition hover:-translate-y-1 hover:bg-[#102b68] hover:text-white"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@finicglobalsolutions"
                target="_blank"
                rel="noreferrer"
                aria-label="Finic Global Solutions on YouTube"
                className="rounded-full border border-black/35 p-2 text-[#102b68] transition hover:-translate-y-1 hover:bg-[#102b68] hover:text-white"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 576 512">
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h2 className="mb-5 text-xl font-semibold text-[#102b68]">Navigation</h2>
            <ul className="space-y-3">
              {navigationLinks.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h2 className="mb-5 text-xl font-semibold text-[#102b68]">Products</h2>
            <ul className="space-y-3">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href} isExternal={item.isExternal}>
                    {item.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h2 className="mb-5 text-xl font-semibold text-[#102b68]">Services</h2>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Terms & Policy (Under column 1) */}
          <div className="pt-4 lg:pt-0">
            <h2 className="mb-5 text-xl font-semibold text-[#102b68]">Terms & Policy</h2>
            <ul className="space-y-3">
              {policyLinks.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
