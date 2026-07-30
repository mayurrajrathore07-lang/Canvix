import React from "react";
import Home from "./pages/Home.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Project from "./pages/Project.jsx";
import Projectdetails from "./pages/Projectdetails.jsx";
import Contactpage from "./pages/Contactpage.jsx";




export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Home />
      <aboutus />
      <Project />
      <project-details />
      <contactpage />

    </div>
  );
}
