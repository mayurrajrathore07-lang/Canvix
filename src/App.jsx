import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Aboutus from "./pages/aboutus.jsx";
import Project from "./pages/project.jsx";
import Projectdetails from "./pages/Projectdetails.jsx";
import Contactpage from "./pages/contactpage.jsx";

// Scroll to top on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="text-black min-h-screen flex flex-col justify-between selection:bg-black selection:text-white pl-4 sm:pl-6">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/projects/:id" element={<Projectdetails />} />
            <Route path="/project-details" element={<Projectdetails />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

