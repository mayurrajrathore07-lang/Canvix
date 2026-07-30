import React from "react";
import ProjectHero from "../components/project/project-hero.jsx";
import ProjectProject from "../components/project/project-project.jsx";
import ProjectLetsTalk from "../components/get.jsx";


export default function Project() {
    return (
        <main className="bg-white text-black">
            <ProjectHero />
            <ProjectProject />
            <ProjectLetsTalk />
        </main>
    );
}
