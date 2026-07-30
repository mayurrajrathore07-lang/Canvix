import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-zinc-950 text-white pt-20 pb-12 border-t border-zinc-800">
            <div className="container mx-auto px-6">

                {/* Top */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div>
                        <Link to="/" className="text-4xl font-extrabold mb-6 block tracking-tight">
                            Canvix<span className="text-cyan-400">.</span>
                        </Link>

                        <p className="text-gray-400 leading-7 text-sm md:text-base">
                            We're a team of strategic creators and digital innovators,
                            united in our pursuit of digital mastery and impactful experiences.
                        </p>
                    </div>

                    {/* Pages */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-white border-b border-zinc-800 pb-2">
                            Pages
                        </h3>

                        <ul className="space-y-3 text-gray-400 text-sm md:text-base">
                            <li><Link to="/" className="hover:text-cyan-400 transition">Home</Link></li>
                            <li><Link to="/about" className="hover:text-cyan-400 transition">About Us</Link></li>
                            <li><Link to="/projects" className="hover:text-cyan-400 transition">Projects Showcase</Link></li>
                            <li><Link to="/contact" className="hover:text-cyan-400 transition">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Quick Services */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-white border-b border-zinc-800 pb-2">
                            Our Services
                        </h3>

                        <ul className="space-y-3 text-gray-400 text-sm md:text-base">
                            <li><Link to="/projects" className="hover:text-cyan-400 transition">Content Marketing</Link></li>
                            <li><Link to="/projects" className="hover:text-cyan-400 transition">Graphic & Brand Design</Link></li>
                            <li><Link to="/projects" className="hover:text-cyan-400 transition">Digital Marketing</Link></li>
                            <li><Link to="/projects" className="hover:text-cyan-400 transition">Web Development</Link></li>
                        </ul>
                    </div>

                    {/* Subscribe */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-white border-b border-zinc-800 pb-2">
                            Subscribe
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Subscribe to receive news, updates, and design insights directly.
                        </p>

                        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2 bg-zinc-900 rounded-full p-1.5 border border-zinc-800">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 bg-transparent outline-none text-white text-sm"
                            />
                            <button type="submit" className="bg-cyan-400 text-black font-semibold px-6 py-2.5 rounded-full hover:bg-white transition text-sm">
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-zinc-800 pt-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center text-sm text-gray-400">
                        <div>
                            <h4 className="font-semibold text-white mb-1">Copyright</h4>
                            <p>© {new Date().getFullYear()} Canvix Agency. All rights reserved.</p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-white mb-1">Contact</h4>
                            <p>hello@canvix agency.com</p>
                            <p>+1 (234) 567-890</p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-white mb-1">Address</h4>
                            <p>119 Tanglewood Lane Gulfport, MS 39503</p>
                        </div>

                        <div className="flex gap-3 md:justify-end">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-cyan-400 hover:text-black flex items-center justify-center transition">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-cyan-400 hover:text-black flex items-center justify-center transition">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-cyan-400 hover:text-black flex items-center justify-center transition">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-cyan-400 hover:text-black flex items-center justify-center transition">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;