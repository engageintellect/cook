import React from "react"

import { cn } from "@/lib/utils"

export interface OrbitingCirclesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
  reverse?: boolean
  duration?: number
  delay?: number
  radius?: number
  path?: boolean
  iconSize?: number
  speed?: number
  startAngle?: number
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 0,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  startAngle = 0,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      <div
        style={
          {
            "--duration": calculatedDuration,
            "--radius": radius,
            "--angle": startAngle,
            "--icon-size": `${iconSize}px`,
            width: `${iconSize}px`,
            height: `${iconSize}px`,
            animation: `orbit ${calculatedDuration}s linear infinite`,
            animationDelay: `${delay}s`,
            animationDirection: reverse ? "reverse" : "normal",
            transform: `rotate(${startAngle}deg) translateY(${radius}px) rotate(-${startAngle}deg)`,
          } as React.CSSProperties
        }
        className={cn(
          `absolute flex transform-gpu items-center justify-center rounded-full`,
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  )
}
