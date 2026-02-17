"use client";

import { useState } from "react";

export default function RandomColorPage() {
  const [color, setColor] = useState<string | null>(null);
  const [animKey, setAnimKey] = useState(0);

  const generate = () => {
    const hex = Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase();
    setColor(`#${hex}`);
    setAnimKey((k) => k + 1);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-8 text-center max-w-lg w-full">
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Random Color Generator
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Discover a random color for your next design project.
          </p>
        </div>

        <button
          onClick={generate}
          className="px-10 py-4 rounded-2xl bg-fuchsia-500 hover:bg-fuchsia-400 active:scale-95 text-white font-bold text-lg transition-all duration-150 shadow-lg shadow-fuchsia-500/25 hover:shadow-fuchsia-400/30 cursor-pointer"
        >
          Generate color
        </button>

        <div className="h-48 flex flex-col items-center justify-center gap-4">
          {color && (
            <div
              key={animKey}
              className="animate-result-pop flex flex-col items-center gap-4"
            >
              <div
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl shadow-2xl border border-white/10"
                style={{ backgroundColor: color }}
              />
              <span className="text-3xl sm:text-4xl font-bold text-white/90 font-mono tracking-wider">
                {color}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="seo-content max-w-2xl w-full mt-16">
        <section className="seo-section">
          <h2>How this tool works</h2>
          <p>
            Our random color generator creates hex color codes by randomly
            selecting RGB values and displaying them in hexadecimal format. The
            hex color picker shows both the color code and a visual preview
            swatch, making it easy to see and use the generated random color.
          </p>
        </section>

        <section className="seo-section">
          <h2>When to use it</h2>
          <ul>
            <li>Finding color inspiration for design projects</li>
            <li>Generating color palettes and schemes</li>
            <li>Web design and development</li>
            <li>Creating unique brand colors</li>
            <li>Exploring new color combinations</li>
            <li>Breaking creative blocks in visual design</li>
          </ul>
        </section>

        <section className="seo-section">
          <h2>About this tool</h2>
          <p>
            The random color generator is perfect for designers and developers
            who need quick color inspiration. Our hex color picker generates
            random colors in hexadecimal format (like #FF5733), which is the
            standard color format used in web design and CSS. Each random color
            generator click creates a completely new color with its hex code
            displayed for easy copying and use in your projects.
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
              <a href="/random-number">Random Number Generator</a> – Pick a
              random number 1-100
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
