"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "@/components/Logo";

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
        <footer className="bg-[#0c0d0e] text-gray-400 pt-16 pb-12 border-t border-white/10 font-sans relative overflow-hidden">
            {/* Background ambient lighting */}
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#6E56CF]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">

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

                        <ul className="space-y-2.5 text-xs font-medium">
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

                        <ul className="space-y-2.5 text-xs font-medium">
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
                                className="flex-1 px-4 py-2 bg-transparent text-white placeholder-gray-500 outline-none text-xs"
                                aria-label="Email address for newsletter"
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[#6E56CF] to-[#5B45FF] text-white font-bold text-xs px-5 py-2.5 rounded-full hover:opacity-90 transition shrink-0 shadow-md"
                            >
                                Subscribe
                            </button>
                        </form>
                        {subscribeStatus && (
                            <p className="text-[#30B5AA] text-xs font-medium mt-2 animate-pulse">
                                {subscribeStatus}
                            </p>
                        )}
                    </div>

                </div>

                <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center text-xs text-gray-400">
                    <div>
                        <span className="font-bold text-white block mb-0.5">Copyright by</span>
                        <span>Designed by Identity hub.</span>
                    </div>

                    <div>
                        <span className="font-bold text-white block mb-0.5">Contact Us</span>
                        <span>+1 (800) 555-0199</span>
                    </div>

                    <div>
                        <span className="font-bold text-white block mb-0.5">Address</span>
                        <span>SBR Ahmedabad</span>
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