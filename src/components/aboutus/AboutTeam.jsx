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
        <section className="bg-white text-slate-900 py-20 px-6 border-t border-slate-100">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#6E56CF] font-bold uppercase tracking-widest text-xs block mb-2">
                        Our Leadership
                    </span>
                    <h2 className="text-4xl font-bold text-slate-900 font-serif">Meet the Creative Minds</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-[#F8FAFC] border border-slate-200/80 rounded-3xl overflow-hidden p-6 text-center group hover:border-[#6E56CF] hover:shadow-xl transition duration-300">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-2 border-slate-200 group-hover:border-[#6E56CF] transition"
                            />
                            <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#6E56CF] transition">{member.name}</h3>
                            <p className="text-slate-500 text-sm font-medium">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutTeam;
