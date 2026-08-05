import React from "react";
import { FaPenNib, FaBezierCurve, FaBullseye, FaDesktop, FaLightbulb, FaHeart } from "react-icons/fa";

function Services() {
    const services = [
        {
            title: "Content Marketing",
            desc: "Our team creates engaging content strategies to build authority and drive organic traffic.",
            icon: <FaPenNib />,

        },
        {
            title: "Graphic Design",
            desc: "Creative visuals tailored to reflect your brand's unique identity.",
            icon: <FaBezierCurve />,


        },
        {
            title: "Digital Marketing",
            desc: "Data-driven marketing strategies to increase brand reach and conversion.",
            icon: <FaBullseye />,
        },
        {
            title: "Web Design",
            desc: "Modern, responsive, user-friendly websites that look great across all screens.",
            icon: <FaDesktop />,
        },
        {
            title: "IT Consulting",
            desc: "Connecting tech solutions to business goals. We guide your digital transformation.",
            icon: <FaLightbulb />,
        },
        {
            title: "Brand Identity",
            desc: "Distinct logo design and brand identity packages tailored to stand out.",
            icon: <FaHeart />,
        },
    ];

    return (
        <section className="bg-[#f8f9fa] py-24 px-6 md:px-12 text-[#111111]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-[#30B5AA] text-sm font-semibold uppercase tracking-wider mb-3">
                        Our Services
                    </p>

                    <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#111111]">
                        High-impact services <br className="hidden sm:inline" /> for your business and jobs
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:bg-black cursor-pointer ${item.dark
                                ? "bg-[#0c0d0e] text-white shadow-xl hover:bg-white hover:text-black"
                                : "bg-[#f0f2f5] text-[#111111] hover:shadow-lg hover:-translate-y-1 hover:text-black"
                                }`}
                        >
                            <div
                                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg mb-8 ${item.dark
                                    ? "bg-black text-black hover:text-white hover:bg-black"
                                    : "bg-black text-white shadow-sm hover:text-black hover:bg-white"
                                    }`}
                            >
                                {item.icon}
                            </div>

                            <h3 className={`text-xl font-bold mb-3 ${item.dark ? "text-white" : "text-[#111111]"}`}>
                                {item.title}
                            </h3>

                            <p className={`text-sm leading-relaxed ${item.dark ? "text-gray-300" : "text-gray-600"}`}>
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