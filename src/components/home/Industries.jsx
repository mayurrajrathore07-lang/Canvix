"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { industries } from "@/data/industriesData";

function IndustryNavItem({ industry, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
        isSelected
          ? "bg-[#18191c] border-accent-teal/40 text-white shadow-lg translate-x-1"
          : "bg-[#111215] border-white/5 text-gray-400 hover:bg-[#18191c] hover:text-white"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-colors ${
            isSelected
              ? "bg-accent-teal text-black font-bold shadow-sm"
              : "bg-white/5 text-gray-400"
          }`}
        >
          {industry.icon}
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-tight text-white">
            {industry.name}
          </h3>
          <p className="text-xs text-gray-500 line-clamp-1">
            {industry.tagline}
          </p>
        </div>
      </div>
      <FaArrowRight
        className={`text-xs transition-transform ${
          isSelected
            ? "text-accent-teal translate-x-1"
            : "text-gray-600 opacity-0 group-hover:opacity-100"
        }`}
      />
    </button>
  );
}

function IndustryShowcaseCard({ activeIndustry }) {
  return (
    <div className="lg:col-span-7 bg-gradient-to-br from-[#18191c] via-[#121316] to-[#0c0d0e] border border-white/10 rounded-3xl p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-48 h-48 bg-accent-teal/10 rounded-full blur-2xl pointer-events-none" />

      <div>
        {/* Card Top Pill & Metric */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-accent-teal/15 border border-accent-teal/30 text-accent-teal flex items-center justify-center text-xl">
              {activeIndustry.icon}
            </div>
            <div>
              <span className="text-xs text-accent-teal font-bold uppercase tracking-wider block">
                Domain Solution
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                {activeIndustry.name}
              </h3>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-right">
            <p className="text-2xl font-black text-white tracking-tight">
              {activeIndustry.metric}
            </p>
            <p className="text-[11px] text-gray-400 uppercase tracking-wider">
              {activeIndustry.metricLabel}
            </p>
          </div>
        </div>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
          {activeIndustry.desc}
        </p>

        {/* Core Deliverables / Highlights */}
        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
          Key Engineering & Business Capabilities:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {activeIndustry.highlights.map((h, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl p-3 text-xs font-medium text-gray-200"
            >
              <span className="w-5 h-5 rounded-full bg-accent-teal/20 text-accent-teal flex items-center justify-center text-[10px] shrink-0">
                <FaCheck />
              </span>
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Bottom CTA */}
      <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-400">
          Need custom solutions for your industry?
        </p>
        <Link
          href="/contact"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent-teal hover:bg-[#289e94] text-black font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition shadow-md"
        >
          <span>Discuss Your Industry Needs</span>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default function Industries() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <section className="bg-bg-dark text-white py-24 px-6 md:px-12 border-t border-slate-800/80 relative overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent-teal/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent-purple/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent-teal text-sm font-semibold uppercase tracking-widest mb-3">
            Tailored Domain Expertise
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
            Industries We Serve & <br className="hidden sm:inline" /> Transform
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
            We blend deep vertical industry know-how with modern IT, AI, design, and staffing capabilities to solve complex domain challenges and unlock rapid business scale.
          </p>
        </div>

        {/* Interactive Industry Selector & Feature Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Industry List Buttons */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {industries.map((ind) => (
              <IndustryNavItem
                key={ind.id}
                industry={ind}
                isSelected={activeIndustry.id === ind.id}
                onClick={() => setActiveIndustry(ind)}
              />
            ))}
          </div>

          {/* Right: Active Industry Detailed Showcase Card */}
          <IndustryShowcaseCard activeIndustry={activeIndustry} />
        </div>
      </div>
    </section>
  );
}
