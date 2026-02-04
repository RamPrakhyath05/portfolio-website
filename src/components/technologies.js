'use client';

import LogoLoop from "./LogoLoop";

const logos = [
  { src: "/tech/git.svg", alt: "Git" },
  { src: "/tech/github.svg", alt: "GitHub" },
  { src: "/tech/archlinux.svg", alt: "Arch Linux" },
  { src: "/tech/docker.svg", alt: "Docker" },
  { src: "/tech/vim.svg", alt: "Vim" },
  { src: "/tech/postman-icon.svg", alt: "Postman" },
  { src: "/tech/jira.svg", alt: "Jira" },
  { src: "/tech/aws.svg", alt: "AWS" },
];

export default function TechLogos() {
  return (
    <section className="mx-auto px-6 py-16">
      <h2 className="mb-8 text-l font-extrabold tracking-tight">
        Tools & Technologies
      </h2>
      <div className="rounded-2xl border border-gray-800 bg-black/40 p-6 backdrop-blur-sm">
        <LogoLoop
          logos={logos}        
          speed={80}
          direction="left"
          logoHeight={36}
          gap={48}
          pauseOnHover
          scaleOnHover
          fadeOut
          ariaLabel="Programming languages and tools"
        />
      </div>
    </section>
  );
}
