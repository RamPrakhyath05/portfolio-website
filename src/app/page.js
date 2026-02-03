'use client';

import Hero from "../components/hero.js";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto w-[75%] px-6 py-16">
        <div className="rounded-3xl border border-gray-800 bg-black/40 p-10 backdrop-blur-sm">
          
          {/* ABOUT */}
          <h1 className="text-4xl font-extrabold tracking-tight">
            About Me
          </h1>

          <div className="mt-10 flex flex-col items-center gap-12 md:flex-row md:items-center md:justify-between">
            
            <div className="flex-1 space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                I’m currently a third-year Computer Science Engineering student at PES University,
                with a strong interest in computer systems and core technologies.
              </p>

              <p>
                I’m most interested in working on projects where performance, structure,
                scalability, and real-world relevance matter.
              </p>

              <p>
                I enjoy experimenting, breaking things, and then break my head fixing them.
                Right now, I’m focused on deepening my understanding and strengthening my
                fundamentals through hands-on projects and self-driven exploration.
              </p>
            </div>

            {/* PROFILE IMAGE */}
            <div className="flex-shrink-0">
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white">
                <Image
                  src="/profile_pic.jpeg"
                  alt="Profile picture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div className="mt-20 border-t border-gray-800 pt-10">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">
              Contact
            </h2>

            <div className="flex flex-col gap-6 text-lg text-gray-300">
              
              {/* Email */}
              <a
                href="mailto:ram.annamreddy25@gmail.com"
                className="flex items-center gap-4 hover:text-white transition"
              >
                <Mail className="h-5 w-5 text-gray-400" />
                <span>ram.annamreddy25@gmail.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+916364800996"
                className="flex items-center gap-4 hover:text-white transition"
              >
                <Phone className="h-5 w-5 text-gray-400" />
                <span>+91 6364800996</span>
              </a>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
