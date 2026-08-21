import AboutHero from "@/components/aboutus/AboutHero.jsx";
import About from "@/components/home/About.jsx";
import AboutService from "@/components/aboutus/AboutService.jsx";
import AboutTeam from "@/components/aboutus/AboutTeam.jsx";
import ProjectLetsTalk from "@/components/get.jsx";

export default function Page() {
  return (
    <main className="bg-black text-white">
      <AboutHero />
      <AboutService />
      <About />
      <AboutTeam />
      <ProjectLetsTalk />
    </main>
  );
}