import { Calendar } from "@/components/ui/calendar";
import Technologies from "@/components/technologies";
import Hero from "@/components/hero";
import Globe from "@/components/magicui/globe";
import Orbit from "@/components/orbit";
import ThemeToggle from "@/components/theme-toggle";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { AnimatedBeamMultipleOutputs } from "@/components/animated-beam-multiple-outputs";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Marquee from "@/components/magicui/marquee";
import {
  CalendarIcon,
  FileTextIcon,
  GridIcon,
  InputIcon,
  CodeIcon,
} from "@radix-ui/react-icons";
import { Share2Icon } from "lucide-react";
import { formatTagString } from "@/lib/utils";

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

let notifications = [
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
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
        <div className="absolute right-0 top-0 h-full w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_50%)]">
          <Hero />
        </div>

        <div className="absolute right-0 top-0">
          <ThemeToggle />
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
    cta: "Visit Portfolio",
    background: (
      <div className="absolute right-0 top-0 h-3/4 w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
        <img
          className="object-cover object-center h-full w-full"
          src="https://github.com/engageintellect.png"
          alt="avatar image"
        />
      </div>

      // <Globe className="absolute right-0 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105" />
      // <Calendar
      // mode="single"
      // selected={new Date(2022, 4, 11, 0, 0, 0)}
      // className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      // />
    ),
  },

  {
    Icon: GridIcon,
    name: "Any type of Project",
    description: "AI, Web, Commerce, Finance.",
    href: "https://bento.engage-dev.com/projects",
    cta: "View Projects",
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
    Icon: InputIcon,
    name: "Technologies",
    description: "Using the latest technologies to power your projects.",
    href: "/technologies",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute right-0 top-0 w-[70%] origin-top translate-x-0 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-y-12 group-hover:scale-110">
        <Technologies />
      </div>

      // <Command className="absolute right-10 top-10 w-[70%] origin-top translate-x-0 border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10">
      //   <CommandInput placeholder="Type a command or search..." />
      //   <CommandList>
      //     <CommandEmpty>No results found.</CommandEmpty>
      //     <CommandGroup heading="Suggestions">
      //       <CommandItem>screenshot.png</CommandItem>
      //       <CommandItem>bitcoin.pdf</CommandItem>
      //       <CommandItem>finances.xlsx</CommandItem>
      //       <CommandItem>logo.svg</CommandItem>
      //       <CommandItem>keys.gpg</CommandItem>
      //       <CommandItem>seed.txt</CommandItem>
      //     </CommandGroup>
      //   </CommandList>
      // </Command>
    ),
  },
  {
    Icon: Share2Icon,
    name: "AI Integrations",
    description: "Generative UIs, LLMs, Transformers, and more.",
    href: "https://bento.engage-dev.com/tags/ai",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputs className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Seamless Deployments",
    description: "push, build, deploy.",
    className: "col-span-3 lg:col-span-1",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute w-full h-full right-0 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105">
        <Orbit />
      </div>
      // <Calendar
      // mode="single"
      // selected={new Date(2022, 4, 11, 0, 0, 0)}
      // className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      // />
    ),
  },

  {
    Icon: CalendarIcon,
    name: "Worldwide Reach",
    description:
      "Deploy your projects to any region in the world. on-prem, or in the cloud.",
    className: "col-span-3 lg:col-span-3",
    href: "/",
    cta: "Learn more",
    background: (
      <Globe className="absolute right-0 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-110 group-hover:-translate-y-4" />
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
