import Hero from "@/components/home/Hero.jsx";
import Services from "@/components/home/Services.jsx";
import About from "@/components/home/About.jsx";
import Process from "@/components/home/process.jsx";
import Projects from "@/components/home/Projects.jsx";
import Testimonial from "@/components/home/Testimonial.jsx";

export default function Page() {
  return (
    <main className="bg-[#0c0d0e] text-white min-h-screen">
      <Hero />
      <Services />
      <About />
      <Process />
      <Projects />
      <Testimonial />
    </main>
  );
}