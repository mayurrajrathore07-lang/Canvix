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
        <footer className="bg-[#0c0d0e] text-gray-400 pt-16 pb-10 border-t border-white/10 font-sans">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">


                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">


                    <div className="md:col-span-4 space-y-4">
                        <Logo variant="dark" />

                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                            We're a team of strategic creator and digital innovator, united focus in our pursuit of mastery and joyful digital solutions.
                        </p>
                    </div>


                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                            Pages
                        </h4>

                        <ul className="space-y-2.5 text-xs">
                            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                            <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
                            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                            <li><Link href="/projects" className="hover:text-white transition">Portfolio</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
                        </ul>
                    </div>


                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                            Services
                        </h4>

                        <ul className="space-y-2.5 text-xs">
                            <li><Link href="/services" className="hover:text-white transition">AI & Machine Learning</Link></li>
                            <li><Link href="/services" className="hover:text-white transition">Cloud & DevOps</Link></li>
                            <li><Link href="/services" className="hover:text-white transition">Web Development</Link></li>
                            <li><Link href="/services" className="hover:text-white transition">Staffing & Recruiting</Link></li>
                            <li><Link href="/services" className="hover:text-white transition">Brand & Design</Link></li>
                            <li><Link href="/services" className="hover:text-white transition">Digital Marketing</Link></li>
                        </ul>
                    </div>


                    <div className="md:col-span-4 space-y-4">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                            Subscribe
                        </h4>

                        <form onSubmit={handleSubscribe} className="flex items-center bg-white rounded-full p-1 max-w-md shadow-sm">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email here"
                                required
                                className="flex-1 px-4 py-2 bg-transparent text-gray-900 placeholder-gray-500 outline-none text-xs"
                                aria-label="Email address for newsletter"
                            />
                            <button
                                type="submit"
                                className="bg-[#18191c] text-white font-medium text-xs px-5 py-2.5 rounded-full hover:bg-black transition shrink-0"
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
                        <span>9999999999</span>
                    </div>

                    <div>
                        <span className="font-bold text-white block mb-0.5">Address</span>
                        <span>SBR Ahmedabad</span>
                    </div>

                    <div className="flex gap-2.5 sm:justify-end">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#30B5AA] hover:text-white transition text-xs">
                            <FaFacebookF />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#30B5AA] hover:text-white transition text-xs">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#30B5AA] hover:text-white transition text-xs">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;