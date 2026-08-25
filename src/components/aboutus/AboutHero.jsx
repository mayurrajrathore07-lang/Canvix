import React from "react";

const heroImg = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80";

const AboutHero = () => {
    return (
        <section className="bg-black text-white py-16">
            <div className="max-w-7xl mx-auto bg-[#111] rounded-3xl px-8 md:px-16 py-14">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <p className="text-gray-400 mb-5">
                            Launched in 2026 — a bold new agency on a mission.
                        </p>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                            Ready to take <br />
                            <span className="text-cyan-400">your business</span>
                            <br />
                            to the next level?
                        </h1>

                        <p className="text-gray-400 mt-8 max-w-md">
                            In just 6 months, Canvix has delivered 20+ projects and served 15+ happy clients across design, development, marketing, and staffing — with a 98% satisfaction rate.
                        </p>

                        <div className="flex items-center gap-4 mt-10">
                            <img
                                src="https://i.pravatar.cc/80"
                                alt=""
                                className="w-14 h-14 rounded-full"
                            />

                            <div>
                                <h4 className="font-semibold">Rated 4.9/5 stars</h4>
                                <p className="text-yellow-400 text-lg hover:text-blue-400">★★★★★</p>
                            </div>
                        </div>
                    </div>


                    <div className="relative flex justify-center items-center h-[550px]">


                        <div className="absolute w-[420px] h-[520px] rounded-3xl bg-white/10 -left-2 -top-2"></div>

                        <div className="absolute w-[420px] h-[520px] rounded-3xl bg-white/15 left-8 top-8"></div>



                        <img
                            src={heroImg}
                            alt=""
                            className="relative w-[420px] h-[520px] object-cover rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;