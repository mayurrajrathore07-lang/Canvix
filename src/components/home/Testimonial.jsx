import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonialsData = [
    {
        id: 1,
        profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
        quote: "“Be genuine in your assessment, and provide constructive feedback to benefit both potential customers and the company providing the product or service.”",
        name: "Jacqueline Miller",
        role: "CEO of Eduport",
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
        <section className="py-20 px-6 bg-white">
            <div className="max-w-5xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
                <div className="absolute top-6 left-6 text-cyan-400/20 text-6xl">
                    <FaQuoteLeft />
                </div>

                <img
                    src={current.profile}
                    alt={current.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-8 border-2 border-cyan-400 p-1"
                />

                <p className="max-w-3xl mx-auto text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-snug mb-8">
                    {current.quote}
                </p>

                <h3 className="text-xl font-bold text-cyan-400">{current.name}</h3>
                <p className="text-gray-400 text-sm mt-1 mb-8">{current.role}</p>

                <div className="flex justify-center items-center gap-4">
                    <button
                        onClick={handlePrev}
                        aria-label="Previous Testimonial"
                        className="w-12 h-12 rounded-full border border-zinc-700 bg-zinc-800 text-white flex items-center justify-center hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition"
                    >
                        <FaChevronLeft />
                    </button>

                    <span className="text-xs text-gray-500 font-mono">
                        {currentIndex + 1} / {testimonialsData.length}
                    </span>

                    <button
                        onClick={handleNext}
                        aria-label="Next Testimonial"
                        className="w-12 h-12 rounded-full border border-zinc-700 bg-zinc-800 text-white flex items-center justify-center hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;