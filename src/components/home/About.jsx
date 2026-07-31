import React from "react";
import { Link } from "react-router-dom";

function About() {
    const aboutImg = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80";

    return (
        <section className="bg-black py-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">


                <div className="relative w-full lg:w-1/2 flex justify-center min-h-[450px]">
                    <img
                        src={aboutImg}
                        alt="About background"
                        className="absolute top-0 left-4 md:left-10 w-72 md:w-96 h-[420px] md:h-[500px] object-cover rounded-3xl opacity-20"
                    />

                    <img
                        src={aboutImg}
                        alt="About layer"
                        className="absolute top-6 left-10 md:left-20 w-72 md:w-96 h-[420px] md:h-[500px] object-cover rounded-3xl opacity-50"
                    />

                    <img
                        src={aboutImg}
                        alt="About Canvix"
                        className="relative w-72 md:w-96 h-[420px] md:h-[500px] object-cover rounded-3xl shadow-xl"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full lg:w-1/2">
                    <p className="text-cyan-400 text-lg font-semibold tracking-wide uppercase mb-4">
                        About Us
                    </p>

                    <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 typography-h2-64">
                        The core mission behind all our work
                    </h2>

                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                        At Canvix, we empower companies with groundbreaking design, seamless development, and strategic marketing. Our goal is turning visionary ideas into real digital success.
                    </p>

                    <div className="flex gap-12 mb-10 border-t border-b border-zinc-800 py-6">
                        <div>
                            <h3 className="text-cyan-400 text-4xl font-extrabold">330+</h3>
                            <p className="text-gray-300 mt-1 text-sm font-medium">Companies Helped</p>
                        </div>

                        <div>
                            <h3 className="text-cyan-400 text-4xl font-extrabold">$230M+</h3>
                            <p className="text-gray-300 mt-1 text-sm font-medium">Revenue Generated</p>
                        </div>
                    </div>

                    <Link
                        to="/about"
                        className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-base font-semibold hover:bg-cyan-400 transition duration-300 group"
                    >
                        <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-black transition">
                            →
                        </span>
                        Learn More About Us
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default About;