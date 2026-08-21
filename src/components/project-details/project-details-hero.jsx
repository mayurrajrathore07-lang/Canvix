import React from "react";

function ProjectDetailsHero({ project }) {
    const defaultData = {
        title: "To design Digital Strategy",
        category: "Cloud solution",
        client: "BrightMedia Solutions",
        date: "August 23, 2023",
        location: "489 Depot Road Midland",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=80",
    };

    const current = project ? { ...defaultData, ...project } : defaultData;

    return (
        <section className="bg-[#0c0d0e] pt-6 pb-8 px-4 sm:px-6 md:px-8">
            <div className="max-w-6xl mx-auto">


                <div className="relative w-full h-[320px] sm:h-[450px] md:h-[520px] rounded-3xl md:rounded-[36px] overflow-hidden bg-zinc-900 shadow-sm">
                    <img
                        src={current.image || defaultData.image}
                        alt={current.title || "Project Image"}
                        className="w-full h-full object-cover object-center"
                    />
                </div>


                <div className="max-w-4xl mx-auto -mt-8 sm:-mt-12 relative z-10 px-2 sm:px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                        <div className="bg-[#0e0e0e] text-white rounded-2xl p-4 sm:py-4 sm:px-5 flex flex-col justify-center shadow-lg border border-zinc-800">
                            <span className="text-xs sm:text-sm font-bold text-white mb-1">
                                Category :
                            </span>
                            <span className="text-xs sm:text-sm text-gray-300 font-light truncate">
                                {current.category || "Cloud solution"}
                            </span>
                        </div>

                        <div className="bg-[#0e0e0e] text-white rounded-2xl p-4 sm:py-4 sm:px-5 flex flex-col justify-center shadow-lg border border-zinc-800">
                            <span className="text-xs sm:text-sm font-bold text-white mb-1">
                                Client :
                            </span>
                            <span className="text-xs sm:text-sm text-gray-300 font-light truncate">
                                {current.client || "BrightMedia Solutions"}
                            </span>
                        </div>

                        <div className="bg-[#0e0e0e] text-white rounded-2xl p-4 sm:py-4 sm:px-5 flex flex-col justify-center shadow-lg border border-zinc-800">
                            <span className="text-xs sm:text-sm font-bold text-white mb-1">
                                Date :
                            </span>
                            <span className="text-xs sm:text-sm text-gray-300 font-light truncate">
                                {current.date || "August 23, 2023"}
                            </span>
                        </div>

                        <div className="bg-[#0e0e0e] text-white rounded-2xl p-4 sm:py-4 sm:px-5 flex flex-col justify-center shadow-lg border border-zinc-800">
                            <span className="text-xs sm:text-sm font-bold text-white mb-1">
                                Location:
                            </span>
                            <span className="text-xs sm:text-sm text-gray-300 font-light truncate">
                                {current.location || "489 Depot Road Midland"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectDetailsHero;

