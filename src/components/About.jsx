import React from 'react';

export default function About() {
  const stats = [
    { label: 'Technologies Indexed', value: '10,000+' },
    { label: 'Daily Scans Completed', value: '1.5M+' },
    { label: 'Global Active Users', value: '85,000+' },
    { label: 'Accuracy Rating', value: '99.4%' },
  ];

  const team = [
    {
      name: 'Alex Vance',
      role: 'Founder & CEO',
      bio: 'Ex-Senior Architect passionate about software engineering transparency.',
      avatar: '👨‍💻',
    },
    {
      name: 'Elena Rostova',
      role: 'Head of Product',
      bio: 'Product strategist focused on deep developer tooling and analytics.',
      avatar: '👩‍💻',
    },
    {
      name: 'David Chen',
      role: 'Lead Security Engineer',
      bio: 'Cybersecurity specialist dedicated to web fingerprinting & vulnerability tracking.',
      avatar: '🛡️',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Overview */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
          About <span className="text-cyan-400">TechSpy</span>
        </h1>
        <p className="mt-4 text-lg text-slate-400 leading-relaxed">
          We are on a mission to democratize technology intelligence. TechSpy provides real-time clarity on how modern web applications are built, configured, and optimized.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400">{stat.value}</div>
            <div className="mt-2 text-sm text-slate-400 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/80 border border-slate-800 space-y-4">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-xl font-bold">
            🎯
          </div>
          <h2 className="text-2xl font-bold text-white">Our Mission</h2>
          <p className="text-slate-400 leading-relaxed">
            To provide instant, trustworthy software intelligence that enables teams to make better architectural decisions, evaluate vendor stacks, and learn from top tech leaders.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/80 border border-slate-800 space-y-4">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 text-xl font-bold">
            👁️
          </div>
          <h2 className="text-2xl font-bold text-white">Our Vision</h2>
          <p className="text-slate-400 leading-relaxed">
            A world where technology choices are transparent, accessible, and driven by actionable insights rather than hype and guesswork.
          </p>
        </div>
      </div>

      {/* Team */}
      <div>
        <h2 className="text-3xl font-bold text-white text-center mb-10">Meet the Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-3">
              <div className="w-20 h-20 rounded-full bg-slate-800 mx-auto flex items-center justify-center text-4xl border border-slate-700">
                {member.avatar}
              </div>
              <h3 className="text-lg font-bold text-white">{member.name}</h3>
              <p className="text-cyan-400 text-sm font-medium">{member.role}</p>
              <p className="text-slate-400 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
