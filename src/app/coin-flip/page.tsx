"use client";

import React, { useState } from "react";
import ToolFooter from "@/components/ToolFooter";
import { useHistory } from "@/context/HistoryContext";
import { shareDecision, formatDecisionMessage } from "@/utils/shareUtils";

export default function CoinFlipPage() {
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState<"HEADS" | "TAILS" | null>(null);
  const { addToHistory } = useHistory();

  const flipCoin = () => {
    if (isFlipping) return;

    setIsFlipping(true);
    setResult(null);

    // Simulate flipping time
    setTimeout(() => {
      const newResult = Math.random() > 0.5 ? "HEADS" : "TAILS";
      setResult(newResult);
      setIsFlipping(false);
      addToHistory("coin", newResult);
    }, 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-12 py-8">
      <div className="text-center space-y-4 animate-fade-in">
        <h1 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 tracking-tight">
          3D Coin Flip
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Need a 50/50 decision? Flip a high-quality 3D coin and let gravity do
          the rest.
        </p>
      </div>

      <div className="flex flex-col items-center gap-16 py-12">
        {/* 3D Coin Container */}
        <div
          className={`coin-container ${isFlipping ? "animate-coin-flip" : ""} ${result === "TAILS" ? "show-tails" : ""}`}
        >
          <div className="coin">
            <div className="side heads">
              <div className="coin-inner">
                <span className="text-5xl">🪙</span>
                <span className="font-bold text-amber-900 mt-2">HEADS</span>
              </div>
            </div>
            <div className="side tails">
              <div className="coin-inner">
                <span className="text-5xl">👑</span>
                <span className="font-bold text-amber-900 mt-2">TAILS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 w-full max-w-sm">
          <button
            onClick={flipCoin}
            disabled={isFlipping}
            className={`w-full py-5 rounded-[2rem] font-black text-2xl tracking-wide transition-all active:scale-95 shadow-2xl relative overflow-hidden group ${
              isFlipping
                ? "bg-slate-800 text-slate-600 cursor-not-allowed border border-white/5"
                : "bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 text-white hover:shadow-amber-500/40"
            }`}
          >
            <span className="relative z-10">
              {isFlipping ? "FLIPPING..." : "FLIP COIN!"}
            </span>
            {!isFlipping && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12" />
            )}
          </button>

          <div className="h-32 flex flex-col items-center justify-center gap-4">
            {result && !isFlipping && (
              <div className="text-center animate-result-pop space-y-4">
                <div className="space-y-1">
                  <p className="text-amber-400 font-bold uppercase tracking-widest text-sm">
                    It landed on:
                  </p>
                  <div className="text-5xl sm:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 drop-shadow-2xl">
                    {result}
                  </div>
                </div>

                <button
                  onClick={async () => {
                    const msg = formatDecisionMessage("coin", result);
                    await shareDecision("what2pick - Coin Flip", msg);
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
          title="Random Coin Toss"
          description="A simple, fair, and fun way to settle any binary choice. Whether it's choosing who goes first in a game or making a quick life decision, our 3D coin flip is completely random and unbiased."
        />
      </div>

      <style jsx>{`
        .coin-container {
          width: 200px;
          height: 200px;
          perspective: 1000px;
        }
        .coin {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .side {
          width: 100%;
          height: 100%;
          position: absolute;
          backface-visibility: hidden;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            inset 0 0 40px rgba(0, 0, 0, 0.2),
            0 0 20px rgba(0, 0, 0, 0.2);
          border: 8px solid #b45309;
        }
        .heads {
          background: linear-gradient(135deg, #fbbf24 0%, #d97706 100%);
          z-index: 2;
        }
        .tails {
          background: linear-gradient(135deg, #d97706 0%, #fbbf24 100%);
          transform: rotateY(180deg);
        }
        .coin-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .show-tails .coin {
          transform: rotateY(180deg);
        }
        .animate-coin-flip .coin {
          animation: coin-flip-anim 2s cubic-bezier(0.15, 0, 0.15, 1) forwards;
        }
        @keyframes coin-flip-anim {
          0% {
            transform: rotateY(0) translateY(0);
          }
          25% {
            transform: rotateY(1800deg) translateY(-150px) scale(1.1);
          }
          75% {
            transform: rotateY(3600deg) translateY(-150px) scale(1.1);
          }
          100% {
            transform: rotateY(var(--final-rotation, 7200deg)) translateY(0);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
      `}</style>
    </div>
  );
}
