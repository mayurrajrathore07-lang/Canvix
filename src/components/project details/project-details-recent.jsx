import React from "react";
import { Link } from "react-router-dom";
import { allProjectsData } from "../project/project-project";

function ProjectDetailsRecent({ currentId }) {
    const recentProjects = allProjectsData
        .filter((p) => p.id !== currentId)
        .slice(0, 2);

    return (
        <section className="bg-zinc-950 py-20 px-6 border-t border-zinc-800">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
                    <div>
                        <span className="text-cyan-400 font-semibold uppercase tracking-widest text-xs block mb-2">
                            Explore More
                        </span>
                        <h2 className="text-3xl font-bold text-white">Recent Projects</h2>
                    </div>

                    <Link
                        to="/projects"
                        className="mt-4 sm:mt-0 text-cyan-400 font-semibold hover:underline flex items-center gap-2"
                    >
                        View All Projects →
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {recentProjects.map((item) => (
                        <div key={item.id} className="group bg-black border border-zinc-800 rounded-3xl overflow-hidden">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider block mb-2">
                                    {item.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition mb-4">
                                    <Link to={`/projects/${item.id}`}>{item.title}</Link>
                                </h3>
                                <Link
                                    to={`/projects/${item.id}`}
                                    className="text-white font-semibold hover:text-cyan-400 transition inline-flex items-center gap-2 text-sm"
                                >
                                    Read Case Study →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectDetailsRecent;
