import Contact from "../../src/components/contact/contact.jsx";
import ContactMap from "../../src/components/contact/contactMap.jsx";

export default function Page() {
  return (
    <main className="bg-white text-black min-h-screen">
      <Contact />
      <ContactMap />
    </main>
  );
}