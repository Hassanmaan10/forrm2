// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { CookieName, RoutePath } from "./app/enums";

export function middleware(req: NextRequest) {
  const isAuthed = Boolean(req.cookies.get(CookieName.Auth)?.value);
  const { pathname } = req.nextUrl;

  // If LOGGED IN → block /signup (send to /dashboard)
  if (isAuthed && pathname === RoutePath.Signup) {
    return NextResponse.redirect(new URL(RoutePath.SignupBlocked, req.url));
  }

  // If NOT LOGGED IN → block /dashboard (send to /signup)
  if (!isAuthed && pathname === RoutePath.Dashboard) {
    return NextResponse.redirect(new URL(RoutePath.DashboardBlocked, req.url));
  }

  // Otherwise, allow
  return NextResponse.next();
}

export const config = {
  matcher: [RoutePath.Signup, `${RoutePath.Dashboard}/:path*`],
};
