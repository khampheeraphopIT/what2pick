import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://what2pick.vercel.app";
  const lastMod = new Date().toISOString().split(".")[0] + "Z";

  const categories = [
    "thai",
    "japanese",
    "korean",
    "chinese",
    "italian",
    "mexican",
    "indian",
    "american",
    "healthy",
    "vegetarian",
    "spicy",
    "cheap",
    "quick-meal",
    "high-protein",
    "rice-dishes",
    "noodles",
    "street-food",
    "late-night",
    "diet",
    "comfort-food",
    "snacks",
    "breakfast",
    "dessert",
  ];

  const categoryIntentPairs: [string, string][] = [
    ["thai", "cheap"],
    ["thai", "lunch"],
    ["thai", "dinner"],
    ["thai", "late-night"],
    ["thai", "healthy"],
    ["thai", "high-protein"],
    ["thai", "no-spicy"],
    ["thai", "for-students"],
    ["japanese", "healthy"],
    ["japanese", "lunch"],
    ["japanese", "dinner"],
    ["japanese", "late-night"],
    ["japanese", "high-protein"],
    ["japanese", "for-students"],
    ["korean", "lunch"],
    ["korean", "dinner"],
    ["korean", "late-night"],
    ["korean", "for-students"],
    ["chinese", "cheap"],
    ["chinese", "lunch"],
    ["chinese", "dinner"],
    ["chinese", "late-night"],
    ["chinese", "for-students"],
    ["healthy", "lunch"],
    ["healthy", "dinner"],
    ["healthy", "high-protein"],
    ["cheap", "lunch"],
    ["cheap", "dinner"],
    ["cheap", "late-night"],
    ["cheap", "for-students"],
  ];

  const urls = [
    { loc: `${baseUrl}/`, lastmod: lastMod },
    { loc: `${baseUrl}/what-to-eat`, lastmod: lastMod },
    ...categories.map((c) => ({
      loc: `${baseUrl}/what-to-eat/${c}`,
      lastmod: lastMod,
    })),
    ...categoryIntentPairs.map(([c, i]) => ({
      loc: `${baseUrl}/what-to-eat/${c}/${i}`,
      lastmod: lastMod,
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
