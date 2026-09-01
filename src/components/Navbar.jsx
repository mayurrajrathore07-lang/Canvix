"use client";

import { useState, useEffect } from "react";
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

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const toggleMenu = () => setIsOpen(!isOpen);

    const isActive = (item) => {
        if (!mounted || !pathname) return false;
        return item.exact ? pathname === item.href : pathname.startsWith(item.href);
    };

    const desktopLinkClass = (item) =>
        isActive(item)
            ? "text-[#30B5AA] font-semibold relative py-1 after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-7 after:h-[3px] after:bg-gradient-to-r after:from-[#6E56CF] after:to-[#30B5AA] after:rounded-full"
            : "text-gray-300 hover:text-white transition py-1";

    const mobileLinkClass = (item) =>
        `block py-2 text-sm font-medium ${isActive(item) ? "text-[#30B5AA] font-semibold" : "text-gray-300 hover:text-white"}`;

    return (
        <nav className="sticky top-0 z-50 shrink-0 bg-[#0c0d0e]/85 backdrop-blur-md border-b border-white/10 text-white transition-all duration-300" role="navigation" aria-label="Main navigation">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between py-4">

                <Logo variant="dark" />

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
                    className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-[#6E56CF] to-[#5B45FF] hover:from-[#5B45FF] hover:to-[#6E56CF] text-white px-5 py-2.5 rounded-full text-xs font-bold transition duration-300 shadow-[0_4px_15px_rgba(110,86,207,0.35)] hover:shadow-[0_6px_20px_rgba(110,86,207,0.55)] group"
                >
                    <span>Get in touch</span>
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </Link>

                <button
                    onClick={toggleMenu}
                    className="md:hidden text-xl text-white focus:outline-none p-1 rounded-lg hover:bg-white/10 transition"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-nav-menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 top-[73px] bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                    <div id="mobile-nav-menu" className="md:hidden relative z-50 bg-[#12151e] border-b border-white/10 px-6 py-5 space-y-4 text-white animate-in slide-in-from-top-2 duration-200" role="menu">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={mobileLinkClass(item)}
                                role="menuitem"
                                aria-current={isActive(item) ? "page" : undefined}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="block text-center bg-gradient-to-r from-[#6E56CF] to-[#5B45FF] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-95 transition shadow-md"
                            role="menuitem"
                        >
                            Get in touch
                        </Link>
                    </div>
                </>
            )}
        </nav>
    );
}

export default Navbar;