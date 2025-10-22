import { CookieName } from "@/app/enums";
import { clearCookie } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ message: "Logged out" });
  clearCookie(res, CookieName.Auth);
  return res;
}
