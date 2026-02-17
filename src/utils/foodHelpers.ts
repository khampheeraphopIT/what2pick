import { foodItems, FoodItem } from "@/data/foods";

export function getFoodsByCategory(category: string): FoodItem[] {
  return foodItems.filter((food) => food.categories.includes(category));
}

export function getFoodsByCategoryAndIntent(
  category: string,
  intentTag: string,
): FoodItem[] {
  return foodItems.filter(
    (food) =>
      food.categories.includes(category) && food.tags.includes(intentTag),
  );
}

export function getRandomFood(foods: FoodItem[]): FoodItem {
  return foods[Math.floor(Math.random() * foods.length)];
}

export function formatFoodDisplay(food: FoodItem): string {
  return `${food.emoji} ${food.name}`;
}
