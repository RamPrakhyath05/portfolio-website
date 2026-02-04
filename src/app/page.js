'use client';

import Hero from "../components/hero.js";
import Image from "next/image";
import SkillsLogos from "../components/skills";
import TechLogos from "../components/technologies.js";
import DBLogos from "../components/databases.js";
import AboutAndExperience from "../components/about_experience";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutAndExperience isCompact={true} />
    </>
  );
}
