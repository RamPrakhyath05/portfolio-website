'use client';

import LogoLoop from "./LogoLoop";

const logos = [
  { src: "/langs/c.svg", alt: "C" },
  { src: "/langs/python.svg", alt: "Python" },
  { src: "/langs/javascript.svg", alt: "JavaScript" },
  { src: "/langs/html.svg", alt: "HTML5" },
  { src: "/langs/css.svg", alt: "CSS" },
  { src: "/langs/java.svg", alt: "Java" },
];

export default function SkillsLogos() {
  return (
    <section className="mx-auto px-6 py-16">
      <h2 className="mb-8 text-l font-extrabold tracking-tight">
        Skills
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
