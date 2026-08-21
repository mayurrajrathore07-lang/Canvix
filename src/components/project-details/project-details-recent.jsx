import React from "react";
import Link from "next/link";

const recentProjectsList = [
    {
        id: "1",
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
        title: "Web UI design",
        category: "Creative UI design",
    },
    {
        id: "2",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
        title: "To design Digital Strategy",
        category: "Social Media Marketing",
    },
    {
        id: "4",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
        title: "UI Design",
        category: "Creative Rebranding for logo",
    },
];

function ProjectDetailsRecent({ currentId }) {
    return (
        <section className="bg-[#0c0d0e] py-14 md:py-20 px-4 sm:px-6 md:px-8 text-white border-t border-white/10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white text-center mb-10 md:mb-14">
                    Recent Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {recentProjectsList.map((item) => (
                        <div key={item.id} className="flex flex-col group">
                            <div className="relative w-full h-64 sm:h-72 rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 mb-4 shadow-sm">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <Link href={`/projects/${item.id}`} className="absolute inset-0" aria-label={item.title} />
                            </div>

                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#30B5AA] transition-colors">
                                    <Link href={`/projects/${item.id}`}>
                                        {item.title}
                                    </Link>
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                                    {item.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectDetailsRecent;

