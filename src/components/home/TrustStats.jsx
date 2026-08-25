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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        padding: "28px 16px",
      }}
    >
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "16px",
          background: `${color}15`,
          border: `1px solid ${color}30`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color,
          transition: "transform 0.3s, background 0.3s",
        }}
      >
        {icon}
      </div>
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 900,
            color: "#fff",
            margin: 0,
            letterSpacing: "-1px",
            lineHeight: 1,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          {staticDisplay ? (
            <span style={{ color }}>{staticDisplay}</span>
          ) : (
            <>{count}<span style={{ color }}>{suffix}</span></>
          )}
        </p>
        <p
          style={{
            color: "#9ca3af",
            fontSize: "13px",
            fontWeight: 500,
            margin: "8px 0 0",
            letterSpacing: "0.02em",
          }}
        >
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
    <section
      ref={ref}
      style={{
        background: "#0c0d0e",
        padding: "20px 24px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          background:
            "linear-gradient(135deg, rgba(48,181,170,0.06) 0%, rgba(124,58,237,0.06) 100%)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle corner glow */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            left: "-60px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(48,181,170,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            right: "-60px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {stats.map((stat, i) => (
          <StatItem key={i} {...stat} animate={visible} />
        ))}
      </div>
    </section>
  );
}
