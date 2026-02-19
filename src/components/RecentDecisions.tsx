"use client";

import React from "react";
import { useHistory } from "@/context/HistoryContext";

export default function RecentDecisions() {
  const { history, clearHistory } = useHistory();

  if (history.length === 0) return null;

  return (
    <div className="w-full max-w-4xl px-4 py-12 animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-2 h-8 bg-pink-500 rounded-full" />
          Recent Decisions
        </h3>
        <button
          onClick={clearHistory}
          className="text-slate-500 hover:text-red-400 text-sm font-medium transition-colors"
        >
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {history.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="glass-card hover:border-white/20 p-5 rounded-2xl flex items-center justify-between group transition-all"
          >
            <div className="space-y-1">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                {item.type === "eat"
                  ? "🍔 Food"
                  : item.type === "coin"
                    ? "🪙 Coin"
                    : "🎡 Custom"}
              </p>
              <h4 className="text-white font-bold text-lg truncate max-w-[200px]">
                {item.result}
              </h4>
            </div>
            <div className="text-slate-600 text-xs">
              {new Date(item.timestamp).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
