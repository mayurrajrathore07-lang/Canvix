import ProjectDetailsHero from "../../src/components/project details/project-details-hero.jsx";
import ProjectDetailsDescription from "../../src/components/project details/project-details-discription.jsx";
import ProjectDetailsRecent from "../../src/components/project details/project-details-recent.jsx";
import { allProjectsData } from "../../src/components/project/project-project.jsx";

export default function Page() {
  const project = allProjectsData[0];
  return (
    <main className="bg-white text-black min-h-screen">
      <ProjectDetailsHero project={project} />
      <ProjectDetailsDescription project={project} />
      <ProjectDetailsRecent currentId={project.id} />
    </main>
  );
}