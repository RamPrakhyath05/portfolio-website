'use client';

import LogoLoop from "./LogoLoop";

const logos = [
  { src: "/databases/mysql.svg", alt: "MySQL" },
  { src: "/databases/neo4j.svg", alt: "Neo4j" },
  { src: "/databases/redis.svg", alt: "Redis" }, 
];

export default function DBLogos() {
  return (
    <section className="mx-auto px-6 py-16">
      <h2 className="mb-8 text-l font-extrabold tracking-tight">
        Databases
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
