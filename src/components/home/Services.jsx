import React from "react";
import { FaPenNib, FaBezierCurve, FaBullseye, FaDesktop, FaLightbulb, FaHeart } from "react-icons/fa";

function Services() {
    const services = [
        {
            title: "Content Marketing",
            desc: "Our team creates engaging content strategies to build authority and drive organic traffic.",
            icon: <FaPenNib />,
            highlight: false,
        },
        {
            title: "Graphic Design",
            desc: "Creative visuals tailored to reflect your brand's unique identity.",
            icon: <FaBezierCurve />,
            highlight: true,
        },
        {
            title: "Digital Marketing",
            desc: "Data-driven marketing strategies to increase brand reach and conversion.",
            icon: <FaBullseye />,
            highlight: false,
        },
        {
            title: "Web Design",
            desc: "Modern, responsive, user-friendly websites that look great across all screens.",
            icon: <FaDesktop />,
            highlight: false,
        },
        {
            title: "IT Consulting",
            desc: "Connecting tech solutions to business goals. We guide your digital transformation.",
            icon: <FaLightbulb />,
            highlight: false,
        },
        {
            title: "Brand Identity",
            desc: "Distinct logo design and brand identity packages tailored to stand out.",
            icon: <FaHeart />,
            highlight: false,
        },
    ];

    return (
        <section className="bg-[#111215] py-24 px-6 md:px-12 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-[#30B5AA] text-sm font-semibold uppercase tracking-wider mb-3">
                        Our Services
                    </p>

                    <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white">
                        High-impact services <br className="hidden sm:inline" /> for your business and jobs
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-8 lg:p-10 transition-all duration-300 border cursor-pointer group ${
                                item.highlight
                                    ? "bg-[#18191c] border-[#30B5AA]/40 shadow-xl hover:-translate-y-1.5"
                                    : "bg-[#141518] border-white/5 hover:border-white/20 hover:-translate-y-1.5 shadow-md"
                            }`}
                        >
                            <div
                                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg mb-8 transition-colors ${
                                    item.highlight
                                        ? "bg-[#30B5AA] text-black"
                                        : "bg-white/10 text-white group-hover:bg-[#30B5AA] group-hover:text-black"
                                }`}
                            >
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#30B5AA] transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-sm leading-relaxed text-gray-400">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;