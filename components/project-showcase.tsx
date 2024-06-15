import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

interface Project {
  name: string;
  body: string;
  slug: string;
}

interface ProjectShowcaseProps {
  projects: Project[];
}

const ReviewCard = ({
  name,
  body,
  slug,
}: {
  name: string;
  body: string;
  slug: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <a href={`${process.env.NEXT_LOCAL_PORTFOLIO_URL}/projects/${slug}`}>
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
          </div>
        </div>
        <blockquote className="mt-2 text-sm line-clamp-2 dark:text-white font-thin">
          {body}
        </blockquote>
      </a>
    </figure>
  );
};

const ProjectShowcase = ({ projects }: ProjectShowcaseProps) => {
  const firstRow = projects.slice(0, projects.length / 2);
  const secondRow = projects.slice(projects.length / 2);

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((project) => (
          <ReviewCard key={project.slug} {...project} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((project) => (
          <ReviewCard key={project.slug} {...project} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default ProjectShowcase;
