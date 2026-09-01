"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FaHome, FaRedo } from "react-icons/fa";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="bg-[#0c0d0e] text-white min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center">
          <span className="text-3xl">⚠️</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-2 mb-4">
          Something went wrong
        </h2>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 max-w-md mx-auto">
          An unexpected error occurred. Please try again or return to the home
          page.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2.5 bg-[#30B5AA] hover:bg-[#2aa89e] text-black px-7 py-3 rounded-full text-sm font-semibold transition duration-300 shadow-lg shadow-[#30B5AA]/20 cursor-pointer"
          >
            <FaRedo className="text-xs" />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/15 px-7 py-3 rounded-full text-sm font-semibold transition duration-300"
          >
            <FaHome className="text-xs" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
