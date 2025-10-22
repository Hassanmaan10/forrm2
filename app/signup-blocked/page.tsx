import { RoutePath } from "../enums";

// app/signup-blocked/page.tsx
export default function SignupBlockedPage() {
  return (
    <main className="min-h-screen grid place-items-center">
      <div className="rounded-xl border p-6 text-center">
        <h1 className="text-2xl font-semibold">You’re already signed in</h1>
        <p className="mt-2 text-gray-600">
          Logout to access the signup page again.
        </p>
        <a href={RoutePath.Dashboard} className="mt-4 inline-block underline">
          Go to dashboard
        </a>
      </div>
    </main>
  );
}
