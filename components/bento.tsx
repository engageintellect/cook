"use client";

import Image from "next/image";

import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import RetroGrid from "@/components/magicui/retro-grid";
import BlurIn from "@/components/magicui/blur-in";
import { FadeIn } from "@/components/magicui/fade-in";
import Technologies from "@/components/technologies";
import Hero from "@/components/hero";
import Globe from "@/components/magicui/globe";
import NumberTicker from "@/components/magicui/number-ticker";
import Orbit from "@/components/orbit";
import ThemeToggle from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { AnimatedBeamMultipleOutputs } from "@/components/animated-beam-multiple-outputs";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Marquee from "@/components/magicui/marquee";
import { formatTagString } from "@/lib/utils";
import { useState, useEffect } from "react";
import { InputWithButton } from "@/components/ui/input-with-button";
import { EmailForm } from "@/components/email-form";

const fetchStars = async (): Promise<number> => {
  const baseUrl =
    typeof window !== "undefined" ? "" : process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/fetch-github-stars`);
  const data = await res.json();
  return Number(data?.totalStars);
};

const files = [
  {
    name: "Crypto",
    body: "Interface with blockchains, create smart contracts, track market data, manage digital assets.",
  },
  {
    name: "Commerce",
    body: "Sell your product or service online.",
  },
  {
    name: "Web",
    body: "Create beautiful, responsive, and performant websites.",
  },
  {
    name: "IOT",
    body: "Interface with things around you.",
  },
  {
    name: "AI",
    body: "Create intelligent, context-aware applications that understand your unique data.",
  },
];

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

const GitHubStars = () => {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const getStars = async () => {
      const totalStars = await fetchStars();
      setStars(totalStars);
    };

    getStars();
  }, []);

  if (stars === null) {
    return <div>0</div>;
  }

  return <NumberTicker value={stars} />;
};

const features = [
  {
    Icon: "",
    name: "",
    description: "",
    href: "",
    cta: "",
    className: "col-span-3 lg:col-span-2",
    background: (
      <>
        <div className="absolute right-0 top-0 h-full w-full border-none transition-all duration-300 ease-out">
          <Hero />
        </div>

        <div className="absolute right-0 top-0 z-50">
          <FadeIn direction="down">
            <ThemeToggle />
          </FadeIn>
        </div>
      </>
    ),
  },
  {
    Icon: "",
    name: "I'm Josh",
    description: "Fullstack Developer, AI, Penetration Testing, and more. ",
    className: "col-span-3 lg:col-span-1",
    href: "https://bento.engage-dev.com",
    cta: "Visit portfolio",
    background: (
      <div className="absolute right-0 top-0 h-3/4 w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
        <BlurIn duration={0.5} className="h-full">
          <Image
            className="object-cover object-center h-full w-full"
            src={
              process.env.AVATAR_URL || "https://github.com/engageintellect.png"
            }
            alt="avatar image"
            width={200}
            height={200}
            priority
          />
        </BlurIn>
      </div>
    ),
  },

  {
    Icon: "",
    name: "Project Domain",
    description: "AI, Web, Commerce, Finance.",
    href: "https://bento.engage-dev.com/projects",
    cta: "View projects",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <a
            href={`https://bento.engage-dev.com/tags/${formatTagString(
              f.name
            )}`}
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </a>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: "",
    name: "Technologies",
    description: "Using the latest technologies to power your projects.",
    href: "/technologies",
    cta: "View all technologies",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute right-0 top-0 w-[70%] origin-top translate-x-0 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-y-12 group-hover:scale-110">
        <FadeIn direction="up">
          <Technologies />
        </FadeIn>
      </div>
    ),
  },
  {
    Icon: "",
    name: "AI Integrations",
    description: "Generative UIs, LLMs, Transformers, and more.",
    href: "https://bento.engage-dev.com/tags/ai",
    cta: "Visit AI projects",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputs className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: "",
    name: "Seamless Deployments",
    description: "push, build, deploy.",
    className: "col-span-3 lg:col-span-1",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute w-full h-full right-0 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105">
        <Orbit />
      </div>
    ),
  },

  {
    Icon: "",
    name: "Worldwide Reach",
    description:
      "Deploy your projects to any region in the world. on-prem, or in the cloud.",
    className: "col-span-3 lg:col-span-3",
    href: "/",
    cta: "Learn more",
    background: (
      <Globe className="absolute right-0 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-110 group-hover:-translate-y-4" />
    ),
  },

  {
    Icon: "",
    name: "GitHub Stars",
    description: "Star this repository to show your support.",
    className: "col-span-3 lg:col-span-1",
    href: `${process.env.GITHUB_URL}/${process.env.REPO_NAME}`,
    cta: "Star repository",
    background: (
      // <Globe className="absolute right-0 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-110 group-hover:-translate-y-4" />

      <div className="absolute h-full w-full left-0 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_70%)] group-hover:scale-110 group-hover:-translate-y-4">
        <div className="text-7xl font-semibold  w-full flex justify-center items-center h-2/3  group-hover:-translate-y-2 transition-all duration-300">
          <div className="flex items-center gap-2">
            <GitHubStars />
            <Image
              src="/images/githubstar.webp"
              alt="GitHub logo"
              className="h-14 w-14"
              width={640}
              height={640}
              priority
            />
          </div>
        </div>
      </div>
    ),
  },

  {
    Icon: "",
    name: "",
    description: "",
    className: "col-span-3 lg:col-span-2",
    href: "",
    cta: "",
    background: (
      // <Globe className="absolute right-0 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-110 group-hover:-translate-y-4" />

      <div className="absolute h-full w-full left-0 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_0%)]">
        <div className="absolute inset-0 z-50 flex justify-center items-center gap-5 p-5">
          <div className="max-w-sm w-full flex flex-col gap-2">
            <div className="text-5xl lg:text-6xl font-semibold text-neutral-700 dark:text-neutral-300 w-full flex justify-start">
              <BlurIn duration={0.5} className="h-full">
                Get in touch.
              </BlurIn>
            </div>
            <div className="w-full flex justify-center text-neutral-500 dark:text-neutral-400">
              Leave your email to get the conversation started. We&apos;ll be in
              touch soon. Your email will never be shared with anyone.
            </div>
            <div className="mt-3">
              <EmailForm />
            </div>
          </div>
        </div>

        <RetroGrid />

        {/* <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "absolute inset-0",
            "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        /> */}
      </div>

      // <Calendar
      // mode="single"
      // selected={new Date(2022, 4, 11, 0, 0, 0)}
      // className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      // />
    ),
  },
];

export function Bento() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
