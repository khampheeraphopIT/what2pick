import { getAllCategorySlugs } from "@/data/categories";
import { getAllIntentSlugs } from "@/data/intents";

export function pickRandomCategory(): string {
  const categories = getAllCategorySlugs();
  return categories[Math.floor(Math.random() * categories.length)];
}

export function pickRandomIntent(): string {
  const intents = getAllIntentSlugs();
  return intents[Math.floor(Math.random() * intents.length)];
}

export function pickRandomCombination(): { category: string; intent: string } {
  return {
    category: pickRandomCategory(),
    intent: pickRandomIntent(),
  };
}
