import React from "react";

function ProjectHero() {
    return (
        <section className="bg-black py-20 px-6 border-b border-zinc-800">
            <div className="max-w-5xl mx-auto text-center">
                <span className="text-cyan-400 font-semibold uppercase tracking-widest text-sm block mb-4">
                    Our Portfolio
                </span>

                <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
                    Crafting Exceptional Digital Solutions & Brand Experiences
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    Explore our diverse showcase of digital products, brand identities, UI/UX systems, and marketing campaigns designed for modern industry leaders.
                </p>
            </div>
        </section>
    );
}

export default ProjectHero;
