// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const AUTH_COOKIE = "value_token"; // same name you set in signup

export function middleware(req: NextRequest) {
  const isAuthed = Boolean(req.cookies.get(AUTH_COOKIE)?.value);
  const { pathname } = req.nextUrl;

  // If LOGGED IN → block /signup (send to /dashboard)
  if (isAuthed && pathname === "/signup") {
    return NextResponse.redirect(new URL("/signup-blocked", req.url));
  }

  // If NOT LOGGED IN → block /dashboard (send to /signup)
  if (!isAuthed && pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/dashboard-blocked", req.url));
  }

  // Otherwise, allow
  return NextResponse.next();
}

export const config = {
  matcher: ["/signup", "/dashboard/:path*"],
};
