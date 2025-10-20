"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import SignupField from "../components/signup-feat/SignupField";

import { useRouter } from "next/navigation";
import SignupDialog from "../components/dialog/signup_dialog/page";

const formSchema = z
  .object({
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
      .regex(
        /[^\w\s]/,
        "Password must contain at least one special character."
      ),

    confirmPassword: z.string().min(1, "Please confirm your password."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

export default function SignUpForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const router = useRouter();

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        router.replace("/dashboard");
      }
    } catch (error) {
      alert(`Network error. Please try again.${error}`);
    }
  }

  return (
    <div className="relative min-h-[100svh] flex items-center justify-center px-4">
      {/* Top-left dialog trigger */}
      <div className="absolute left-4 top-4">
        <SignupDialog />
      </div>

      {/* Centered form */}
      <div className="w-full max-w-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <fieldset
              disabled={form.formState.isSubmitting}
              className="space-y-8"
            >
              <SignupField
                name="firstname"
                label="First Name"
                placeholder="First Name"
                type="text"
              />
              <SignupField
                name="lastname"
                label="Last Name"
                placeholder="Last Name"
                type="text"
              />
              <SignupField
                name="email"
                label="Email"
                placeholder="Email"
                type="email"
              />
              <SignupField
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
              />
              <SignupField
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Confirm Password"
                type="password"
              />
              <Button
                type="submit"
                className="w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </fieldset>
          </form>
        </Form>
      </div>
    </div>
  );
}
