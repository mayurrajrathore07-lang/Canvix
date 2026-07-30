import React from "react";

const teamMembers = [
    {
        name: "Alexander Wright",
        role: "Creative Director & Founder",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    },
    {
        name: "Sophia Chen",
        role: "Head of UX & Product Strategy",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    },
    {
        name: "David Miller",
        role: "Lead Fullstack Architect",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
        name: "Emily Watson",
        role: "Brand Marketing Lead",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    },
];

function AboutTeam() {
    return (
        <section className="bg-black py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-cyan-400 font-semibold uppercase tracking-widest text-xs block mb-2">
                        Our Leadership
                    </span>
                    <h2 className="text-4xl font-bold text-white">Meet the Creative Minds</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden p-6 text-center group hover:border-cyan-400/50 transition duration-300">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-2 border-zinc-800 group-hover:border-cyan-400 transition"
                            />
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition">{member.name}</h3>
                            <p className="text-gray-400 text-sm">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutTeam;
