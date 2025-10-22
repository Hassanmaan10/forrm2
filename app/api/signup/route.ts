import { ApiMessage, RoutePath } from "@/app/enums";
import { setAuthCookie } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const formSchema = z.object({
  firstname: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters.")
    .max(50, "First name must be at most 50 characters."),

  lastname: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters.")
    .max(50, "Last name must be at most 50 characters."),

  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Please enter a valid email address."),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(72, "Password must be at most 72 characters.")
    .regex(/[A-Za-z]/, "Password must contain at least one letter.")
    .regex(/[0-9]/, "Password must contain at least one number.")
    .regex(/[^\w\s]/, "Password must contain at least one special character."),

  confirmPassword: z.string().min(1, "Please confirm your password."),
});

// 2) Handle POST /api/signup
export async function POST(req: NextRequest) {
  try {
    // 2a) Parse JSON body
    const body = await req.json();

    // 🔴 TEMP: force a 500 to test the toast
    // if (body?.email === "boom@test.com") {
    //   throw new Error("TEST 500");
    // }

    // 2b) Validate with Zod
    const parsed = formSchema.safeParse(body);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          ok: false,
          message: ApiMessage.ValidationFialed,
          errors: fieldErrors,
        },
        { status: 422 }
      );
    }
    const token = crypto.randomUUID();

    const res = NextResponse.json(
      {
        ok: true,
        message: ApiMessage.AccountCreated,
        redirectTo: RoutePath.Dashboard,
      },
      { status: 201 }
    );

    setAuthCookie(res, token);
    return res;
  } catch {
    return NextResponse.json(
      { ok: false, message: ApiMessage.ServerError },
      { status: 500 }
    );
  }
}
