"use client";

import { useRouter } from "next/navigation";
import {
  pickRandomIntentForCategory,
  pickRandomCategoryForIntent,
  pickRandomCombination,
} from "@/utils/decisionHelpers";

export default function WhatToEatPage() {
  const router = useRouter();

  const handlePickAnything = () => {
    const { category, intent } = pickRandomCombination();
    router.push(`/what-to-eat/${category}/${intent}`);
  };

  const handleCategoryClick = (category: string) => {
    const intent = pickRandomIntentForCategory(category);
    router.push(`/what-to-eat/${category}/${intent}`);
  };

  const handleIntentClick = (intent: string) => {
    const category = pickRandomCategoryForIntent(intent);
    router.push(`/what-to-eat/${category}/${intent}`);
  };

  const quickPicks = [
    { emoji: "🇹🇭", label: "Thai food", type: "category", value: "thai" },
    {
      emoji: "🇯🇵",
      label: "Japanese food",
      type: "category",
      value: "japanese",
    },
    { emoji: "💰", label: "Cheap meals", type: "intent", value: "cheap" },
    { emoji: "🥗", label: "Healthy meals", type: "intent", value: "healthy" },
    {
      emoji: "🌙",
      label: "Late night food",
      type: "intent",
      value: "late-night",
    },
    { emoji: "🔥", label: "Spicy food", type: "intent", value: "spicy" },
  ];

  const allCategories = [
    { emoji: "🇹🇭", name: "Thai", slug: "thai" },
    { emoji: "🇯🇵", name: "Japanese", slug: "japanese" },
    { emoji: "🇰🇷", name: "Korean", slug: "korean" },
    { emoji: "🇨🇳", name: "Chinese", slug: "chinese" },
    { emoji: "🇮🇹", name: "Italian", slug: "italian" },
    { emoji: "🇲🇽", name: "Mexican", slug: "mexican" },
    { emoji: "🇮🇳", name: "Indian", slug: "indian" },
    { emoji: "🍔", name: "American", slug: "american" },
    { emoji: "🥗", name: "Healthy", slug: "healthy" },
    { emoji: "🌱", name: "Vegetarian", slug: "vegetarian" },
    { emoji: "🌶️", name: "Spicy", slug: "spicy" },
    { emoji: "💰", name: "Cheap", slug: "cheap" },
  ];

  return (
    <>
      <div className="flex flex-col items-center gap-12 text-center max-w-5xl w-full px-4">
        {/* SECTION 1: Zero Thinking */}
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              What to eat
            </h1>
            <p className="text-slate-400 text-lg">
              Stop overthinking. Just press a button.
            </p>
          </div>

          <button
            onClick={handlePickAnything}
            className="group w-full max-w-md px-10 py-8 rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 active:scale-95 text-white font-bold text-2xl transition-all duration-200 shadow-2xl shadow-amber-500/30 hover:shadow-amber-400/40 cursor-pointer min-h-[100px] flex items-center justify-center"
          >
            <span className="flex items-center gap-4">
              <span className="text-5xl group-hover:scale-110 transition-transform">
                🍽️
              </span>
              <span>Pick anything for me</span>
            </span>
          </button>
        </div>

        {/* SECTION 2: Quick Picks */}
        <div className="w-full">
          <h2 className="text-2xl font-bold text-white mb-6">Quick picks</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {quickPicks.map((pick) => (
              <button
                key={pick.value}
                onClick={() =>
                  pick.type === "category"
                    ? handleCategoryClick(pick.value)
                    : handleIntentClick(pick.value)
                }
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 border border-white/10 hover:border-white/20 p-6 min-h-[120px] flex flex-col items-center justify-center gap-3 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span className="text-5xl group-hover:scale-110 transition-transform">
                  {pick.emoji}
                </span>
                <span className="text-white font-bold text-lg">
                  {pick.label}
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-tr from-transparent via-white to-transparent transform -skew-x-12" />
              </button>
            ))}
          </div>
        </div>

        {/* SECTION 3: Browse All Categories */}
        <div className="w-full border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Or browse by cuisine
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {allCategories.map((category) => (
              <a
                key={category.slug}
                href={`/what-to-eat/${category.slug}`}
                className="group relative overflow-hidden rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 p-5 min-h-[100px] flex flex-col items-center justify-center gap-2 transition-all duration-200 hover:scale-105"
              >
                <span className="text-4xl group-hover:scale-110 transition-transform">
                  {category.emoji}
                </span>
                <span className="text-white font-medium text-sm">
                  {category.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* SEO Content */}
      <div className="seo-content max-w-3xl w-full px-4 mt-16">
        <section className="seo-section">
          <h2>How this tool works</h2>
          <p>
            Our what to eat picker randomly selects a meal suggestion from over
            80 different food options spanning cuisines from around the world.
            The random food generator gives you instant meal ideas when you
            can&apos;t decide what to eat today.
          </p>
        </section>

        <section className="seo-section">
          <h2>When to use it</h2>
          <ul>
            <li>When you&apos;re hungry but can&apos;t decide what to eat</li>
            <li>To discover new meal ideas and food options</li>
            <li>When planning dinner or lunch with friends</li>
            <li>To break out of eating the same foods repeatedly</li>
            <li>For quick meal inspiration</li>
            <li>When you want to try something different</li>
          </ul>
        </section>

        <section className="seo-section">
          <h2>About this tool</h2>
          <p>
            The what to eat today generator is your personal meal picker that
            helps solve the common question &quot;what should I eat?&quot; Our
            random food generator includes popular dishes like pizza, sushi,
            tacos, curry, and many more international cuisines. Whether
            you&apos;re cooking at home, ordering delivery, or choosing a
            restaurant, this meal picker provides instant food ideas to help you
            decide what to eat.
          </p>
        </section>

        <section className="seo-section">
          <h2>Related tools</h2>
          <ul>
            <li>
              <a href="/yes-or-no">Yes or No Picker</a> – Make quick decisions
              instantly
            </li>
            <li>
              <a href="/name-generator">Name Generator</a> – Generate creative
              random names
            </li>
            <li>
              <a href="/random-number">Random Number Generator</a> – Pick a
              random number 1-100
            </li>
            <li>
              <a href="/random-color">Random Color Generator</a> – Get random
              hex color codes
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
