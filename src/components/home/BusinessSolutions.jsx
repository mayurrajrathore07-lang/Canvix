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
        tagline: "Autonomous full-cycle tech team",
        desc: "Dedicated squad of senior engineers, designers & PMs aligned with your sprint rituals.",
        features: [
            "100% Dedicated Full-Time Talent",
            "Direct Slack & Jira Integration",
            "Zero Overhead & Full IP Ownership",
        ],
        idealFor: "Ideal for Series A+ & enterprises",
        badge: "Most Popular",
        highlight: true,
        icon: <FaUserFriends />,
    },
    {
        id: "turnkey-projects",
        title: "End-to-End Turnkey Delivery",
        tagline: "Fixed scope & guaranteed timeline",
        desc: "Full product delivery from initial architecture to final production launch.",
        features: [
            "Fixed-Price / Milestone Model",
            "Guaranteed SLA & Deliverables",
            "Post-Launch Warranty & Support",
        ],
        idealFor: "Ideal for MVPs & new launches",
        badge: "Guaranteed SLA",
        highlight: false,
        icon: <FaCogs />,
    },
    {
        id: "staff-augmentation",
        title: "Staff Augmentation",
        tagline: "Fill critical tech gaps in 48h",
        desc: "Embed vetted individual developers directly into your team to boost velocity.",
        features: [
            "Rapid 48h Onboarding",
            "Timezone-Aligned Developers",
            "Strict Technical Vetting",
        ],
        idealFor: "Ideal for immediate capacity",
        badge: "On-Demand",
        highlight: false,
        icon: <FaUserCheck />,
    },
    {
        id: "fractional-advisory",
        title: "Fractional Executive Advisory",
        tagline: "C-level tech leadership on demand",
        desc: "Fractional CTO & CFO guidance for roadmap scaling, cloud costs, and audits.",
        features: [
            "Fractional CTO & Architecture",
            "Cloud & Cost Optimization",
            "Strategic Weekly Advisory Hours",
        ],
        idealFor: "Ideal for startups & scaling SMBs",
        badge: "Strategic",
        highlight: false,
        icon: <FaChessKing />,
    },
];

export default function BusinessSolutions() {
    return (
        <section className="bg-[#0B0F19] text-white py-20 px-6 md:px-12 border-t border-slate-800/80 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <p className="text-[#30B5AA] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2">
                        Flexible Engagement Models
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                        Business Solutions Tailored to Your Scale
                    </h2>
                    <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed">
                        Full turnkey teams, specialized staff augmentation, or strategic executive leadership.
                    </p>
                </div>

                {/* Models Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
                    {models.map((model) => (
                        <div
                            key={model.id}
                            className={`rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 relative border ${
                                model.highlight
                                    ? "bg-gradient-to-b from-[#18191c] via-[#141518] to-[#0f1012] border-[#30B5AA] shadow-[0_0_25px_rgba(48,181,170,0.15)]"
                                    : "bg-[#111215] border-white/10 hover:border-white/20 hover:bg-[#18191c]"
                            }`}
                        >
                            {model.highlight && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#30B5AA] text-black text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-md">
                                    {model.badge}
                                </div>
                            )}

                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <div
                                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
                                            model.highlight
                                                ? "bg-[#30B5AA] text-black"
                                                : "bg-white/10 text-[#30B5AA]"
                                        }`}
                                    >
                                        {model.icon}
                                    </div>
                                    {!model.highlight && (
                                        <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5">
                                            {model.badge}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-base font-bold text-white mb-0.5">
                                    {model.title}
                                </h3>
                                <p className="text-[11px] text-[#30B5AA] font-medium mb-2">
                                    {model.tagline}
                                </p>
                                <p className="text-gray-400 text-xs leading-relaxed mb-3">
                                    {model.desc}
                                </p>

                                <div className="space-y-1.5 mb-4 pt-3 border-t border-white/10">
                                    {model.features.map((feat, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-2 text-xs text-gray-300"
                                        >
                                            <FaCheck className="text-[#30B5AA] text-[10px] mt-0.5 shrink-0" />
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="text-[10px] text-gray-500 italic mb-3">
                                    {model.idealFor}
                                </p>
                                <Link
                                    href="/contact"
                                    className={`w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-bold transition duration-300 ${
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
                <div className="mt-10 bg-gradient-to-r from-[#18191c] via-[#1a1c22] to-[#18191c] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
                    <div>
                        <h4 className="text-lg sm:text-xl font-serif font-bold text-white mb-1">
                            Unsure which engagement model suits your project best?
                        </h4>
                        <p className="text-gray-400 text-xs sm:text-sm">
                            Speak with our solutions architect for a 30-minute scoping assessment and budget estimate.
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-white text-black hover:bg-[#30B5AA] px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition shrink-0 shadow-lg"
                    >
                        <span>Book Free Scoping Call</span>
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
}

