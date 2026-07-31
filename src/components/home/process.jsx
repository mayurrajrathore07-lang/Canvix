import React from "react";
import { FaLightbulb, FaSearch, FaPalette, FaCheckCircle } from "react-icons/fa";

function Process() {
    const steps = [
        {
            id: 1,
            title: "Ideate",
            icon: <FaLightbulb className="w-4 h-4 text-white" />,
            desc: "The ideation process is a crucial phase in the design process where creative thinking and brainstorming happens.",
        },
        {
            id: 2,
            title: "Research",
            icon: <FaSearch className="w-4 h-4 text-white" />,
            desc: "Research is a critical component of the design process, helping designers understand user needs and market demand.",
        },
        {
            id: 3,
            title: "Create",
            icon: <FaPalette className="w-4 h-4 text-white" />,
            desc: "Designing a process involves several key steps to ensure clarity, efficiency, and successful visual implementation.",
        },
        {
            id: 4,
            title: "Testing",
            icon: <FaCheckCircle className="w-4 h-4 text-white" />,
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
                            className="bg-[#f8f9fa] border border-gray-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow"
                        >
                            <div>
                                <div className="flex items-center gap-3.5 mb-6">
                                    <div className="w-10 h-10 bg-[#111111] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#111111]">{step.title}</h3>
                                </div>

                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
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
