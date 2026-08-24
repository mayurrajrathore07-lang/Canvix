"use client";

import React, { useState } from "react";
import Link from "next/link";

export const allProjectsData = [
    // Original 6 projects preserved exactly
    {
        id: "1",
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80",
        title: "Web UI design",
        category: "Creative UI design",
        type: "Creative & UI",
    },
    {
        id: "2",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
        title: "To design Digital Strategy",
        category: "Social Media Marketing",
        type: "Marketing & Growth",
        hasArrow: true,
    },
    {
        id: "3",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
        title: "Graphic design",
        category: "Graphic design",
        type: "Creative & UI",
    },
    {
        id: "4",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        title: "UI Design",
        category: "Creative Rebranding for logo",
        type: "Creative & UI",
    },
    {
        id: "5",
        image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
        title: "Graphic design",
        category: "Graphic design",
        type: "Creative & UI",
    },
    {
        id: "6",
        image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=1200&q=80",
        title: "UI Design",
        category: "Creative Rebranding for logo",
        type: "Creative & UI",
    },
    // Expanded IT, AI, Cloud, and Staffing case studies
    {
        id: "7",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        title: "FinTech AI Analytics & Fraud Detection Engine",
        category: "AI & Machine Learning / Financial Technology",
        type: "IT & AI",
        hasArrow: true,
    },
    {
        id: "8",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        title: "Multi-Cloud DevOps Migration & Kubernetes Platform",
        category: "Cloud Architecture & Enterprise DevOps",
        type: "Staffing & Cloud",
    },
    {
        id: "9",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
        title: "Global Tech Staffing & Offshore Engineering Squads",
        category: "Staffing, Executive Search & Talent Advisory",
        type: "Staffing & Cloud",
        hasArrow: true,
    },
    {
        id: "10",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        title: "High-Throughput Headless E-Commerce Ecosystem",
        category: "Fullstack Next.js & Performance Marketing",
        type: "Marketing & Growth",
    },
];

function ProjectProject() {
    const [filter, setFilter] = useState("All");

    const categories = ["All", "Creative & UI", "IT & AI", "Marketing & Growth", "Staffing & Cloud"];

    const filtered =
        filter === "All" ? allProjectsData : allProjectsData.filter((p) => p.type === filter);

    return (
        <section className="bg-white py-12 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Filter Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                                filter === cat
                                    ? "bg-black text-white shadow-sm"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filtered.map((item) => (
                        <div key={item.id} className="flex flex-col group">
                            {/* Card Image Box with rounded corners and fixed responsive height */}
                            <div className="relative w-full h-72 sm:h-80 rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100 mb-3 shadow-sm">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Arrow icon overlay for featured items */}
                                {item.hasArrow && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-lg font-bold shadow-md">
                                            ↗
                                        </div>
                                    </div>
                                )}

                                {/* Clickable overlay link */}
                                <Link href={`/projects/${item.id}`} className="absolute inset-0" aria-label={item.title} />
                            </div>

                            {/* Project Title and Category */}
                            <div>
                                <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 group-hover:text-[#30B5AA] transition">
                                    <Link href={`/projects/${item.id}`}>
                                        {item.title}
                                    </Link>
                                </h3>
                                <p className="text-gray-500 text-sm mt-1">
                                    {item.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectProject;
