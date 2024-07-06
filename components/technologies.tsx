import React from "react";
import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "amazonaws",
  "apache",
  "apple",
  "archlinux",
  "astro",
  "azuredevops",
  "bitcoin",
  "digitalocean",
  "django",
  "docker",
  "drizzle",
  "ethereum",
  "firebase",
  "freebsd",
  "git",
  "github",
  "gitlab",
  "graphql",
  "huggingface",
  "jira",
  "javascript",
  "kalilinux",
  "linux",
  "linode",
  "mongodb",
  "mysql",
  "nextdotjs",
  "nginx",
  "nodedotjs",
  "numpy",
  "openai",
  "pandas",
  "pocketbase",
  "postgresql",
  "prisma",
  "python",
  "pytorch",
  "react",
  "redis",
  "solana",
  "square",
  "stripe",
  "svelte",
  "sveltekit",
  "tailwindcss",
  "tensorflow",
  "typescript",
  "ubuntu",
  "vercel",
  "zod",
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
