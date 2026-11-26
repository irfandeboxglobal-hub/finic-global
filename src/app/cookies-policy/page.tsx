import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | Finic Global Solutions",
  description: "Learn about how cookies and tracking technologies are used on the Finic Global Solutions website."
};

export default function CookiesPolicyPage() {
  return (
    <div className="pt-28 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 block mb-2">Legal</span>
          <h1 className="text-4xl font-extrabold text-slate-950">Cookie Policy</h1>
          <p className="text-slate-500 text-sm mt-2">Last updated: October 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-sm text-slate-700 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work efficiently, provide analytics, and retain session preferences.
          </p>

          <h2 className="text-xl font-bold text-slate-900">2. Cookies We Use</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> Required for fundamental site operation, navigation, and security controls.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us measure visitor volume, page views, and user flows to optimize website usability.
            </li>
            <li>
              <strong>Preference Cookies:</strong> Remember your settings and preferences between visits.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900">3. Managing Cookie Preferences</h2>
          <p>
            You can configure your web browser to block or alert you about cookies. Note that disabling certain essential cookies may affect the proper functioning of parts of the website.
          </p>

          <h2 className="text-xl font-bold text-slate-900">4. Contact Us</h2>
          <p>
            If you have questions about our cookie practices, please contact us at <a href="mailto:info@finicglobal.com" className="text-blue-600 underline">info@finicglobal.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
