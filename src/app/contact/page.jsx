import Contact from "@/components/contact/contact.jsx";
import ContactMap from "@/components/contact/contactMap.jsx";

export default function Page() {
  return (
    <main className="bg-white text-black min-h-screen">
      <Contact />
      <ContactMap />
    </main>
  );
}