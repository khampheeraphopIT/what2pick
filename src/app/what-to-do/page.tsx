import Link from "next/link";

export default function WhatToDoPage() {
  return (
    <div className="flex flex-col items-center gap-8 text-center max-w-lg w-full">
      <div className="space-y-2">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          What to do
        </h1>
        <p className="text-slate-400 text-base sm:text-lg">
          Coming soon! We&apos;re building something fun.
        </p>
      </div>

      <div className="text-8xl opacity-20">🎲</div>

      <p className="text-slate-500 text-sm max-w-md">
        This feature is under development. In the meantime, try our other
        decision tools!
      </p>

      <div className="flex flex-wrap gap-3 justify-center mt-4">
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-colors"
        >
          ← Go home
        </Link>
        <Link
          href="/what-to-eat"
          className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-colors"
        >
          Decide what to eat
        </Link>
      </div>
    </div>
  );
}
