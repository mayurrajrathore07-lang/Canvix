import AboutHero from "../../src/components/aboutus/AboutHero.jsx";
import About from "../../src/components/home/About.jsx";
import AboutService from "../../src/components/aboutus/AboutService.jsx";
import AboutTeam from "../../src/components/aboutus/AboutTeam.jsx";
import ProjectLetsTalk from "../../src/components/get.jsx";

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