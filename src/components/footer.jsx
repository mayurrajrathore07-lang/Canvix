import React from 'react';

function Footer() {
    return (
        <footer className="bg-black text-white py-20">
            <div className="container mx-auto px-6">

                {/* Top */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Canvix</h2>

                        <p className="text-gray-400 leading-7">
                            We're a team of strategic creator and digital innovator,
                            united focus in our pursuit of mastery and joyful.
                        </p>
                    </div>

                    {/* Pages */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">
                            Pages
                        </h3>

                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Home 2</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Portfolio Single</a></li>
                        </ul>
                    </div>

                    {/* Utility */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">
                            Utility Pages
                        </h3>

                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#">Style Guide</a></li>
                            <li><a href="#">Instruction</a></li>
                            <li><a href="#">License</a></li>
                            <li><a href="#">Changelog</a></li>
                            <li><a href="#">Error 404</a></li>
                            <li><a href="#">Password Protected</a></li>
                        </ul>
                    </div>

                    {/* Subscribe */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">
                            Subscribe
                        </h3>

                        <div className="flex bg-white rounded-full p-2">

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 outline-none text-black"
                            />

                            <button className="bg-gray-800 text-white px-6 py-3 rounded-full">
                                Subscribe
                            </button>

                        </div>
                    </div>

                </div>

                {/* Bottom */}

                <div className="border-t border-gray-700 mt-20 pt-10">

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                        <div>
                            <h4 className="font-semibold mb-2">
                                Copyright
                            </h4>

                            <p className="text-gray-400">
                                Designed by Iconstica.com
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">
                                Contact
                            </h4>

                            <p className="text-gray-400">
                                +0 12 457 4578
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">
                                Address
                            </h4>

                            <p className="text-gray-400">
                                119 Tanglewood Lane Gulfport, MS 39503
                            </p>
                        </div>

                        <div className="flex gap-4 md:justify-end">

                            <div className="w-10 h-10 rounded-full bg-white"></div>

                            <div className="w-10 h-10 rounded-full bg-white"></div>

                            <div className="w-10 h-10 rounded-full bg-white"></div>

                        </div>

                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;