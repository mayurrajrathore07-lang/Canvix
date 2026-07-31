import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-[#0c0d0e] text-gray-400 pt-16 pb-10 border-t border-white/10 font-sans">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">


                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">


                    <div className="md:col-span-4 space-y-4">
                        <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-sm">
                                <svg className="w-4 h-4 text-black fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                                    <path d="M12 3a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9a9 9 0 0 1-9-9c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 4-4 4-4-1.79-4-4" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span className="font-semibold text-xl text-white tracking-tight">Canvix</span>
                        </Link>

                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                            We're a team of strategic creator and digital innovator, united focus in our pursuit of mastery and joyful digital solutions.
                        </p>
                    </div>


                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                            Pages
                        </h4>

                        <ul className="space-y-2.5 text-xs">
                            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
                            <li><Link to="/projects" className="hover:text-white transition">Portfolio</Link></li>
                            <li><Link to="/projects/1" className="hover:text-white transition">Portfolio Single</Link></li>
                        </ul>
                    </div>


                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                            Utility Pages
                        </h4>

                        <ul className="space-y-2.5 text-xs">
                            <li><a href="#style-guide" className="hover:text-white transition">Style Guide</a></li>
                            <li><a href="#instruction" className="hover:text-white transition">Instruction</a></li>
                            <li><a href="#license" className="hover:text-white transition">License</a></li>
                            <li><a href="#changelog" className="hover:text-white transition">Changelog</a></li>
                            <li><a href="#404" className="hover:text-white transition">Error 404</a></li>
                            <li><a href="#password" className="hover:text-white transition">Password Protected</a></li>
                        </ul>
                    </div>


                    <div className="md:col-span-4 space-y-4">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                            Subscribe
                        </h4>

                        <form onSubmit={(e) => e.preventDefault()} className="flex items-center bg-white rounded-full p-1 max-w-md shadow-sm">
                            <input
                                type="email"
                                placeholder="Enter your email here"
                                className="flex-1 px-4 py-2 bg-transparent text-gray-900 placeholder-gray-500 outline-none text-xs"
                            />
                            <button
                                type="submit"
                                className="bg-[#18191c] text-white font-medium text-xs px-5 py-2.5 rounded-full hover:bg-black transition shrink-0"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>


                <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center text-xs text-gray-400">
                    <div>
                        <span className="font-bold text-white block mb-0.5">Copyright by</span>
                        <span>Designed by Identity hub.</span>
                    </div>

                    <div>
                        <span className="font-bold text-white block mb-0.5">Contact Us</span>
                        <span>99999999</span>
                    </div>

                    <div>
                        <span className="font-bold text-white block mb-0.5">Address</span>
                        <span>SBR Ahmedabad gujrat</span>
                    </div>

                    <div className="flex gap-2.5 sm:justify-end">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#30B5AA] transition text-xs">
                            <FaFacebookF />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#30B5AA] transition text-xs">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#30B5AA] transition text-xs">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;