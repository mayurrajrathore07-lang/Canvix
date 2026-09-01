import Link from "next/link";

/**
 * Reusable Canvix logo with SVG icon + text.
 * @param {"light" | "dark"} variant – "dark" = white text (for dark backgrounds), "light" = black text (for navbar)
 */
function Logo({ variant = "light" }) {
    const isDark = variant === "dark";
    const textColor = isDark ? "text-white" : "text-black";
    const circleBg = isDark ? "bg-white" : "bg-black";
    const circleText = isDark ? "text-black" : "text-white";

    return (
        <Link href="/" className={`text-2xl font-bold tracking-tight ${textColor} flex items-center gap-2.5`}>
            <div className={`w-8 h-8 rounded-full ${circleBg} ${circleText} flex items-center justify-center shadow-sm`}>
                <svg className={`w-4 h-4 ${circleText} fill-none stroke-current stroke-2`} viewBox="0 0 24 24">
                    <path d="M12 3a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9a9 9 0 0 1-9-9c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 4-4 4-4-1.79-4-4" strokeLinecap="round" />
                </svg>
            </div>
            <span className={`font-semibold text-xl tracking-tight ${textColor}`}>Canvix</span>
        </Link>
    );
}

export default Logo;
