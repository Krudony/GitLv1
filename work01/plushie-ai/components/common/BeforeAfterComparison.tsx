'use client';

import React, { useState } from 'react';

interface BeforeAfterComparisonProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  height?: number;
}

const BeforeAfterComparison: React.FC<BeforeAfterComparisonProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  height = 400,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, newPosition)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const touch = e.touches[0];
    const newPosition = ((touch.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, newPosition)));
  };

  return (
    <div
      className="relative overflow-hidden rounded-lg border-2 border-gray-200"
      style={{ height }}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (background) */}
      <img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Before Image (overlay) */}
      <div
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="h-full w-full object-cover"
          style={{ width: `${100 / (sliderPosition || 1) * 100}%` }}
        />
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 h-full w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg">
            <div className="text-gray-400">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg">
            <div className="text-gray-400">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute left-4 top-4 rounded-lg bg-black/40 px-3 py-1 text-white backdrop-blur-sm">
        <span className="text-sm font-semibold">{beforeLabel}</span>
      </div>
      <div className="absolute right-4 top-4 rounded-lg bg-black/40 px-3 py-1 text-white backdrop-blur-sm">
        <span className="text-sm font-semibold">{afterLabel}</span>
      </div>
    </div>
  );
};

export default BeforeAfterComparison;
