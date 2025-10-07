"use client";

import React from "react";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const images = slugs.map(slug => `https://cdn.simpleicons.org/${slug}`);
  
  const handleIconClick = (index: number) => {
    if (!liveLinks) return;
    
    const slug = slugs[index];
    if (slug) {
      router.push(`${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/tags/${slug}`);
    }
  };
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <IconCloud 
        images={images} 
        onIconClick={liveLinks ? handleIconClick : undefined}
      />
    </div>
  );
}
