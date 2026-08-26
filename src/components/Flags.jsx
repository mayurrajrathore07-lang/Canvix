"use client";

import React from "react";

/**
 * High quality vector SVG flag for India 🇮🇳
 */
export function IndiaFlag({ className = "w-5 h-3.5", alt = "India Flag" }) {
    return (
        <svg
            className={`inline-block rounded-[3px] shadow-sm overflow-hidden shrink-0 border border-white/20 align-middle ${className}`}
            viewBox="0 0 640 480"
            aria-label={alt}
            role="img"
        >
            <path fill="#f93" d="M0 0h640v160H0z" />
            <path fill="#fff" d="M0 160h640v160H0z" />
            <path fill="#128807" d="M0 320h640v160H0z" />
            <g transform="translate(320 240)">
                <circle r="60" fill="none" stroke="#000080" strokeWidth="7" />
                <circle r="13" fill="#000080" />
                {Array.from({ length: 24 }).map((_, i) => (
                    <line
                        key={i}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="-60"
                        stroke="#000080"
                        strokeWidth="3.5"
                        transform={`rotate(${i * 15})`}
                    />
                ))}
            </g>
        </svg>
    );
}

/**
 * High quality vector SVG flag for the USA 🇺🇸
 */
export function USAFlag({ className = "w-5 h-3.5", alt = "USA Flag" }) {
    return (
        <svg
            className={`inline-block rounded-[3px] shadow-sm overflow-hidden shrink-0 border border-white/20 align-middle ${className}`}
            viewBox="0 0 640 480"
            aria-label={alt}
            role="img"
        >
            <path fill="#bd3d44" d="M0 0h640v480H0z" />
            <path stroke="#fff" strokeWidth="37" d="M0 55.4h640M0 129.2h640M0 203h640M0 276.9h640M0 350.8h640M0 424.6h640" />
            <path fill="#192f5d" d="M0 0h285.7v258.5H0z" />
            <g fill="#fff">
                {[
                    [28, 20], [85, 20], [142, 20], [199, 20], [256, 20],
                    [56, 46], [113, 46], [170, 46], [227, 46],
                    [28, 72], [85, 72], [142, 72], [199, 72], [256, 72],
                    [56, 98], [113, 98], [170, 98], [227, 98],
                    [28, 124], [85, 124], [142, 124], [199, 124], [256, 124],
                    [56, 150], [113, 150], [170, 150], [227, 150],
                    [28, 176], [85, 176], [142, 176], [199, 176], [256, 176],
                    [56, 202], [113, 202], [170, 202], [227, 202],
                    [28, 228], [85, 228], [142, 228], [199, 228], [256, 228],
                ].map(([cx, cy], i) => (
                    <circle key={i} cx={cx} cy={cy} r="7.5" />
                ))}
            </g>
        </svg>
    );
}
