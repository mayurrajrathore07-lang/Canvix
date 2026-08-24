"use client";

import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaTimes } from "react-icons/fa";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  // ── Change these to your real numbers ──
  const WHATSAPP_NUMBER = "919999999999"; // with country code, no +
  const PHONE_NUMBER = "+919999999999";
  const WHATSAPP_MESSAGE = "Hi! I'm interested in your services. Can we discuss?";

  return (
    <>
      <style>{`
        @keyframes fab-pop {
          from { opacity: 0; transform: scale(0.5) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fab-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(48,181,170,0.5); }
          70%  { box-shadow: 0 0 0 14px rgba(48,181,170,0); }
          100% { box-shadow: 0 0 0 0 rgba(48,181,170,0); }
        }
        @keyframes fab-spin-in {
          from { transform: rotate(-90deg) scale(0.6); opacity: 0; }
          to   { transform: rotate(0) scale(1); opacity: 1; }
        }
        .fab-item {
          animation: fab-pop 0.3s cubic-bezier(.34,1.56,.64,1) backwards;
        }
        .fab-item:nth-child(1) { animation-delay: 0.05s; }
        .fab-item:nth-child(2) { animation-delay: 0.12s; }

        .fab-main {
          animation: fab-pulse 2.5s ease-in-out infinite;
        }
        .fab-main:hover {
          animation: none;
          transform: scale(1.08);
        }
        .fab-icon-enter {
          animation: fab-spin-in 0.25s ease;
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          zIndex: 900,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "12px",
        }}
      >
        {/* Expanded options */}
        {open && (
          <>
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="fab-item"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "#25D366",
                color: "#fff",
                borderRadius: "50px",
                padding: "12px 20px",
                textDecoration: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                boxShadow: "0 8px 28px rgba(37,211,102,0.35)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 12px 36px rgba(37,211,102,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(37,211,102,0.35)";
              }}
            >
              <FaWhatsapp size={20} />
              WhatsApp Us
            </a>

            {/* Phone Call */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="fab-item"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "#111",
                color: "#fff",
                borderRadius: "50px",
                padding: "12px 20px",
                textDecoration: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 8px 28px rgba(0,0,0,0.4)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.background = "#30B5AA";
                e.currentTarget.style.borderColor = "#30B5AA";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.background = "#111";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              }}
            >
              <FaPhoneAlt size={16} />
              Call Now
            </a>
          </>
        )}

        {/* Main FAB toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={open ? "" : "fab-main"}
          aria-label={open ? "Close contact options" : "Contact us"}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: open
              ? "#111"
              : "linear-gradient(135deg, #30B5AA 0%, #2dd4bf 100%)",
            border: open ? "1px solid rgba(255,255,255,0.15)" : "none",
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: open
              ? "0 8px 28px rgba(0,0,0,0.5)"
              : "0 8px 28px rgba(48,181,170,0.4)",
            transition: "all 0.25s cubic-bezier(.34,1.56,.64,1)",
          }}
        >
          <span className="fab-icon-enter" key={open ? "close" : "open"}>
            {open ? <FaTimes size={22} /> : <HiChatBubbleLeftRight size={26} />}
          </span>
        </button>
      </div>
    </>
  );
}
