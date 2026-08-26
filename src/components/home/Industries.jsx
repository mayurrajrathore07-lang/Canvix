"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    FaUniversity,
    FaHeartbeat,
    FaShoppingCart,
    FaCloud,
    FaTruck,
    FaBuilding,
    FaGraduationCap,
    FaGamepad,
    FaArrowRight,
    FaCheck,
} from "react-icons/fa";

const industries = [
    {
        id: "fintech",
        name: "FinTech & Banking",
        icon: <FaUniversity />,
        tagline: "Secure, compliant, and scalable financial solutions",
        desc: "We engineer high-frequency trading platforms, automated fraud detection systems, PCI-DSS compliant payment gateways, and banking portals.",
        highlights: [
            "PCI-DSS & SOC2 Compliance",
            "Algorithmic Fraud Prevention",
            "Real-time Payment Rails",
            "Open Banking & API Gateways",
        ],
        metric: "$4.2B+",
        metricLabel: "Processed Transactions",
    },
    {
        id: "healthcare",
        name: "Healthcare & Life Sciences",
        icon: <FaHeartbeat />,
        tagline: "HIPAA-compliant digital health & patient portals",
        desc: "Transforming patient care with custom EHR integrations, telehealth mobile apps, clinical data analytics, and AI diagnostic tooling.",
        highlights: [
            "HIPAA & GDPR Compliance",
            "Telehealth Video Suites",
            "EHR/EMR Interoperability",
            "Clinical Trial Analytics",
        ],
        metric: "1.2M+",
        metricLabel: "Active Patient Records",
    },
    {
        id: "ecommerce",
        name: "E-Commerce & Retail",
        icon: <FaShoppingCart />,
        tagline: "High-conversion omnichannel shopping ecosystems",
        desc: "Headless commerce architectures, personalized recommendation engines, automated inventory pipelines, and performance marketing.",
        highlights: [
            "Headless Shopify & Custom Stores",
            "AI Dynamic Product Recommenders",
            "Omnichannel Inventory Sync",
            "Sub-second Page Load Times",
        ],
        metric: "4.8x",
        metricLabel: "Average Conversion Boost",
    },
    {
        id: "saas",
        name: "SaaS & Enterprise Tech",
        icon: <FaCloud />,
        tagline: "Multi-tenant cloud architectures built to scale",
        desc: "From seed stage to IPO: multi-tenant database designs, subscription billing microservices, API platforms, and 99.99% SLA reliability.",
        highlights: [
            "Multi-Tenant Kubernetes Systems",
            "Stripe & Paddle Billing Engines",
            "Automated CI/CD DevOps Pipelines",
            "Zero-Downtime Migration",
        ],
        metric: "99.99%",
        metricLabel: "Infrastructure Uptime",
    },
    {
        id: "logistics",
        name: "Logistics & Supply Chain",
        icon: <FaTruck />,
        tagline: "Real-time IoT tracking & route optimization",
        desc: "End-to-end fleet tracking software, warehouse automation, predictive dispatch algorithms, and supply chain visibility portals.",
        highlights: [
            "Real-Time Telematics & GPS",
            "AI Route & Fuel Optimization",
            "Automated Dispatch Dispatching",
            "ERP & WMS Integrations",
        ],
        metric: "32%",
        metricLabel: "Operational Cost Reduction",
    },
    {
        id: "realestate",
        name: "Real Estate & PropTech",
        icon: <FaBuilding />,
        tagline: "Interactive property portals & virtual tours",
        desc: "MLS/IDX integrated real estate platforms, 3D interactive property walkthroughs, tenant management suites, and automated valuation models.",
        highlights: [
            "MLS & IDX Fast Data Feeds",
            "Tenant & Lease Automation",
            "3D Virtual Tour Integration",
            "Mortgage Calculator Engines",
        ],
        metric: "15,000+",
        metricLabel: "Properties Managed",
    },
    {
        id: "edtech",
        name: "Education & EdTech",
        icon: <FaGraduationCap />,
        tagline: "Interactive LMS & adaptive learning platforms",
        desc: "Scalable Learning Management Systems (LMS), gamified learning paths, live classroom streaming, and automated student progress analytics.",
        highlights: [
            "Custom SCORM-Compliant LMS",
            "Live Interactive Streaming",
            "AI Personalized Tutoring Paths",
            "Automated Assessment Grading",
        ],
        metric: "500k+",
        metricLabel: "Learners Empowered",
    },
    {
        id: "media",
        name: "Media, Gaming & Entertainment",
        icon: <FaGamepad />,
        tagline: "Ultra-low latency streaming & digital experiences",
        desc: "High-throughput video streaming, digital asset management, community platforms, and immersive interactive branded web experiences.",
        highlights: [
            "Low-Latency Video CDN Streaming",
            "Digital Rights Management (DRM)",
            "WebSockets Community Systems",
            "High-Concurrency Architectures",
        ],
        metric: "10M+",
        metricLabel: "Monthly Stream Viewers",
    },
];

export default function Industries() {
    const [activeIndustry, setActiveIndustry] = useState(industries[0]);

    return (
        <section className="bg-[#0B0F19] text-white py-24 px-6 md:px-12 border-t border-slate-800/80 relative overflow-hidden">
            {/* Background Glow Accents */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#30B5AA]/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#7c3aed]/5 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-[#30B5AA] text-sm font-semibold uppercase tracking-widest mb-3">
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
                        {industries.map((ind) => {
                            const isSelected = activeIndustry.id === ind.id;
                            return (
                                <button
                                    key={ind.id}
                                    onClick={() => setActiveIndustry(ind)}
                                    className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                                        isSelected
                                            ? "bg-[#18191c] border-[#30B5AA]/40 text-white shadow-lg translate-x-1"
                                            : "bg-[#111215] border-white/5 text-gray-400 hover:bg-[#18191c] hover:text-white"
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-colors ${
                                                isSelected
                                                    ? "bg-[#30B5AA] text-black font-bold shadow-sm"
                                                    : "bg-white/5 text-gray-400"
                                            }`}
                                        >
                                            {ind.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold tracking-tight text-white">
                                                {ind.name}
                                            </h3>
                                            <p className="text-xs text-gray-500 line-clamp-1">
                                                {ind.tagline}
                                            </p>
                                        </div>
                                    </div>
                                    <FaArrowRight
                                        className={`text-xs transition-transform ${
                                            isSelected
                                                ? "text-[#30B5AA] translate-x-1"
                                                : "text-gray-600 opacity-0 group-hover:opacity-100"
                                        }`}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* Right: Active Industry Detailed Showcase Card */}
                    <div className="lg:col-span-7 bg-gradient-to-br from-[#18191c] via-[#121316] to-[#0c0d0e] border border-white/10 rounded-3xl p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#30B5AA]/10 rounded-full blur-2xl pointer-events-none" />

                        <div>
                            {/* Card Top Pill & Metric */}
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-[#30B5AA]/15 border border-[#30B5AA]/30 text-[#30B5AA] flex items-center justify-center text-xl">
                                        {activeIndustry.icon}
                                    </div>
                                    <div>
                                        <span className="text-xs text-[#30B5AA] font-bold uppercase tracking-wider block">
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
                                        <span className="w-5 h-5 rounded-full bg-[#30B5AA]/20 text-[#30B5AA] flex items-center justify-center text-[10px] shrink-0">
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
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#30B5AA] hover:bg-[#289e94] text-black font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition shadow-md"
                            >
                                <span>Discuss Your Industry Needs</span>
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
