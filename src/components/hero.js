import React from "react";

const Hero = () => {
  return (
    <section className="py-24 select-none">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="justify-self-start">
            <p className="text-2xl tracking-widest text-gray-300 uppercase">
              Hi, I&apos;m
            </p>
            <h1 className="mt-6 text-4xl text-white sm:text-5xl lg:text-6xl xl:text-8xl">
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient"
              >
                Ram Prakhyath Annamareddy
              </span>
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-400">
              3rd Year Computer Science Student at {" "}
              <a
                href="https://pes.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F15A22] hover:opacity-90 transition"
              >
                PES University {" "} 
              </a>|{" "} Aspiring Backend Systems Engineer
            </p>
          </div>
          <div className="justify-self-end">
            <img
              className="w-full max-w-md lg:max-w-xl xl:max-w-2xl"
              src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
