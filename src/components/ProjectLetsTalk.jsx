"use client";

import React from "react";
import Link from "next/link";

const ProjectLetsTalk = () => {
    return (
        <section className="bg-white py-8 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <div className="relative overflow-hidden bg-[#242424] rounded-3xl py-14 px-6 text-center shadow-lg">

                    <svg
                        className="absolute inset-0 h-full w-full opacity-30 pointer-events-none"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                    >
                        {Array.from({ length: 16 }).map((_, i) => (
                            <path
                                key={i}
                                d={`M0 ${140 + i * 9} C300 ${260 - i * 7} 550 ${40 + i * 5} 720 ${160 + i * 6} C950 ${260 - i * 7} 1200 ${40 + i * 5} 1440 ${180 + i * 7}`}
                                fill="none"
                                stroke="rgba(255,255,255,0.15)"
                                strokeWidth="1.2"
                            />
                        ))}
                    </svg>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-white mb-8 tracking-tight">
                            Enough talk, let's get to work
                        </h2>

                        <Link
                            href="/contact"
                            className="inline-block rounded-full border border-white/50 bg-transparent px-7 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                        >
                            Get in touch
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectLetsTalk;
