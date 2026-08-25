"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "@/components/Logo";

const navItems = [
    { href: "/", label: "Home", exact: true },
    { href: "/services", label: "Services", exact: true },
    { href: "/about", label: "About", exact: true },
    { href: "/projects", label: "Portfolio", exact: false },
    { href: "/contact", label: "Contact Us", exact: true },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const isActive = (item) => {
        if (!mounted || !pathname) return false;
        return item.exact ? pathname === item.href : pathname.startsWith(item.href);
    };

    const desktopLinkClass = (item) =>
        isActive(item)
            ? "text-[#6E56CF] font-semibold relative py-1 after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-7 after:h-[3px] after:bg-[#6E56CF] after:rounded-full"
            : "text-gray-600 hover:text-black transition py-1";

    const mobileLinkClass = (item) =>
        `block py-1.5 ${isActive(item) ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`;

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 text-black" role="navigation" aria-label="Main navigation">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between py-4">

                <Logo variant="light" />

                <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={desktopLinkClass(item)}
                                aria-current={isActive(item) ? "page" : undefined}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
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
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-nav-menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {isOpen && (
                <div id="mobile-nav-menu" className="md:hidden bg-white border-b border-gray-100 px-6 py-4 space-y-3 text-black" role="menu">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={mobileLinkClass(item)}
                            role="menuitem"
                            aria-current={isActive(item) ? "page" : undefined}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="block text-center bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
                        role="menuitem"
                    >
                        Get in touch
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;