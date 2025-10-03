"use client";

import { cn } from "@/lib/utils";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
}: {
  value: any;
  direction?: "up" | "down";
  className?: string;
  delay?: number; // delay in s
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    isInView &&
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          const num = Number(latest.toFixed(0));
          // Format large numbers (1000+ becomes 1k, 1000000+ becomes 1m)
          if (num >= 1_000_000) {
            ref.current.textContent = (num / 1_000_000).toFixed(2).replace(/\.?0+$/, '') + 'm';
          } else if (num >= 1_000) {
            ref.current.textContent = (num / 1_000).toFixed(2).replace(/\.?0+$/, '') + 'k';
          } else {
            ref.current.textContent = Intl.NumberFormat("en-US").format(num);
          }
        }
      }),
    [springValue]
  );

  return (
    <span className={cn("tabular-nums text-justify", className)} ref={ref} />
  );
}
