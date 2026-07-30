import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinkClass = ({ isActive }) =>
        isActive
            ? "text-cyan-400 font-semibold transition"
            : "hover:text-cyan-400 transition text-gray-300";

    return (
        <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
            <div className="container mx-auto px-6 flex items-center justify-between py-5">
                <Link to="/" className="text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
                    Canvix<span className="text-cyan-400">.</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 text-base">
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
                        <NavLink to="/projects" className={navLinkClass}>
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={navLinkClass}>
                            Contact Us
                        </NavLink>
                    </li>
                </ul>

                <Link
                    to="/contact"
                    className="hidden md:inline-block bg-white text-black px-6 py-2.5 rounded-full font-medium hover:bg-cyan-400 hover:text-black transition duration-300"
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
                <div className="md:hidden bg-zinc-900 border-b border-zinc-800 px-6 py-6 space-y-4">
                    <NavLink
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `block py-2 ${isActive ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-cyan-400"}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `block py-2 ${isActive ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-cyan-400"}`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/projects"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `block py-2 ${isActive ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-cyan-400"}`
                        }
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `block py-2 ${isActive ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-cyan-400"}`
                        }
                    >
                        Contact Us
                    </NavLink>
                    <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className="block text-center bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-cyan-400 transition"
                    >
                        Get in touch
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;