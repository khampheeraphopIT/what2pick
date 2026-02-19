"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface HistoryItem {
  id: string;
  type: string; // 'eat', 'custom', 'coin', 'number', etc.
  result: string;
  timestamp: number;
  metadata?: Record<string, unknown>;
}

interface HistoryContextType {
  history: HistoryItem[];
  addToHistory: (
    type: string,
    result: string,
    metadata?: Record<string, unknown>,
  ) => void;
  clearHistory: () => void;
}

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

export function HistoryProvider({ children }: { children: React.ReactNode }) {
  // Use lazy initialization to avoid SSR/Hydration mismatch while keeping it efficient
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage only on mount to avoid SSR issues
  useEffect(() => {
    const saved =
      typeof window !== "undefined"
        ? localStorage.getItem("what2pick-history")
        : null;
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Defer state update to next frame to avoid "synchronous setState" lint warning
        requestAnimationFrame(() => {
          setHistory(parsed);
          setIsLoaded(true);
        });
        return; // Early return as setIsLoaded is called in the frame
      } catch (e) {
        console.error("Failed to load history", e);
      }
    }
    // Defer to next frame
    requestAnimationFrame(() => {
      setIsLoaded(true);
    });
  }, []);

  // Save to localStorage when history changes (Only after initial load)
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("what2pick-history", JSON.stringify(history));
    }
  }, [history, isLoaded]);

  const addToHistory = (
    type: string,
    result: string,
    metadata?: Record<string, unknown>,
  ) => {
    const newItem: HistoryItem = {
      id: Math.random().toString(36).substring(2, 9),
      type,
      result,
      timestamp: Date.now(),
      metadata,
    };

    setHistory((prev) => {
      const updated = [newItem, ...prev];
      return updated.slice(0, 10); // Keep last 10
    });
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <HistoryContext.Provider value={{ history, addToHistory, clearHistory }}>
      {children}
    </HistoryContext.Provider>
  );
}

export function useHistory() {
  const context = useContext(HistoryContext);
  if (context === undefined) {
    throw new Error("useHistory must be used within a HistoryProvider");
  }
  return context;
}
