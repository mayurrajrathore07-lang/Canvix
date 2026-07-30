import React from "react";
import Hero from "../components/home/Hero.jsx";
import About from "../components/home/About.jsx";
import Services from "../components/home/Services.jsx";
import Projects from "../components/home/Projects.jsx";
import Testimonial from "../components/home/Testimonial.jsx";

export default function Home() {
    return (
        <main className="bg-black text-white">
            <Hero />
            <About />
            <Services />
            <Projects />
            <Testimonial />
        </main>
    );
}
