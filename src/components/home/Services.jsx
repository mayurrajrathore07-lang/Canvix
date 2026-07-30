import React from "react";
import { FaBullhorn, FaPaintBrush, FaChartLine, FaLaptopCode, FaLightbulb, FaFingerprint } from "react-icons/fa";

function Services() {
    const services = [
        {
            title: "Content Marketing",
            desc: "Our team creates engaging and shareable content that resonates with your audience and drives organic traffic.",
            icon: <FaBullhorn />,
            dark: true,
        },
        {
            title: "Graphic Design",
            desc: "Unlock the power of visual storytelling with our expert graphic design and visual identity services.",
            icon: <FaPaintBrush />,
        },
        {
            title: "Digital Marketing",
            desc: "Elevate your brand's online presence with data-driven digital marketing and advertising campaigns.",
            icon: <FaChartLine />,
        },
        {
            title: "Web Design",
            desc: "We create visually stunning, responsive, and user-friendly websites tailored for high conversion.",
            icon: <FaLaptopCode />,
        },
        {
            title: "IT Consulting",
            desc: "Professional IT consulting, cloud infrastructure, and technical implementation services for enterprise.",
            icon: <FaLightbulb />,
        },
        {
            title: "Brand Identity",
            desc: "Create a unique, memorable brand identity that sets you apart from your industry competition.",
            icon: <FaFingerprint />,
        },
    ];

    return (
        <section className="bg-black py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <p className="text-center text-cyan-400 text-lg font-semibold uppercase tracking-wider">
                    Our Services
                </p>

                <h2 className="text-center text-4xl sm:text-5xl font-bold text-white mt-3 mb-16">
                    High-impact services for your business
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl p-8 lg:p-10 transition duration-300 hover:-translate-y-2 border border-zinc-800 ${
                                item.dark ? "bg-zinc-900 text-white" : "bg-zinc-950 text-white"
                            }`}
                        >
                            <div
                                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-8 ${
                                    item.dark ? "bg-cyan-400 text-black" : "bg-zinc-800 text-cyan-400"
                                }`}
                            >
                                {item.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;