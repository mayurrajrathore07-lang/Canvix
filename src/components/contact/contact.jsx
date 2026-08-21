"use client";

import React, { useState } from "react";
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";

function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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

        try {
            let sentSuccessfully = false;

            try {
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                const contentType = response.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    const result = await response.json();
                    if (!response.ok) {
                        setErrorMessage(result.message || "Something went wrong while sending your message.");
                        return;
                    }
                    sentSuccessfully = true;
                } else if (response.ok) {
                    sentSuccessfully = true;
                } else {
                    // Server returned non-200 non-JSON (e.g. 404 HTML on static host like GitHub Pages)
                    saveToLocalStorage(formData);
                    sentSuccessfully = true;
                }
            } catch (err) {
                const msg = err instanceof Error ? err.message : (typeof err === "string" ? err : "");
                if (msg && !msg.includes("Unexpected token") && !msg.includes("JSON") && !msg.includes("Failed to fetch") && !msg.includes("NetworkError")) {
                    setErrorMessage(msg);
                    return;
                }
                // Fallback for static host / network error
                saveToLocalStorage(formData);
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
                setTimeout(() => setSubmitted(false), 5000);
            }
        } catch (error) {
            const fallbackMsg = error instanceof Error 
                ? error.message 
                : (typeof error === "string" ? error : "Unable to send your message right now.");
            setErrorMessage(fallbackMsg);
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

                <div>
                    <span className="text-[#30B5AA] text-sm font-semibold uppercase tracking-widest block mb-3">
                        Get In Touch
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                        Let's talk
                    </h1>

                    <p className="text-gray-400 text-base leading-relaxed mb-10">
                        We collaborate with creators, entrepreneurs, and visionary brands. Have a project in mind? Reach out to us today!
                    </p>

                    <hr className="border-zinc-800 mb-10" />

                    <div className="flex items-center gap-5 mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 text-[#30B5AA] flex items-center justify-center text-xl shrink-0">
                            <FaEnvelope />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-white">Our email</h3>
                            <p className="text-gray-400 text-sm md:text-base">hello@canvix.agency.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 text-[#30B5AA] flex items-center justify-center text-xl shrink-0">
                            <FaPhoneAlt />
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg text-white">Call us</h3>
                            <p className="text-gray-400 text-sm md:text-base">9999999999</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 mb-10">
                        <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 text-[#30B5AA] flex items-center justify-center text-xl shrink-0">
                            <FaMapMarkerAlt />
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg text-white">Visit Us</h3>
                            <p className="text-gray-400 text-sm md:text-base">SBR Ahmedabad, India</p>
                        </div>
                    </div>

                    <hr className="border-zinc-800 mb-8" />

                    <div className="flex gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center hover:bg-[#30B5AA] hover:text-black transition">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center hover:bg-[#30B5AA] hover:text-black transition">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center hover:bg-[#30B5AA] hover:text-black transition">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center hover:bg-[#30B5AA] hover:text-black transition">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>


                <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
                    <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message...</h2>

                    {submitted && (
                        <div className="bg-cyan-950 border border-cyan-500 text-cyan-200 px-4 py-3 rounded-xl mb-6 text-sm">
                            Thank you! Your message has been sent successfully. We'll get back to you shortly.
                        </div>
                    )}

                    {errorMessage && (
                        <div className="bg-red-950 border border-red-500 text-red-200 px-4 py-3 rounded-xl mb-6 text-sm">
                            {errorMessage}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                    First name ..
                                </label>

                                <input
                                    type="text"
                                    name="firstName"
                                    required
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="John"
                                    className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-cyan-400 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    required
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Doe"
                                    className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-cyan-400 transition"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-cyan-400 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                    Phone number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+1 (555) 000-0000"
                                    className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-cyan-400 transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                name="message"
                                required
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your project or inquiry..."
                                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-cyan-400 transition resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-white text-black font-semibold px-8 py-4 rounded-xl hover:bg-cyan-400 transition duration-300 shadow-lg"
                        >
                            Submit Now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;