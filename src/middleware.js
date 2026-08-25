import { NextResponse } from "next/server";
import { validateSession } from "@/lib/auth";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin")) {
    const sessionCookie = request.cookies.get("admin_session");
    const isAuthenticated =
      sessionCookie && (await validateSession(sessionCookie.value));

    // If already logged in and trying to view login page, redirect to admin dashboard
    if (pathname === "/admin/login") {
      if (isAuthenticated) {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
      const response = NextResponse.next();
      response.headers.set(
        "Cache-Control",
        "no-store, max-age=0, must-revalidate, private"
      );
      return response;
    }

    // Protect all other /admin routes
    if (!isAuthenticated) {
      const loginUrl = new URL("/admin/login", request.url);
      const response = NextResponse.redirect(loginUrl);

      if (sessionCookie) {
        response.cookies.delete("admin_session");
      }

      response.headers.set(
        "Cache-Control",
        "no-store, max-age=0, must-revalidate, private"
      );
      return response;
    }
  }

  const response = NextResponse.next();
  if (pathname.startsWith("/admin")) {
    response.headers.set(
      "Cache-Control",
      "no-store, max-age=0, must-revalidate, private"
    );
  }
  return response;
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
