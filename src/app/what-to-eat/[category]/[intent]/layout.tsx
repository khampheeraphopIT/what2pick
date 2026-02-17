import type { Metadata } from "next";
import { getCategoryBySlug, getAllCategorySlugs } from "@/data/categories";
import { getIntentBySlug, getAllIntentSlugs } from "@/data/intents";
import { getFoodsByCategoryAndIntent } from "@/utils/foodHelpers";

interface IntentPageProps {
  params: Promise<{
    category: string;
    intent: string;
  }>;
}

export async function generateStaticParams() {
  const categorySlugs = getAllCategorySlugs();
  const intentSlugs = getAllIntentSlugs();

  // Generate all category × intent combinations
  const params: { category: string; intent: string }[] = [];

  for (const category of categorySlugs) {
    for (const intent of intentSlugs) {
      // Only generate if there are matching foods
      const intentData = getIntentBySlug(intent);
      if (intentData) {
        const foods = getFoodsByCategoryAndIntent(category, intentData.filter);
        if (foods.length > 0) {
          params.push({ category, intent });
        }
      }
    }
  }

  return params;
}

export async function generateMetadata(
  props: IntentPageProps,
): Promise<Metadata> {
  const params = await props.params;
  const { category, intent } = params;

  const categoryData = getCategoryBySlug(category);
  const intentData = getIntentBySlug(intent);
  const foods = intentData
    ? getFoodsByCategoryAndIntent(category, intentData.filter)
    : [];

  if (!categoryData || !intentData || foods.length === 0) {
    return {
      title: "No Results | what2pick",
      description: "This combination has no available options.",
    };
  }

  const title = `What ${intentData.label.toLowerCase()} ${categoryData.name} food should I eat? | what2pick`;
  const description = `Looking for ${intentData.label.toLowerCase()} ${categoryData.name.toLowerCase()} meal ideas? Get instant suggestions from ${foods.length}+ options perfect for ${intentData.description.toLowerCase()}. Press a button and we'll decide for you.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://what2pick.com/what-to-eat/${category}/${intent}`,
    },
    openGraph: {
      title: `What ${intentData.label.toLowerCase()} ${categoryData.name} food should I eat?`,
      description,
      url: `https://what2pick.com/what-to-eat/${category}/${intent}`,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `What ${intentData.label.toLowerCase()} ${categoryData.name} food should I eat?`,
      description,
    },
  };
}

export default function IntentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
