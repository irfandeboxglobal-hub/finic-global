import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Finic Global Solutions",
  description: "Privacy policy regarding collection, usage, and security of user information."
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 block mb-2">Legal</span>
          <h1 className="text-4xl font-extrabold text-slate-950">Privacy Policy</h1>
          <p className="text-slate-500 text-sm mt-2">Last updated: October 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-sm text-slate-700 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
          <p>
            When you interact with our website or submit project inquiries through our contact forms, we may collect information including your name, corporate email address, phone number, company name, and project specifications.
          </p>

          <h2 className="text-xl font-bold text-slate-900">2. How We Use Your Information</h2>
          <p>
            We use collected data solely to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Respond to your service inquiries and schedule consultations.</li>
            <li>Provide product demonstrations for our ERP &amp; CRM platforms.</li>
            <li>Improve our website performance and user experience.</li>
            <li>Comply with legal obligations and prevent fraud.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900">3. Data Protection &amp; Confidentiality</h2>
          <p>
            Finic Global Solutions implements industry-standard technical and organizational security measures, including HTTPS encryption, restricted database access, and secure cloud storage, to safeguard your information against unauthorized access.
          </p>

          <h2 className="text-xl font-bold text-slate-900">4. Third-Party Sharing</h2>
          <p>
            We do not sell, rent, or trade your personal information to third parties. We may share necessary details with trusted infrastructure providers (e.g., cloud hosting, email dispatch) strictly for operational delivery under non-disclosure obligations.
          </p>

          <h2 className="text-xl font-bold text-slate-900">5. Your Data Rights</h2>
          <p>
            You have the right to request access to, correction of, or deletion of your personal data stored with us at any time by contacting our data team at <a href="mailto:info@finicglobal.com" className="text-blue-600 underline">info@finicglobal.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
