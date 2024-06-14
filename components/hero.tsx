"use client";

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import MeteorShower from "@/components/magicui/meteors";
import WordPullUp from "@/components/magicui/word-pull-up";
import ShimmerButton from "./magicui/shimmer-button";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/magicui/fade-in";
import { Mail, Github } from "lucide-react";
import BlurIn from "@/components/magicui/blur-in";

export default function Hero() {
  return (
    <div className="relative flex h-full w-full mx-auto items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div className="flex flex-col items-start justify-center h-full overflow-hidden p-6 z-50">
        <WordPullUp words="Let's Cook" />

        <div className="text-lg text-neutral-500 dark:text-neutral-400 lg:px-1 w-full ">
          <BlurIn className="w-3/4 sm:w-2/3">
            I build fullstack web applications with focuses in Generative AI,
            Data Visualization, Crypto/Finance, and User Experience.
          </BlurIn>

          <FadeIn direction="down" className="my-class">
            <div className="flex items-center gap-2 w-full lg:w-2/3 mt-6">
              <a
                href={process.env.GITHUB_URL}
                target="_blank"
                className="flex-1"
              >
                <Button
                  variant="default"
                  size="lg"
                  className="flex items-center gap-2 w-full group/Github"
                >
                  <div>GitHub</div>
                  <Github className="h-5 w-5 lg:group-hover/Github:translate-x-1 transition-all duration-300" />
                </Button>
              </a>

              <a
                href="mailto:engage_intellect@protonmail.com"
                target="_blank"
                className="flex-1"
              >
                <Button
                  variant="default"
                  size="lg"
                  className="flex items-center gap-2 w-full group/Mail"
                >
                  <div>Contact</div>
                  <Mail className="h-5 w-5 lg:group-hover/Mail:translate-x-1 transition-all duration-300" />
                </Button>
              </a>
            </div>
          </FadeIn>
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
