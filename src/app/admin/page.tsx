"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  Globe,
  TrendingUp,
  Shield,
  ArrowRight,
  Plus,
  CheckCircle,
  Clock,
  Filter,
  Search,
  ExternalLink
} from "lucide-react";

export default function AdminDashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const sampleLeads = [
    { id: "L-101", name: "Aarav Sharma", email: "aarav@fintechcorp.io", service: "LeadsCRM", status: "QUALIFIED", date: "Today, 10:24 AM" },
    { id: "L-102", name: "Rohit Verma", email: "rohit@medicareclinics.com", service: "MediFlow ERP", status: "NEW", date: "Today, 09:15 AM" },
    { id: "L-103", name: "Priya Nair", email: "priya@logisticsscale.in", service: "Nexa ERP", status: "CONTACTED", date: "Yesterday" },
    { id: "L-104", name: "Vikram Malhotra", email: "vikram@investcore.com", service: "Custom Software Dev", status: "IN_REVIEW", date: "2 days ago" },
  ];

  const filteredLeads = sampleLeads.filter(
    (l) =>
      l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-28 pb-24 bg-slate-950 min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Finic Global Solutions Command Center</span>
            </div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight mt-1">Admin Dashboard</h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/add-website"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Onboard New Domain</span>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold uppercase tracking-wider">
              <span>Total Inquiries</span>
              <Users className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-3xl font-extrabold text-white">48</div>
            <div className="text-[11px] text-emerald-400 font-medium">+12% this week</div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold uppercase tracking-wider">
              <span>Indexed Domains</span>
              <Globe className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-3xl font-extrabold text-white">16</div>
            <div className="text-[11px] text-slate-400">Deep-scraped for AI bot</div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold uppercase tracking-wider">
              <span>LeadsCRM Pipelines</span>
              <TrendingUp className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-extrabold text-white">24</div>
            <div className="text-[11px] text-emerald-400 font-medium">94% closing velocity</div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold uppercase tracking-wider">
              <span>System Uptime</span>
              <Shield className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-extrabold text-white">99.98%</div>
            <div className="text-[11px] text-slate-400">Zero active incidents</div>
          </div>
        </div>

        {/* Lead Management Table */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white">Recent Project Enquiries</h2>
              <p className="text-xs text-slate-400 mt-1">Review, qualify, and manage incoming client requirements.</p>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950/60 text-slate-400 uppercase tracking-wider border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Lead ID</th>
                  <th className="py-3 px-4">Contact</th>
                  <th className="py-3 px-4">Service of Interest</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-300">{lead.id}</td>
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-white">{lead.name}</div>
                      <div className="text-[11px] text-slate-400">{lead.email}</div>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-sky-400">{lead.service}</td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        lead.status === "QUALIFIED"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : lead.status === "NEW"
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          : "bg-slate-800 text-slate-300"
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400">{lead.date}</td>
                    <td className="py-3.5 px-4 text-right">
                      <button className="text-xs text-blue-400 hover:text-blue-300 font-semibold">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
