"use client";

import Link from "next/link";
import {
    FaShieldAlt,
    FaBolt,
    FaUsersCog,
    FaChartLine,
    FaHeadset,
    FaAward,
    FaCheckCircle,
    FaArrowRight,
} from "react-icons/fa";

const advantages = [
    {
        icon: <FaAward />,
        title: "Full-Spectrum Unified Services",
        desc: "No more juggling multiple vendors. From AI development and cloud infrastructure to executive staffing, marketing, and CFO advisory — we manage your entire business lifecycle seamlessly.",
        badge: "All-in-One",
        accent: "#30B5AA",
    },
    {
        icon: <FaShieldAlt />,
        title: "Enterprise Security & Compliance",
        desc: "Every system, database, and process we build complies strictly with SOC2, HIPAA, GDPR, and PCI-DSS standards, safeguarding your confidential intellectual property and customer data.",
        badge: "Certified",
        accent: "#7c3aed",
    },
    {
        icon: <FaBolt />,
        title: "Rapid Deployment & 48h Pods",
        desc: "Need immediate bandwidth? Our vetted engineers, recruitment teams, and technical consultants can onboard and integrate with your existing workflow within 48 to 72 hours.",
        badge: "High Velocity",
        accent: "#f59e0b",
    },
    {
        icon: <FaChartLine />,
        title: "Measurable ROI & KPI Tracking",
        desc: "We focus on real bottom-line impact. Every sprint, campaign, and placement comes with clear analytical reporting, transparency, and quantifiable business milestones.",
        badge: "Data-Driven",
        accent: "#06b6d4",
    },
    {
        icon: <FaUsersCog />,
        title: "Top 1% Global Vetted Talent",
        desc: "Our rigorous 5-stage recruitment vetting ensures you work only with elite technical architects, senior designers, and certified financial consultants who lead their domains.",
        badge: "Elite Experts",
        accent: "#ec4899",
    },
    {
        icon: <FaHeadset />,
        title: "24/7 Global SLA & Dedicated Support",
        desc: "Round-the-clock incident response, proactive server health monitoring, and dedicated account managers who prioritize your queries with guaranteed 15-minute response times.",
        badge: "Always On",
        accent: "#10b981",
    },
];

const stats = [
    { value: "99.8%", label: "On-Time Project Delivery Rate" },
    { value: "48 Hrs", label: "Average Talent Match Time" },
    { value: "25+", label: "Global Clients & Enterprises" },
    { value: "98%", label: "Long-Term Client Retention" },
];

export default function WhyChooseUs() {
    return (
        <section className="bg-white text-[#111111] py-24 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-[#30B5AA] text-sm font-semibold uppercase tracking-widest mb-3">
                        The Canvix Difference
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#111111] leading-tight">
                        Why High-Growth Companies <br className="hidden sm:inline" /> Choose Canvix
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">
                        We don&apos;t just deliver deliverables; we build strategic partnerships that empower tech leaders, founders, and enterprises to scale faster and outpace competition.
                    </p>
                </div>

                {/* Key Advantage Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {advantages.map((item) => (
                        <div
                            key={item.title}
                            className="bg-[#f8f9fa] border border-gray-200/80 rounded-3xl p-8 hover:bg-black hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div
                                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110 shadow-sm group-hover:!bg-white group-hover:!text-black group-hover:!border-white"
                                        style={{
                                            backgroundColor: `${item.accent}15`,
                                            color: item.accent,
                                            border: `1px solid ${item.accent}30`,
                                        }}
                                    >
                                        {item.icon}
                                    </div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-200 text-gray-800 group-hover:bg-white/20 group-hover:text-white transition-colors">
                                        {item.badge}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-[#111111] mb-3 group-hover:text-white transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-200 group-hover:border-white/20 flex items-center gap-2 text-xs font-semibold text-gray-500 group-hover:text-gray-300 transition-colors">
                                <FaCheckCircle className="text-[#30B5AA]" />
                                <span>Guaranteed Service Level Agreement</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Bar */}
                <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-8 text-center items-center">
                    {stats.map((stat) => (
                        <div key={stat.label} className="space-y-1">
                            <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#30B5AA] tracking-tight">
                                {stat.value}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-300 font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Callout */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 text-sm mb-4">
                        Ready to experience the Canvix advantage firsthand?
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 bg-[#111111] hover:bg-[#30B5AA] hover:text-black text-white px-8 py-3.5 rounded-full text-sm font-semibold transition duration-300 shadow-md group"
                    >
                        <span>Schedule a Discovery Call</span>
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
