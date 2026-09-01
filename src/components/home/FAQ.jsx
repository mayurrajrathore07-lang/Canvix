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

function FAQItem({ item, isOpen, onClick, isLast }) {
  return (
    <div className={`overflow-hidden ${isLast ? "" : "border-b border-slate-200/80"}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 py-[18px] bg-transparent border-none cursor-pointer text-left transition-colors duration-200"
      >
        <span
          className={`font-bold text-[clamp(14px,1.8vw,16px)] leading-[1.45] transition-colors duration-200 ${
            isOpen ? "text-[#6E56CF]" : "text-[#0F172A]"
          }`}
        >
          {item.q}
        </span>
        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-250 ${
            isOpen
              ? "bg-[#6E56CF]/12 border border-[#6E56CF]/30 text-[#6E56CF]"
              : "bg-[#F1F5F9] border border-[#E2E8F0] text-[#64748B]"
          }`}
        >
          {isOpen ? <FaMinus size={10} /> : <FaPlus size={10} />}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-350 ease-[cubic-bezier(.4,0,.2,1)] ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[#475569] text-sm leading-[1.7] m-0 pb-[18px] pr-6">
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const midPoint = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, midPoint);
  const rightFaqs = faqs.slice(midPoint);

  return (
    <section className="bg-[#F8FAFC] py-20 px-6 border-t border-slate-200/80">
      <div className="max-w-[1140px] mx-auto">
        {/* Header */}
        <div className="text-center mb-11">
          <span className="inline-block bg-[#6E56CF]/8 border border-[#6E56CF]/20 text-[#6E56CF] rounded-full px-[18px] py-1.5 text-xs font-bold tracking-wider uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold text-[#0F172A] mb-3 tracking-tight leading-[1.15] font-serif">
            Frequently Asked Questions
          </h2>
          <p className="text-[#475569] text-[15px] max-w-[540px] mx-auto leading-relaxed">
            Got questions? We&apos;ve got answers. If you don&apos;t find what you&apos;re
            looking for, feel free to contact us.
          </p>
        </div>

        {/* FAQ Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="bg-white border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] rounded-[20px] px-7 py-1.5">
            {leftFaqs.map((item, i) => (
              <FAQItem
                key={item.q}
                item={item}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                isLast={i === leftFaqs.length - 1}
              />
            ))}
          </div>

          <div className="bg-white border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] rounded-[20px] px-7 py-1.5">
            {rightFaqs.map((item, i) => {
              const actualIndex = i + midPoint;
              return (
                <FAQItem
                  key={item.q}
                  item={item}
                  isOpen={openIndex === actualIndex}
                  onClick={() =>
                    setOpenIndex(openIndex === actualIndex ? -1 : actualIndex)
                  }
                  isLast={i === rightFaqs.length - 1}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
