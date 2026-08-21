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
        <section className="py-20 px-6 md:px-12 bg-[#f8f9fa] text-[#111111]">
            <div className="max-w-4xl mx-auto bg-[#f0f2f5] rounded-3xl p-8 sm:p-14 text-center shadow-sm relative border border-gray-200/50">

                {/* Avatar */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mx-auto mb-6 shadow-md border-2 border-white">
                    <img
                        src={current.profile}
                        alt={current.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Quote Text */}
                <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl font-serif font-bold text-[#111111] leading-relaxed mb-6">
                    {current.quote}
                </p>

                {/* Name & Role */}
                <h3 className="text-base sm:text-lg font-bold text-[#111111]">{current.name}</h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-0.5 mb-8">{current.role}</p>

                {/* Controls */}
                <div className="flex justify-center items-center gap-3">
                    <button
                        onClick={handlePrev}
                        aria-label="Previous Testimonial"
                        className="w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center hover:bg-[#30B5AA] transition shadow-sm"
                    >
                        <FaChevronLeft className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-1.5 px-2">
                        {testimonialsData.map((_, idx) => (
                            <div
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                                    idx === currentIndex ? "w-6 bg-[#111111]" : "w-2 bg-gray-300 hover:bg-gray-400"
                                }`}
                            ></div>
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        aria-label="Next Testimonial"
                        className="w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center hover:bg-[#30B5AA] transition shadow-sm"
                    >
                        <FaChevronRight className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;