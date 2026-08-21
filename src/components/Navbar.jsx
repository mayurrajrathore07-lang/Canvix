"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    const isLinkActive = (href) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    const getLinkClass = (href) =>
        isLinkActive(href)
            ? "text-[#30B5AA] font-semibold transition"
            : "text-gray-300 hover:text-white transition";

    return (
        <nav className="sticky top-0 z-50 bg-[#0c0d0e]/90 backdrop-blur-md border-b border-white/10 text-white">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between py-4">
                <Link href="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-sm">
                        <svg className="w-4 h-4 text-black fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                            <path d="M12 3a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9a9 9 0 0 1-9-9c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 4-4 4-4-1.79-4-4" strokeLinecap="round" />
                        </svg>
                    </div>
                    <span className="font-semibold text-xl tracking-tight text-white">Canvix</span>
                </Link>

                <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <li>
                        <Link href="/" className={getLinkClass("/")}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className={getLinkClass("/about")}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className={getLinkClass("/projects")}>
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className={getLinkClass("/contact")}>
                            Contact Us
                        </Link>
                    </li>
                </ul>

                <Link
                    href="/contact"
                    className="hidden md:inline-block bg-white text-black px-5 py-2 rounded-full text-xs font-semibold hover:bg-[#30B5AA] hover:text-white transition duration-300 shadow-sm"
                >
                    Get in touch
                </Link>

                <button
                    onClick={toggleMenu}
                    className="md:hidden text-xl text-white focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-[#111215] border-b border-white/10 px-6 py-4 space-y-3 text-white">
                    <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className={`block py-1.5 ${getLinkClass("/")}`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        onClick={() => setIsOpen(false)}
                        className={`block py-1.5 ${getLinkClass("/about")}`}
                    >
                        About
                    </Link>
                    <Link
                        href="/projects"
                        onClick={() => setIsOpen(false)}
                        className={`block py-1.5 ${getLinkClass("/projects")}`}
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className={`block py-1.5 ${getLinkClass("/contact")}`}
                    >
                        Contact Us
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="block text-center bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#30B5AA] hover:text-white transition"
                    >
                        Get in touch
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;