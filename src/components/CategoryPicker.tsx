"use client";

import { useState } from "react";
import { formatFoodDisplay } from "@/utils/foodHelpers";
import { Category } from "@/data/categories";
import { FoodItem } from "@/data/foods";

interface CategoryPickerProps {
  category: Category;
  categoryFoods: FoodItem[];
}

import Link from "next/link";
import { useHistory } from "@/context/HistoryContext";
import { shareDecision, formatDecisionMessage } from "@/utils/shareUtils";

export default function CategoryPicker({
  category,
  categoryFoods,
}: CategoryPickerProps) {
  const [result, setResult] = useState<FoodItem | null>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [rollingFood, setRollingFood] = useState<FoodItem | null>(null);
  const [animKey, setAnimKey] = useState(0);
  const { addToHistory } = useHistory();

  const pickFood = () => {
    if (categoryFoods.length === 0 || isRolling) return;

    setIsRolling(true);
    setResult(null);

    // Initial rolling food
    setRollingFood(
      categoryFoods[Math.floor(Math.random() * categoryFoods.length)],
    );

    // Slot machine "rolling" effect
    let count = 0;
    const maxCount = 25; // 2.5 seconds
    const interval = setInterval(() => {
      setRollingFood(
        categoryFoods[Math.floor(Math.random() * categoryFoods.length)],
      );
      count++;

      if (count >= maxCount) {
        clearInterval(interval);

        // --- Improved Variety Logic ---
        const candidates = [
          categoryFoods[Math.floor(Math.random() * categoryFoods.length)],
          categoryFoods[Math.floor(Math.random() * categoryFoods.length)],
          categoryFoods[Math.floor(Math.random() * categoryFoods.length)],
        ];

        const uniqueCandidates = candidates.filter(
          (c) => !result || c.name !== result.name,
        );
        const randomFood =
          uniqueCandidates.length > 0 ? uniqueCandidates[0] : candidates[0];

        setResult(randomFood);
        setIsRolling(false);
        setRollingFood(null);
        setAnimKey((k) => k + 1);
        addToHistory("eat", `${randomFood.emoji} ${randomFood.name}`, {
          category: category.name,
        });
      }
    }, 100);
  };

  const exampleFoods = categoryFoods.slice(0, 5);

  const getGoogleMapsUrl = (foodName: string) => {
    return `https://www.google.com/maps/search/${encodeURIComponent(foodName + " near me")}`;
  };

  const getRecipeUrl = (foodName: string) => {
    return `https://www.google.com/search?q=${encodeURIComponent(foodName + " recipe")}`;
  };

  const [shareStatus, setShareStatus] = useState<string | null>(null);

  const handleShare = async () => {
    if (!result) return;
    const msg = formatDecisionMessage("eat", result.name);
    const status = await shareDecision("what2pick - Choice", msg);
    setShareStatus(status);
    setTimeout(() => setShareStatus(null), 2000);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-8 text-center max-w-lg w-full">
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white focus:outline-none">
            What to Eat - {category.name}
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            {category.description}
          </p>
        </div>

        <button
          onClick={pickFood}
          disabled={isRolling}
          className={`px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-150 shadow-lg cursor-pointer ${
            isRolling
              ? "bg-slate-700 text-slate-500 cursor-not-allowed"
              : "bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white shadow-emerald-500/25 hover:shadow-emerald-400/30"
          }`}
        >
          {isRolling ? "Choosing..." : "Pick my meal"}
        </button>

        <div className="h-44 flex flex-col items-center justify-center gap-4">
          {isRolling && rollingFood && (
            <div className="flex flex-col items-center overflow-hidden h-20">
              <div className="animate-slot-roll flex flex-col items-center gap-2">
                <span className="text-5xl opacity-50">
                  {rollingFood.emoji} {rollingFood.name}
                </span>
                <span className="text-5xl">
                  {rollingFood.emoji} {rollingFood.name}
                </span>
                <span className="text-5xl opacity-50">
                  {rollingFood.emoji} {rollingFood.name}
                </span>
              </div>
            </div>
          )}
          {result && !isRolling && (
            <div className="flex flex-col items-center gap-6 animate-result-pop">
              <span
                key={animKey}
                className="text-5xl sm:text-6xl font-bold text-emerald-300"
              >
                {formatFoodDisplay(result)}
              </span>

              <div className="flex gap-3 flex-wrap justify-center">
                <a
                  href={getGoogleMapsUrl(result.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold transition-all hover:scale-105 active:scale-95"
                >
                  📍 Find Near Me
                </a>
                <a
                  href={getRecipeUrl(result.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-semibold transition-all hover:scale-105 active:scale-95"
                >
                  🍳 See Recipe
                </a>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300 text-sm font-semibold transition-all hover:scale-105 active:scale-95"
                >
                  🚀{" "}
                  {shareStatus === "copied"
                    ? "Copied!"
                    : shareStatus === "shared"
                      ? "Shared!"
                      : "Share Results"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="seo-content max-w-2xl w-full mt-16">
        <section className="seo-section">
          <h2>How this {category.name.toLowerCase()} picker works</h2>
          <p>
            Our {category.name.toLowerCase()} generator randomly selects a meal
            from our curated list of {categoryFoods.length}{" "}
            {category.name.toLowerCase()} options. Just click the button and
            instantly get a {category.name.toLowerCase()} suggestion — perfect
            for when you&apos;re craving {category.name.toLowerCase()} but
            can&apos;t decide what to eat.
          </p>
        </section>

        <section className="seo-section">
          <h2>When to use this generator</h2>
          <ul>
            <li>
              When you&apos;re in the mood for {category.name.toLowerCase()} but
              can&apos;t choose
            </li>
            <li>To discover new {category.name.toLowerCase()} dishes</li>
            <li>
              When planning meals and want {category.name.toLowerCase()} ideas
            </li>
            <li>To break out of ordering the same foods repeatedly</li>
            <li>For quick dinner or lunch decision making</li>
          </ul>
        </section>

        <section className="seo-section">
          <h2>Example {category.name} options</h2>
          <p>
            Our {category.name.toLowerCase()} meal picker includes popular
            choices like:
          </p>
          <ul>
            {exampleFoods.map((food, idx) => (
              <li key={idx}>
                {food.emoji} {food.name}
              </li>
            ))}
            {categoryFoods.length > 5 && (
              <li>...and {categoryFoods.length - 5} more options!</li>
            )}
          </ul>
        </section>

        <section className="seo-section">
          <h2>Related food generators</h2>
          <ul>
            <li>
              <Link
                href="/what-to-eat"
                className="text-brand-light hover:underline font-medium"
              >
                All Foods Picker
              </Link>{" "}
              – Browse all cuisine types
            </li>
            {category.slug !== "thai" && (
              <li>
                <Link
                  href="/what-to-eat/thai"
                  className="text-brand-light hover:underline font-medium"
                >
                  Thai Food
                </Link>{" "}
                – Random Thai meal ideas
              </li>
            )}
            {category.slug !== "japanese" && (
              <li>
                <Link
                  href="/what-to-eat/japanese"
                  className="text-brand-light hover:underline font-medium"
                >
                  Japanese Food
                </Link>{" "}
                – Sushi, ramen, and more
              </li>
            )}
            {category.slug !== "healthy" && (
              <li>
                <Link
                  href="/what-to-eat/healthy"
                  className="text-brand-light hover:underline font-medium"
                >
                  Healthy Food
                </Link>{" "}
                – Nutritious meal options
              </li>
            )}
            {category.slug !== "vegetarian" && (
              <li>
                <Link
                  href="/what-to-eat/vegetarian"
                  className="text-brand-light hover:underline font-medium"
                >
                  Vegetarian Food
                </Link>{" "}
                – Plant-based meals
              </li>
            )}
            <li>
              <Link
                href="/yes-or-no"
                className="text-brand-light hover:underline font-medium"
              >
                Yes or No Picker
              </Link>{" "}
              – Make quick decisions
            </li>
            <li>
              <Link
                href="/random-number"
                className="text-brand-light hover:underline font-medium"
              >
                Random Number Generator
              </Link>{" "}
              – Pick numbers 1-100
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
