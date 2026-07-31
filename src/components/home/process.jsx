import React from "react";
import { FaLightbulb, FaEnvelope, FaSlidersH, FaCheckCircle, FaArrowRight } from "react-icons/fa";

function Process() {
    const steps = [
        {
            id: 1,
            title: "Ideate",
            icon: <FaLightbulb className="w-5 h-5 text-white" />,
            desc: "The ideation process is a crucial phase in the design process where creative thinking and brainstorming",
        },
        {
            id: 2,
            title: "Research",
            icon: <FaEnvelope className="w-5 h-5 text-white" />,
            desc: "Research is a critical component of the design process, helping designers understand the problem",
        },
        {
            id: 3,
            title: "Create",
            icon: <FaSlidersH className="w-5 h-5 text-white" />,
            desc: "Designing a process involves several key steps to ensure clarity, efficiency, successful implementation",
        },
        {
            id: 4,
            title: "Testing",
            icon: <FaCheckCircle className="w-5 h-5 text-white" />,
            desc: "Testing is a crucial phase in the design process to ensure that the product or system meets the specified requirements",
        },
    ];

    return (
        <section className="bg-white py-20 px-6 text-zinc-900">
            <div className="max-w-7xl mx-auto">
                {/* Section Subtitle & Title */}
                <div className="text-center mb-16">
                    <p className="text-cyan-400 text-lg font-semibold tracking-wide mb-2">
                        Process
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900">
                        Process that moves things forward
                    </h2>
                </div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative flex flex-col">
                            {/* Step Header: Dark Badge Icon + Title */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-14 h-14 bg-zinc-900 rounded-full flex items-center justify-center shrink-0">
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-zinc-900">{step.title}</h3>
                            </div>

                            {/* Card Body */}
                            <div className="border border-gray-200 rounded-3xl p-6 bg-white shadow-sm flex-1">
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Arrow Indicator for Desktop */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute -right-5 top-20 text-gray-300 z-10">
                                    <FaArrowRight className="w-5 h-5" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Process;