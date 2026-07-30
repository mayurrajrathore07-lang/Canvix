import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Services from './components/service';
import About from './components/about';
import Projects from './components/projects';
import Testimonial from './components/testimonial';
import Footer from './components/footer';

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
