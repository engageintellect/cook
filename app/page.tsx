import WordPullUp from "@/components/magicui/word-pull-up";
import Technologies from "@/components/technologies";
import BentoDemo from "@/components/bento";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { Button } from "@/components/ui/button";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function Home() {
  return (
    <>
      <div className="w-full flex items-center justify-center max-w-3xl mx-auto">
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <WordPullUp words="Let's Cook" />
          <p className="w-full max-w-lg py-5 px-6">
            Ipsum exercitation mollit veniam ipsum laboris cupidatat irure quis
            enim mollit esse fugiat incididunt pariatur.
          </p>

          <div className="flex items-center gap-2 w-full max-w-md mx-auto">
            <a href="https://bento.engage-dev.com/projects" className="w-full">
              <ShimmerButton className="shadow-xl w-full" borderRadius="10px">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Browse Projects
                </span>
              </ShimmerButton>
            </a>

            <a href="mailto:engage_intellect@protonmail.com" className="w-full">
              <ShimmerButton className="shadow-xl w-full" borderRadius="10px">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Contact
                </span>
              </ShimmerButton>
            </a>
          </div>
          <Technologies />

          {/* <div className="my-20 max-w-3xl w-full mx-auto">
            <VelocityScroll
              text="Developer, Crypto, Stocks"
              default_velocity={5}
              className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
            />
          </div> */}
          <div className="w-full max-w-3xl mx-auto my-10">
            <BentoDemo />
          </div>
        </div>
      </div>
    </>
  );
}
