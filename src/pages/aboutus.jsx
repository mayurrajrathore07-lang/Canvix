import React from "react";
import AboutHero from "../components/aboutus/AboutHero.jsx";
import About from "../components/home/About.jsx";
import AboutTeam from "../components/aboutus/AboutTeam.jsx";
import ProjectLetsTalk from "../components/get.jsx";

export default function Aboutus() {
    return (
        <main className="bg-black text-white">
            <AboutHero />
            <About />
            <AboutTeam />
            <ProjectLetsTalk />
        </main>
    );
}
