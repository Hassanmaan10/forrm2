import { clsx, type ClassValue } from "clsx";
import { NextResponse } from "next/server";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Set ANY cookie by key + value (safe defaults) */
export function setCookie(res: NextResponse, key: string, value: string) {
  res.cookies.set(key, value, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

/** Clear ANY cookie by key */
export function clearCookie(res: NextResponse, key: string) {
  res.cookies.set(key, "", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}
