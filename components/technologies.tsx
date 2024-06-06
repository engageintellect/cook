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
  "apollo",
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
];

export default function Technologies() {
  return (
    <div className="max-w-1/2 w-full">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}