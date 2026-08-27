import Contact from "@/components/contact/contact.jsx";

export const metadata = {
  title: "Contact Us | Canvix — Digital Product & Engineering Agency",
  description:
    "Get in touch with Canvix to accelerate your digital transformation. From AI engineering to custom web development, cloud solutions, and strategic staffing.",
};

export default function Page() {
  return (
    <main className="bg-[#0c0d0e] text-white min-h-screen">
      <Contact />
    </main>
  );
}