import Contact from "@/components/contact/contact.jsx";
import ContactMap from "@/components/contact/contactMap.jsx";

export default function Page() {
  return (
    <main className="bg-[#0c0d0e] text-white min-h-screen">
      <Contact />
      <ContactMap />
    </main>
  );
}