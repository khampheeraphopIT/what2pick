import { getFoodsByCategoryAndIntent } from "@/utils/foodHelpers";
import { getCategoryBySlug } from "@/data/categories";
import { getIntentBySlug } from "@/data/intents";
import IntentPicker from "@/components/IntentPicker";

interface IntentPageProps {
  params: Promise<{
    category: string;
    intent: string;
  }>;
}

export default async function IntentPage(props: IntentPageProps) {
  const params = await props.params;
  const { category, intent } = params;

  const categoryData = getCategoryBySlug(category);
  const intentData = getIntentBySlug(intent);
  const filteredFoods = getFoodsByCategoryAndIntent(
    category,
    intentData?.filter || "",
  );

  if (!categoryData || !intentData || filteredFoods.length === 0) {
    return (
      <div className="flex flex-col items-center gap-8 text-center max-w-lg w-full">
        <h1 className="text-4xl font-extrabold text-white">No Results Found</h1>
        <p className="text-slate-400">
          We couldn&apos;t find any{" "}
          {categoryData?.name.toLowerCase() || "items"} that match &quot;
          {intentData?.label || intent}&quot;.
        </p>
        <div className="flex gap-4">
          <a
            href={`/what-to-eat/${category}`}
            className="text-indigo-400 hover:text-indigo-300 underline"
          >
            ← All {categoryData?.name || "foods"}
          </a>
          <a
            href="/what-to-eat"
            className="text-indigo-400 hover:text-indigo-300 underline"
          >
            ← All categories
          </a>
        </div>
      </div>
    );
  }

  return (
    <IntentPicker
      category={categoryData}
      intent={intentData}
      filteredFoods={filteredFoods}
    />
  );
}
