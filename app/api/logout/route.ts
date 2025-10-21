import { clearAuthCookie } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ message: "Logged out" });
  clearAuthCookie(res);
  return res;
}
