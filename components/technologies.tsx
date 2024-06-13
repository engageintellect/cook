import React from "react";
import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "svelte",
  "react",
  "nextdotjs",
  "nodedotjs",
  "prisma",
  "pocketbase",
  "amazonaws",
  "tailwindcss",
  "graphql",
  "mongodb",
  "postgresql",
  "mysql",
  "redis",
  "firebase",
  "vercel",
  "python",
  "typescript",
  "javascript",
  "html5",
  "css3",
  "astro",
  "linux",
  "nginx",
  "git",
  "jira",
  "github",
  "gitlab",
  "stripe",
  "ethereum",
  "solana",
  "bitcoin",
  "docker",
  "ubuntu",
  "openai",
  "archlinux",
  "pytorch",
  "tensorflow",
  "linode",
  "kalilinux",
  "pandas",
  "numpy",
  "freebsd",
  "django",
  "drizzle",
  "digitalocean",
  "zod",
  "apple",
];

interface TechnologiesProps {
  liveLinks?: boolean;
}

export default function Technologies({ liveLinks = false }: TechnologiesProps) {
  return (
    <div className="">
      <IconCloud iconSlugs={slugs} liveLinks={liveLinks} />
    </div>
  );
}
