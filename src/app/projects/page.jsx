import ProjectHero from "@/components/project/project-hero.jsx";
import ProjectProject from "@/components/project/project-project.jsx";

export default function Page() {
  return (
    <main className="bg-[#0c0d0e] text-white min-h-screen">
      <ProjectHero />
      <ProjectProject />
    </main>
  );
}