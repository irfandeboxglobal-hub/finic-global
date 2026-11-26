"use client";

import React, { useState } from "react";
import { Plus, Globe, Shield, CheckCircle2, Loader2 } from "lucide-react";

export default function AddWebsitePage() {
  const [form, setForm] = useState({ name: "", url: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      // Simulate onboarding endpoint call
      await new Promise((r) => setTimeout(r, 1200));
      setSuccess(true);
      setForm({ name: "", url: "" });
    } catch (err) {
      console.error("Onboarding failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-24 bg-slate-950 min-h-screen text-slate-100">
      <div className="max-w-2xl mx-auto px-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-white tracking-tight">Onboard New Website</h1>
          <p className="text-slate-400 mt-2 text-sm">
            Connect a new domain to the Finic Global Solutions AI engine for scraping and indexing.
          </p>
        </div>

        {success && (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-3 text-sm">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>Website onboarded successfully! Vector indexing has begun.</span>
          </div>
        )}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[80px] -z-10 group-hover:bg-blue-600/10 transition-all duration-700" />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="group">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2 block px-2">
                  Website Name
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors">
                    <span className="font-bold">#</span>
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="e.g. My Portfolio"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-slate-200 outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 text-sm"
                  />
                </div>
              </div>

              <div className="group">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2 block px-2">
                  Website URL
                </label>
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors w-5 h-5" />
                  <input
                    type="url"
                    required
                    placeholder="https://example.com"
                    value={form.url}
                    onChange={(e) => setForm({ ...form, url: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-slate-200 outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 font-mono text-sm"
                  />
                </div>
                <p className="text-[10px] text-slate-500 mt-2 px-2 italic uppercase tracking-tighter">
                  Must be a valid URL starting with http:// or https://
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/50">
              <div className="flex items-start gap-3 p-4 bg-blue-500/5 rounded-2xl border border-blue-500/10 mb-6 text-slate-400">
                <Shield className="text-blue-500 shrink-0 mt-0.5 w-4 h-4" />
                <p className="text-xs leading-relaxed">
                  By adding this website, you authorize Finic Global Solutions to perform deep-web scraping and vector indexing for chatbot training.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-xl ${
                  loading
                    ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-[1.02] active:scale-95 shadow-blue-900/20"
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5" />
                    <span>Start Onboarding</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
