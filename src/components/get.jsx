import React from "react";

const ProjectLetsTalk = () => {
    return (
        <section className="relative mx-auto my-10 flex h-[220px] w-full max-w-7xl items-center justify-center overflow-hidden rounded-3xl bg-[#2f2f2f] px-6">
            {/* Background Waves */}
            <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                {Array.from({ length: 14 }).map((_, i) => (
                    <path
                        key={i}
                        d={`M0 ${150 + i * 8} C250 ${250 - i * 6} 450 ${50 + i * 4
                            } 720 ${150 + i * 5} C980 ${250 - i * 6} 1180 ${50 + i * 4
                            } 1440 ${170 + i * 6}`}
                        fill="none"
                        stroke="rgba(0,0,0,0.35)"
                        strokeWidth="1.2"
                    />
                ))}
            </svg>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
                <h2 className="mb-8 text-center text-4xl font-bold text-white md:text-6xl">
                    Enough talk, let’s get to work
                </h2>

                <button className="rounded-full bg-white px-8 py-3 text-lg font-medium text-black transition hover:bg-gray-200">
                    Get in touch
                </button>
            </div>
        </section>
    );
};

export default ProjectLetsTalk;

