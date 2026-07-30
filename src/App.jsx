import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/home/hero';
import Testimonial from './components/home/testimonial';
import Footer from './components/footer';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Testimonial />
      <Footer />
    </div>
  );
}
