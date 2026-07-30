import React, { useState } from "react";
import { Link } from "react-router-dom";

export const allProjectsData = [
    {
        id: "1",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        title: "Web UI Design System",
        category: "UI/UX Design",
        client: "Fintech Core Inc.",
        year: "2025",
        summary: "A modular, accessible UI system built for high-scale enterprise SaaS financial tools.",
    },
    {
        id: "2",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        title: "Digital Strategy & Analytics",
        category: "Digital Marketing",
        client: "GrowthPulse",
        year: "2024",
        summary: "Data-driven organic and paid social strategy generating 300% conversion growth.",
    },
    {
        id: "3",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
        title: "Brand Rebranding & Logo",
        category: "Branding",
        client: "Apex Motion",
        year: "2024",
        summary: "Complete visual redesign, typography system, logo mark, and design collateral.",
    },
    {
        id: "4",
        image: "https://images.unsplash.com/photo-1542744094-3a317272018a?auto=format&fit=crop&w=800&q=80",
        title: "E-Commerce Web Experience",
        category: "Web Development",
        client: "Luxe Couture",
        year: "2025",
        summary: "High-converting online store built with modern web frameworks and lightning-fast checkout.",
    },
    {
        id: "5",
        image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
        title: "Mobile Banking Application",
        category: "UI/UX Design",
        client: "Nova Bank",
        year: "2025",
        summary: "Intuitive iOS & Android app interface designed for seamless daily money management.",
    },
    {
        id: "6",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
        title: "Corporate Identity Suite",
        category: "Branding",
        client: "Horizon Ventures",
        year: "2024",
        summary: "Comprehensive corporate guidelines, stationery, and pitch deck presentations.",
    },
];

function ProjectProject() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "UI/UX Design", "Branding", "Web Development", "Digital Marketing"];

    const filteredProjects = selectedCategory === "All"
        ? allProjectsData
        : allProjectsData.filter((p) => p.category === selectedCategory);

    return (
        <section className="bg-black py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Category Filters */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                                selectedCategory === cat
                                    ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/20"
                                    : "bg-zinc-900 border border-zinc-800 text-gray-300 hover:border-zinc-600 hover:text-white"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProjects.map((item) => (
                        <div key={item.id} className="group bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:border-cyan-400/50 transition duration-300 flex flex-col">
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Link
                                        to={`/projects/${item.id}`}
                                        className="w-14 h-14 rounded-full bg-cyan-400 text-black text-2xl flex items-center justify-center font-bold hover:scale-110 transition"
                                    >
                                        ↗
                                    </Link>
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between text-xs text-cyan-400 font-medium mb-3">
                                        <span>{item.category}</span>
                                        <span>{item.year}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition mb-3">
                                        <Link to={`/projects/${item.id}`}>{item.title}</Link>
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        {item.summary}
                                    </p>
                                </div>

                                <Link
                                    to={`/projects/${item.id}`}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-400 transition"
                                >
                                    View Project Details →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectProject;
