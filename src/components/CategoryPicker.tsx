"use client";

import { useState } from "react";
import { formatFoodDisplay } from "@/utils/foodHelpers";
import { Category } from "@/data/categories";
import { FoodItem } from "@/data/foods";

interface CategoryPickerProps {
  category: Category;
  categoryFoods: FoodItem[];
}

export default function CategoryPicker({
  category,
  categoryFoods,
}: CategoryPickerProps) {
  const [result, setResult] = useState<FoodItem | null>(null);
  const [animKey, setAnimKey] = useState(0);

  const pickFood = () => {
    if (categoryFoods.length > 0) {
      const randomFood =
        categoryFoods[Math.floor(Math.random() * categoryFoods.length)];
      setResult(randomFood);
      setAnimKey((k) => k + 1);
    }
  };

  const exampleFoods = categoryFoods.slice(0, 5);

  return (
    <>
      <div className="flex flex-col items-center gap-8 text-center max-w-lg w-full">
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            What to Eat - {category.name}
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            {category.description}
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
              <a href="/what-to-eat">All Foods Picker</a> – Browse all cuisine
              types
            </li>
            {category.slug !== "thai" && (
              <li>
                <a href="/what-to-eat/thai">Thai Food</a> – Random Thai meal
                ideas
              </li>
            )}
            {category.slug !== "japanese" && (
              <li>
                <a href="/what-to-eat/japanese">Japanese Food</a> – Sushi,
                ramen, and more
              </li>
            )}
            {category.slug !== "healthy" && (
              <li>
                <a href="/what-to-eat/healthy">Healthy Food</a> – Nutritious
                meal options
              </li>
            )}
            {category.slug !== "vegetarian" && (
              <li>
                <a href="/what-to-eat/vegetarian">Vegetarian Food</a> –
                Plant-based meals
              </li>
            )}
            <li>
              <a href="/yes-or-no">Yes or No Picker</a> – Make quick decisions
            </li>
            <li>
              <a href="/random-number">Random Number Generator</a> – Pick
              numbers 1-100
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
