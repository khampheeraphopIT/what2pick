"use client";

import React, { useState, useEffect } from "react";
import SpinWheel from "@/components/SpinWheel";
import ToolFooter from "@/components/ToolFooter";
import { useHistory } from "@/context/HistoryContext";
import { shareDecision, formatDecisionMessage } from "@/utils/shareUtils";

export default function CustomListPage() {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const { addToHistory } = useHistory();

  // Load from localStorage
  useEffect(() => {
    const saved =
      typeof window !== "undefined"
        ? localStorage.getItem("custom-list-items")
        : null;
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        requestAnimationFrame(() => {
          setItems(parsed);
        });
      } catch (e) {
        console.error("Failed to parse items", e);
      }
    } else {
      requestAnimationFrame(() => {
        setItems(["Option 1", "Option 2", "Option 3"]);
      });
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("custom-list-items", JSON.stringify(items));
    }
  }, [items]);

  const addItem = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (newItem.trim()) {
      setItems([...items, newItem.trim()]);
      setNewItem("");
    }
  };

  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleSpin = () => {
    if (items.length < 2) return;
    setResult(null);
    setIsSpinning(true);
  };

  const handleResult = (res: string) => {
    setResult(res);
    addToHistory("custom", res, { itemCount: items.length });
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-12 py-8">
      <div className="text-center space-y-4 animate-fade-in">
        <h1 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 tracking-tight">
          Custom Spin Wheel
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Create your own list, spin the wheel, and let fate decide. Your lists
          are saved automatically.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-start">
        {/* Editor Side */}
        <div className="glass-card rounded-[2.5rem] p-8 space-y-8 animate-fade-in [animation-delay:200ms]">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-8 bg-indigo-500 rounded-full" />
              Manage Options
            </h3>
            <form onSubmit={addItem} className="flex gap-3">
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add an option..."
                className="flex-1 bg-white/[0.05] border border-white/[0.1] rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-medium"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-2xl transition-all active:scale-95 shadow-lg shadow-indigo-600/20"
              >
                Add
              </button>
            </form>
          </div>

          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {items.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-center justify-between glass border-white/[0.08] rounded-2xl px-5 py-4 group hover:border-white/[0.15] transition-all"
              >
                <span className="text-slate-200 font-semibold">{item}</span>
                <button
                  onClick={() => removeItem(index)}
                  className="text-slate-500 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100 p-2"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
            {items.length === 0 && (
              <div className="text-center py-12 space-y-2 opacity-50">
                <p className="text-5xl">🎡</p>
                <p className="text-slate-400 font-medium italic">
                  No options added yet.
                </p>
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              Autosaved
            </span>
            <span>{items.length} options</span>
          </div>
        </div>

        {/* Wheel Side */}
        <div className="flex flex-col items-center gap-10 animate-fade-in [animation-delay:400ms]">
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full -z-10" />
            <SpinWheel
              items={items.length > 0 ? items : ["Add options first!"]}
              isSpinning={isSpinning}
              setIsSpinning={setIsSpinning}
              onResult={handleResult}
            />
          </div>

          <button
            onClick={handleSpin}
            disabled={isSpinning || items.length < 2}
            className={`w-full max-w-sm py-5 rounded-[2rem] font-black text-2xl tracking-wide transition-all active:scale-95 shadow-2xl relative overflow-hidden group ${
              isSpinning || items.length < 2
                ? "bg-slate-800 text-slate-600 cursor-not-allowed border border-white/5"
                : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:shadow-indigo-500/40"
            }`}
          >
            <span className="relative z-10">
              {isSpinning ? "SPINNING..." : "SPIN!"}
            </span>
            {!isSpinning && items.length >= 2 && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12" />
            )}
          </button>

          <div className="h-32 flex flex-col items-center justify-center gap-4">
            {result && !isSpinning && (
              <div className="text-center animate-result-pop space-y-4">
                <div className="space-y-1">
                  <p className="text-indigo-400 font-bold uppercase tracking-widest text-sm">
                    The wheel chose:
                  </p>
                  <div className="text-5xl sm:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 drop-shadow-2xl">
                    {result}
                  </div>
                </div>

                <button
                  onClick={async () => {
                    const msg = formatDecisionMessage("custom", result);
                    await shareDecision("what2pick - Wheel Choice", msg);
                  }}
                  className="px-6 py-2 bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300 text-sm font-semibold transition-all hover:scale-105 active:scale-95"
                >
                  🚀 Share Result
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full border-t border-white/10 pt-16">
        <ToolFooter
          title="Custom Decision Wheel"
          description="A flexible tool for any situation. Whether it's settling an argument, picking a winner, or deciding who pays for lunch, the spin wheel keeps it fair and fun. Your choices remain private and never leave your browser."
        />
      </div>
    </div>
  );
}
