"use client";

import React, { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Sparkles, MessageSquare } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
}

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hello! I am Finic Global Solutions AI Assistant. How can I help you today? Ask about our Custom Software Development, ERP & CRM platforms (LeadsCRM, MediFlow, Nexa), or AI solutions.",
      time: "Just now"
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulate intelligent reply
    setTimeout(() => {
      let botResponse = "Thank you for reaching out! Finic Global Solutions offers customized end-to-end development. Would you like to schedule a discovery call with our engineering team or see a live demo?";
      const lower = userMsg.text.toLowerCase();

      if (lower.includes("crm") || lower.includes("lead")) {
        botResponse = "LeadsCRM is our flagship lead generation & CRM engine! It combines targeted Google/Meta ad campaigns with an AI Hot/Warm/Cold lead scoring dashboard and 10 days free trial.";
      } else if (lower.includes("mediflow") || lower.includes("hospital") || lower.includes("pharmacy")) {
        botResponse = "MediFlow ERP is a multi-tenant pharmacy and hospital management platform with batch tracking, expiry monitoring, fast POS billing, and smart stock forecasting.";
      } else if (lower.includes("nexa") || lower.includes("erp")) {
        botResponse = "Nexa ERP unifies multi-branch inventory, billing, logistics, and real-time operations into a single pane of glass for enterprise businesses.";
      } else if (lower.includes("pricing") || lower.includes("cost") || lower.includes("quote")) {
        botResponse = "We tailor our engagement models to your project scope (Fixed Price MVP, Staff Augmentation, or Dedicated Team). You can submit a project inquiry on our /contact page or email us directly at info@finicglobal.com.";
      } else if (lower.includes("contact") || lower.includes("phone") || lower.includes("address")) {
        botResponse = "You can reach us at info@finicglobal.com or +91 8860646745 (www.finicglobal.com). Our office is located at G-14, Jaitpur Extn-2, Badarpur, New Delhi 110044.";
      }

      const replyMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: botResponse,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setMessages((prev) => [...prev, replyMsg]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Tooltip speech bubble */}
      {!isOpen && showTooltip && (
        <div className="mb-3 flex items-center gap-3 bg-slate-900 text-white px-4 py-2.5 rounded-2xl shadow-xl border border-slate-800 text-xs animate-bounce animate-duration-1000">
          <div className="w-6 h-6 rounded-lg bg-blue-600/30 text-blue-400 flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="font-bold flex items-center gap-1.5 text-sky-400">
              Finic Global Solutions AI ⚡
            </div>
            <div className="text-slate-300">👋 Chat with our AI team?</div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-500 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[360px] sm:w-[400px] h-[520px] bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-500 flex items-center justify-center text-white shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  Finic Global Solutions AI <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                </h4>
                <p className="text-[11px] text-slate-400">Always online • AI Powered</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages list */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 leading-relaxed ${
                    m.sender === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-slate-900 text-slate-200 border border-slate-800 rounded-bl-none shadow-sm"
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[9px] text-slate-500 mt-1 px-1">{m.time}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 flex gap-1.5 overflow-x-auto no-scrollbar">
            {["Services", "LeadsCRM", "MediFlow ERP", "Get Quote"].map((t) => (
              <button
                key={t}
                onClick={() => setInput(t)}
                className="shrink-0 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] transition-colors"
              >
                {t}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Finic Global Solutions..."
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white transition-all shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        className="w-14 h-14 rounded-full bg-[#172b55] hover:bg-blue-600 text-white flex items-center justify-center shadow-2xl shadow-blue-900/40 hover:scale-105 active:scale-95 transition-all duration-300 relative group"
        aria-label="Open AI Assistant Chat"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
      </button>
    </div>
  );
}
