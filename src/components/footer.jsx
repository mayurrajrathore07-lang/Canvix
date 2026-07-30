import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-black text-gray-300 pt-16 pb-10 border-t border-zinc-900 font-sans">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">

                    {/* Col 1: Brand Info (4 cols) */}
                    <div className="md:col-span-4">
                        <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-9a3 3 0 100 6 3 3 0 000-6z" />
                            </svg>
                            <span>Canvix</span>
                        </Link>

                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                            We're a team of strategic creator and digital innovator, united focus in our pursuit of mastery and joyful.
                        </p>
                    </div>

                    {/* Col 2: Pages (2.5 cols) */}
                    <div className="md:col-span-2">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                            Pages
                        </h4>

                        <ul className="space-y-2 text-xs text-gray-400">
                            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                            <li><Link to="/" className="hover:text-white transition">Home 2</Link></li>
                            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
                            <li><Link to="/projects" className="hover:text-white transition">Portfolio</Link></li>
                            <li><Link to="/projects/1" className="hover:text-white transition">Portfolio Single</Link></li>
                        </ul>
                    </div>

                    {/* Col 3: Utility Pages (2.5 cols) */}
                    <div className="md:col-span-2">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                            Utility Pages
                        </h4>

                        <ul className="space-y-2 text-xs text-gray-400">
                            <li><a href="#style-guide" className="hover:text-white transition">Style Guide</a></li>
                            <li><a href="#instruction" className="hover:text-white transition">Instruction</a></li>
                            <li><a href="#license" className="hover:text-white transition">License</a></li>
                            <li><a href="#changelog" className="hover:text-white transition">Changelog</a></li>
                            <li><a href="#404" className="hover:text-white transition">Error 404</a></li>
                            <li><a href="#password" className="hover:text-white transition">Password Protected</a></li>
                        </ul>
                    </div>

                    {/* Col 4: Subscribe (4 cols) */}
                    <div className="md:col-span-4">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                            Subscribe
                        </h4>

                        <form onSubmit={(e) => e.preventDefault()} className="flex items-center bg-white rounded-full p-1 max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email here"
                                className="flex-1 px-4 py-1.5 bg-transparent text-gray-800 placeholder-gray-500 outline-none text-xs"
                            />
                            <button
                                type="submit"
                                className="bg-[#242424] text-white font-medium text-xs px-5 py-2 rounded-full hover:bg-black transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Row */}
                <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center text-xs text-gray-400">
                    <div>
                        <span className="font-bold text-white block mb-0.5">Copyright by</span>
                        <span>Designed by Iconica.com</span>
                    </div>

                    <div>
                        <span className="font-bold text-white block mb-0.5">Contact Us</span>
                        <span>+0 12 457 4576</span>
                    </div>

                    <div>
                        <span className="font-bold text-white block mb-0.5">Address</span>
                        <span>119 Tanglewood Lane Gulfport, MS 39503</span>
                    </div>

                    <div className="flex gap-2 sm:justify-end">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition text-xs">
                            <FaFacebookF />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition text-xs">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition text-xs">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;