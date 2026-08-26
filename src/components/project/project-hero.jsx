import React from "react";
import { FaLayerGroup, FaRegStar, FaGlobe } from "react-icons/fa";

function ProjectHero() {
    return (
        <section className="bg-white pt-6 pb-4 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <div className="relative overflow-hidden bg-[#0c0d0e] rounded-3xl py-14 sm:py-20 px-6 sm:px-12 text-center shadow-2xl border border-gray-800">
                    {/* Ambient Glows */}
                    <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#30B5AA]/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                        {/* Top Category Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#30B5AA]/10 text-[#30B5AA] text-xs font-semibold uppercase tracking-wider mb-6 border border-[#30B5AA]/20 shadow-inner">
                            <span className="w-2 h-2 rounded-full bg-[#30B5AA] animate-pulse" />
                            <span>Featured Case Studies & Work</span>
                        </div>

                        {/* Hero Headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
                            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#30B5AA] via-teal-300 to-cyan-400">Portfolio</span>
                        </h1>

                        {/* Description Copy */}
                        <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed">
                            Discover how we empower brands and enterprise leaders through cutting-edge UI/UX, scalable cloud architecture, AI systems, and digital growth strategies.
                        </p>

                        {/* Highlight Metrics */}
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-6 border-t border-gray-800/80 w-full max-w-xl">
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
                                <FaLayerGroup className="text-[#30B5AA]" />
                                <span><strong className="text-white font-semibold">150+</strong> Projects Delivered</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
                                <FaRegStar className="text-[#30B5AA]" />
                                <span><strong className="text-white font-semibold">99.4%</strong> Client Satisfaction</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
                                <FaGlobe className="text-[#30B5AA]" />
                                <span><strong className="text-white font-semibold">12+</strong> Tech Domains</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectHero;


