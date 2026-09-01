const servicesData = [
    {
        number: "20+",
        title: "Projects Delivered",
        description:
            "In just 6 months, we have successfully delivered 20+ diverse digital projects — from web platforms to AI-powered solutions — for startups and growing enterprises.",
    },
    {
        number: "98%",
        title: "Client Satisfaction",
        description:
            "Our commitment to quality and on-time delivery has resulted in an exceptional 98% client satisfaction rate — every client, every project, every time.",
    },
    {
        number: "15+",
        title: "Happy Clients",
        description:
            "We are proud to have served 15+ clients across multiple industries since our launch, building long-term partnerships rooted in trust and results.",
    },
];

function AboutService() {
    return (
        <section className="bg-white text-black py-16 md:py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center">
                    {servicesData.map((item) => (
                        <div key={item.title} className="flex flex-col items-center">
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
