"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center justify-between w-[90vw] max-w-5xl px-10 py-3 rounded-full bg-black/70 backdrop-blur-md border border-white/10 shadow-xl transition-shadow duration-500 hover:shadow-black/40">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-lg text-gray-300 hover:text-white transition"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-lg text-gray-300 hover:text-white transition"
          >
            Projects
          </Link>
          <a
            href="/RamPrakhyathA_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-300 hover:text-white transition"
          >
            Resume
          </a>
        </div>
        <div className="flex items-center gap-8">
          <a
            href="https://github.com/RamPrakhyath05"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-300 hover:text-[#8250DF] transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://in.linkedin.com/in/ram-prakhyath-annamreddy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-300 hover:text-[#0A66C2] transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/ramprakhyath"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-300 hover:text-[#C13584] transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
}
