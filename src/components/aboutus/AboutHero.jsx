import Image from "next/image";

const heroImg = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80";

const AboutHero = () => {
    return (
        <section className="bg-[#0B0F19] text-white py-16 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto bg-[#121726] border border-slate-800 rounded-3xl px-6 sm:px-8 md:px-16 py-14 shadow-2xl relative overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <p className="text-gray-400 mb-5">
                            Launched in 2026 — a bold new agency on a mission.
                        </p>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
                            Ready to take
                            <span className="text-cyan-400"> your business</span>
                            <br />
                            to the next level?
                        </h1>

                        <p className="text-gray-400 mt-8 max-w-md">
                            In just 6 months, Canvix has delivered 20+ projects and served 15+ happy clients across design, development, marketing, and staffing — with a 98% satisfaction rate.
                        </p>

                        <div className="flex items-center gap-4 mt-10">
                            <div className="w-14 h-14 rounded-full overflow-hidden relative shrink-0">
                                <Image
                                    src="https://i.pravatar.cc/80"
                                    alt="Satisfied client avatar"
                                    fill
                                    sizes="56px"
                                    className="object-cover"
                                />
                            </div>

                            <div>
                                <h4 className="font-semibold">Rated 4.9/5 stars</h4>
                                <p className="text-yellow-400 text-lg">★★★★★</p>
                            </div>
                        </div>
                    </div>


                    <div className="relative flex justify-center items-center h-auto min-h-[300px] sm:min-h-[400px] lg:h-[550px]">

                        <div className="absolute w-full max-w-[420px] h-[80%] sm:h-[90%] rounded-3xl bg-white/10 -left-2 -top-2 hidden sm:block"></div>

                        <div className="absolute w-full max-w-[420px] h-[80%] sm:h-[90%] rounded-3xl bg-white/15 left-4 sm:left-8 top-4 sm:top-8 hidden sm:block"></div>

                        <div className="relative w-full max-w-[420px] h-[300px] sm:h-[400px] lg:h-[520px] rounded-3xl overflow-hidden">
                            <Image
                                src={heroImg}
                                alt="Canvix team collaborating on creative digital solutions"
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;