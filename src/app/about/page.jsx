import AboutHero from "@/components/aboutus/AboutHero.jsx";
import About from "@/components/home/About.jsx";
import AboutService from "@/components/aboutus/AboutService.jsx";
import AboutTeam from "@/components/aboutus/AboutTeam.jsx";
import ProjectLetsTalk from "@/components/ProjectLetsTalk.jsx";

export const metadata = {
  title: "About Us | Canvix — Our Story, Mission & Team",
  description:
    "Learn about Canvix — our mission to deliver innovative digital solutions, our expert team, and the values that drive enterprise success.",
};

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