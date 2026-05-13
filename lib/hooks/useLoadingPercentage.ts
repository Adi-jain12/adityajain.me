"use client";

import { useEffect, useState } from "react";

export function useLoadingPercentage(durationMs = 3000, startDelayMs = 400) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const intervalMs = 50;
    const totalSteps = durationMs / intervalMs;
    const increment = 100 / totalSteps;

    let intervalId: ReturnType<typeof setInterval> | null = null;
    const startId = setTimeout(() => {
      intervalId = setInterval(() => {
        setPercent((prev) => {
          const next = prev + increment;
          return next >= 100 ? 100 : next;
        });
      }, intervalMs);
    }, startDelayMs);

    return () => {
      clearTimeout(startId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [durationMs, startDelayMs]);

  return Math.round(percent);
}
