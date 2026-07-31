import React from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

function About() {
    const mainImg = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80";
    const layerImg2 = "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80";
    const layerImg3 = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80";

    return (
        <section className="bg-[#0c0d0e] text-white py-24 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                {/* Left Stacked Images (6 cols) */}
                <div className="lg:col-span-6 relative flex justify-center items-center min-h-[380px] sm:min-h-[460px]">
                    {/* Background Layer 1 (Furthest Back) */}
                    <div className="absolute top-0 left-2 sm:left-6 w-60 sm:w-72 h-[340px] sm:h-[400px] rounded-2xl overflow-hidden opacity-30 border border-white/10 shadow-lg scale-90 -translate-x-8">
                        <img
                            src={layerImg3}
                            alt="Background team layer"
                            className="w-full h-full object-cover filter grayscale"
                        />
                    </div>

                    {/* Middle Layer 2 */}
                    <div className="absolute top-4 left-6 sm:left-12 w-64 sm:w-80 h-[350px] sm:h-[420px] rounded-2xl overflow-hidden opacity-60 border border-white/10 shadow-xl scale-95 -translate-x-4">
                        <img
                            src={layerImg2}
                            alt="Middle team layer"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Main Front Layer 3 */}
                    <div className="relative z-10 w-72 sm:w-96 h-[360px] sm:h-[440px] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                        <img
                            src={mainImg}
                            alt="The core mission behind all our work"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right Content (6 cols) */}
                <div className="lg:col-span-6 space-y-6">
                    <p className="text-[#30B5AA] text-sm font-semibold uppercase tracking-wider">
                        About us
                    </p>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                        The core mission behind all our work
                    </h2>

                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl">
                        At Canvix, we empower companies with groundbreaking design, seamless development, and strategic marketing. Our goal is turning visionary ideas into real digital success.
                    </p>

                    {/* Stats Counter */}
                    <div className="flex items-center gap-12 pt-4 pb-4">
                        <div>
                            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                                330 <span className="text-[#30B5AA]">+</span>
                            </div>
                            <p className="text-gray-400 text-xs sm:text-sm mt-1">Companies helped</p>
                        </div>

                        <div className="h-10 w-px bg-white/10"></div>

                        <div>
                            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                                230 <span className="text-[#30B5AA]">+</span>
                            </div>
                            <p className="text-gray-400 text-xs sm:text-sm mt-1">Revenue generated</p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 bg-[#18191c] hover:bg-white hover:text-black text-white border border-white/10 px-7 py-3.5 rounded-full transition-all duration-300 group shadow-lg"
                        >
                            <span className="w-8 h-8 rounded-full bg-white text-black group-hover:bg-black group-hover:text-white flex items-center justify-center text-xs transition duration-300">
                                <FaPlay className="ml-0.5" />
                            </span>
                            <span className="font-medium text-sm sm:text-base">Start your Free Trial</span>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;