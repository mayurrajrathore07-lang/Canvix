import Link from "next/link";
import { FaHome, FaFolderOpen, FaEnvelope } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="bg-[#0c0d0e] text-white min-h-[85vh] flex items-center justify-center px-6 py-20 relative overflow-hidden font-sans">
      {/* Background Decorative Gradient Objects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#30B5AA]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-2xl w-full text-center relative z-10 space-y-8">
        {/* 404 Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#30B5AA] tracking-wider uppercase backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#30B5AA] animate-pulse"></span>
          Error 404
        </div>

        {/* Large 404 Display */}
        <div className="relative">
          <h1 className="text-8xl sm:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 select-none">
            404
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-gray-200 mt-2">
            Oops! Page lost in digital canvas
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#30B5AA] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[#30B5AA]/20 group"
          >
            <FaHome className="text-xs transition-transform group-hover:-translate-x-0.5" />
            Back to Home
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md"
          >
            <FaFolderOpen className="text-xs text-gray-400" />
            View Projects
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md"
          >
            <FaEnvelope className="text-xs text-gray-400" />
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}