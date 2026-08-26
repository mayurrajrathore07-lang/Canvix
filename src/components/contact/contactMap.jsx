"use client";

import React, { useState } from "react";
import { FaMapMarkerAlt, FaExternalLinkAlt, FaDirections, FaBuilding } from "react-icons/fa";
import { IndiaFlag, USAFlag } from "@/components/Flags";

const offices = [
    {
        id: "india",
        title: "Canvix Studio — India HQ",
        tag: "Global Headquarters & Design Lab",
        address: "701, Time Square Grand, Sindhu Bhavan Road, Ahmedabad, Gujarat 380059",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=701+Time+Square+Grand+Sindhu+Bhavan+Road+Ahmedabad",
        mapsUrl: "https://www.google.com/maps?q=701+Time+Square+Grand+Sindhu+Bhavan+Road+Ahmedabad",
        embedUrl: "https://www.google.com/maps?q=701+Time+Square+Grand+Sindhu+Bhavan+Road+Ahmedabad&output=embed",
        Flag: IndiaFlag,
        badge: "Global HQ",
        accentColor: "border-[#30B5AA]/50 text-[#30B5AA]",
    },
    {
        id: "us",
        title: "Canvix Studio — New York",
        tag: "US East Coast Innovation Hub",
        address: "580 Broadway, Suite 904, SoHo, New York, NY 10012, United States",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=580+Broadway+Suite+904+SoHo+New+York+NY+10012",
        mapsUrl: "https://www.google.com/maps?q=580+Broadway+Suite+904+SoHo+New+York+NY+10012",
        embedUrl: "https://www.google.com/maps?q=580+Broadway+Suite+904+SoHo+New+York+NY+10012&output=embed",
        Flag: USAFlag,
        badge: "US Studio",
        accentColor: "border-indigo-500/50 text-indigo-400",
    },
];

function ContactMap() {
    const [selectedOfficeId, setSelectedOfficeId] = useState("india");
    const activeOffice = offices.find((o) => o.id === selectedOfficeId) || offices[0];
    const FlagComponent = activeOffice.Flag;

    return (
        <section className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24">
            <div className="bg-[#121316] border border-white/10 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
                {/* Office Switcher Tabs */}
                <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2 border-b border-white/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mr-2 shrink-0">
                        Select Office:
                    </span>
                    {offices.map((office) => {
                        const OFlag = office.Flag;
                        const isSelected = office.id === selectedOfficeId;
                        return (
                            <button
                                key={office.id}
                                onClick={() => setSelectedOfficeId(office.id)}
                                className={`flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border shrink-0 ${
                                    isSelected
                                        ? "bg-[#30B5AA]/15 border-[#30B5AA] text-white shadow-lg"
                                        : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                                }`}
                            >
                                <OFlag className="w-5 h-3.5 rounded-[2px]" alt={office.title} />
                                <span>{office.title}</span>
                                <span className={`text-[10px] px-2 py-0.5 rounded-full ${isSelected ? "bg-[#30B5AA] text-black" : "bg-white/10 text-gray-300"}`}>
                                    {office.badge}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Header above map */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center text-xl shrink-0 mt-0.5 shadow-inner">
                            <FlagComponent className="w-8 h-6 rounded-[3px]" alt="Location Flag" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#30B5AA]">
                                    {activeOffice.tag}
                                </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
                                {activeOffice.title}
                            </h3>
                            <p className="text-gray-200 text-sm sm:text-base font-medium mt-1 leading-relaxed max-w-2xl">
                                {activeOffice.address}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
                        <a
                            href={activeOffice.directionsUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 bg-[#30B5AA] hover:bg-white text-black font-bold text-xs sm:text-sm px-5 py-3 rounded-full transition shadow-md"
                        >
                            <FaDirections className="text-base" />
                            <span>Get Directions</span>
                        </a>
                        <a
                            href={activeOffice.mapsUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 font-semibold text-xs sm:text-sm px-4 py-3 rounded-full transition"
                        >
                            <span>Open Maps</span>
                            <FaExternalLinkAlt className="text-[11px]" />
                        </a>
                    </div>
                </div>

                {/* Map Iframe Container */}
                <div className="w-full h-[240px] sm:h-[300px] rounded-2xl overflow-hidden relative border border-white/10 shadow-inner group">
                    <iframe
                        key={activeOffice.id}
                        title={`${activeOffice.title} Location Map`}
                        src={activeOffice.embedUrl}
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
