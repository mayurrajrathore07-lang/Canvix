import React from "react";

function ProjectDetailsDescription({ project }) {
    return (
        <section className="bg-black py-20 px-6">
            <div className="max-w-4xl mx-auto space-y-16">

                {/* Overview */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Project Overview & Objective
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        The primary goal was to create a cohesive digital experience that translates complex data into simple, delightful, and actionable interfaces. Our team spearheaded end-to-end design, prototyping, architectural planning, and performance optimization.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Through close collaboration with product stakeholders, we established modern UI patterns, dark-mode design tokens, and a flexible design system engineered to scale seamlessly across enterprise web and mobile applications.
                    </p>
                </div>

                {/* Key Features / Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
                        <h3 className="text-xl font-bold text-cyan-400 mb-4">The Challenge</h3>
                        <p className="text-gray-400 text-base leading-relaxed">
                            Managing high-density information, user workflow friction, and inconsistent component architecture across legacy product modules.
                        </p>
                    </div>

                    <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
                        <h3 className="text-xl font-bold text-cyan-400 mb-4">Our Solution</h3>
                        <p className="text-gray-400 text-base leading-relaxed">
                            Built a unified design system with reusable React components, micro-animations, accessible color contrast ratios, and streamlined user navigation flows.
                        </p>
                    </div>
                </div>

                {/* Key Results */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-12">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Measurable Impact & Results</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        <div>
                            <span className="text-4xl font-extrabold text-cyan-400 block mb-2">+140%</span>
                            <span className="text-gray-300 text-sm font-medium">User Engagement</span>
                        </div>
                        <div>
                            <span className="text-4xl font-extrabold text-cyan-400 block mb-2">4.9/5</span>
                            <span className="text-gray-300 text-sm font-medium">Satisfaction Score</span>
                        </div>
                        <div>
                            <span className="text-4xl font-extrabold text-cyan-400 block mb-2">35%</span>
                            <span className="text-gray-300 text-sm font-medium">Faster Conversion Speed</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ProjectDetailsDescription;
