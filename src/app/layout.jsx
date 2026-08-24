import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import "@/index.css";

export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-white text-black min-h-screen flex flex-col justify-between selection:bg-black selection:text-white">
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
        <FloatingContact />
      </body>
    </html>
  );
}