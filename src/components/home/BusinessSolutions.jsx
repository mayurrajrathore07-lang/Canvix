"use client";

import React from "react";
import Link from "next/link";
import {
    FaUserFriends,
    FaCogs,
    FaUserCheck,
    FaChessKing,
    FaCheck,
    FaArrowRight,
} from "react-icons/fa";

const models = [
    {
        id: "dedicated-teams",
        title: "Dedicated Engineering Pods",
        tagline: "Your autonomous, full-cycle tech team",
        desc: "A fully dedicated squad of senior software engineers, UI/UX designers, QA specialists, and a project manager aligned 100% with your company culture and sprint rituals.",
        features: [
            "100% Dedicated Full-Time Talent",
            "Direct Slack/Jira Integration",
            "Zero Overhead & Full IP Ownership",
            "Flexible Scaling Up or Down",
        ],
        idealFor: "Ideal for Series A+ scaleups and enterprise product engineering.",
        badge: "Most Popular",
        highlight: true,
        icon: <FaUserFriends />,
    },
    {
        id: "turnkey-projects",
        title: "End-to-End Turnkey Delivery",
        tagline: "Fixed scope, guaranteed milestones & timeline",
        desc: "We take your product concept or business requirements from architectural blueprint and design to full deployment, testing, and production launch.",
        features: [
            "Fixed-Price or Milestones Model",
            "Guaranteed Timeline & Deliverables",
            "Complete Architecture & UI/UX Included",
            "Post-Launch Warranty & Support",
        ],
        idealFor: "Ideal for new product launches, MVP rollouts, and major platform overhauls.",
        badge: "Guaranteed SLA",
        highlight: false,
        icon: <FaCogs />,
    },
    {
        id: "staff-augmentation",
        title: "Staff Augmentation",
        tagline: "Fill critical skill gaps in 48 hours",
        desc: "Embed battle-tested individual contributors (React, Node, Python, AWS, AI, DevOps) directly into your existing engineering hierarchy to speed up feature delivery.",
        features: [
            "Rapid Onboarding (48h Turnaround)",
            "Timezone-Aligned Work Hours",
            "Strict Technical & English Vetting",
            "Monthly Flexible Billing",
        ],
        idealFor: "Ideal for teams needing immediate capacity or niche technical expertise.",
        badge: "On-Demand",
        highlight: false,
        icon: <FaUserCheck />,
    },
    {
        id: "fractional-advisory",
        title: "Fractional Executive Advisory",
        tagline: "C-level guidance without full-time overhead",
        desc: "On-demand Fractional CTO, Fractional CFO, and AI Strategy Partners who guide your technological roadmaps, cloud budget optimization, and investor audits.",
        features: [
            "Fractional CTO & Tech Due Diligence",
            "Fractional CFO & Financial Forecasts",
            "AI/ML Enterprise Transformation",
            "Strategic Weekly Advisory Hours",
        ],
        idealFor: "Ideal for growing startups and established SMBs seeking executive expertise.",
        badge: "Strategic",
        highlight: false,
        icon: <FaChessKing />,
    },
];

export default function BusinessSolutions() {
    return (
        <section className="bg-[#0c0d0e] text-white py-24 px-6 md:px-12 border-t border-white/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-[#30B5AA] text-sm font-semibold uppercase tracking-widest mb-3">
                        Flexible Engagement Models
                    </p>
                    <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
                        Business Solutions Tailored <br className="hidden sm:inline" /> to Your Scale
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
                        Whether you need a full turnkey team, specialized staff augmentation, or strategic fractional executive leadership — we have the right partnership model for you.
                    </p>
                </div>

                {/* Models Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {models.map((model) => (
                        <div
                            key={model.id}
                            className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative border ${
                                model.highlight
                                    ? "bg-gradient-to-b from-[#18191c] via-[#141518] to-[#0f1012] border-[#30B5AA] shadow-[0_0_30px_rgba(48,181,170,0.15)]"
                                    : "bg-[#111215] border-white/10 hover:border-white/20 hover:bg-[#18191c]"
                            }`}
                        >
                            {model.highlight && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#30B5AA] text-black text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                                    {model.badge}
                                </div>
                            )}

                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div
                                        className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${
                                            model.highlight
                                                ? "bg-[#30B5AA] text-black"
                                                : "bg-white/10 text-[#30B5AA]"
                                        }`}
                                    >
                                        {model.icon}
                                    </div>
                                    {!model.highlight && (
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5">
                                            {model.badge}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-lg font-bold text-white mb-1">
                                    {model.title}
                                </h3>
                                <p className="text-xs text-[#30B5AA] font-medium mb-4">
                                    {model.tagline}
                                </p>
                                <p className="text-gray-400 text-xs leading-relaxed mb-6">
                                    {model.desc}
                                </p>

                                <div className="space-y-2.5 mb-6 pt-4 border-t border-white/10">
                                    {model.features.map((feat, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-2.5 text-xs text-gray-300"
                                        >
                                            <FaCheck className="text-[#30B5AA] text-[10px] mt-1 shrink-0" />
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="text-[11px] text-gray-500 italic mb-5">
                                    {model.idealFor}
                                </p>
                                <Link
                                    href="/contact"
                                    className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold transition duration-300 ${
                                        model.highlight
                                            ? "bg-[#30B5AA] hover:bg-white text-black shadow-md"
                                            : "bg-white/10 hover:bg-white hover:text-black text-white"
                                    }`}
                                >
                                    <span>Get Started</span>
                                    <FaArrowRight className="text-[10px]" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Consultation callout banner */}
                <div className="mt-14 bg-gradient-to-r from-[#18191c] via-[#1a1c22] to-[#18191c] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                    <div>
                        <h4 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                            Unsure which engagement model suits your project best?
                        </h4>
                        <p className="text-gray-400 text-xs sm:text-sm">
                            Speak with our solutions architect for a 30-minute scoping assessment and budget estimate.
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2.5 bg-white text-black hover:bg-[#30B5AA] px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold transition shrink-0 shadow-lg"
                    >
                        <span>Book Free Scoping Call</span>
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
}
