"use client";

import { useState } from "react";
import { adjectives, nouns } from "@/data/names";

export default function NameGeneratorPage() {
  const [result, setResult] = useState<string | null>(null);
  const [animKey, setAnimKey] = useState(0);

  const generate = () => {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    setResult(`${adj} ${noun}`);
    setAnimKey((k) => k + 1);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-8 text-center max-w-lg w-full">
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Name Generator
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Generate creative random names for characters, projects, or
            usernames.
          </p>
        </div>

        <button
          onClick={generate}
          className="px-10 py-4 rounded-2xl bg-violet-500 hover:bg-violet-400 active:scale-95 text-white font-bold text-lg transition-all duration-150 shadow-lg shadow-violet-500/25 hover:shadow-violet-400/30 cursor-pointer"
        >
          Generate name
        </button>

        <div className="h-32 flex items-center justify-center">
          {result && (
            <span
              key={animKey}
              className="text-4xl sm:text-5xl font-bold text-violet-300 animate-result-pop"
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
            Our random name generator combines creative adjectives with powerful
            nouns to create unique name ideas. With over 900 possible
            combinations, the name generator produces memorable names perfect
            for any purpose.
          </p>
        </section>

        <section className="seo-section">
          <h2>When to use it</h2>
          <ul>
            <li>Creating project name ideas for your next venture</li>
            <li>Generating character names for stories or games</li>
            <li>Finding unique nickname generator suggestions</li>
            <li>Brainstorming team or group names</li>
            <li>Coming up with creative usernames</li>
            <li>Naming pets, products, or brands</li>
          </ul>
        </section>

        <section className="seo-section">
          <h2>About this tool</h2>
          <p>
            The random name generator helps you overcome creative blocks by
            providing instant name ideas. Whether you need project name ideas,
            character name inspiration, or a creative nickname generator, our
            tool combines evocative adjectives like &quot;Swift,&quot;
            &quot;Mystic,&quot; and &quot;Golden&quot; with powerful nouns like
            &quot;Dragon,&quot; &quot;Phoenix,&quot; and &quot;Voyager&quot; to
            create memorable combinations that stand out.
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
