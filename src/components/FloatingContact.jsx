"use client";

import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaTimes } from "react-icons/fa";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919328311556";
  const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+919328311556";
  const WHATSAPP_MESSAGE = "Hi! I'm interested in your services. Can we discuss?";

  return (
    <div className="fixed bottom-7 right-7 z-[900] flex flex-col items-end gap-3">
      {/* Expanded options */}
      {open && (
        <>
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fab-item flex items-center gap-2.5 bg-[#25D366] text-white rounded-full px-5 py-3 no-underline text-sm font-bold shadow-[0_8px_28px_rgba(37,211,102,0.35)] hover:scale-105 hover:shadow-[0_12px_36px_rgba(37,211,102,0.45)] transition-all duration-200"
          >
            <FaWhatsapp size={20} />
            WhatsApp Us
          </a>

          {/* Phone Call */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="fab-item flex items-center gap-2.5 bg-[#111] text-white rounded-full px-5 py-3 no-underline text-sm font-bold border border-white/[0.12] shadow-[0_8px_28px_rgba(0,0,0,0.4)] hover:scale-105 hover:bg-[#30B5AA] hover:border-[#30B5AA] transition-all duration-200"
          >
            <FaPhoneAlt size={16} />
            Call Now
          </a>
        </>
      )}

      {/* Main FAB toggle */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-[60px] h-[60px] rounded-full border-none text-white cursor-pointer flex items-center justify-center transition-all duration-250 ${
          open
            ? "bg-[#111] border border-white/[0.15] shadow-[0_8px_28px_rgba(0,0,0,0.5)]"
            : "fab-main bg-gradient-to-br from-[#30B5AA] to-[#2dd4bf] shadow-[0_8px_28px_rgba(48,181,170,0.4)]"
        }`}
        aria-label={open ? "Close contact options" : "Contact us"}
      >
        <span className="fab-icon-enter" key={open ? "close" : "open"}>
          {open ? <FaTimes size={22} /> : <HiChatBubbleLeftRight size={26} />}
        </span>
      </button>
    </div>
  );
}
