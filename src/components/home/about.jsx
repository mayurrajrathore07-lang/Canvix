import React from "react";


function About() {
    return (
        <section className="bg-black py-20 px-5">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">

                {/* Left Images */}
                <div className="relative w-full lg:w-1/2 flex justify-center">

                    <img
                        src="/images/about.jpg"
                        alt=""
                        className="absolute top-0 left-10 w-96 h-[540px] object-cover rounded-3xl opacity-20"
                    />

                    <img
                        src="/images/about.jpg"
                        alt=""
                        className="absolute top-8 left-20 w-96 h-[540px] object-cover rounded-3xl opacity-50"
                    />

                    <img
                        src="/images/about.jpg"
                        alt=""
                        className="relative w-96 h-[540px] object-cover rounded-3xl"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full lg:w-1/2">

                    <p className="text-cyan-400 text-xl font-semibold mb-6">
                        About us
                    </p>

                    <h2 className="text-white text-5xl lg:text-6xl font-bold leading-tight mb-8">
                        The core mission
                        <br />
                        behind all our
                        <br />
                        work
                    </h2>

                    <p className="text-gray-400 text-lg leading-8 mb-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut
                        tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.
                    </p>

                    <div className="flex gap-16 mb-10">

                        <div>
                            <h3 className="text-cyan-400 text-5xl font-bold">
                                330+
                            </h3>
                            <p className="text-gray-300 mt-2">
                                Companies helped
                            </p>
                        </div>

                        <div>
                            <h3 className="text-cyan-400 text-5xl font-bold">
                                230+
                            </h3>
                            <p className="text-gray-300 mt-2">
                                Revenue generated
                            </p>
                        </div>

                    </div>

                    <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium flex items-center gap-3 hover:bg-gray-200 duration-300">
                        <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center">
                            →
                        </span>
                        Start your Free Trial
                    </button>

                </div>
            </div>
        </section>
    );
}

export default About;