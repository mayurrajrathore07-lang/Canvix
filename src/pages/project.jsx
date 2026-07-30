import React from "react";
import ProjectHero from "../components/project/project-hero.jsx";
import ProjectProject from "../components/project/project-project.jsx";
import ProjectLetsTalk from "../components/project/project-lets-talk.jsx";

export default function Project() {
    return (
        <main className="bg-black text-white">
            <ProjectHero />
            <ProjectProject />
            <ProjectLetsTalk />
        </main>
    );
}
