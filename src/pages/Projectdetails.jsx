import React from "react";
import { useParams } from "react-router-dom";
import ProjectDetailsHero from "../components/project details/project-details-hero.jsx";
import ProjectDetailsDescription from "../components/project details/project-details-discription.jsx";
import ProjectDetailsRecent from "../components/project details/project-details-recent.jsx";
import { allProjectsData } from "../components/project/project-project.jsx";

export default function Projectdetails() {
    const { id } = useParams();

    const matchedProject = allProjectsData.find((p) => p.id === id) || allProjectsData[0];

    return (
        <main className="bg-white text-black min-h-screen">
            <ProjectDetailsHero project={matchedProject} />
            <ProjectDetailsDescription project={matchedProject} />
            <ProjectDetailsRecent currentId={matchedProject?.id} />
        </main>
    );
}

