"use client";

import { useState } from "react";

export default function RandomNumberPage() {
  const [result, setResult] = useState<number | null>(null);
  const [animKey, setAnimKey] = useState(0);

  const generate = () => {
    setResult(Math.floor(Math.random() * 100) + 1);
    setAnimKey((k) => k + 1);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-8 text-center max-w-lg w-full">
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Random Number Generator
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Generate a random number between 1 and 100 instantly.
          </p>
        </div>

        <button
          onClick={generate}
          className="px-10 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 active:scale-95 text-white font-bold text-lg transition-all duration-150 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/30 cursor-pointer"
        >
          Generate number
        </button>

        <div className="h-32 flex items-center justify-center">
          {result !== null && (
            <span
              key={animKey}
              className="text-8xl sm:text-9xl font-black text-cyan-300 animate-result-pop tabular-nums"
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
            Our random number generator 1-100 uses true randomness to pick any
            number between 1 and 100. The number picker generates a new random
            number each time you click, ensuring fair and unbiased results.
          </p>
        </section>

        <section className="seo-section">
          <h2>When to use it</h2>
          <ul>
            <li>Playing number guessing games</li>
            <li>Making random selections from a numbered list</li>
            <li>Drawing lottery or raffle numbers</li>
            <li>Creating random passwords or codes</li>
            <li>Educational math exercises</li>
            <li>Fair decision making with numbered options</li>
          </ul>
        </section>

        <section className="seo-section">
          <h2>About this tool</h2>
          <p>
            The random number generator 1-100 is a simple yet powerful number
            picker that provides instant random numbers. Whether you need a
            random number for games, educational purposes, or making fair
            selections, this tool delivers truly random results every time. The
            number picker is perfect for any situation where you need an
            unbiased random number between 1 and 100.
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
              <a href="/what-to-eat">What to Eat Picker</a> – Can&apos;t decide
              what to eat? Get random meal suggestions
            </li>
            <li>
              <a href="/name-generator">Name Generator</a> – Generate creative
              random names
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
