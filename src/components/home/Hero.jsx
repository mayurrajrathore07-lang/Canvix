import React from "react";
import { Link } from "react-router-dom";

const hero = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80";

function Hero() {
    return (
        <section className="container mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left */}
                <div>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white">
                        Ready to take your{" "}
                        <span className="block text-cyan-400 mt-1">
                            Business Growth
                        </span>
                        to the next level?
                    </h1>

                    <p className="text-gray-400 mt-6 text-base md:text-lg leading-relaxed max-w-xl">
                        We build stunning digital solutions, strategy, and branding designed to captivate your audience and scale your enterprise seamlessly.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mt-10">
                        <Link
                            to="/contact"
                            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 transition duration-300"
                        >
                            Start your Free Trial
                        </Link>
                        <Link
                            to="/projects"
                            className="border border-zinc-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 transition duration-300"
                        >
                            Explore Projects
                        </Link>
                    </div>
                </div>

                {/* Right */}
                <div className="flex justify-center">
                    <div className="w-[320px] sm:w-[420px] lg:w-[500px] h-[320px] sm:h-[420px] lg:h-[500px] rounded-full border border-cyan-400/40 flex items-center justify-center p-4">
                        <div className="w-full h-full rounded-full border border-zinc-800 flex items-center justify-center p-4">
                            <img
                                src={hero}
                                alt="Business Growth"
                                className="w-full h-full rounded-full object-cover shadow-2xl"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;