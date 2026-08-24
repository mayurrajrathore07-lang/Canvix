"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinkClass = (href) =>
        pathname === href
            ? "text-white font-medium transition"
            : "text-gray-400 hover:text-white transition";

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 text-black">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between py-4">


                <Link href="/" className="text-2xl font-bold tracking-tight text-black flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shadow-sm">
                        <svg className="w-4 h-4 text-white fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                            <path d="M12 3a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9a9 9 0 0 1-9-9c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 4-4 4-4-1.79-4-4" strokeLinecap="round" />
                        </svg>
                    </div>
                    <span className="font-semibold text-xl tracking-tight text-black">Canvix</span>
                </Link>


                <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <li>
                        <Link
                            href="/"
                            className={
                                pathname === "/"
                                    ? "text-[#6E56CF] font-semibold relative py-1 after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-7 after:h-[3px] after:bg-[#6E56CF] after:rounded-full"
                                    : "text-gray-600 hover:text-black transition py-1"
                            }
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/services"
                            className={
                                pathname === "/services"
                                    ? "text-[#6E56CF] font-semibold relative py-1 after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-7 after:h-[3px] after:bg-[#6E56CF] after:rounded-full"
                                    : "text-gray-600 hover:text-black transition py-1"
                            }
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className={
                                pathname === "/about"
                                    ? "text-[#6E56CF] font-semibold relative py-1 after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-7 after:h-[3px] after:bg-[#6E56CF] after:rounded-full"
                                    : "text-gray-600 hover:text-black transition py-1"
                            }
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/projects"
                            className={
                                pathname.startsWith("/projects")
                                    ? "text-[#6E56CF] font-semibold relative py-1 after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-7 after:h-[3px] after:bg-[#6E56CF] after:rounded-full"
                                    : "text-gray-600 hover:text-black transition py-1"
                            }
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className={
                                pathname === "/contact"
                                    ? "text-[#6E56CF] font-semibold relative py-1 after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-7 after:h-[3px] after:bg-[#6E56CF] after:rounded-full"
                                    : "text-gray-600 hover:text-black transition py-1"
                            }
                        >
                            Contact Us
                        </Link>
                    </li>
                </ul>

                <Link
                    href="/contact"
                    className="hidden md:inline-flex items-center gap-2 bg-[#0B0F19] hover:bg-[#1E1B4B] text-white px-5 py-2.5 rounded-full text-xs font-semibold transition duration-300 shadow-sm group"
                >
                    <span>Get in touch</span>
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </Link>

                <button
                    onClick={toggleMenu}
                    className="md:hidden text-xl text-black focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4 space-y-3 text-black">
                    <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className={`block py-1.5 ${pathname === "/" ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/services"
                        onClick={() => setIsOpen(false)}
                        className={`block py-1.5 ${pathname === "/services" ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`}
                    >
                        Services
                    </Link>
                    <Link
                        href="/about"
                        onClick={() => setIsOpen(false)}
                        className={`block py-1.5 ${pathname === "/about" ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`}
                    >
                        About
                    </Link>
                    <Link
                        href="/projects"
                        onClick={() => setIsOpen(false)}
                        className={`block py-1.5 ${pathname.startsWith("/projects") ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`}
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className={`block py-1.5 ${pathname === "/contact" ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`}
                    >
                        Contact Us
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="block text-center bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
                    >
                        Get in touch
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;