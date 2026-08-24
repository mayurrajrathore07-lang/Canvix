"use client";

import Link from "next/link";
import { FaCalendarCheck, FaHandshake, FaRocket, FaArrowRight } from "react-icons/fa";

const trustPoints = [
  {
    icon: <FaCalendarCheck size={20} />,
    title: "Free Consultation",
    desc: "30-minute call to understand your goals",
    color: "#30B5AA",
  },
  {
    icon: <FaHandshake size={20} />,
    title: "No Obligations",
    desc: "No contracts, no pressure — just honest advice",
    color: "#7c3aed",
  },
  {
    icon: <FaRocket size={20} />,
    title: "Quick Turnaround",
    desc: "Proposal within 48 hours of our call",
    color: "#f59e0b",
  },
];

export default function BookConsultation() {
  return (
    <section
      style={{
        background: "#0c0d0e",
        padding: "40px 24px 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(48,181,170,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Main card */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(48,181,170,0.08) 0%, rgba(124,58,237,0.06) 50%, rgba(48,181,170,0.04) 100%)",
            border: "1px solid rgba(48,181,170,0.15)",
            borderRadius: "28px",
            padding: "clamp(40px, 6vw, 64px) clamp(24px, 5vw, 56px)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Corner accents */}
          <div
            style={{
              position: "absolute",
              top: "-40px",
              right: "-40px",
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(48,181,170,0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-40px",
              left: "-40px",
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Badge */}
          <span
            style={{
              display: "inline-block",
              background: "rgba(48,181,170,0.12)",
              border: "1px solid rgba(48,181,170,0.3)",
              color: "#30B5AA",
              borderRadius: "50px",
              padding: "6px 18px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Let's Work Together
          </span>

          {/* Heading */}
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800,
              color: "#fff",
              margin: "0 0 16px",
              letterSpacing: "-1px",
              lineHeight: 1.15,
              fontFamily: "'DM Serif Display', serif",
            }}
          >
            Ready to Grow Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #30B5AA, #2dd4bf)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Business
            </span>
            ?
          </h2>

          <p
            style={{
              color: "#9ca3af",
              fontSize: "16px",
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: "0 auto 40px",
            }}
          >
            Book a free consultation — no commitments. Let's discuss your project
            and see how we can help you achieve your goals.
          </p>

          {/* Trust points */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
              marginBottom: "40px",
            }}
          >
            {trustPoints.map((point, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                  padding: "20px 16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  transition: "border 0.2s, background 0.2s",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: `${point.color}15`,
                    border: `1px solid ${point.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: point.color,
                  }}
                >
                  {point.icon}
                </div>
                <p
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "14px",
                    margin: 0,
                  }}
                >
                  {point.title}
                </p>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "12px",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            id="book-consultation-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "linear-gradient(135deg, #30B5AA 0%, #2dd4bf 100%)",
              color: "#000",
              padding: "16px 36px",
              borderRadius: "50px",
              fontWeight: 800,
              fontSize: "15px",
              textDecoration: "none",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              boxShadow: "0 8px 32px rgba(48,181,170,0.3)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 14px 40px rgba(48,181,170,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 32px rgba(48,181,170,0.3)";
            }}
          >
            Book Free Consultation
            <FaArrowRight size={14} />
          </Link>

          <p
            style={{
              color: "#4b5563",
              fontSize: "12px",
              marginTop: "18px",
              fontWeight: 500,
            }}
          >
            ✓ No credit card required &nbsp; ✓ Response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
