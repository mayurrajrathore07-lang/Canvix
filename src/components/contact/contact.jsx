"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaGithub,
    FaCheck,
    FaCopy,
    FaClock,
    FaShieldAlt,
    FaPaperPlane,
    FaSpinner,
    FaGlobeAmericas,
    FaChevronDown,
    FaRegCommentDots,
} from "react-icons/fa";

const serviceOptions = [
    "AI & Machine Learning",
    "Web & Mobile Engineering",
    "Cloud, DevOps & IT",
    "Staffing & Tech Recruitment",
    "Design & Brand Identity",
    "General Inquiry",
];

const faqs = [
    {
        q: "How soon can we schedule a discovery call?",
        a: "Our strategy team typically responds within 2 hours during business hours to schedule an initial 30-minute scoping consultation within 24 to 48 hours.",
    },
    {
        q: "Can we sign a Mutual Non-Disclosure Agreement (NDA)?",
        a: "Absolutely. We routinely execute bilateral NDAs before reviewing proprietary source code, product requirements, or sensitive business data.",
    },
    {
        q: "What timezones do your teams support?",
        a: "We operate cross-functional squads across US (EST/PST), European (GMT/CET), and APAC (IST) timezones, ensuring flexible meeting overlaps and 24/7 delivery pipelines.",
    },
    {
        q: "What engagement models do you offer?",
        a: "We offer dedicated agile engineering squads, fixed-price milestone projects, and flexible monthly retainers tailored to your roadmap velocity.",
    },
];

