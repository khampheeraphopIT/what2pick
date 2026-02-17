"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const tools = [
  "/what-to-eat",
  "/yes-or-no",
  "/random-number",
  "/random-color",
  "/name-generator",
];

export default function RandomPage() {
  const router = useRouter();

  useEffect(() => {
    // Pick a random tool with uniform probability
    const randomTool = tools[Math.floor(Math.random() * tools.length)];
    router.replace(randomTool);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center max-w-lg w-full">
      <div className="text-6xl animate-spin">🎯</div>
      <h1 className="text-3xl font-bold text-white">Choosing for you...</h1>
      <p className="text-slate-400">Redirecting to a random decision tool</p>
    </div>
  );
}
