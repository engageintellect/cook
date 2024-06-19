import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

interface Project {
  name: string;
  body: string;
  slug: string;
  image: string;
}

interface ProjectShowcaseVerticalProps {
  projects: Project[];
}

const ReviewCard = ({
  name,
  body,
  slug,
  image,
}: {
  name: string;
  body: string;
  slug: string;
  image: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-40 w-full cursor-pointer overflow-hidden rounded-xl border p-4 shadow",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <a href={`https://bento.engage-dev.com/projects/${slug}`}>
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-col">
            <div className="flex items-start gap-2">
              <img
                src={`https://bento.engage-dev.com${image}`}
                alt={name}
                className="w-8 h-8 rounded-lg object-cover shadow"
              />
              <figcaption className="text-lg font-medium dark:text-white">
                {name}
              </figcaption>
            </div>
          </div>
        </div>
        <blockquote className="mt-2 text-sm line-clamp-4 dark:text-white font-thin">
          {body}
        </blockquote>
      </a>
    </figure>
  );
};

const ProjectShowcaseVertical = ({
  projects,
}: ProjectShowcaseVerticalProps) => {
  const firstRow = projects.slice(0, 5); // Get first 5 projects
  const secondRow = projects.slice(5, 10); // Get next 5 projects

  return (
    <div className="relative flex h-full w-full flex-row items-center justify-center overflow-hidden rounded-lg border bg-background sm:px-2 md:shadow-xl">
      <Marquee pauseOnHover vertical className="[--duration:60s] w-full">
        {firstRow.map((project) => (
          <ReviewCard key={project.slug} {...project} />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        vertical
        className="[--duration:60s] w-full"
      >
        {secondRow.map((project) => (
          <ReviewCard key={project.slug} {...project} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
};

export default ProjectShowcaseVertical;
