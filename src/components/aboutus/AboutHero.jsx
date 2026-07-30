import React from "react";
import { Link } from "react-router-dom";

function AboutHero() {
    return (
        <section className="bg-black py-20 px-6 border-b border-zinc-800">
            <div className="max-w-5xl mx-auto text-center">
                <span className="text-cyan-400 font-semibold uppercase tracking-widest text-sm block mb-4">
                    Who We Are
                </span>

                <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
                    We are digital strategists, creators & design pioneers
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
                    Founded with a passion for craftsmanship and innovation, Canvix bridges design and technology to deliver transformative digital experiences for brands worldwide.
                </p>

                <div className="flex justify-center items-center gap-4">
                    <Link
                        to="/contact"
                        className="bg-cyan-400 text-black px-8 py-3.5 rounded-full font-bold hover:bg-white transition duration-300"
                    >
                        Work With Us
                    </Link>
                    <Link
                        to="/projects"
                        className="border border-zinc-700 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-zinc-800 transition duration-300"
                    >
                        Our Work
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default AboutHero;
