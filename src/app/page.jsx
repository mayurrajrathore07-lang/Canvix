import Hero from "@/components/home/Hero.jsx";
import Services from "@/components/home/Services.jsx";
import BusinessSolutions from "@/components/home/BusinessSolutions.jsx";
import TrustStats from "@/components/home/TrustStats.jsx";
import About from "@/components/home/About.jsx";
import Industries from "@/components/home/Industries.jsx";
import WhyChooseUs from "@/components/home/WhyChooseUs.jsx";
import Process from "@/components/home/Process.jsx";
import Testimonial from "@/components/home/Testimonial.jsx";
import FAQ from "@/components/home/FAQ.jsx";
import BookConsultation from "@/components/home/BookConsultation.jsx";

export default function Page() {
  return (
    <div className="min-h-screen font-sans antialiased bg-white text-slate-900">
      <Hero />
      <Services />
      <BusinessSolutions />
      <TrustStats />
      <About />
      <Industries />
      <WhyChooseUs />
      <Process />
      <Testimonial />
      <FAQ />
      <BookConsultation />
    </div>
  );
}