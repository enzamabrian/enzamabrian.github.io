import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight } from 'lucide-react';

import myImage from '../../assets/hero-image.png'; 

const Hero = ({ darkMode }) => {
  return (
    <section
      id="hero"
      className={`relative w-full min-h-screen flex items-center overflow-hidden transition-colors duration-500 ${
        darkMode ? 'bg-dark-bg text-dark-heading' : 'bg-light-bg text-light-heading'
      }`}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] pointer-events-none bg-[radial-gradient(#8e918f_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Main Content Container */}
      <div className="relative max-w-7xl w-full mx-auto px-6 py-20 min-h-screen flex flex-col md:flex-row items-center justify-between z-10">
        
        {/* Left Side: Header Card */}
        <div
          className={`w-full md:max-w-xl text-center md:text-left p-8 md:p-10 transition-all duration-500 rounded-2xl`}
        >
          {/* Subtitle Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide border rounded-full transition-transform hover:scale-105 ${
              darkMode
                ? 'bg-dark-bg text-primary border-dark-border'
                : 'bg-primary/10 border-primary/20 text-primary shadow-xs'
            }`}
          >
            <span className="uppercase tracking-widest text-xs">
              For all your software needs
            </span>
          </div>

          {/* Animated Heading */}
          <h1
            className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6 block ${
              darkMode
                ? 'text-gray-200'
                : 'bg-gradient-to-r from-primary via-red-500 to-rose-400 text-transparent bg-clip-text'
            }`}
            style={{ minHeight: '110px' }}
          >
            <TypeAnimation
              sequence={[
                "Let's build software that runs your business.",
                2000,
                "Custom web apps designed to scale with you.",
                2000,
                "Automate workflows and elevate your brand.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          {/* Body Paragraph */}
          <p
            className={`text-sm md:text-base mb-8 max-w-lg mx-auto md:mx-0 font-normal leading-relaxed ${
              darkMode ? 'text-dark-paragraph' : 'text-light-paragraph'
            }`}
          >
            Architecting scalable web applications with clean code, modern user interface designs, and robust backend systems.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3.5 justify-center md:justify-start">
            <a
              href="#contact"
              className="flex items-center gap-2 text-xs md:text-sm font-semibold px-6 py-3 rounded-full text-white bg-primary hover:bg-primary-hover active:scale-95 transition-all duration-300 shadow-md shadow-primary/20"
            >
              Contact Me <ArrowRight size={14} />
            </a>

            <a
              href="#projects"
              className={`text-xs md:text-sm font-semibold px-6 py-3 rounded-full border active:scale-95 transition-all duration-300 ${
                darkMode
                  ? 'border-dark-border bg-dark-bg text-dark-heading hover:bg-dark-border'
                  : 'border-light-border bg-light-bg text-light-heading hover:bg-light-card'
              }`}
            >
              See My Work
            </a>
          </div>
        </div>
      </div>

      {/* Right Side: Image Container & Overlay Gradients */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-screen z-0 pointer-events-none overflow-hidden">
        <img
          src={myImage}
          alt="Developer Portrait"
          className="w-full h-full object-cover object-center"
        />

        {/* Horizontal Gradient Overlay */}
        <div
          className={`absolute inset-0 transition-colors duration-500 ${
            darkMode
              ? 'bg-gradient-to-r from-dark-bg via-dark-bg/80 to-transparent'
              : 'bg-gradient-to-r from-light-bg via-light-bg/80 to-transparent'
          }`}
        />
        
        {/* Vertical Fade Overlay */}
        <div
          className={`absolute inset-0 transition-colors duration-500 ${
            darkMode
              ? 'bg-gradient-to-b from-dark-bg/40 via-transparent to-dark-bg/90'
              : 'bg-gradient-to-b from-light-bg/30 via-transparent to-light-bg/90'
          }`}
        />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 w-full flex justify-center pointer-events-none z-10">
        <div
          className={`w-5 h-9 border-2 rounded-full flex items-start justify-center p-1 ${
            darkMode ? 'border-dark-border' : 'border-light-border'
          }`}
        >
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;