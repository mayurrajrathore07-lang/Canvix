import React from "react";
import { Link } from "react-router-dom";

function Projects() {
    const projects = [
        {
            id: "1",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            title: "Web UI Design System",
            category: "Creative UI/UX Design",
        },
        {
            id: "2",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            title: "Digital Strategy & Analytics",
            category: "Social Media & Growth",
        },
        {
            id: "3",
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
            title: "Brand Rebranding & Logo",
            category: "Creative Branding",
        },
        {
            id: "4",
            image: "https://images.unsplash.com/photo-1542744094-3a317272018a?auto=format&fit=crop&w=800&q=80",
            title: "E-Commerce Experience",
            category: "Fullstack Web App",
        },
    ];

    return (
        <section className="bg-black py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16">
                    <div>
                        <p className="text-cyan-400 text-lg font-semibold uppercase tracking-wider">
                            Recent Showcase
                        </p>

                        <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3">
                            Our Recent Projects
                        </h2>
                    </div>

                    <Link
                        to="/projects"
                        className="mt-6 lg:mt-0 bg-zinc-900 border border-zinc-800 text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-cyan-400 hover:text-black transition duration-300"
                    >
                        <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold">
                            →
                        </span>
                        View All Projects
                    </Link>
                </div>

                {/* Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((item) => (
                        <div key={item.id} className="group">
                            <div className="relative overflow-hidden rounded-3xl border border-zinc-800">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-80 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Link
                                        to={`/projects/${item.id}`}
                                        className="w-16 h-16 rounded-full bg-cyan-400 text-black text-2xl flex items-center justify-center hover:scale-110 transition duration-200 font-bold"
                                    >
                                        ↗
                                    </Link>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mt-6 group-hover:text-cyan-400 transition">
                                <Link to={`/projects/${item.id}`}>{item.title}</Link>
                            </h3>

                            <p className="text-gray-400 mt-1">{item.category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;