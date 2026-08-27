import React from "react";
import Link from "next/link";
import { FaPlay, FaProjectDiagram, FaUsers, FaStar } from "react-icons/fa";

const heroImg = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80";

function Hero() {
    return (
        <section className="bg-[#0B0F19] text-white py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6E56CF]/15 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#30B5AA]/10 rounded-full blur-[160px] pointer-events-none" />


            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                <div className="lg:col-span-7 space-y-8 z-10">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif leading-[1.15] tracking-tight">
                        Ready to take your{" "}
                        <span className="text-[#30B5AA] block sm:inline font-sans font-bold">
                            Business Growth
                        </span>{" "}
                        to the next level?
                    </h1>

                    <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
                        Our team creates engaging content strategies to build authority and drive organic traffic, turning visionary ideas into scalable enterprise success.
                    </p>

                    <div>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 bg-[#18191c] hover:bg-white hover:text-black text-white border border-white/10 px-7 py-3.5 rounded-full transition-all duration-300 group shadow-lg"
                        >
                            <span className="w-8 h-8 rounded-full bg-white text-black group-hover:bg-black group-hover:text-white flex items-center justify-center text-xs transition duration-300">
                                <FaPlay className="ml-0.5" />
                            </span>
                            <span className="font-medium text-sm sm:text-base">Book a Free Consultation</span>
                        </Link>
                    </div>

                    <div className="pt-6 border-t border-white/10 space-y-4">
                        <p className="text-[#30B5AA] text-xs font-semibold uppercase tracking-wider">
                            Trusted by growing businesses
                        </p>
                        <div className="flex flex-wrap items-center gap-8 text-gray-400">
                            <div className="flex items-center gap-2 font-bold text-sm text-gray-300">
                                <FaProjectDiagram className="text-lg text-accent-teal" /> 20+ Projects Delivered
                            </div>
                            <div className="flex items-center gap-2 font-bold text-sm text-gray-300">
                                <FaUsers className="text-lg text-accent-purple" /> 15+ Happy Clients
                            </div>
                            <div className="flex items-center gap-2 font-bold text-sm text-gray-300">
                                <FaStar className="text-lg text-yellow-400" /> 98% Satisfaction Rate
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
                    <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] md:w-[480px] md:h-[480px] flex items-center justify-center">

                        <div className="absolute inset-0 rounded-full border border-white/10"></div>

                        <div className="absolute inset-4 sm:inset-6 rounded-full border border-dashed border-[#30B5AA]/30"></div>

                        <div className="absolute top-3 right-12 w-3 h-3 bg-[#30B5AA] rounded-full shadow-[0_0_12px_#30B5AA]"></div>

                        <div className="w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-4 border-white/10 shadow-2xl relative group">
                            <img
                                src={heroImg}
                                alt="Business Growth Team"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;