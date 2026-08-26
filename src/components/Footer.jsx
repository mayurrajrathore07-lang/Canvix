"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Logo from "@/components/Logo";
import { IndiaFlag, USAFlag } from "@/components/Flags";

function Footer() {
    const [subscribeStatus, setSubscribeStatus] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        const email = e.target.elements.email?.value;
        if (!email) return;
        setSubscribeStatus("Thanks! Newsletter coming soon.");
        e.target.reset();
        setTimeout(() => setSubscribeStatus(""), 4000);
    };

    return (
        <footer className="shrink-0 bg-[#0c0d0e] text-gray-400 pt-16 pb-12 border-t border-white/10 font-sans relative overflow-hidden">
            {/* Background ambient lighting */}
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#6E56CF]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">

                    <div className="md:col-span-4 space-y-4">
                        <Logo variant="dark" />

                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
                            We're a team of strategic creators and digital innovators, united in our pursuit of tech mastery and joyful digital solutions.
                        </p>
                    </div>

                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                            Pages
                        </h4>

                        <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
                            <li><Link href="/" className="hover:text-[#30B5AA] transition">Home</Link></li>
                            <li><Link href="/services" className="hover:text-[#30B5AA] transition">Services</Link></li>
                            <li><Link href="/about" className="hover:text-[#30B5AA] transition">About Us</Link></li>
                            <li><Link href="/projects" className="hover:text-[#30B5AA] transition">Portfolio</Link></li>
                            <li><Link href="/contact" className="hover:text-[#30B5AA] transition">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                            Services
                        </h4>

                        <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
                            <li><Link href="/services" className="hover:text-[#30B5AA] transition">AI & Machine Learning</Link></li>
                            <li><Link href="/services" className="hover:text-[#30B5AA] transition">Cloud & DevOps</Link></li>
                            <li><Link href="/services" className="hover:text-[#30B5AA] transition">Web Development</Link></li>
                            <li><Link href="/services" className="hover:text-[#30B5AA] transition">Staffing & Recruiting</Link></li>
                            <li><Link href="/services" className="hover:text-[#30B5AA] transition">Brand & Design</Link></li>
                            <li><Link href="/services" className="hover:text-[#30B5AA] transition">Digital Marketing</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4 space-y-4">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                            Subscribe to Insights
                        </h4>

                        <form onSubmit={handleSubscribe} className="flex items-center bg-[#181d2a] border border-white/10 rounded-full p-1 max-w-md shadow-inner focus-within:border-[#6E56CF] transition">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                className="flex-1 px-4 py-2 bg-transparent text-white placeholder-gray-500 outline-none text-xs sm:text-sm"
                                aria-label="Email address for newsletter"
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[#6E56CF] to-[#5B45FF] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition shrink-0 shadow-md"
                            >
                                Subscribe
                            </button>
                        </form>
                        {subscribeStatus && (
                            <p className="text-[#30B5AA] text-xs sm:text-sm font-medium mt-2 animate-pulse">
                                {subscribeStatus}
                            </p>
                        )}
                    </div>

                </div>

                {/* Global Locations & Addresses Banner */}
                <div className="py-8 border-b border-white/10">
                    <h4 className="text-xs font-bold text-[#30B5AA] uppercase tracking-wider mb-4 flex items-center gap-2">
                        <FaMapMarkerAlt className="text-sm" />
                        <span>Our Global Offices & Addresses</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* India HQ Address Card */}
                        <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#30B5AA]/40 transition-all duration-300">
                            <div className="p-2 bg-white/5 rounded-xl border border-white/10 shrink-0 mt-0.5">
                                <IndiaFlag className="w-6 h-4 rounded-[2px]" alt="India Flag" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-sm font-bold text-white">India Studio</span>
                                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-[#30B5AA]/20 text-[#30B5AA] border border-[#30B5AA]/30">
                                        Global HQ
                                    </span>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                                    701, Time Square Grand, Sindhu Bhavan Road, Ahmedabad, Gujarat 380059
                                </p>
                                <a
                                    href="https://maps.google.com/?q=701+Time+Square+Grand+Sindhu+Bhavan+Road+Ahmedabad"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1 text-xs text-[#30B5AA] hover:text-white font-medium mt-1.5 transition"
                                >
                                    <span>View on Map</span> &rarr;
                                </a>
                            </div>
                        </div>

                        {/* US NY Address Card */}
                        <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#30B5AA]/40 transition-all duration-300">
                            <div className="p-2 bg-white/5 rounded-xl border border-white/10 shrink-0 mt-0.5">
                                <USAFlag className="w-6 h-4 rounded-[2px]" alt="USA Flag" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-sm font-bold text-white">US Studio</span>
                                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                                        New York
                                    </span>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                                    580 Broadway, Suite 904, SoHo, New York, NY 10012, United States
                                </p>
                                <a
                                    href="https://maps.google.com/?q=580+Broadway+Suite+904+SoHo+New+York+NY+10012"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1 text-xs text-[#30B5AA] hover:text-white font-medium mt-1.5 transition"
                                >
                                    <span>View on Map</span> &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-400">
                    <div>
                        <span className="font-semibold text-white block sm:inline">© Canvix Agency. </span>
                        <span>Designed by Identity hub. All rights reserved.</span>
                    </div>

                    <div className="flex items-center gap-4 text-xs sm:text-sm">
                        <span className="text-gray-300 flex items-center gap-1.5">
                            <FaPhoneAlt className="text-[#30B5AA] text-xs" />
                            <a href="tel:+919328311556" className="hover:text-white transition">+91 9328311556</a>
                        </span>
                        <span className="text-gray-300 flex items-center gap-1.5">
                            <FaEnvelope className="text-[#30B5AA] text-xs" />
                            <a href="mailto:hello@canvix.agency.com" className="hover:text-white transition">hello@canvix.agency.com</a>
                        </span>
                    </div>

                    <div className="flex gap-3 sm:justify-end">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#6E56CF] hover:scale-110 transition text-xs border border-white/10">
                            <FaFacebookF />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#6E56CF] hover:scale-110 transition text-xs border border-white/10">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#6E56CF] hover:scale-110 transition text-xs border border-white/10">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;