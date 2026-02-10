"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Smooth scroll function for the "View My Work" button
  const scrollToProjects = () => {
    const section = document.getElementById("projects-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback if the section isn't on the same page (e.g., if you use routing)
      window.location.href = "/projects";
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-20 overflow-hidden select-none">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-12 w-full">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="justify-self-start"
          >
            <p className="text-xl md:text-2xl font-mono tracking-tight text-neutral-400">
              Hi, I&apos;m
            </p>
            
            <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9]">
              <span className="mt-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient">
                Ram Prakhyath
                <br />
                Annamareddy
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl text-neutral-400 leading-relaxed">
              3rd Year Computer Science Student at{" "}
              <a
                href="https://pes.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F15A22] hover:text-[#FFFFFF] hover:decoration-[#F15A22] transition-all duration-300"
              >
                PES University
              </a>
              <br/>
              <span className="text-neutral-200 font-medium">Aspiring Backend Systems Engineer</span>
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {/* Download CV Button */}
              <a 
                href="/RamPrakhyathA_Resume.pdf" 
                download="RamPrakhyath_Resume.pdf"
                className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-colors duration-300 text-center"
              >
                Download CV
              </a>

              {/* View My Work Button */}
              <button 
                onClick={scrollToProjects}
                className="px-8 py-3 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-colors duration-300"
              >
                View My Work
              </button>
            </div>
          </motion.div>

          {/* 3D Illustration / Visual Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="justify-self-end relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <img
              className="relative w-full max-w-md lg:max-w-xl xl:max-w-2xl drop-shadow-[0_0_50px_rgba(34,211,238,0.1)] transition-transform duration-500 group-hover:scale-105"
              src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png"
              alt="System Illustration"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
