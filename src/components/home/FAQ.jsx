"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    q: "What services does Canvix offer?",
    a: "We provide end-to-end digital solutions — web design & development, brand identity, UI/UX design, SEO optimization, and digital marketing strategy. Whether you need a new website or a complete brand overhaul, we've got you covered.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most projects are delivered within 2–6 weeks depending on complexity. A simple landing page takes about 1–2 weeks, while a full website or branding project takes 4–6 weeks. We'll give you a clear timeline before starting.",
  },
  {
    q: "Do you work with startups and small businesses?",
    a: "Absolutely! We love working with startups and growing businesses. We understand budget constraints and offer flexible packages tailored to your needs. Some of our best work has been with early-stage companies.",
  },
  {
    q: "What makes Canvix different from other agencies?",
    a: "Three things: speed, quality, and communication. We don't just deliver designs — we build digital products that drive real business results. Our 98% client satisfaction rate speaks for itself. Plus, you get direct access to your project team, not a middleman.",
  },
  {
    q: "How do we get started?",
    a: "It's simple — just reach out through our contact form or call us directly. We'll schedule a free 30-minute consultation to understand your goals, then present a tailored proposal within 48 hours. No obligations, no pressure.",
  },
  {
    q: "Do you offer ongoing support after the project?",
    a: "Yes! We don't disappear after launch. We offer maintenance packages, performance monitoring, and on-demand support. Your success is our success — we're in it for the long haul.",
  },
  {
    q: "How does your technical staffing & recruitment process work?",
    a: "We leverage a 5-stage vetting pipeline assessing system design, coding proficiency, and cultural fit. We match qualified candidates within 48 to 72 hours, offering flexible contract-to-hire, direct placement, or dedicated engineering squads with a 60-day replacement warranty.",
  },
  {
    q: "Can Canvix build and integrate custom AI models into our existing software?",
    a: "Yes! Our AI engineers build custom RAG knowledge bases, fine-tune open-source and proprietary LLMs (OpenAI, Anthropic, Llama), and automate complex business workflows while maintaining enterprise data privacy and SOC2 standards.",
  },
  {
    q: "What accounting and fractional CFO services do you provide?",
    a: "We manage accrual GAAP-compliant bookkeeping, financial forecasting, tax optimization, and investor reporting. Our Fractional CFOs help founders extend runway, model unit economics, and prepare for institutional funding rounds.",
  },
  {
    q: "What engagement and pricing models are available?",
    a: "We offer four transparent engagement models: Fixed-Price Turnkey Projects for defined deliverables, Monthly Dedicated Engineering Pods, Hourly On-Demand Staff Augmentation, and Monthly Strategic Retainers.",
  },
];

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        overflow: "hidden",
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          padding: "22px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          fontFamily: "inherit",
          transition: "color 0.2s",
        }}
      >
        <span
          style={{
            color: isOpen ? "#30B5AA" : "#fff",
            fontWeight: 700,
            fontSize: "clamp(15px, 2vw, 17px)",
            lineHeight: 1.4,
            transition: "color 0.2s",
          }}
        >
          {item.q}
        </span>
        <span
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: isOpen
              ? "rgba(48,181,170,0.15)"
              : "rgba(255,255,255,0.06)",
            border: isOpen
              ? "1px solid rgba(48,181,170,0.3)"
              : "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            color: isOpen ? "#30B5AA" : "#6b7280",
            transition: "all 0.25s",
          }}
        >
          {isOpen ? <FaMinus size={11} /> : <FaPlus size={11} />}
        </span>
      </button>

      <div
        style={{
          maxHeight: isOpen ? "300px" : "0px",
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.4s cubic-bezier(.4,0,.2,1), opacity 0.3s ease",
          overflow: "hidden",
        }}
      >
        <p
          style={{
            color: "#9ca3af",
            fontSize: "14px",
            lineHeight: 1.8,
            margin: 0,
            paddingBottom: "22px",
            paddingRight: "52px",
          }}
        >
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // first one open by default

  return (
    <section
      style={{
        background: "#0c0d0e",
        padding: "80px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(48,181,170,0.1)",
              border: "1px solid rgba(48,181,170,0.25)",
              color: "#30B5AA",
              borderRadius: "50px",
              padding: "6px 18px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "18px",
            }}
          >
            FAQ
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: "#fff",
              margin: "0 0 14px",
              letterSpacing: "-0.8px",
              lineHeight: 1.15,
              fontFamily: "'DM Serif Display', serif",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            style={{
              color: "#6b7280",
              fontSize: "15px",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Got questions? We've got answers. If you don't find what you're
            looking for, feel free to contact us.
          </p>
        </div>

        {/* FAQ Items */}
        <div
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "20px",
            padding: "8px 32px",
          }}
        >
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
