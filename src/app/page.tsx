import type { Metadata } from "next";
import Link from "next/link";
import RecentDecisions from "@/components/RecentDecisions";

export const metadata: Metadata = {
  title: "what2pick – Can't Decide? We'll Choose for You",
  description:
    "Stop overthinking. Instant decisions for food, yes/no questions, numbers, names, colors and more. Free decision-making tools.",
  metadataBase: new URL("https://what2pick.vercel.app"),
  openGraph: {
    title: "Can't Decide? We'll Choose for You",
    description: "Food, answers, numbers, names and more — stop overthinking.",
    url: "https://what2pick.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Can't decide? We'll choose for you",
    description: "Food, answers, numbers, names and more — stop overthinking.",
  },
};

interface IntentCard {
  emoji: string;
  title: string;
  subtitle: string;
  href: string;
  color: string;
  isNew?: boolean;
}

const intents: IntentCard[] = [
  {
    emoji: "🍽️",
    title: "I'm hungry",
    subtitle: "What should I eat?",
    href: "/what-to-eat",
    color: "from-orange-500 to-red-500",
  },
  {
    emoji: "🎡",
    title: "Spin Wheel",
    subtitle: "Custom list decide",
    href: "/custom-list",
    color: "from-indigo-500 to-purple-600",
    isNew: true,
  },
  {
    emoji: "🪙",
    title: "Coin Flip",
    subtitle: "Quick 50/50 toss",
    href: "/coin-flip",
    color: "from-amber-400 to-orange-500",
    isNew: true,
  },
  {
    emoji: "🤔",
    title: "Answer Me",
    subtitle: "Yes or no?",
    href: "/yes-or-no",
    color: "from-blue-500 to-indigo-500",
  },
  {
    emoji: "🎲",
    title: "I'm bored",
    subtitle: "Something to do",
    href: "/what-to-do",
    color: "from-purple-500 to-pink-500",
  },
  {
    emoji: "🔢",
    title: "Number",
    subtitle: "Pick one for me",
    href: "/random-number",
    color: "from-green-500 to-teal-500",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center py-20 sm:py-32 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-pink-500/5 blur-[100px] rounded-full -z-10" />

        <div className="flex flex-col items-center gap-10 text-center max-w-4xl w-full px-4 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-tight">
              Decide{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Better.
              </span>
              <br />
              Faster.
            </h1>
            <p className="text-xl sm:text-2xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
              Stop overthinking. From food to life choices, we&apos;ll pick for
              you with a touch of magic.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/random"
              className="group relative px-10 py-5 rounded-[2rem] bg-white text-slate-900 font-black text-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-white/10 flex items-center gap-3 no-underline ring-4 ring-white/5"
            >
              🎯 Surprise Me
            </Link>
            <Link
              href="/what-to-eat"
              className="px-10 py-5 rounded-[2rem] glass border-white/10 text-white font-bold text-xl hover:bg-white/5 transition-all no-underline"
            >
              🍔 Pick Food
            </Link>
          </div>
        </div>
      </div>

      {/* History Preview */}
      <RecentDecisions />

      {/* Tool Grid Section */}
      <div className="w-full max-w-6xl px-4 py-16 space-y-12">
        <div className="flex flex-col gap-2 items-center sm:items-start">
          <h2 className="text-3xl font-black text-white">Decision Tools</h2>
          <p className="text-slate-500 font-medium">
            Choose a specialized tool for your situation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {intents.map((intent) => (
            <Link
              key={intent.href}
              href={intent.href}
              prefetch={true}
              className="group relative overflow-hidden rounded-[2.5rem] transition-all duration-300 hover:scale-[1.02] active:scale-95 flex flex-col items-start justify-between p-8 border border-white/5 hover:border-white/20 no-underline bg-slate-900/50 backdrop-blur-xl h-[240px]"
            >
              {intent.isNew && (
                <span className="absolute top-6 right-6 px-3 py-1 bg-indigo-500 rounded-full text-[10px] font-black text-white uppercase tracking-widest animate-pulse z-20">
                  New
                </span>
              )}

              <div
                className={`absolute inset-0 bg-gradient-to-br ${intent.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative z-10 space-y-4 w-full text-left">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-500 inline-block">
                  {intent.emoji}
                </span>
                <div>
                  <h2 className="text-white font-black text-2xl mb-1 mt-0 leading-none">
                    {intent.title}
                  </h2>
                  <p className="text-slate-400 font-medium text-base m-0 p-0">
                    {intent.subtitle}
                  </p>
                </div>
              </div>

              <div className="relative z-10 text-slate-500 group-hover:text-white transition-all duration-200 self-end">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* SEO/Footer Content */}
      <div className="max-w-4xl w-full px-4 pt-20 border-t border-white/5 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-white">Why what2pick?</h2>
            <p className="text-slate-400 leading-relaxed font-medium">
              Choice paralysis is real. Whether you can&apos;t decide what to
              eat, need a yes or no answer, or want a fair way to pick between
              options, we provide instant, fun, and beautiful tools to help you
              keep moving.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-white">Quick Access</h2>
            <ul className="grid grid-cols-2 gap-3 list-none p-0 m-0">
              <li>
                <Link
                  href="/what-to-eat"
                  className="text-slate-500 hover:text-indigo-400 font-bold transition-all no-underline"
                >
                  🍽️ Eating
                </Link>
              </li>
              <li>
                <Link
                  href="/coin-flip"
                  className="text-slate-500 hover:text-indigo-400 font-bold transition-all no-underline"
                >
                  🪙 Flipping
                </Link>
              </li>
              <li>
                <Link
                  href="/custom-list"
                  className="text-slate-500 hover:text-indigo-400 font-bold transition-all no-underline"
                >
                  🎡 Spinning
                </Link>
              </li>
              <li>
                <Link
                  href="/yes-or-no"
                  className="text-slate-500 hover:text-indigo-400 font-bold transition-all no-underline"
                >
                  🤔 Answering
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
