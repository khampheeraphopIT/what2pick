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

export default function IntentPicker({
  category,
  intent,
  filteredFoods,
}: IntentPickerProps) {
  const [result, setResult] = useState<FoodItem | null>(null);
  const [animKey, setAnimKey] = useState(0);

  const pickFood = () => {
    if (filteredFoods.length > 0) {
      const randomFood =
        filteredFoods[Math.floor(Math.random() * filteredFoods.length)];
      setResult(randomFood);
      setAnimKey((k) => k + 1);
    }
  };

  const exampleFoods = filteredFoods.slice(0, 5);

  return (
    <>
      <div className="flex flex-col items-center gap-8 text-center max-w-lg w-full">
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            {category.name} {intent.label}
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            {intent.description} from {category.name.toLowerCase()} cuisine
          </p>
        </div>

        <button
          onClick={pickFood}
          className="px-10 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white font-bold text-lg transition-all duration-150 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/30 cursor-pointer"
        >
          Pick my meal
        </button>

        <div className="h-32 flex items-center justify-center">
          {result && (
            <span
              key={animKey}
              className="text-5xl sm:text-6xl font-bold text-emerald-300 animate-result-pop"
            >
              {formatFoodDisplay(result)}
            </span>
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
              <a href={`/what-to-eat/${category.slug}`}>All {category.name}</a>{" "}
              – Browse all {category.name.toLowerCase()} options
            </li>
            {intent.slug !== "cheap" && (
              <li>
                <a href={`/what-to-eat/${category.slug}/cheap`}>
                  Cheap {category.name}
                </a>{" "}
                – Budget-friendly options
              </li>
            )}
            {intent.slug !== "healthy" && (
              <li>
                <a href={`/what-to-eat/${category.slug}/healthy`}>
                  Healthy {category.name}
                </a>{" "}
                – Nutritious choices
              </li>
            )}
            {intent.slug !== "lunch" && (
              <li>
                <a href={`/what-to-eat/${category.slug}/lunch`}>
                  {category.name} Lunch
                </a>{" "}
                – Lunchtime ideas
              </li>
            )}
            <li>
              <a href="/what-to-eat">All Foods</a> – Explore all cuisines
            </li>
            <li>
              <a href="/yes-or-no">Yes or No Picker</a> – Make quick decisions
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
