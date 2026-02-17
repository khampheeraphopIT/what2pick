export interface Intent {
  slug: string;
  label: string;
  filter: string;
  description: string;
}

export const intents: Intent[] = [
  {
    slug: "cheap",
    label: "Cheap Meals",
    filter: "price_low",
    description: "Budget-friendly meals perfect for saving money",
  },
  {
    slug: "lunch",
    label: "Lunch Ideas",
    filter: "meal_lunch",
    description: "Perfect midday meal options",
  },
  {
    slug: "dinner",
    label: "Dinner Ideas",
    filter: "meal_dinner",
    description: "Satisfying dinner choices for any evening",
  },
  {
    slug: "late-night",
    label: "Late Night Food",
    filter: "late_night",
    description: "Perfect for late-night cravings and hunger",
  },
  {
    slug: "healthy",
    label: "Healthy Options",
    filter: "healthy",
    description: "Nutritious and health-conscious meal choices",
  },
  {
    slug: "high-protein",
    label: "High Protein",
    filter: "protein_high",
    description: "Protein-rich meals for fitness and energy",
  },
  {
    slug: "no-spicy",
    label: "Not Spicy",
    filter: "not_spicy",
    description: "Mild foods without heat or spice",
  },
  {
    slug: "for-students",
    label: "Student Budget Meals",
    filter: "budget_student",
    description: "Affordable meals perfect for student budgets",
  },
];

export function getIntentBySlug(slug: string): Intent | undefined {
  return intents.find((intent) => intent.slug === slug);
}

export function getAllIntentSlugs(): string[] {
  return intents.map((intent) => intent.slug);
}
