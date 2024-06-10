"use client";

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import MeteorShower from "@/components/magicui/meteors";
import WordPullUp from "@/components/magicui/word-pull-up";

export default function Hero() {
  return (
    <div className="relative flex h-full w-full mx-auto items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <div className="flex flex-col items-center justify-center h-full overflow-hidden z-50">
        <WordPullUp words="Let's Cook" />
        <div>
          <p className="w-full max-w-lg py-5 px-6">
            building full-stack applications with a focus on user experience and
            performance
          </p>
        </div>
      </div>
      <MeteorShower />
      {/* <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.5}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      /> */}
    </div>
  );
}
