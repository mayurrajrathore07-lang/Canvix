"use client";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonialsData = [
    {
        id: 1,
        profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
        quote: "“Be accurate in your assessment, and provide constructive feedback to benefit both potential customers and the company providing top services.”",
        name: "Jacqueline Miller",
        role: "CEO of Company",
    },
    {
        id: 2,
        profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
        quote: "“Canvix transformed our brand identity completely. Their attention to detail and user experience strategy resulted in a 40% increase in user retention.”",
        name: "Marcus Vance",
        role: "Founder at TechPulse",
    },
    {
        id: 3,
        profile: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
        quote: "“Working with the Canvix team was an absolute pleasure. They delivered our complex web platform ahead of schedule with remarkable quality.”",
        name: "Elena Rostova",
        role: "VP of Product at Innovate",
    },
    {
        id: 4,
        profile: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
        quote: "“The dedicated engineering pod from Canvix built and integrated our custom LLM analytics engine in record time. Our enterprise clients are blown away.”",
        name: "David Sterling",
        role: "CTO at FinScale Global",
    },
    {
        id: 5,
        profile: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
        quote: "“Canvix’s tech staffing team helped us hire four top-tier senior backend architects in under two weeks. Their vetting process is genuinely top-tier.”",
        name: "Sarah Jenkins",
        role: "Head of Talent at CloudVentures",
    },
];

function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const current = testimonialsData[currentIndex];

    return (
        <section className="py-24 px-6 md:px-12 bg-[#0B0F19] text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#6E56CF]/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#121726] via-[#0F172A] to-[#121726] rounded-3xl p-8 sm:p-14 text-center shadow-2xl relative border border-slate-700/60 z-10">

                {/* Avatar */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mx-auto mb-6 shadow-xl border-2 border-[#30B5AA]">
                    <img
                        src={current.profile}
                        alt={current.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Quote Text */}
                <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl font-serif font-bold text-white leading-relaxed mb-6">
                    {current.quote}
                </p>

                {/* Name & Role */}
                <h3 className="text-base sm:text-lg font-bold text-white">{current.name}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-0.5 mb-8">{current.role}</p>

                {/* Controls */}
                <div className="flex justify-center items-center gap-3">
                    <button
                        onClick={handlePrev}
                        aria-label="Previous Testimonial"
                        className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#30B5AA] hover:text-black transition shadow-sm border border-white/10"
                    >
                        <FaChevronLeft className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-1.5 px-2">
                        {testimonialsData.map((_, idx) => (
                            <div
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                                    idx === currentIndex ? "w-6 bg-[#30B5AA]" : "w-2 bg-gray-600 hover:bg-gray-400"
                                }`}
                            ></div>
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        aria-label="Next Testimonial"
                        className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#30B5AA] hover:text-black transition shadow-sm border border-white/10"
                    >
                        <FaChevronRight className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;