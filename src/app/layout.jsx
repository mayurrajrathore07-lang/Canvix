import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/index.css";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Canvix | Strategic Creator & Digital Agency",
  description: "We are a team of strategic creators and digital innovators turning visionary ideas into scalable success.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0c0d0e] text-white antialiased">
        <div className="bg-[#0c0d0e] text-white min-h-screen flex flex-col justify-between selection:bg-[#30B5AA] selection:text-black">
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}