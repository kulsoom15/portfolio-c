"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-12 px-6 xl:px-16">
        <div className="col-span-7 text-center sm:text-left">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm
            </span>
            <br />
            <TypeAnimation
              sequence={["Kulsoom Shahid", 1000, "Web Developer", 1000, "UI/UX Designer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="px-6 py-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white rounded-full">
              Hire Me
            </button>
            <button className="px-6 py-4 bg-[#121212] text-white rounded-full hover:bg-gray-800">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 flex justify-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
            <Image src="/images/hero-image.png" alt="Hero image" width={300} height={300} className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


