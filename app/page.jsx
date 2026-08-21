import Hero from "../src/components/home/Hero.jsx";
import Services from "../src/components/home/Services.jsx";
import About from "../src/components/home/About.jsx";
import Process from "../src/components/home/process.jsx";
import Projects from "../src/components/home/Projects.jsx";
import Testimonial from "../src/components/home/Testimonial.jsx";

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