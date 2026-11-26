import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Finic Global Solutions",
  description: "Terms and conditions for using Finic Global Solutions website and services."
};

export default function TermsConditionsPage() {
  return (
    <div className="pt-28 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 block mb-2">Legal</span>
          <h1 className="text-4xl font-extrabold text-slate-950">Terms &amp; Conditions</h1>
          <p className="text-slate-500 text-sm mt-2">Last updated: October 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-sm text-slate-700 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website of Finic Global Solutions (&ldquo;Finic Global Solutions&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;), you agree to comply with and be bound by these Terms &amp; Conditions. If you do not agree to these terms, please do not use our website or services.
          </p>

          <h2 className="text-xl font-bold text-slate-900">2. Intellectual Property Rights</h2>
          <p>
            All content, trademarks, logos, code, software platforms, and designs displayed on this website are the proprietary property of Finic Global Solutions or used under valid licenses. No content may be copied, reproduced, or distributed without express written consent.
          </p>

          <h2 className="text-xl font-bold text-slate-900">3. Services &amp; Platform Availability</h2>
          <p>
            Our software products (including LeadsCRM, MediFlow ERP, TaxPro ERP, and Nexa ERP) and technical engineering services are subject to separate Master Services Agreements (MSAs) or Software as a Service (SaaS) subscription contracts signed with individual clients.
          </p>

          <h2 className="text-xl font-bold text-slate-900">4. Limitation of Liability</h2>
          <p>
            Finic Global Solutions shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use this website or associated informational materials.
          </p>

          <h2 className="text-xl font-bold text-slate-900">5. Governing Law &amp; Jurisdiction</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of New Delhi, India.
          </p>

          <h2 className="text-xl font-bold text-slate-900">6. Contact Information</h2>
          <p>
            If you have questions regarding these terms, please contact us at:
            <br />
            <strong>Finic Global Solutions</strong>
            <br />
            Email: <a href="mailto:info@finicglobal.com" className="text-blue-600 underline">info@finicglobal.com</a>
            <br />
            Address: G-14, Jaitpur Extn-2, Badarpur, New Delhi 110044
          </p>
        </div>
      </div>
    </div>
  );
}
