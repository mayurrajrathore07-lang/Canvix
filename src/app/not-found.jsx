import Link from "next/link";
import { FaHome, FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="bg-[#0c0d0e] text-white min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Large 404 number */}
        <h1 className="text-[120px] sm:text-[160px] font-bold leading-none tracking-tighter bg-gradient-to-b from-white via-gray-400 to-gray-700 bg-clip-text text-transparent select-none">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-2 mb-4">
          Page not found
        </h2>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 bg-[#30B5AA] hover:bg-[#2aa89e] text-black px-7 py-3 rounded-full text-sm font-semibold transition duration-300 shadow-lg shadow-[#30B5AA]/20"
          >
            <FaHome className="text-xs" />
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/15 px-7 py-3 rounded-full text-sm font-semibold transition duration-300"
          >
            <FaArrowLeft className="text-xs" />
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}