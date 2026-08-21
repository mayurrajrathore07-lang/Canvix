import React from "react";

const servicesData = [
    {
        number: "200+",
        title: "We’re a family",
        description:
            "Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy man children rejoiced.",
    },
    {
        number: "99%",
        title: "Graphic Design",
        description:
            "Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among.",
    },
    {
        number: "1.5M+",
        title: "Digital Marketing",
        description:
            "Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh.",
    },
];

function AboutService() {
    return (
        <section className="bg-white text-black py-16 md:py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center">
                    {servicesData.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <h2 className="text-4xl md:text-5xl font-black text-black mb-3 tracking-tight">
                                {item.number}
                            </h2>
                            <h3 className="text-xl md:text-2xl font-bold text-black mb-4 font-serif">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutService;

