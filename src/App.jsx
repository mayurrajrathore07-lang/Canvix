import React from 'react';
import Navbar from "./components/navbar";
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Testimonial />
      <Footer />
    </div>
  );
}
