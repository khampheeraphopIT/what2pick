import { getAllCategorySlugs } from "@/data/categories";
import { getAllIntentSlugs, getIntentBySlug } from "@/data/intents";
import { getFoodsByCategoryAndIntent } from "@/utils/foodHelpers";

export function pickRandomCategory(): string {
  const categories = getAllCategorySlugs();
  return categories[Math.floor(Math.random() * categories.length)];
}

export function pickRandomIntent(): string {
  const intents = getAllIntentSlugs();
  return intents[Math.floor(Math.random() * intents.length)];
}

/**
 * Returns a random combination that is GUARANTEED to have foods.
 * This prevents 404 errors in production static export.
 */
export function pickRandomCombination(): { category: string; intent: string } {
  const categories = getAllCategorySlugs();
  const intents = getAllIntentSlugs();

  // Try random pairs until one with foods is found (usually instant)
  // Limit attempts to 50 just in case data is sparse
  for (let i = 0; i < 50; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const intent = intents[Math.floor(Math.random() * intents.length)];
    const intentData = getIntentBySlug(intent);

    if (intentData) {
      const foods = getFoodsByCategoryAndIntent(category, intentData.filter);
      if (foods.length > 0) {
        return { category, intent };
      }
    }
  }

  // Fallback to a safe default if no random pair found
  return { category: "thai", intent: "cheap" };
}

/**
 * Picks a random intent for a specific category that has foods.
 */
export function pickRandomIntentForCategory(category: string): string {
  const intents = getAllIntentSlugs();
  const shuffledIntents = [...intents].sort(() => Math.random() - 0.5);

  for (const intent of shuffledIntents) {
    const intentData = getIntentBySlug(intent);
    if (intentData) {
      const foods = getFoodsByCategoryAndIntent(category, intentData.filter);
      if (foods.length > 0) {
        return intent;
      }
    }
  }

  return intents[0]; // Fallback
}

/**
 * Picks a random category for a specific intent that has foods.
 */
export function pickRandomCategoryForIntent(intent: string): string {
  const categories = getAllCategorySlugs();
  const intentData = getIntentBySlug(intent);
  if (!intentData) return categories[0];

  const shuffledCategories = [...categories].sort(() => Math.random() - 0.5);

  for (const category of shuffledCategories) {
    const foods = getFoodsByCategoryAndIntent(category, intentData.filter);
    if (foods.length > 0) {
      return category;
    }
  }

  return categories[0]; // Fallback
}
