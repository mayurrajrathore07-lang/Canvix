import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinkClass = ({ isActive }) =>
        isActive
          ? "text-white font-medium transition"
          : "text-gray-400 hover:text-white transition";

    return (
        <nav className="sticky top-0 z-50 bg-[#0c0d0e]/90 backdrop-blur-md border-b border-white/10 text-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between py-5">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-extrabold text-sm">
                        C
                    </div>
                    <span className="font-semibold text-xl">Canvix</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
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
                    className="hidden md:inline-block bg-white text-black px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-[#2dd4bf] hover:text-black transition duration-300 shadow-sm"
                >
                    Get in touch
                </Link>

                {/* Mobile Hamburger */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-2xl text-white focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-[#0c0d0e] border-b border-white/10 px-6 py-6 space-y-4 text-white">
                    <NavLink
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `block py-2 ${isActive ? "text-white font-semibold" : "text-gray-400 hover:text-white"}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `block py-2 ${isActive ? "text-white font-semibold" : "text-gray-400 hover:text-white"}`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/projects"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `block py-2 ${isActive ? "text-white font-semibold" : "text-gray-400 hover:text-white"}`
                        }
                    >
                        Portfolio
                    </NavLink>
                    <NavLink
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `block py-2 ${isActive ? "text-white font-semibold" : "text-gray-400 hover:text-white"}`
                        }
                    >
                        Contact Us
                    </NavLink>
                    <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className="block text-center bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-[#2dd4bf] transition"
                    >
                        Get in touch
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;