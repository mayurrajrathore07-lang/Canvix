import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/home/hero';
import Services from './components/home/service';
import About from './components/home/about';
import Testimonial from './components/home/testimonial';
import Footer from './components/footer';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonial />
      <Footer />
    </div>
  );
}
