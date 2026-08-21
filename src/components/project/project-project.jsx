import React from "react";
import Link from "next/link";

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {allProjectsData.map((item) => (
                        <div key={item.id} className="flex flex-col">
                            {/* Card Image Box with rounded corners and fixed responsive height */}
                            <div className="relative w-full h-72 sm:h-80 rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100 mb-3">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />

                                {/* Arrow icon overlay for featured items */}
                                {item.hasArrow && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-lg font-bold shadow-md">
                                            ↗
                                        </div>
                                    </div>
                                )}

                                {/* Clickable overlay link */}
                                <Link to={`/projects/${item.id}`} className="absolute inset-0" aria-label={item.title} />
                            </div>

                            {/* Project Title and Category */}
                            <div>
                                <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 hover:text-gray-700 transition">
                                    <Link to={`/projects/${item.id}`}>
                                        {item.title}
                                    </Link>
                                </h3>
                                <p className="text-gray-500 text-sm mt-1">
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


