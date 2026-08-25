import ProjectDetailsHero from "@/components/project-details/project-details-hero.jsx";
import ProjectDetailsDescription from "@/components/project-details/project-details-discription.jsx";
import ProjectDetailsRecent from "@/components/project-details/project-details-recent.jsx";
import { allProjectsData } from "@/components/project/project-project.jsx";

export default async function Page({ params }) {
  const { id } = await params;
  const matchedProject = allProjectsData.find((project) => project.id === id) || allProjectsData[0];

  return (
    <main className="bg-white text-black min-h-screen">
      <ProjectDetailsHero project={matchedProject} />
      <ProjectDetailsDescription project={matchedProject} />
      <ProjectDetailsRecent currentId={matchedProject.id} />
    </main>
  );
}