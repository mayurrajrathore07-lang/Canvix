import React from "react";
import { FaLightbulb, FaSearch, FaPalette, FaCheckCircle } from "react-icons/fa";

function Process() {
    const steps = [
        {
            id: 1,
            title: "Ideate",
            icon: <FaLightbulb className="w-4 h-4" />,
            desc: "The ideation process is a crucial phase in the design process where creative thinking and brainstorming happens.",
        },
        {
            id: 2,
            title: "Research",
            icon: <FaSearch className="w-4 h-4" />,
            desc: "Research is a critical component of the design process, helping designers understand user needs and market demand.",
        },
        {
            id: 3,
            title: "Create",
            icon: <FaPalette className="w-4 h-4" />,
            desc: "Designing a process involves several key steps to ensure clarity, efficiency, and successful visual implementation.",
        },
        {
            id: 4,
            title: "Testing",
            icon: <FaCheckCircle className="w-4 h-4" />,
            desc: "Testing is a crucial phase in the design process to ensure that the product or system meets all specified quality requirements.",
        },
    ];

    return (
        <section className="bg-white py-24 px-6 md:px-12 text-[#111111]">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <p className="text-[#30B5AA] text-sm font-semibold uppercase tracking-wider mb-3">
                        Process
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#111111]">
                        Process that moves <br className="hidden sm:inline" /> things forward
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="bg-[#f8f9fa] border border-gray-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:bg-black hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3.5">
                                        <div className="w-10 h-10 bg-[#111111] text-white rounded-full flex items-center justify-center shrink-0 shadow-sm group-hover:bg-white group-hover:text-black transition-colors">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-[#111111] group-hover:text-white transition-colors">{step.title}</h3>
                                    </div>
                                    <span className="text-xs font-serif font-bold text-gray-400 group-hover:text-[#30B5AA] transition-colors">
                                        0{step.id}
                                    </span>
                                </div>

                                <p className="text-gray-600 group-hover:text-gray-300 text-xs sm:text-sm leading-relaxed transition-colors">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Process;
