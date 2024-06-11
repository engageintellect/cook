"use client";

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import MeteorShower from "@/components/magicui/meteors";
import WordPullUp from "@/components/magicui/word-pull-up";
import ShimmerButton from "./magicui/shimmer-button";
import { Button } from "@/components/ui/button";
import { Mail, Github } from "lucide-react";
import BlurIn from "@/components/magicui/blur-in";

export default function Hero() {
  return (
    <div className="relative flex h-full w-full mx-auto items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div className="flex flex-col items-start justify-center h-full overflow-hidden p-6 z-50">
        <WordPullUp words="Let's Cook" />

        <div className="text-lg text-neutral-500 lg:px-1 w-full ">
            <BlurIn
              className="w-2/3"
              word="building full-stack applications with focuses in generative AI,
            automation, and user experience and performance"
            />

          <div className="flex items-center gap-2 w-full lg:w-2/3 mt-6">
            <a
              href="https://github.com/engageintellect"
              target="_blank"
              className="flex-1"
            >
              <Button
                variant="default"
                size="lg"
                className="flex items-center gap-2 w-full "
              >
                <div>GitHub</div>
                <Github className="mr-2 h-5 w-5" />
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
                className="flex items-center gap-2 w-full"
              >
                <div>Contact</div>
                <Mail className="mr-2 h-5 w-5" />
              </Button>
            </a>
          </div>
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
