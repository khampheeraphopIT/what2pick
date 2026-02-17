"use client";

import { useState } from "react";

export default function YesOrNoPage() {
  const [result, setResult] = useState<string | null>(null);
  const [animKey, setAnimKey] = useState(0);

  const decide = () => {
    setResult(Math.random() < 0.5 ? "YES" : "NO");
    setAnimKey((k) => k + 1);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-8 text-center max-w-lg w-full">
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Yes or No Picker
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Let fate decide. Tap the button and get your answer instantly.
          </p>
        </div>

        <button
          onClick={decide}
          className="px-10 py-4 rounded-2xl bg-indigo-500 hover:bg-indigo-400 active:scale-95 text-white font-bold text-lg transition-all duration-150 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-400/30 cursor-pointer"
        >
          Decide
        </button>

        <div className="h-32 flex items-center justify-center">
          {result && (
            <span
              key={animKey}
              className={`text-7xl sm:text-8xl font-black animate-result-pop ${
                result === "YES" ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {result}
            </span>
          )}
        </div>
      </div>

      <div className="seo-content max-w-2xl w-full mt-16">
        <section className="seo-section">
          <h2>How this tool works</h2>
          <p>
            Our yes or no picker is a simple decision maker that randomly
            generates either YES or NO when you click the button. The random yes
            or no generator uses true randomness to help you make quick
            decisions without bias or overthinking.
          </p>
        </section>

        <section className="seo-section">
          <h2>When to use it</h2>
          <ul>
            <li>When you can&apos;t decide between two equal options</li>
            <li>To settle debates or disagreements fairly</li>
            <li>For making quick everyday choices</li>
            <li>When you need an unbiased decision maker</li>
            <li>To overcome decision paralysis</li>
            <li>For fun games and challenges</li>
          </ul>
        </section>

        <section className="seo-section">
          <h2>About this tool</h2>
          <p>
            The yes or no decision maker helps you break free from indecision.
            Sometimes the hardest part of making a choice is just committing to
            one option. This yes or no generator provides instant, random
            answers to help you move forward with confidence. Whether
            you&apos;re making serious decisions or just having fun, our
            decision maker tool gives you the push you need to take action.
          </p>
        </section>

        <section className="seo-section">
          <h2>Related tools</h2>
          <ul>
            <li>
              <a href="/what-to-eat">What to Eat Picker</a> – Can&apos;t decide
              what to eat? Get random meal suggestions
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
