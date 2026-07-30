import React from "react";
import Contact from "../components/contact/contact.jsx";
import Map from "../components/contact/contactMap.jsx";


export default function Contactpage() {
    return (
        <main className="bg-white text-black">
            <Contact />
            <Map />
        </main>
    );
}
