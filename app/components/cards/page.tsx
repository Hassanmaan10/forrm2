export default function Cards() {
  return (
    <div className="mx-auto mt-10 w-full max-w-3xl rounded-3xl border border-white/25 bg-white/10 p-6 backdrop-blur-xl shadow-2xl">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 text-left">
        <li className="rounded-2xl border border-white/20 bg-white/10 p-4">
          <p className="text-sm font-semibold">🔐 Secure</p>
          <p className="mt-1 text-xs text-white/85">
            Built-in auth route ready to connect.
          </p>
        </li>
        <li className="rounded-2xl border border-white/20 bg-white/10 p-4">
          <p className="text-sm font-semibold">⚡ Fast</p>
          <p className="mt-1 text-xs text-white/85">
            Minimal, lightweight UI with smooth hover states.
          </p>
        </li>
        <li className="rounded-2xl border border-white/20 bg-white/10 p-4">
          <p className="text-sm font-semibold">🎨 Customizable</p>
          <p className="mt-1 text-xs text-white/85">
            Tailwind classes you can tweak in seconds.
          </p>
        </li>
      </ul>
    </div>
  );
}
