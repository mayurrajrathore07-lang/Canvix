import React from "react";


function Services() {
    const services = [
        {
            title: "Content Marketing",
            desc: "Our team creates engaging and shareable content that resonates with your audience, drives organic traffic.",
            icon: "*",
            dark: true,
        },
        {
            title: "Graphic Design",
            desc: "Unlock the power of visual storytelling with our expert graphic design services.",
            icon: "*",
        },
        {
            title: "Digital Marketing",
            desc: "Elevate your brand's online presence with data-driven digital marketing strategies.",
            icon: "*",
        },
        {
            title: "Web Design",
            desc: "We create visually stunning and user-friendly websites for your business.",
            icon: "*",
        },
        {
            title: "IT Consulting",
            desc: "Professional IT consulting and implementation services for businesses.",
            icon: "*",
        },
        {
            title: "Brand Identity",
            desc: "Create a unique brand identity that stands out from the competition.",
            icon: "*",
        },
    ];

    return (
        <section className="bg-black py-20 px-5">
            <div className="max-w-7xl mx-auto">
                <p className="text-center text-cyan-400 text-lg font-semibold">
                    Our Services
                </p>

                <h2 className="text-center text-5xl font-bold text-gray-900 mt-4 mb-16">
                    High-impact services
                    <br />
                    for your business
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl p-10 ${item.dark ? "bg-zinc-900 text-white" : "bg-white text-black"
                                }`}
                        >
                            <div
                                className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-14 ${item.dark
                                    ? "bg-white text-black"
                                    : "bg-black text-white"
                                    }`}
                            >
                                {item.icon}
                            </div>

                            <h3 className="text-3xl font-semibold mb-5">{item.title}</h3>

                            <p className="text-lg leading-8 text-gray-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;