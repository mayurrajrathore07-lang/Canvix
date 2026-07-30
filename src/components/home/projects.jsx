import React from "react";


function Projects() {
    const projects = [
        {
            image: "/images/project1.jpg",
            title: "Web UI Design",
            category: "Creative UI Design",
        },
        {
            image: "/images/project2.jpg",
            title: "To Design Digital Strategy",
            category: "Social Media Marketing",
        },
        {
            image: "/images/project3.jpg",
            title: "UI Design",
            category: "Creative Rebranding for logo",
        },
        {
            image: "/images/project4.jpg",
            title: "UI Design",
            category: "Creative Rebranding for logo",
        },
    ];

    return (
        <section className="bg-black py-20 px-5">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="flex flex-col lg:flex-row justify-between items-center mb-16">
                    <div>
                        <p className="text-cyan-400 text-lg font-semibold">
                            Recent Showcase
                        </p>

                        <h2 className="text-5xl font-bold text-gray-900 mt-4">
                            Our Recent
                            <br />
                            Projects
                        </h2>
                    </div>

                    <button className="mt-8 lg:mt-0 bg-zinc-900 text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-zinc-800">
                        <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                            →
                        </span>
                        Start your Free Trial
                    </button>
                </div>

                {/* Projects */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                    {projects.map((item, index) => (
                        <div key={index}>
                            <div className="relative group overflow-hidden rounded-3xl">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-96 object-cover"
                                />

                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center">
                                    <button className="w-16 h-16 rounded-full bg-black text-white text-2xl">
                                        ↗
                                    </button>
                                </div>
                            </div>

                            <h3 className="text-3xl font-semibold text-white mt-6">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 mt-2">
                                {item.category}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;