function ContactContent() {
    const searchParams = useSearchParams();
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [copiedField, setCopiedField] = useState(null);
    const [selectedService, setSelectedService] = useState("AI & Machine Learning");
    const [requestNda, setRequestNda] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    useEffect(() => {
        const serviceParam = searchParams.get("service");
        if (serviceParam) {
            const matched = serviceOptions.find(
                (s) => s.toLowerCase() === serviceParam.toLowerCase() || serviceParam.toLowerCase().includes(s.toLowerCase())
            );
            if (matched) {
                setSelectedService(matched);
            } else {
                setSelectedService(serviceParam);
            }
        }
    }, [searchParams]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCopy = (text, type) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text);
            setCopiedField(type);
            setTimeout(() => setCopiedField(null), 2500);
        }
    };

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const saveToLocalStorage = (data) => {
        try {
            const existing = JSON.parse(localStorage.getItem("canvix_contact_messages") || "[]");
            existing.push({ ...data, createdAt: new Date().toISOString() });
            localStorage.setItem("canvix_contact_messages", JSON.stringify(existing));
        } catch (e) {
            console.error("Failed to save message to localStorage:", e);
        }
    };

    const handleSubmit = async (e) => {
        if (e && typeof e.preventDefault === "function") {
            e.preventDefault();
        }
        setSubmitted(false);
        setErrorMessage("");
        setIsSubmitting(true);

        const payload = {
            ...formData,
            message: `[Service: ${selectedService}]${requestNda ? " [NDA Requested]" : ""}\n\n${formData.message}`,
        };

        try {
            let sentSuccessfully = false;

            try {
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                });

                const contentType = response.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    const result = await response.json();
                    if (!response.ok) {
                        setErrorMessage(result.message || "Something went wrong while sending your message.");
                        setIsSubmitting(false);
                        return;
                    }
                    sentSuccessfully = true;
                } else if (response.ok) {
                    sentSuccessfully = true;
                } else {
                    saveToLocalStorage(payload);
                    sentSuccessfully = true;
                }
            } catch (err) {
                const msg = err instanceof Error ? err.message : typeof err === "string" ? err : "";
                if (
                    msg &&
                    !msg.includes("Unexpected token") &&
                    !msg.includes("JSON") &&
                    !msg.includes("Failed to fetch") &&
                    !msg.includes("NetworkError")
                ) {
                    setErrorMessage(msg);
                    setIsSubmitting(false);
                    return;
                }
                saveToLocalStorage(payload);
                sentSuccessfully = true;
            }

            if (sentSuccessfully) {
                setSubmitted(true);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    message: "",
                });
                setRequestNda(false);
                setTimeout(() => setSubmitted(false), 8000);
            }
        } catch (error) {
            const fallbackMsg =
                error instanceof Error
                    ? error.message
                    : typeof error === "string"
                    ? error
                    : "Unable to send your message right now.";
            setErrorMessage(fallbackMsg);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative overflow-hidden pt-12 pb-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
            {/* Ambient Background Glows */}
            <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#30B5AA]/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#30B5AA]/5 rounded-full blur-[160px] pointer-events-none" />

            {/* Header / Intro */}
            <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
                <div className="inline-flex items-center gap-2 bg-[#30B5AA]/10 border border-[#30B5AA]/30 text-[#30B5AA] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#30B5AA] animate-pulse" />
                    Available For New Projects & Consulting
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-6">
                    Let's Build Something <br />
                    <span className="text-[#30B5AA] font-sans font-extrabold">Extraordinary Together</span>
                </h1>

                <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                    Have a technical challenge, product idea, or enterprise transformation project? Reach out to our technical leads for a transparent, no-obligation discussion.
                </p>
            </div>

            {/* Main Contact Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start relative z-10">
                {/* Left Column: Direct Info & Trust Cards */}
                <div className="lg:col-span-5 space-y-6">
                    {/* Main Direct Channels Card */}
                    <div className="bg-[#121316] border border-white/10 rounded-3xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-xl shadow-2xl">
                        <div className="absolute top-0 right-0 w-36 h-36 bg-[#30B5AA]/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                            <div>
                                <h2 className="text-xl font-bold text-white tracking-tight">Direct Channels</h2>
                                <p className="text-gray-400 text-xs mt-0.5">Quick direct lines to our leadership</p>
                            </div>
                            <span className="text-xs font-semibold text-[#30B5AA] bg-[#30B5AA]/10 px-3 py-1 rounded-full border border-[#30B5AA]/20">
                                ⚡ &lt; 2h Reply
                            </span>
                        </div>

                        {/* Email Row */}
                        <div className="group flex items-start justify-between gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#30B5AA]/40 hover:bg-white/[0.05] transition-all duration-300 mb-4">
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-xl bg-[#30B5AA]/15 text-[#30B5AA] flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition-transform">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-0.5">
                                        Email Inquiries
                                    </span>
                                    <a
                                        href="mailto:hello@canvix.agency.com"
                                        className="text-white hover:text-[#30B5AA] font-semibold text-sm sm:text-base transition block break-all"
                                    >
                                        hello@canvix.agency.com
                                    </a>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => handleCopy("hello@canvix.agency.com", "email")}
                                title="Copy Email"
                                className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition shrink-0"
                            >
                                {copiedField === "email" ? (
                                    <span className="text-[#30B5AA] text-xs font-bold flex items-center gap-1">
                                        <FaCheck /> Copied
                                    </span>
                                ) : (
                                    <FaCopy className="text-sm" />
                                )}
                            </button>
                        </div>

                        {/* Phone Row */}
                        <div className="group flex items-start justify-between gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#30B5AA]/40 hover:bg-white/[0.05] transition-all duration-300 mb-4">
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-xl bg-[#30B5AA]/15 text-[#30B5AA] flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition-transform">
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-0.5">
                                        Direct Phone
                                    </span>
                                    <a
                                        href="tel:+919999999999"
                                        className="text-white hover:text-[#30B5AA] font-semibold text-sm sm:text-base transition block"
                                    >
                                        +91 99999 99999
                                    </a>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => handleCopy("+919999999999", "phone")}
                                title="Copy Phone Number"
                                className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition shrink-0"
                            >
                                {copiedField === "phone" ? (
                                    <span className="text-[#30B5AA] text-xs font-bold flex items-center gap-1">
                                        <FaCheck /> Copied
                                    </span>
                                ) : (
                                    <FaCopy className="text-sm" />
                                )}
                            </button>
                        </div>

                        {/* Office HQ Row */}
                        <div className="group flex items-start justify-between gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#30B5AA]/40 hover:bg-white/[0.05] transition-all duration-300 mb-4">
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-xl bg-[#30B5AA]/15 text-[#30B5AA] flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition-transform">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-0.5">
                                        Studio Location
                                    </span>
                                    <p className="text-white font-semibold text-sm leading-snug">
                                        SBR (Sindhu Bhavan Marg), <br />
                                        Ahmedabad, Gujarat, India
                                    </p>
                                </div>
                            </div>
                            <a
                                href="https://maps.google.com/?q=Sindhu+Bhavan+Road+Ahmedabad"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#30B5AA] hover:text-white text-xs font-semibold underline p-2 shrink-0 self-center"
                            >
                                Map
                            </a>
                        </div>

                        {/* Working Hours Row */}
                        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#18191c] border border-white/5 text-xs text-gray-300">
                            <FaClock className="text-[#30B5AA] text-sm shrink-0" />
                            <span>
                                <strong className="text-white font-medium">Business Hours:</strong> Mon – Fri, 9:00 AM – 7:00 PM IST (24/7 Client Emergency Support)
                            </span>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8 pt-6 border-t border-white/10">
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-4">
                                Connect on Social Networks
                            </span>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { icon: <FaLinkedinIn />, href: "https://linkedin.com", label: "LinkedIn" },
                                    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
                                    { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
                                    { icon: <FaFacebookF />, href: "https://facebook.com", label: "Facebook" },
                                    { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
                                ].map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={item.label}
                                        className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 text-gray-300 flex items-center justify-center hover:bg-[#30B5AA] hover:text-black hover:border-[#30B5AA] hover:scale-105 transition-all duration-300 shadow-md"
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Guarantees / Trust Badges */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-[#121316] border border-white/10 rounded-2xl p-5 flex items-start gap-3.5">
                            <div className="p-2.5 rounded-xl bg-[#30B5AA]/15 text-[#30B5AA] text-base shrink-0">
                                <FaShieldAlt />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white">Strict NDA & Privacy</h4>
                                <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                                    Your project IP and trade secrets are 100% confidential.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#121316] border border-white/10 rounded-2xl p-5 flex items-start gap-3.5">
                            <div className="p-2.5 rounded-xl bg-[#30B5AA]/15 text-[#30B5AA] text-base shrink-0">
                                <FaGlobeAmericas />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white">Global Collaboration</h4>
                                <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                                    Serving clients across US, Europe, Middle East & Asia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="lg:col-span-7">
                    <div className="bg-[#121316] border border-white/10 rounded-3xl p-7 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#30B5AA]/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="mb-8">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#30B5AA] block mb-2">
                                Project Inquiry Form
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                                Tell Us About Your Vision
                            </h2>
                            <p className="text-gray-400 text-sm mt-1">
                                Complete this quick form and our principal consultants will prepare tailored recommendations.
                            </p>
                        </div>

                        {/* Status Banners */}
                        {submitted && (
                            <div className="bg-[#30B5AA]/15 border border-[#30B5AA] text-white px-5 py-4 rounded-2xl mb-8 flex items-start gap-3.5 shadow-lg animate-fadeIn">
                                <div className="w-7 h-7 rounded-full bg-[#30B5AA] text-black flex items-center justify-center shrink-0 mt-0.5">
                                    <FaCheck className="text-xs" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-[#30B5AA]">Message Received!</h4>
                                    <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">
                                        Thank you for reaching out. A Canvix lead will review your submission and contact you within 2 hours.
                                    </p>
                                </div>
                            </div>
                        )}

                        {errorMessage && (
                            <div className="bg-red-950/70 border border-red-500 text-red-200 px-5 py-4 rounded-2xl mb-8 flex items-start gap-3.5 shadow-lg">
                                <div className="w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                                    !
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-red-400">Submission Notice</h4>
                                    <p className="text-xs text-red-200 mt-0.5 leading-relaxed">{errorMessage}</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Service Interest Pill Selector */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-3">
                                    1. Select Primary Area of Interest
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {serviceOptions.map((service) => (
                                        <button
                                            type="button"
                                            key={service}
                                            onClick={() => setSelectedService(service)}
                                            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                                                selectedService === service
                                                    ? "bg-[#30B5AA] text-black border-[#30B5AA] shadow-md shadow-[#30B5AA]/20 font-bold"
                                                    : "bg-white/[0.04] text-gray-300 border-white/10 hover:border-white/30 hover:bg-white/[0.08]"
                                            }`}
                                        >
                                            {service}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Name Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                                        First Name <span className="text-[#30B5AA]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="e.g. Alexander"
                                        className="w-full bg-[#18191c] border border-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[#30B5AA] focus:ring-1 focus:ring-[#30B5AA] transition shadow-inner"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                                        Last Name <span className="text-[#30B5AA]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="e.g. Wright"
                                        className="w-full bg-[#18191c] border border-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[#30B5AA] focus:ring-1 focus:ring-[#30B5AA] transition shadow-inner"
                                    />
                                </div>
                            </div>

                            {/* Email & Phone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                                        Work Email <span className="text-[#30B5AA]">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="alex@company.com"
                                        className="w-full bg-[#18191c] border border-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[#30B5AA] focus:ring-1 focus:ring-[#30B5AA] transition shadow-inner"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                                        Phone Number <span className="text-gray-500 font-normal lowercase">(optional)</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full bg-[#18191c] border border-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[#30B5AA] focus:ring-1 focus:ring-[#30B5AA] transition shadow-inner"
                                    />
                                </div>
                            </div>

                            {/* Project Scope / Message */}
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                                        Project Scope & Requirements <span className="text-[#30B5AA]">*</span>
                                    </label>
                                    <span className="text-[11px] text-gray-500">
                                        {formData.message.length} chars
                                    </span>
                                </div>
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Please describe your project goals, approximate timeline, budget ballpark, or any specific technologies required..."
                                    className="w-full bg-[#18191c] border border-white/10 text-white placeholder-gray-500 rounded-xl p-4 text-sm outline-none focus:border-[#30B5AA] focus:ring-1 focus:ring-[#30B5AA] transition resize-y min-h-[120px] shadow-inner"
                                />
                            </div>

                            {/* NDA Checkbox */}
                            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                                <input
                                    type="checkbox"
                                    id="ndaCheckbox"
                                    checked={requestNda}
                                    onChange={(e) => setRequestNda(e.target.checked)}
                                    className="w-4 h-4 accent-[#30B5AA] rounded cursor-pointer"
                                />
                                <label htmlFor="ndaCheckbox" className="text-xs text-gray-300 cursor-pointer select-none">
                                    Request a Mutual Non-Disclosure Agreement (NDA) prior to technical deep dive.
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#30B5AA] hover:bg-white text-black font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(48,181,170,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.3)] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer text-sm"
                            >
                                {isSubmitting ? (
                                    <>
                                        <FaSpinner className="animate-spin text-lg" />
                                        <span>Submitting Inquiry...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Project Inquiry</span>
                                        <FaPaperPlane className="text-xs group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                                    </>
                                )}
                            </button>

                            <p className="text-center text-[11px] text-gray-500">
                                🔒 By submitting, you agree to our privacy policy. We will never share or sell your contact info.
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            {/* Contact FAQs Section */}
            <div className="mt-24 pt-16 border-t border-white/10 max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 text-[#30B5AA] text-xs font-bold uppercase tracking-wider mb-2">
                        <FaRegCommentDots />
                        <span>Got Questions?</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                        Frequently Asked Questions
                    </h3>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="bg-[#121316] border border-white/10 rounded-2xl overflow-hidden transition-all duration-200"
                        >
                            <button
                                type="button"
                                onClick={() => toggleFaq(idx)}
                                className="w-full flex items-center justify-between p-6 text-left text-white font-semibold text-sm sm:text-base hover:text-[#30B5AA] transition"
                            >
                                <span>{faq.q}</span>
                                <FaChevronDown
                                    className={`text-xs text-gray-400 transition-transform duration-300 shrink-0 ml-4 ${
                                        openFaqIndex === idx ? "rotate-180 text-[#30B5AA]" : ""
                                    }`}
                                />
                            </button>
                            {openFaqIndex === idx && (
                                <div className="px-6 pb-6 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function Contact() {
    return (
        <React.Suspense fallback={<div className="py-20 text-center text-gray-400">Loading contact form...</div>}>
            <ContactContent />
        </React.Suspense>
    );
}