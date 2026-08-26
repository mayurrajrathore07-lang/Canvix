import ProjectHero from "@/components/project/project-hero.jsx";
import ProjectProject from "@/components/project/project-project.jsx";

export const metadata = {
  title: "Portfolio | Canvix — Our Work & Case Studies",
  description:
    "Explore Canvix's portfolio of successful projects — from web design and digital strategy to AI analytics, cloud architecture, and enterprise solutions.",
};

export default function Page() {
  return (
    <main className="bg-[#F8FAFC] text-slate-900 min-h-screen">
      <ProjectHero />
      <ProjectProject />
    </main>
  );
}