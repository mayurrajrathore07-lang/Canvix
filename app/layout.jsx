import Navbar from "../src/components/Navbar.jsx";
import Footer from "../src/components/Footer.jsx";
import "../src/index.css";

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
      </body>
    </html>
  );
}