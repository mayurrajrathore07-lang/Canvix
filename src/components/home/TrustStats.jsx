"use client";

import { useState, useEffect, useRef } from "react";
import { FaProjectDiagram, FaUsers, FaClock, FaStar } from "react-icons/fa";

const stats = [
  {
    icon: <FaProjectDiagram size={22} />,
    value: 20,
    suffix: "+",
    label: "Projects Delivered",
    color: "#30B5AA",
  },
  {
    icon: <FaUsers size={22} />,
    value: 15,
    suffix: "+",
    label: "Happy Clients",
    color: "#7c3aed",
  },
  {
    icon: <FaClock size={22} />,
    value: null,
    suffix: "",
    staticDisplay: "6 Mo",
    label: "Industry Experience",
    color: "#f59e0b",
  },
  {
    icon: <FaStar size={22} />,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    color: "#06b6d4",
  },
];

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    let raf;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return count;
}

function StatItem({ icon, value, suffix, staticDisplay, label, color, animate }) {
  const count = useCountUp(value ?? 0, 2000, animate);

  return (
    <div className="flex flex-col items-center gap-3 py-7 px-4">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 hover:scale-105"
        style={{
          backgroundColor: `${color}15`,
          border: `1px solid ${color}30`,
          color,
        }}
      >
        {icon}
      </div>
      <div className="text-center">
        <p className="text-[clamp(28px,4vw,40px)] font-black text-[#0F172A] m-0 tracking-tight leading-none font-sans">
          {staticDisplay ? (
            <span style={{ color }}>{staticDisplay}</span>
          ) : (
            <>{count}<span style={{ color }}>{suffix}</span></>
          )}
        </p>
        <p className="text-[#475569] text-[13px] font-semibold mt-2 tracking-wide">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function TrustStats() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#F8FAFC] py-8 px-6 pb-12">
      <div className="max-w-[1100px] mx-auto bg-white border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04)] rounded-3xl grid grid-cols-2 sm:grid-cols-4 relative overflow-hidden">
        {/* Subtle corner glow */}
        <div className="absolute -top-[60px] -left-[60px] w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(48,181,170,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[60px] -right-[60px] w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.1)_0%,transparent_70%)] pointer-events-none" />

        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} animate={visible} />
        ))}
      </div>
    </section>
  );
}
