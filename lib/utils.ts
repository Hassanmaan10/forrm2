import { CookieName } from "@/app/enums";
import { clsx, type ClassValue } from "clsx";
import { NextResponse } from "next/server";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//put the token in a cookie on the t
export function setAuthCookie(res: NextResponse, token: string) {
  res.cookies.set(CookieName.Auth, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

//remove the cookie
export function clearAuthCookie(res: NextResponse) {
  res.cookies.set(CookieName.Auth, "", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}
