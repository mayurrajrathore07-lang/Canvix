"use client";

import Link from "next/link";
import { FaCalendarCheck, FaHandshake, FaRocket, FaArrowRight } from "react-icons/fa";

const trustPoints = [
  {
    id: "free-consultation",
    icon: <FaCalendarCheck size={20} />,
    title: "Free Consultation",
    desc: "30-minute call to understand your goals",
    color: "#30B5AA",
  },
  {
    id: "no-obligations",
    icon: <FaHandshake size={20} />,
    title: "No Obligations",
    desc: "No contracts, no pressure — just honest advice",
    color: "#7c3aed",
  },
  {
    id: "quick-turnaround",
    icon: <FaRocket size={20} />,
    title: "Quick Turnaround",
    desc: "Proposal within 48 hours of our call",
    color: "#f59e0b",
  },
];

export default function BookConsultation() {
  return (
    <section className="bg-[#0B0F19] relative overflow-hidden py-[60px] px-6 pb-[100px]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(48,181,170,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-[900px] mx-auto relative z-[1]">
        {/* Main card */}
        <div className="bg-[linear-gradient(135deg,rgba(48,181,170,0.08)_0%,rgba(124,58,237,0.06)_50%,rgba(48,181,170,0.04)_100%)] border border-[#30B5AA]/15 rounded-[28px] p-[clamp(40px,6vw,64px)] text-center relative overflow-hidden">
          {/* Corner accents */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[radial-gradient(circle,rgba(48,181,170,0.15)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-[140px] h-[140px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.12)_0%,transparent_70%)] pointer-events-none" />

          {/* Badge */}
          <span className="inline-block bg-[#30B5AA]/12 border border-[#30B5AA]/30 text-[#30B5AA] rounded-full px-[18px] py-1.5 text-xs font-bold tracking-wider uppercase mb-6">
            Let&apos;s Work Together
          </span>

          {/* Heading */}
          <h2 className="text-[clamp(28px,5vw,48px)] font-extrabold text-white mb-4 tracking-tight leading-[1.15] font-serif">
            Ready to Grow Your{" "}
            <span className="bg-gradient-to-br from-[#30B5AA] to-[#2dd4bf] bg-clip-text text-transparent">
              Business
            </span>
            ?
          </h2>

          <p className="text-[#9ca3af] text-base leading-[1.7] max-w-[520px] mx-auto mb-10">
            Book a free consultation — no commitments. Let&apos;s discuss your project
            and see how we can help you achieve your goals.
          </p>

          {/* Trust points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {trustPoints.map((point) => (
              <div
                key={point.id}
                className="flex flex-col items-center gap-2.5 p-5 bg-white/[0.03] border border-white/[0.06] rounded-2xl transition-all duration-200 hover:border-white/15"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: `${point.color}15`,
                    border: `1px solid ${point.color}30`,
                    color: point.color,
                  }}
                >
                  {point.icon}
                </div>
                <p className="text-white font-bold text-sm m-0">
                  {point.title}
                </p>
                <p className="text-[#6b7280] text-xs m-0 leading-snug">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            id="book-consultation-cta"
            className="inline-flex items-center gap-2.5 bg-gradient-to-br from-[#30B5AA] to-[#2dd4bf] text-black px-9 py-4 rounded-full font-extrabold text-[15px] no-underline font-sans shadow-[0_8px_32px_rgba(48,181,170,0.3)] hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(48,181,170,0.4)] transition-all duration-200"
          >
            Book Free Consultation
            <FaArrowRight size={14} />
          </Link>

          <p className="text-[#4b5563] text-xs mt-[18px] font-medium">
            ✓ No credit card required &nbsp; ✓ Response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
