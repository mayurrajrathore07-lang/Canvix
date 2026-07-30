import React from "react";
import { Link } from "react-router-dom";

export const allProjectsData = [
    {
        id: "1",
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80",
        title: "Web UI design",
        category: "Creative UI design",
    },
    {
        id: "2",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
        title: "To design Digital Strategy",
        category: "Social Media Marketing",
        hasArrow: true,
    },
    {
        id: "3",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
        title: "Graphic design",
        category: "Graphic design",
    },
    {
        id: "4",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        title: "UI Design",
        category: "Creative Rebranding for logo",
    },
    {
        id: "5",
        image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
        title: "Graphic design",
        category: "Graphic design",
    },
    {
        id: "6",
        image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=1200&q=80",
        title: "UI Design",
        category: "Creative Rebranding for logo",
    },
];

function ProjectProject() {
    return (
        <section className="bg-white py-12 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {allProjectsData.map((item) => (
                        <div key={item.id} className="group flex flex-col">
                            {/* Card Image Box */}
                            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-[1.4/1] bg-zinc-100 shadow-sm">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Floating Icon Overlay if present or hover */}
                                {item.hasArrow && (
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/80 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                    </div>
                                )}

                                <Link to={`/projects/${item.id}`} className="absolute inset-0 z-10" aria-label={item.title} />
                            </div>

                            {/* Text Info */}
                            <div className="pt-4 pb-2">
                                <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 group-hover:text-gray-600 transition duration-300">
                                    <Link to={`/projects/${item.id}`}>
                                        {item.title}
                                    </Link>
                                </h3>
                                <p className="text-gray-500 text-sm font-sans mt-1">
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

export default ProjectProject;

