"use client";

import React from "react";
import { FaMapMarkerAlt, FaExternalLinkAlt, FaDirections, FaBuilding } from "react-icons/fa";

function ContactMap() {
    return (
        <section className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24">
            <div className="bg-[#121316] border border-white/10 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
                {/* Header above map */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#30B5AA]/15 text-[#30B5AA] flex items-center justify-center text-xl shrink-0 mt-0.5">
                            <FaBuilding />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#30B5AA]">
                                    Global Headquarters & Design Lab
                                </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
                                Canvix Studio — Ahmedabad, India
                            </h3>
                            <p className="text-gray-400 text-xs sm:text-sm mt-1">
                                Sindhu Bhavan Marg (SBR), Bodakdev, Ahmedabad, Gujarat 380054
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=Sindhu+Bhavan+Road+Ahmedabad"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 bg-[#30B5AA] hover:bg-white text-black font-bold text-xs px-5 py-3 rounded-full transition shadow-md"
                        >
                            <FaDirections className="text-sm" />
                            <span>Get Directions</span>
                        </a>
                        <a
                            href="https://www.google.com/maps?q=Sindhu+Bhavan+Road+Ahmedabad"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 font-semibold text-xs px-4 py-3 rounded-full transition"
                        >
                            <span>Open Maps</span>
                            <FaExternalLinkAlt className="text-[10px]" />
                        </a>
                    </div>
                </div>

                {/* Map Iframe Container */}
                <div className="w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden relative border border-white/10 shadow-inner group">
                    <iframe
                        title="Canvix Studio Location Map"
                        src="https://www.google.com/maps?q=Sindhu+Bhavan+Road+Ahmedabad&output=embed"
                        className="w-full h-full border-0 grayscale contrast-125 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                        loading="lazy"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    );
}

export default ContactMap;
