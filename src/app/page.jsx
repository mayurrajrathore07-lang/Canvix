import Hero from "@/components/home/Hero.jsx";
import Services from "@/components/home/Services.jsx";
import TrustStats from "@/components/home/TrustStats.jsx";
import About from "@/components/home/About.jsx";
import Process from "@/components/home/process.jsx";
import Projects from "@/components/home/Projects.jsx";
import Testimonial from "@/components/home/Testimonial.jsx";
import FAQ from "@/components/home/FAQ.jsx";
import BookConsultation from "@/components/home/BookConsultation.jsx";

export default function Page() {
  return (
    <main className="bg-[#0c0d0e] text-white min-h-screen">
      <Hero />
      <Services />
      <TrustStats />
      <About />
      <Process />
      <Projects />
      <Testimonial />
      <FAQ />
      <BookConsultation />
    </main>
  );
}