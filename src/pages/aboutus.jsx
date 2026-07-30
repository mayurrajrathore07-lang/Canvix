import React from "react";
import AboutHero from "../components/aboutus/AboutHero.jsx";
import AboutService from "../components/home/AboutService.jsx";
import AboutTeam from "../components/aboutus/AboutTeam.jsx";
import ProjectLetsTalk from "../components/project/project-lets-talk.jsx";

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
