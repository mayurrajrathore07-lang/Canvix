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
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 text-black">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between py-4">


                <Link to="/" className="text-2xl font-bold tracking-tight text-black flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shadow-sm">
                        <svg className="w-4 h-4 text-white fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                            <path d="M12 3a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9a9 9 0 0 1-9-9c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 4-4 4-4-1.79-4-4" strokeLinecap="round" />
                        </svg>
                    </div>
                    <span className="font-semibold text-xl tracking-tight text-black">Canvix</span>
                </Link>


                <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-black font-semibold" : "text-gray-600 hover:text-black transition"}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "text-black font-semibold" : "text-gray-600 hover:text-black transition"}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-black font-semibold" : "text-gray-600 hover:text-black transition"}>
                            Contact Us
                        </NavLink>
                    </li>
                </ul>



                <Link
                    to="/contact"
                    className="hidden md:inline-block bg-black text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-gray-800 transition duration-300 shadow-sm"
                >
                    Get in touch
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
                    <NavLink
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `block py-1.5 ${isActive ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `block py-1.5 ${isActive ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/projects"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `block py-1.5 ${isActive ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`
                        }
                    >
                        Portfolio
                    </NavLink>
                    <NavLink
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `block py-1.5 ${isActive ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`
                        }
                    >
                        Contact Us
                    </NavLink>
                    <Link
                        to="/contact"
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