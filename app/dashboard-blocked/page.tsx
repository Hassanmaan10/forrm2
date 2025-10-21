// app/signup-blocked/page.tsx
export default function SignupBlockedPage() {
  return (
    <main className="min-h-screen grid place-items-center">
      <div className="rounded-xl border p-6 text-center">
        <h1 className="text-2xl font-semibold">You need to Sign in</h1>
        <p className="mt-2 text-gray-600">Sign in to access your dashboard</p>
        <a href="/signup" className="mt-4 inline-block underline">
          Go to sign in
        </a>
      </div>
    </main>
  );
}
