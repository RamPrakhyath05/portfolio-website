"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/RamPrakhyathA_Resume.pdf", isExternal: true },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-6 left-1/2 z-50"
    >
      <div className="relative flex items-center justify-between w-[95vw] max-w-4xl px-8 py-3 rounded-full bg-neutral-900/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-transparent to-white/[0.02] pointer-events-none" />

        <div className="flex items-center gap-6 md:gap-8 z-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className={`relative text-sm md:text-base font-medium transition-colors duration-300 ${
                pathname === link.href ? "text-white" : "text-neutral-400 hover:text-white"
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5 md:gap-7 z-10">
          {/* Interests Icon */}
          <NavIcon href="/interests" label="Interests">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21s-6.7-4.35-9.33-7.97C.92 10.7 2.2 6.5 6.02 6.02 8.1 5.76 10 6.88 12 8.9c2-2.02 3.9-3.14 5.98-2.88 3.82.48 5.1 4.68 3.35 7.01-2.63 3.62-9.33 7.97-9.33 7.97z" />
            </svg>
          </NavIcon> {/* Fixed: Added the closing tag here */}

          {/* Socials */}
          <NavIcon href="https://github.com/RamPrakhyath05" label="GitHub" color="hover:text-[#8250DF]">
            <FaGithub size={20} />
          </NavIcon>

          <NavIcon href="https://in.linkedin.com/in/ram-prakhyath-annamreddy" label="LinkedIn" color="hover:text-[#0A66C2]">
            <FaLinkedin size={20} />
          </NavIcon>

          <NavIcon href="https://instagram.com/ramprakhyath" label="Instagram" color="hover:text-[#C13584]">
            <FaInstagram size={20} />
          </NavIcon>
        </div>
      </div>
    </motion.nav>
  );
}

function NavIcon({ href, children, label, color = "hover:text-white" }) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`relative group flex items-center text-neutral-400 transition-all duration-300 ${color} hover:scale-110`}
      aria-label={label}
    >
      {children}
      <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-neutral-800 text-[10px] text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 border border-white/5 pointer-events-none whitespace-nowrap z-50 shadow-xl">
        {label}
      </span>
    </a>
  );
}
