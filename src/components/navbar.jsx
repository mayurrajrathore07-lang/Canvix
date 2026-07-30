import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinkClass = ({ isActive }) =>
        isActive
            ? "text-black font-semibold transition"
            : "text-gray-600 hover:text-black transition";

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 text-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between py-4">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold tracking-tight text-black flex items-center gap-2">
                    <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-9a3 3 0 100 6 3 3 0 000-6z" />
                    </svg>
                    <span>Canvix</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <li>
                        <NavLink to="/" className={navLinkClass}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={navLinkClass}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={navLinkClass}>
                            Contact Us
                        </NavLink>
                    </li>
                </ul>

                {/* Get in touch button */}
                <Link
                    to="/contact"
                    className="hidden md:inline-block bg-[#1a1a1a] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium hover:bg-black transition duration-300 shadow-sm"
                >
                    Get in touch
                </Link>

                {/* Mobile Hamburger */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-2xl text-black focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4">
                    <NavLink
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `block py-2 ${isActive ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `block py-2 ${isActive ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/projects"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `block py-2 ${isActive ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`
                        }
                    >
                        Portfolio
                    </NavLink>
                    <NavLink
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `block py-2 ${isActive ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`
                        }
                    >
                        Contact Us
                    </NavLink>
                    <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className="block text-center bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition"
                    >
                        Get in touch
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;