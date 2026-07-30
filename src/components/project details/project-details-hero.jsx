import React from "react";

function ProjectDetailsHero({ project }) {
    const defaultData = {
        title: "Web UI Design System",
        category: "Creative UI/UX Design",
        client: "Fintech Core Inc.",
        year: "2025",
        services: "UI/UX Architecture, Design Systems, Prototyping",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    };

    const current = project || defaultData;

    return (
        <section className="bg-black py-16 px-6 border-b border-zinc-800">
            <div className="max-w-6xl mx-auto">
                <span className="text-cyan-400 font-semibold uppercase tracking-widest text-sm block mb-3">
                    Project Case Study
                </span>

                <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-8">
                    {current.title}
                </h1>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 mb-12">
                    <div>
                        <span className="text-gray-500 text-xs font-semibold uppercase block mb-1">Client</span>
                        <span className="text-white font-bold text-base md:text-lg">{current.client || "Fintech Core"}</span>
                    </div>

                    <div>
                        <span className="text-gray-500 text-xs font-semibold uppercase block mb-1">Category</span>
                        <span className="text-cyan-400 font-bold text-base md:text-lg">{current.category}</span>
                    </div>

                    <div>
                        <span className="text-gray-500 text-xs font-semibold uppercase block mb-1">Year</span>
                        <span className="text-white font-bold text-base md:text-lg">{current.year || "2025"}</span>
                    </div>

                    <div>
                        <span className="text-gray-500 text-xs font-semibold uppercase block mb-1">Services</span>
                        <span className="text-white font-bold text-base md:text-lg">{current.services || "Design & Tech"}</span>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl h-[350px] sm:h-[500px]">
                    <img
                        src={current.image}
                        alt={current.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default ProjectDetailsHero;
