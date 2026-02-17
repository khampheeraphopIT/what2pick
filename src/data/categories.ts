export interface Category {
  slug: string;
  name: string;
  description: string;
  keywords: string[];
}

export const categories: Category[] = [
  {
    slug: "thai",
    name: "Thai Food",
    description: "Spicy, aromatic Thai cuisine with bold flavors",
    keywords: ["pad thai", "tom yum", "thai curry", "satay"],
  },
  {
    slug: "japanese",
    name: "Japanese Food",
    description: "Fresh sushi, ramen, and traditional Japanese dishes",
    keywords: ["sushi", "ramen", "tempura", "bento"],
  },
  {
    slug: "korean",
    name: "Korean Food",
    description: "Flavorful Korean meals and side dishes",
    keywords: ["bibimbap", "kimchi", "bulgogi", "korean bbq"],
  },
  {
    slug: "chinese",
    name: "Chinese Food",
    description: "Classic Chinese takeout and traditional dishes",
    keywords: ["fried rice", "lo mein", "dumplings", "kung pao"],
  },
  {
    slug: "italian",
    name: "Italian Food",
    description: "Pizza, pasta, and classic Italian cuisine",
    keywords: ["pizza", "pasta", "lasagna", "carbonara"],
  },
  {
    slug: "mexican",
    name: "Mexican Food",
    description: "Tacos, burritos, and authentic Mexican flavors",
    keywords: ["tacos", "burrito", "enchiladas", "quesadilla"],
  },
  {
    slug: "indian",
    name: "Indian Food",
    description: "Curries, naan, and aromatic Indian dishes",
    keywords: ["curry", "tikka masala", "biryani", "naan"],
  },
  {
    slug: "american",
    name: "American Food",
    description: "Classic American comfort food and favorites",
    keywords: ["burger", "steak", "bbq ribs", "mac and cheese"],
  },
  {
    slug: "healthy",
    name: "Healthy Food",
    description: "Nutritious, fresh, and health-conscious meals",
    keywords: ["salad", "poke bowl", "grilled fish", "vegetables"],
  },
  {
    slug: "vegetarian",
    name: "Vegetarian Food",
    description: "Delicious meat-free meals and plant-based options",
    keywords: ["salad", "veggie burger", "falafel", "mediterranean"],
  },
  {
    slug: "spicy",
    name: "Spicy Food",
    description: "Hot and spicy dishes for heat lovers",
    keywords: ["curry", "pad thai", "hot wings", "chili"],
  },
  {
    slug: "cheap",
    name: "Cheap Food",
    description: "Budget-friendly meals that won't break the bank",
    keywords: ["pizza", "burger", "tacos", "sandwich"],
  },
  {
    slug: "quick-meal",
    name: "Quick Meals",
    description: "Fast and easy meals ready in minutes",
    keywords: ["sandwich", "salad", "fried rice", "pasta"],
  },
  {
    slug: "high-protein",
    name: "High Protein Food",
    description: "Protein-rich meals for fitness and energy",
    keywords: ["steak", "chicken", "fish", "eggs"],
  },
  {
    slug: "rice-dishes",
    name: "Rice Dishes",
    description: "Meals featuring rice as the main ingredient",
    keywords: ["fried rice", "biryani", "paella", "risotto"],
  },
  {
    slug: "noodles",
    name: "Noodle Dishes",
    description: "Pasta, ramen, and noodle-based meals",
    keywords: ["ramen", "pad thai", "lo mein", "pho"],
  },
  {
    slug: "street-food",
    name: "Street Food",
    description: "Popular street food and food truck favorites",
    keywords: ["tacos", "gyro", "falafel", "dumplings"],
  },
  {
    slug: "late-night",
    name: "Late Night Food",
    description: "Perfect meals for late-night cravings",
    keywords: ["ramen", "pizza", "burgers", "fried chicken"],
  },
  {
    slug: "diet",
    name: "Diet Food",
    description: "Light, low-calorie meals for weight management",
    keywords: ["salad", "grilled chicken", "vegetables", "soup"],
  },
  {
    slug: "comfort-food",
    name: "Comfort Food",
    description: "Warm, satisfying comfort food classics",
    keywords: ["mac and cheese", "pot pie", "lasagna", "chili"],
  },
  {
    slug: "snacks",
    name: "Snacks",
    description: "Light bites and snack options",
    keywords: ["chips", "crackers", "popcorn", "nuts"],
  },
  {
    slug: "breakfast",
    name: "Breakfast Food",
    description: "Morning meals to start your day right",
    keywords: ["eggs", "pancakes", "waffles", "omelette"],
  },
  {
    slug: "dessert",
    name: "Dessert",
    description: "Sweet treats and desserts",
    keywords: ["cake", "ice cream", "cookies", "pie"],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map((cat) => cat.slug);
}
