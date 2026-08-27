"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { IndiaFlag, USAFlag } from "@/components/Flags";
import { OfficeAddressCard } from "@/components/footer/OfficeAddressCard";

const FOOTER_PAGES = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
];

const FOOTER_SERVICES = [
  "AI & Machine Learning",
  "Cloud & DevOps",
  "Web Development",
  "Staffing & Recruiting",
  "Brand & Design",
  "Digital Marketing",
];

const SOCIAL_LINKS = [
  { icon: <FaFacebookF className="text-xs" />, label: "Facebook", href: "https://facebook.com" },
  { icon: <FaInstagram className="text-xs" />, label: "Instagram", href: "https://instagram.com" },
  { icon: <FaLinkedinIn className="text-xs" />, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: <FaTwitter className="text-xs" />, label: "Twitter", href: "https://twitter.com" },
];

function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.trim()) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: "Newsletter",
          lastName: "Subscriber",
          email: email.trim(),
          phone: "",
          message: "Newsletter Subscription Request via Footer",
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message || "Failed to subscribe. Please try again.");
      }
    } catch (err) {
      console.error("Newsletter subscription error:", err);
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <footer className="shrink-0 bg-[#0b0e14] text-gray-400 pt-16 pb-12 border-t border-white/10 font-sans relative overflow-hidden">
      {/* Background Ambient Lighting Glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[350px] bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Background Wave Graphic Accent on Right */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-15 pointer-events-none overflow-hidden hidden md:block">
        <svg className="w-full h-full text-accent-purple" viewBox="0 0 600 400" fill="none">
          <g stroke="currentColor" strokeWidth="1" strokeDasharray="2 6">
            <path d="M100 400 C 200 300, 300 350, 400 200 C 500 50, 550 150, 600 0" />
            <path d="M150 400 C 250 300, 350 350, 450 200 C 550 50, 600 150, 650 0" />
            <path d="M200 400 C 300 300, 400 350, 500 200 C 600 50, 650 150, 700 0" />
            <path d="M250 400 C 350 300, 450 350, 550 200 C 650 50, 700 150, 750 0" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Top Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Column 1: Brand & Socials */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-purple/15 border border-accent-purple/40 text-[#a78bfa] flex items-center justify-center shadow-md shadow-accent-purple/10">
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M12 3a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9a9 9 0 0 1-9-9c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 4-4 4-4-1.79-4-4" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Canvix</span>
            </Link>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              We're a team of strategic creators and digital innovators, united in our pursuit of tech mastery and joyful digital solutions.
            </p>

            <div className="w-12 h-[3px] bg-gradient-to-r from-accent-purple to-[#5B45FF] rounded-full my-4" />

            <div className="flex items-center gap-3 pt-1">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-[#171b26] text-gray-300 flex items-center justify-center border border-white/5 hover:bg-accent-purple hover:text-white transition-all duration-300 hover:scale-105"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: PAGES */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              PAGES
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-medium">
              {FOOTER_PAGES.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="group flex items-center gap-2 text-gray-400 hover:text-white transition">
                    <span className="text-[#a78bfa] font-bold text-xs transition-transform group-hover:translate-x-0.5">&gt;</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: SERVICES */}
          <div className="lg:col-span-3 space-y-4">
            <div className="relative inline-block pb-1">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                SERVICES
              </h4>
              <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-accent-purple" />
            </div>

            <ul className="space-y-3 text-xs sm:text-sm font-medium">
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>
                  <Link href="/services" className="group flex items-center gap-2 text-gray-400 hover:text-white transition">
                    <span className="text-[#a78bfa] font-bold text-xs transition-transform group-hover:translate-x-0.5">&gt;</span>
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: GET IN TOUCH */}
          <div className="lg:col-span-3 space-y-4">
            <div className="relative inline-block pb-1">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                GET IN TOUCH
              </h4>
              <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-accent-purple" />
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm font-medium">
              <div className="flex items-center gap-3 text-gray-300">
                <FaPhoneAlt className="text-[#a78bfa] text-xs shrink-0" />
                <a href="tel:+919328311556" className="hover:text-white transition">+91 9328311556</a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaEnvelope className="text-[#a78bfa] text-xs shrink-0" />
                <a href="mailto:hello@canvix.com" className="hover:text-white transition">hello@canvix.com</a>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-[#a78bfa] text-xs shrink-0 mt-1" />
                <span className="leading-tight">Serving clients across India, the US & globally.</span>
              </div>
            </div>

            <div className="pt-2">
              <Link href="/contact" className="inline-flex items-center gap-4 border border-accent-purple/80 rounded-full pl-5 pr-1.5 py-1.5 text-white font-semibold text-xs sm:text-sm hover:bg-accent-purple/15 transition-all duration-300 group cursor-pointer">
                <span>Let's Talk</span>
                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-accent-purple to-[#5B45FF] text-white flex items-center justify-center font-bold group-hover:translate-x-0.5 transition-transform shadow-sm">
                  <FaArrowRight className="text-[10px]" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Global Locations & Addresses Banner */}
        <div className="py-10 border-t border-white/10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/15" />
            <h4 className="text-xs font-bold text-[#a78bfa] uppercase tracking-widest flex items-center gap-2 px-2 shrink-0">
              <FaMapMarkerAlt className="text-xs text-accent-purple" />
              <span>OUR GLOBAL OFFICES & ADDRESSES</span>
            </h4>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/15" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <OfficeAddressCard
              FlagComponent={IndiaFlag}
              flagAlt="India Flag"
              studioName="India Studio"
              badgeText="GLOBAL HQ"
              badgeBgClass="bg-accent-purple/20 text-[#a78bfa] border-accent-purple/30"
              address="701, Time Square Grand, Sindhu Bhavan Road, Ahmedabad, Gujarat 380059"
              mapUrl="https://maps.google.com/?q=701+Time+Square+Grand+Sindhu+Bhavan+Road+Ahmedabad"
              watermarkPath="M10 90 H90 M15 90 V50 H25 V90 M75 90 V50 H85 V90 M25 50 H75 M25 45 H75 M35 90 V45 H65 V90 M35 60 C35 48 65 48 65 60 M20 45 V30 H30 V45 M70 45 V30 H80 V45 M30 30 H70 M30 25 H70 M40 25 V15 C40 10 60 10 60 15 V25 M45 10 C45 5 55 5 55 10 M22 30 V20 H28 V30 M72 30 V20 H78 V30"
            />
            <OfficeAddressCard
              FlagComponent={USAFlag}
              flagAlt="USA Flag"
              studioName="US Studio"
              badgeText="NEW YORK"
              badgeBgClass="bg-[#5B45FF]/20 text-[#818cf8] border-[#5B45FF]/30"
              address="580 Broadway, Suite 904, SoHo, New York, NY 10012, United States"
              mapUrl="https://maps.google.com/?q=580+Broadway+Suite+904+SoHo+New+York+NY+10012"
              watermarkPath="M10 90 H90 M20 90 V70 H80 V90 M25 70 V55 H75 V70 M30 55 H70 M35 55 V45 M65 55 V45 M45 45 V30 L40 25 L50 15 L60 25 L55 30 V45 M50 15 L50 8 M47 12 L50 15 L53 12 M57 20 L62 18 M62 25 L68 25 M38 20 L33 18 M50 25 V45 L40 40 L45 55 M60 30 L70 15 L68 12 M68 12 H73 M70 15 V25 L65 35 M75 90 V60 H85 V90 M85 90 V40 H95 V90"
            />
          </div>
        </div>

        {/* Bottom Copyright & Newsletter Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col xl:flex-row items-center justify-between gap-6">
          {/* Left: Copyright & Links */}
          <div className="space-y-2 text-xs text-gray-400 text-center xl:text-left">
            <div>
              <span className="font-bold text-[#a78bfa]">© {new Date().getFullYear()} Canvix Agency. </span>
              <span>All rights reserved.</span>
            </div>
            <div className="flex items-center justify-center xl:justify-start gap-3 text-gray-400 text-xs font-normal">
              <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link>
              <span>|</span>
              <Link href="/cookies" className="hover:text-white transition">Cookies Policy</Link>
            </div>
          </div>

          {/* Right: Newsletter Subscribe Form with API Integration */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-accent-purple/15 border border-accent-purple/30 text-[#a78bfa] flex items-center justify-center text-lg shrink-0 shadow-inner">
                <FaEnvelope />
              </div>
              <div>
                <h5 className="text-white font-bold text-sm">Stay updated</h5>
                <p className="text-[11px] text-gray-400 max-w-[210px] leading-snug">
                  Subscribe to our newsletter for the latest insights and updates.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <form onSubmit={handleSubscribe} className="flex items-center bg-[#151924] border border-white/10 rounded-full p-1 focus-within:border-accent-purple/60 transition-all">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={status === "loading"}
                  className="bg-transparent text-white text-xs px-4 py-2 focus:outline-none placeholder-gray-500 w-44 sm:w-52 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-gradient-to-r from-accent-purple to-[#5B45FF] hover:from-[#5B45FF] hover:to-accent-purple text-white text-xs font-bold px-5 py-2.5 rounded-full transition cursor-pointer shadow-[0_4px_15px_rgba(110,86,207,0.35)] shrink-0 disabled:opacity-50"
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe"}
                </button>
              </form>

              {message && (
                <p
                  className={`text-[11px] px-3 font-medium ${
                    status === "success" ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;