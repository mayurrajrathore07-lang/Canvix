const hero = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80";

function Hero() {
    return (
        <section className="container mx-auto py-20">

            <div className="grid md:grid-cols-2 gap-20 items-center">

                {/* Left */}

                <div>

                    <h1 className="text-7xl font-bold leading-tight">

                        Ready to take your

                        <span className="block text-cyan-400">
                            Business Growth
                        </span>

                        to the next level?

                    </h1>

                    <p className="text-gray-400 mt-8 leading-7">

                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.

                    </p>

                    <button className="bg-white text-black px-8 py-4 rounded-full mt-10">

                        Start your Free Trial

                    </button>

                </div>

                {/* Right */}

                <div className="flex justify-center">

                    <div className="w-[520px] h-[520px] rounded-full border border-cyan-400 flex items-center justify-center">

                        <div className="w-[450px] h-[450px] rounded-full border border-gray-600 flex items-center justify-center">

                            <img
                                src={hero}
                                alt=""
                                className="w-[380px] h-[380px] rounded-full object-cover"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;