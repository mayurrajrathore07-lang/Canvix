import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import "@/index.css";

export const metadata = {
  title: "Canvix — Enterprise Solutions & Digital Innovation",
  description: "From custom AI & software engineering to global IT staffing, performance marketing, and financial advisory — comprehensive solutions to accelerate your enterprise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <div className="bg-white text-black min-h-screen flex flex-col justify-between selection:bg-black selection:text-white">
          <Navbar />
          <div id="main-content" className="flex-grow flex flex-col">{children}</div>
          <Footer />
        </div>
        <FloatingContact />
      </body>
    </html>
  );
}