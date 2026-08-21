import ProjectHero from "../../src/components/project/project-hero.jsx";
import ProjectProject from "../../src/components/project/project-project.jsx";

export default function Page() {
  return (
    <main className="bg-white text-black min-h-screen">
      <ProjectHero />
      <ProjectProject />
    </main>
  );
}