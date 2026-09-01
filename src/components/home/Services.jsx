"use client";

import { useState } from "react";
import Link from "next/link";
import {
    FaPenNib,
    FaBezierCurve,
    FaBullseye,
    FaDesktop,
    FaLightbulb,
    FaHeart,
    FaBrain,
    FaUserTie,
    FaGraduationCap,
    FaChartLine,
    FaCloud,
    FaBriefcase,
    FaArrowRight,
    FaChevronDown,
    FaChevronUp,
} from "react-icons/fa";

function Services() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [showAll, setShowAll] = useState(false);

    const categories = [
        "All",
        "IT & Technology",
        "Staffing & Careers",
        "Marketing & Creative",
        "Finance & Advisory",
    ];

    const services = [
        {
            id: "content-marketing",
            title: "Content Marketing",
            desc: "Our team creates engaging content strategies to build authority and drive organic traffic.",
            icon: <FaPenNib />,
            category: "Marketing & Creative",
            tag: "Growth",
        },
        {
            id: "graphic-design",
            title: "Graphic Design",
            desc: "Creative visuals tailored to reflect your brand's unique identity.",
            icon: <FaBezierCurve />,
            category: "Marketing & Creative",
            tag: "Branding",
        },
        {
            id: "digital-marketing",
            title: "Digital Marketing",
            desc: "Data-driven marketing strategies to increase brand reach and conversion.",
            icon: <FaBullseye />,
            category: "Marketing & Creative",
            tag: "Performance",
        },
        {
            id: "web-design",
            title: "Web Design",
            desc: "Modern, responsive, user-friendly websites that look great across all screens.",
            icon: <FaDesktop />,
            category: "IT & Technology",
            tag: "Engineering",
        },
        {
            id: "it-consulting",
            title: "IT Consulting",
            desc: "Connecting tech solutions to business goals. We guide your digital transformation.",
            icon: <FaLightbulb />,
            category: "IT & Technology",
            tag: "Advisory",
        },
        {
            id: "brand-identity",
            title: "Brand Identity",
            desc: "Distinct logo design and brand identity packages tailored to stand out.",
            icon: <FaHeart />,
            category: "Marketing & Creative",
            tag: "Identity",
        },
        {
            id: "ai-machine-learning",
            title: "AI & Machine Learning",
            desc: "Custom generative AI agents, predictive models, NLP, and computer vision that automate workflows and unlock data intelligence.",
            icon: <FaBrain />,
            category: "IT & Technology",
            tag: "Next-Gen AI",
        },
        {
            id: "it-cloud-infrastructure",
            title: "IT & Cloud Infrastructure",
            desc: "Full-cycle enterprise software development, AWS/Azure cloud architecture, DevOps automation, and 24/7 cybersecurity.",
            icon: <FaCloud />,
            category: "IT & Technology",
            tag: "Cloud & Dev",
        },
        {
            id: "staffing-recruitment",
            title: "Staffing & Recruitment",
            desc: "End-to-end tech recruitment, executive search, contract-to-hire, and dedicated offshore engineering squads vetted for excellence.",
            icon: <FaUserTie />,
            category: "Staffing & Careers",
            tag: "Talent",
        },
        {
            id: "career-services",
            title: "Career Services & Upskilling",
            desc: "Professional career coaching, technical resume engineering, executive interview prep, and corporate talent transition programs.",
            icon: <FaGraduationCap />,
            category: "Staffing & Careers",
            tag: "Mentorship",
        },
        {
            id: "accounting-finance",
            title: "Accounting & Finance",
            desc: "Strategic bookkeeping, financial modeling, tax compliance advisory, payroll management, and fractional CFO consulting.",
            icon: <FaChartLine />,
            category: "Finance & Advisory",
            tag: "Finance",
        },
        {
            id: "business-consulting",
            title: "Enterprise Business Consulting",
            desc: "Operational restructuring, digital transformation roadmaps, go-to-market strategies, and agile enterprise scaling.",
            icon: <FaBriefcase />,
            category: "Finance & Advisory",
            tag: "Strategy",
        },
    ];

    const filteredServices =
        selectedCategory === "All"
            ? services
            : services.filter((s) => s.category === selectedCategory);

    const INITIAL_SHOW_COUNT = 6;
    const displayedServices = showAll ? filteredServices : filteredServices.slice(0, INITIAL_SHOW_COUNT);
    const hasMoreServices = filteredServices.length > INITIAL_SHOW_COUNT;

    const handleCategorySelect = (cat) => {
        setSelectedCategory(cat);
        setShowAll(false);
    };

    return (
        <section id="services" className="bg-[#f8f9fa] py-24 px-6 md:px-12 text-[#111111]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <p className="text-[#30B5AA] text-sm font-semibold uppercase tracking-wider mb-3">
                        Our Services
                    </p>

                    <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#111111]">
                        High-impact services <br className="hidden sm:inline" /> for your business and jobs
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
                        From cutting-edge technology and intelligent AI systems to world-class recruitment, marketing, and financial advisory — we provide comprehensive solutions to accelerate your enterprise.
                    </p>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategorySelect(cat)}
                                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                                    selectedCategory === cat
                                        ? "bg-[#111111] text-white shadow-md"
                                        : "bg-white text-gray-700 hover:bg-gray-200 border border-gray-200"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedServices.map((item) => (
                        <Link
                            href={`/services#${item.id}`}
                            key={item.id}
                            className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-[#6E56CF] flex items-center justify-center text-xl shadow-xs group-hover:bg-[#6E56CF] group-hover:text-white transition-all duration-300 group-hover:scale-105">
                                        {item.icon}
                                    </div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/60 group-hover:bg-purple-50 group-hover:text-[#6E56CF] transition-colors">
                                        {item.tag}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-[#6E56CF] transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-sm leading-relaxed text-slate-600 font-normal">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#30B5AA] group-hover:text-[#6E56CF] transition-colors">
                                <span>Explore Capability</span>
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Show More / Show Less Button */}
                {hasMoreServices && (
                    <div className="mt-10 text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2.5 bg-white text-[#111111] hover:bg-[#111111] hover:text-white border border-gray-300 hover:border-black px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm group"
                        >
                            <span>{showAll ? "Show Less Services" : `Show More Services (${filteredServices.length - INITIAL_SHOW_COUNT} More)`}</span>
                            {showAll ? <FaChevronUp className="text-[#30B5AA] group-hover:translate-y-[-2px] transition-transform" /> : <FaChevronDown className="text-[#30B5AA] group-hover:translate-y-[2px] transition-transform" />}
                        </button>
                    </div>
                )}

                {/* Bottom CTA to dedicated services overview */}
                <div className="mt-12 text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-3 bg-[#18191c] hover:bg-black text-white px-8 py-3.5 rounded-full text-sm font-semibold transition duration-300 shadow-md group"
                    >
                        <span>View Full Service Catalog & Tech Stack</span>
                        <FaArrowRight className="text-[#30B5AA] group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Services;