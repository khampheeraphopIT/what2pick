import type { Metadata } from "next";
import Link from "next/link";

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
    emoji: "🤔",
    title: "I need an answer",
    subtitle: "Yes or no?",
    href: "/yes-or-no",
    color: "from-blue-500 to-indigo-500",
  },
  {
    emoji: "🎲",
    title: "I'm bored",
    subtitle: "Give me something to do",
    href: "/what-to-do",
    color: "from-purple-500 to-pink-500",
  },
  {
    emoji: "🔢",
    title: "I need a number",
    subtitle: "Pick one for me",
    href: "/random-number",
    color: "from-green-500 to-teal-500",
  },
  {
    emoji: "🎨",
    title: "I need a color",
    subtitle: "Surprise me",
    href: "/random-color",
    color: "from-pink-500 to-rose-500",
  },
  {
    emoji: "✨",
    title: "I need a name",
    subtitle: "Create something unique",
    href: "/name-generator",
    color: "from-amber-500 to-yellow-500",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col items-center gap-8 text-center max-w-4xl w-full px-4 py-12 sm:py-20">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Can&apos;t decide?
            <br />
            We&apos;ll choose for you.
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 font-medium max-w-2xl mx-auto">
            Food, answers, numbers, names and more — stop overthinking.
          </p>
        </div>

        {/* Primary CTA - Random Decision */}
        <Link
          href="/random"
          prefetch={true}
          aria-label="Make a random decision for me"
          className="group relative px-12 py-6 rounded-3xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-400 hover:to-purple-400 active:scale-95 text-white font-bold text-xl sm:text-2xl transition-all duration-200 shadow-2xl shadow-violet-500/30 hover:shadow-violet-400/40 cursor-pointer min-h-[80px] flex items-center justify-center no-underline"
        >
          <span className="flex items-center gap-3">
            <span className="text-3xl group-hover:rotate-180 transition-transform duration-500">
              🎯
            </span>
            <span>Surprise me</span>
          </span>
        </Link>
      </div>

      {/* Intent Cards */}
      <div className="w-full max-w-6xl px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {intents.map((intent) => (
            <Link
              key={intent.href}
              href={intent.href}
              prefetch={true}
              aria-label={intent.title}
              className="group relative overflow-hidden rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-95 min-h-[180px] flex flex-col items-start justify-between p-8 border border-white/10 hover:border-white/20 no-underline"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${intent.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative z-10 space-y-3 w-full text-left">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300 inline-block mb-2">
                  {intent.emoji}
                </span>
                <div>
                  <h2 className="text-white font-bold text-2xl mb-1 mt-0 leading-none">
                    {intent.title}
                  </h2>
                  <p className="text-white/80 text-base m-0 p-0">
                    {intent.subtitle}
                  </p>
                </div>
              </div>

              <div className="relative z-10 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 self-end">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-tr from-transparent via-white to-transparent transform -skew-x-12" />
            </Link>
          ))}
        </div>
      </div>

      {/* SEO Content */}
      <div className="seo-content max-w-3xl w-full px-4 pb-16 border-t border-white/10 pt-16 mt-8">
        <section className="seo-section mb-12 text-left">
          <h2 className="text-2xl font-bold text-white mb-4">
            Stop overthinking decisions
          </h2>
          <p className="text-slate-400 leading-relaxed">
            what2pick helps you make quick decisions when you&apos;re stuck.
            Whether you can&apos;t decide what to eat, need a yes or no answer,
            want a random number, or need creative inspiration, our tools
            eliminate choice paralysis with instant, random selections.
          </p>
        </section>

        <section className="seo-section text-left">
          <h2 className="text-2xl font-bold text-white mb-4">
            Popular decision tools
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0">
            <li>
              <Link
                href="/what-to-eat"
                className="text-indigo-400 hover:text-indigo-300 font-medium no-underline flex items-center gap-2"
              >
                <span>🍽️</span> <span>What to eat today</span>
              </Link>
            </li>
            <li>
              <Link
                href="/yes-or-no"
                className="text-indigo-400 hover:text-indigo-300 font-medium no-underline flex items-center gap-2"
              >
                <span>🤔</span> <span>Yes or no picker</span>
              </Link>
            </li>
            <li>
              <Link
                href="/random-number"
                className="text-indigo-400 hover:text-indigo-300 font-medium no-underline flex items-center gap-2"
              >
                <span>🔢</span> <span>Pick a number</span>
              </Link>
            </li>
            <li>
              <Link
                href="/random-color"
                className="text-indigo-400 hover:text-indigo-300 font-medium no-underline flex items-center gap-2"
              >
                <span>🎨</span> <span>Color generator</span>
              </Link>
            </li>
            <li>
              <Link
                href="/name-generator"
                className="text-indigo-400 hover:text-indigo-300 font-medium no-underline flex items-center gap-2"
              >
                <span>✨</span> <span>Name ideas</span>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
