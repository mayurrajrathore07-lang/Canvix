"use client";

import React from "react";

export function OfficeAddressCard({
  FlagComponent,
  flagAlt,
  studioName,
  badgeText,
  badgeBgClass,
  address,
  mapUrl,
  watermarkPath,
}) {
  return (
    <div className="relative overflow-hidden p-6 rounded-2xl bg-[#121622]/80 border border-white/10 hover:border-accent-purple/40 transition-all duration-300 flex justify-between items-start group shadow-lg">
      <div className="relative z-10 max-w-[280px] sm:max-w-sm">
        <div className="flex items-start gap-3 mb-2">
          <div className="p-2 bg-white/5 rounded-xl border border-white/10 shrink-0">
            <FlagComponent className="w-6 h-4 rounded-[2px]" alt={flagAlt} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white">{studioName}</span>
              <span
                className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded border tracking-wide ${badgeBgClass}`}
              >
                {badgeText}
              </span>
            </div>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal mt-2">
          {address}
        </p>
        <a
          href={mapUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-[#a78bfa] hover:text-white font-medium mt-3 transition group-hover:underline"
        >
          <span>View on Map</span> &rarr;
        </a>
      </div>

      {/* Vector Outline Watermark */}
      <svg
        className="w-36 h-36 opacity-15 stroke-white fill-none stroke-[1.2] absolute -right-2 -bottom-2 pointer-events-none group-hover:opacity-25 transition-opacity"
        viewBox="0 0 100 100"
      >
        <path d={watermarkPath} />
      </svg>
    </div>
  );
}
