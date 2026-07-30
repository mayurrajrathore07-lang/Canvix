import React from "react";
import { Link } from "react-router-dom";

function ProjectLetsTalk() {
    return (
        <section className="py-20 px-6 bg-zinc-950 border-t border-zinc-800">
            <div className="max-w-4xl mx-auto text-center bg-zinc-900 border border-zinc-800 rounded-3xl p-10 sm:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>

                <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                    Have an exciting project idea in mind?
                </h2>

                <p className="text-gray-400 text-base sm:text-lg mb-10 max-w-xl mx-auto">
                    Let's turn your vision into an impactful digital reality. Talk to our expert design & development team today.
                </p>

                <div className="flex flex-wrap justify-center items-center gap-4">
                    <Link
                        to="/contact"
                        className="bg-cyan-400 text-black px-8 py-4 rounded-full font-bold text-base hover:bg-white transition duration-300 shadow-lg shadow-cyan-400/20"
                    >
                        Let's Talk Together
                    </Link>

                    <Link
                        to="/about"
                        className="bg-zinc-800 border border-zinc-700 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-zinc-700 transition duration-300"
                    >
                        Our Process
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ProjectLetsTalk;
