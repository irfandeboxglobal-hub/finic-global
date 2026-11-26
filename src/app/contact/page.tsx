"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    source: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.error || "Failed to send inquiry. Please try again.");
      }

      setIsSuccess(true);
      setFormData({ name: "", email: "", source: "", message: "" });
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Contact Us
              </span>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.05]">
                Let&apos;s <span className="text-blue-600 font-serif italic">Talk</span>
              </h1>
              <p className="text-base text-slate-600 leading-relaxed">
                We&apos;d love to hear about your idea, business goals, or project requirements. Share a few details and our team will get back to you shortly.
              </p>
            </div>

            {/* Hours */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                <Clock className="w-4 h-4 text-blue-600" />
                Opening Hours
              </div>
              <p className="text-sm font-semibold text-slate-900">
                Mon to Sat : 10:00 AM - 7:00 PM
              </p>
            </div>

            {/* Address */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                <MapPin className="w-4 h-4 text-blue-600" />
                Office Address
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                G-14, Jaitpur Extn-2, Badarpur, New Delhi 110044
              </p>
            </div>

            {/* Direct Channels */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Direct Channels
              </div>
              <div className="space-y-3">
                <a
                  href="mailto:info@finicglobal.com"
                  className="flex items-center gap-3 text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-600" />
                  info@finicglobal.com
                </a>
                <a
                  href="tel:+918860646745"
                  className="flex items-center gap-3 text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  +91 8860646745
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl">
              {isSuccess ? (
                <div className="py-16 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Thank you for reaching out!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been received. A senior technology lead from Finic Global Solutions will connect with you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-medium">
                      {errorMessage}
                    </div>
                  )}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-blue-600 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your work e-mail"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-blue-600 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      How did you hear about us?
                    </label>
                    <input
                      type="text"
                      placeholder="Google, LinkedIn, Referral, etc."
                      value={formData.source}
                      onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-blue-600 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Message / Project Details *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your project requirements, scope, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-blue-600 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-[#102b68] hover:bg-blue-600 disabled:opacity-60 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-blue-950/15 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
