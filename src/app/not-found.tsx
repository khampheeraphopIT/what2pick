import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center max-w-lg w-full px-4">
      <div className="text-8xl mb-4">🤷</div>

      <div className="space-y-3">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Page not found
        </h1>
        <p className="text-xl text-slate-300">
          Looks like you couldn&apos;t decide where to go either.
        </p>
      </div>

      <Link
        href="/random"
        className="group px-10 py-5 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-400 hover:to-purple-400 active:scale-95 text-white font-bold text-lg transition-all duration-200 shadow-xl shadow-violet-500/30 hover:shadow-violet-400/40 cursor-pointer"
      >
        <span className="flex items-center gap-3">
          <span className="text-2xl group-hover:rotate-180 transition-transform duration-500">
            🎯
          </span>
          <span>Decide for me</span>
        </span>
      </Link>

      <div className="mt-8 text-slate-500 text-sm">
        <Link href="/" className="hover:text-white transition-colors">
          or go back home
        </Link>
      </div>
    </div>
  );
}
