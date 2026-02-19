"use client";
import React, { useEffect, useRef, useState } from "react";

interface SpinWheelProps {
  items: string[];
  onResult: (result: string) => void;
  isSpinning: boolean;
  setIsSpinning: (val: boolean) => void;
}

const COLORS = [
  "#f87171",
  "#fb923c",
  "#fbbf24",
  "#facc15",
  "#a3e635",
  "#4ade80",
  "#34d399",
  "#2dd4bf",
  "#22d3ee",
  "#38bdf8",
  "#60a5fa",
  "#818cf8",
  "#a78bfa",
  "#c084fc",
  "#e879f9",
  "#f472b6",
];

export default function SpinWheel({
  items,
  onResult,
  isSpinning,
  setIsSpinning,
}: SpinWheelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState(0);

  const spinRef = useRef({
    rotation: 0,
    speed: 0,
    isSpinning: false,
  });

  // Draw the wheel
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = canvas.width;
    const center = size / 2;
    const radius = center - 10;
    const angleStep = (2 * Math.PI) / items.length;

    ctx.clearRect(0, 0, size, size);

    items.forEach((item, i) => {
      const startAngle = i * angleStep + rotation;
      const endAngle = (i + 1) * angleStep + rotation;

      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, radius, startAngle, endAngle);
      ctx.fillStyle = COLORS[i % COLORS.length];
      ctx.fill();
      ctx.stroke();

      // Text
      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(startAngle + angleStep / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "white";
      ctx.font = "bold 16px Inter, sans-serif";
      ctx.shadowBlur = 4;
      ctx.shadowColor = "rgba(0,0,0,0.5)";
      ctx.fillText(
        item.length > 12 ? item.slice(0, 10) + "..." : item,
        radius - 20,
        10,
      );
      ctx.restore();
    });

    // Center circle
    ctx.beginPath();
    ctx.arc(center, center, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "#1e293b";
    ctx.fill();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 4;
    ctx.stroke();
  }, [items, rotation]);

  // Animation logic
  useEffect(() => {
    let frameId: number;

    const animate = () => {
      if (spinRef.current.isSpinning) {
        spinRef.current.rotation += spinRef.current.speed;
        setRotation(spinRef.current.rotation);

        // Slow down
        spinRef.current.speed *= 0.985;

        if (spinRef.current.speed < 0.002) {
          spinRef.current.isSpinning = false;
          setIsSpinning(false);

          // Calculate result
          const actualRotation = spinRef.current.rotation % (2 * Math.PI);
          const angleStep = (2 * Math.PI) / items.length;
          // Result is at 1.5 * PI (top of the wheel)
          const adjustedRotation =
            (1.5 * Math.PI - actualRotation + 4 * Math.PI) % (2 * Math.PI);
          const index = Math.floor(adjustedRotation / angleStep);
          onResult(items[index]);
        }
      }
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [items, onResult, setIsSpinning]);

  // Handle spin trigger
  useEffect(() => {
    if (isSpinning && !spinRef.current.isSpinning) {
      spinRef.current.isSpinning = true;
      spinRef.current.speed = 0.4 + Math.random() * 0.4;
    }
  }, [isSpinning]);

  return (
    <div className="relative flex flex-col items-center">
      {/* Pointer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 -mt-2">
        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[30px] border-t-white drop-shadow-lg" />
      </div>

      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="max-w-full aspect-square drop-shadow-2xl"
      />
    </div>
  );
}
