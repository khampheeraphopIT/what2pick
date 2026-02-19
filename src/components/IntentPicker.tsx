"use client";

import { useState } from "react";
import { formatFoodDisplay } from "@/utils/foodHelpers";
import { Category } from "@/data/categories";
import { Intent } from "@/data/intents";
import { FoodItem } from "@/data/foods";

interface IntentPickerProps {
  category: Category;
  intent: Intent;
  filteredFoods: FoodItem[];
}

import Link from "next/link";
import { useHistory } from "@/context/HistoryContext";
import { shareDecision, formatDecisionMessage } from "@/utils/shareUtils";

export default function IntentPicker({
  category,
  intent,
  filteredFoods,
}: IntentPickerProps) {
  const [result, setResult] = useState<FoodItem | null>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [rollingFood, setRollingFood] = useState<FoodItem | null>(null);
  const [animKey, setAnimKey] = useState(0);
  const { addToHistory } = useHistory();

  const pickFood = () => {
    if (filteredFoods.length === 0 || isRolling) return;

    setIsRolling(true);
    setResult(null);

    // Initial rolling food
    setRollingFood(
      filteredFoods[Math.floor(Math.random() * filteredFoods.length)],
    );

    // Slot machine "rolling" effect
    let count = 0;
    const maxCount = 10;
    const interval = setInterval(() => {
      setRollingFood(
        filteredFoods[Math.floor(Math.random() * filteredFoods.length)],
      );
      count++;

      if (count >= maxCount) {
        clearInterval(interval);
        const randomFood =
          filteredFoods[Math.floor(Math.random() * filteredFoods.length)];
        setResult(randomFood);
        setIsRolling(false);
        setRollingFood(null);
        setAnimKey((k) => k + 1);
        addToHistory("eat", `${randomFood.emoji} ${randomFood.name}`, {
          category: category.slug,
          intent: intent.slug,
        });
      }
    }, 100);
  };

  const exampleFoods = filteredFoods.slice(0, 5);

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
            {category.name} {intent.label}
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            {intent.description} from {category.name.toLowerCase()} cuisine
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
          <h2>
            {category.name} {intent.label} Generator
          </h2>
          <p>
            Looking for {intent.label.toLowerCase()} in{" "}
            {category.name.toLowerCase()} cuisine? Our{" "}
            {category.name.toLowerCase()} {intent.label.toLowerCase()} picker
            randomly selects from {filteredFoods.length} carefully curated
            options that match your criteria. Whether you&apos;re planning
            meals, exploring new dishes, or just can&apos;t decide what to eat,
            this tool gives you instant {category.name.toLowerCase()}{" "}
            {intent.label.toLowerCase()} suggestions with a single click.
          </p>
          <p>
            Perfect for when you&apos;re craving {category.name.toLowerCase()}{" "}
            food but want to focus on {intent.description.toLowerCase()}. Each
            suggestion is specifically selected to match both your cuisine
            preference and meal intent, making decision-making effortless.
          </p>
        </section>

        <section className="seo-section">
          <h2>Example Options</h2>
          <p>
            Our {category.name.toLowerCase()} {intent.label.toLowerCase()}{" "}
            generator includes:
          </p>
          <ul>
            {exampleFoods.map((food, idx) => (
              <li key={idx}>
                {food.emoji} {food.name}
              </li>
            ))}
            {filteredFoods.length > 5 && (
              <li>...and {filteredFoods.length - 5} more options!</li>
            )}
          </ul>
        </section>

        <section className="seo-section">
          <h2>Related Generators</h2>
          <ul>
            <li>
              <Link
                href={`/what-to-eat/${category.slug}`}
                className="text-brand-light hover:underline font-medium"
              >
                All {category.name}
              </Link>{" "}
              – Browse all {category.name.toLowerCase()} options
            </li>
            {intent.slug !== "cheap" && (
              <li>
                <Link
                  href={`/what-to-eat/${category.slug}/cheap`}
                  className="text-brand-light hover:underline font-medium"
                >
                  Cheap {category.name}
                </Link>{" "}
                – Budget-friendly options
              </li>
            )}
            {intent.slug !== "healthy" && (
              <li>
                <Link
                  href={`/what-to-eat/${category.slug}/healthy`}
                  className="text-brand-light hover:underline font-medium"
                >
                  Healthy {category.name}
                </Link>{" "}
                – Nutritious choices
              </li>
            )}
            {intent.slug !== "lunch" && (
              <li>
                <Link
                  href={`/what-to-eat/${category.slug}/lunch`}
                  className="text-brand-light hover:underline font-medium"
                >
                  {category.name} Lunch
                </Link>{" "}
                – Lunchtime ideas
              </li>
            )}
            <li>
              <Link
                href="/what-to-eat"
                className="text-brand-light hover:underline font-medium"
              >
                All Foods
              </Link>{" "}
              – Explore all cuisines
            </li>
            <li>
              <Link
                href="/yes-or-no"
                className="text-brand-light hover:underline font-medium"
              >
                Yes or No Picker
              </Link>{" "}
              – Make quick decisions
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
