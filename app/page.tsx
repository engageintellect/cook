import WordPullUp from "@/components/magicui/word-pull-up";
import Technologies from "@/components/technologies";
import Hero from "@/components/hero";
import { Bento } from "@/components/bento";
import { CallToAction } from "@/components/call-to-action";
import ShimmerButton from "@/components/magicui/shimmer-button";
import Comments from "@/components/comments";
import { Button } from "@/components/ui/button";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <div className="w-full flex items-center justify-center max-w-5xl mx-auto">
        <div className="flex flex-col items-center overflow-hidden">
          {/* <Image */}
          {/* src="https://github.com/engageintellect.png" */}
          {/* width={800} */}
          {/* height={800} */}
          {/* alt="Hero" */}
          {/* /> */}

          {/* <WordPullUp words="Let's Cook" /> */}
          {/* <p className="w-full max-w-lg py-5 px-6"> */}
          {/* Ipsum exercitation mollit veniam ipsum laboris cupidatat irure quis */}
          {/* enim mollit esse fugiat incididunt pariatur. */}
          {/* </p> */}

          {/* <div className="flex items-center gap-2 w-full max-w-md mx-auto">
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
          </div> */}

          <div className="w-full py-2  px-2 lg:py-10 lg:px-4">
            <Bento />
          </div>
        </div>
      </div>
    </>
  );
}
