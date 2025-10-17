import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// const AUTH_COOKIE = "value_token";

export function middleware(req: NextRequest) {
  const isAuthed = Boolean(req.cookies.get("value_token")?.value);

  if (isAuthed && req.nextUrl.pathname === "/signup") {
    return NextResponse.rewrite(new URL("/signup-blocked", req.url));
  }

  return NextResponse.next();
}

export const config = { matcher: ["/:path*"] };
