import React from "react";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

function Projects() {
    const projects = [
        {
            id: "1",
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/058974234960045.Y3JvcCw4OTQsNzAwLDIsMA.png",
            title: "Web UI design",
            category: "Creative / Art direction",
        },
        {
            id: "2",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
            title: "To design. Digital strategy",
            category: "Web / UI UX Design",
        },
        {
            id: "3",
            image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
            title: "UI Design",
            category: "Creative / Art direction",
        },
        {
            id: "4",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
            title: "UI Design",
            category: "Creative / Art direction / App"

        },
    ];

    return (
        <section className="bg-[#f8f9fa] py-24 px-6 md:px-12 text-[#111111]">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-14">
                    <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#111111]">
                        Recent Showcase
                    </h2>

                    <Link
                        href="/projects"
                        className="mt-4 sm:mt-0 inline-flex items-center gap-3 bg-[#18191c] hover:bg-black text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition duration-300 shadow-md group"
                    >
                        <span className="w-6 h-6 rounded-full bg-white text-black group-hover:bg-cyan-400 flex items-center justify-center text-[10px] transition">
                            <FaPlay className="ml-0.5" />
                        </span>
                        <span>View showcase</span>
                    </Link>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((item) => (
                        <div key={item.id} className="group cursor-pointer">
                            <div className="overflow-hidden rounded-3xl bg-gray-200 mb-5 shadow-sm">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#111111] group-hover:text-[#30B5AA] transition-colors">
                                <Link href={`/projects/${item.id}`}>{item.title}</Link>
                            </h3>

                            <p className="text-gray-500 text-xs sm:text-sm mt-1">{item.category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;