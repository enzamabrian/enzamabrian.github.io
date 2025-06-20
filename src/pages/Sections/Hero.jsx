import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import codingTerminal from '../../assets/hero.png';

const Hero = ({ darkMode }) => {
  return (
    <section
      className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden
        transition-all duration-500 px-6 py-20
        md:mt-0
        ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      {/* Floating Backgrounds */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 opacity-30 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-30 right-0 w-96 h-96 bg-blue-400 opacity-40 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-128 h-128 bg-pink-400 opacity-10 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left px-2 md:px-8 bg-white/10 dark:bg-black/20 backdrop-blur-md p-8 rounded-2xl transition-all duration-500">
          
          {/* Subtitle */}
          <p className="uppercase tracking-widest text-xs md:text-sm text-gray-400 mb-4">
            Full Stack Web Developer
          </p>

          {/* Animated Heading */}
          <h1
            className={`text-4xl md:text-5xl font-extrabold leading-tight mb-6 pb-4
              bg-gradient-to-r
              ${darkMode
                ? 'from-purple-500 via-indigo-500 to-blue-500'
                : 'from-purple-400 via-indigo-400 to-blue-400'
              }
              text-transparent bg-clip-text
            `}
            style={{ minHeight: '120px' }}
          >
            <TypeAnimation
              sequence={[
                "Let's Build Something Amazing Together",
                2000,
                "Let's Design, Code & Innovate.",
                2000,
                "Crafting Modern Web Experiences",
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          {/* Description */}
          <p className={`text-[0.7rem] md:text-sm mb-4 text-center md:text-left px-2 md:px-0 ${darkMode ? 'text-gray-300' : 'text-black'}`}>
            I’m a web developer passionate about creating modern, responsive websites with cutting-edge technologies.
          </p>
          <p className={`text-[0.7rem] md:text-sm mb-4 text-center md:text-left px-2 md:px-0 ${darkMode ? 'text-gray-300' : 'text-black'}`}>
            Here’s what drives me: <span className="font-semibold">Innovation</span>, <span className="font-semibold">Efficiency</span>, and <span className="font-semibold">Simplicity</span>. I aim to deliver top-quality solutions with user-first design.
          </p>

          {/* Tech Stack (optional) */}
          <div className="flex justify-center md:justify-start gap-4 mb-6 flex-wrap">
            <span className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full">React</span>
            <span className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-full">Node.js</span>
            <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full">Tailwind CSS</span>
            <span className="text-xs bg-gray-700 text-white px-3 py-1 rounded-full">MySQL</span>
            <span className="text-xs bg-yellow-500 text-white px-3 py-1 rounded-full">JavaScript</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className={`px-6 py-3 rounded-full text-sm text-center 
                ${darkMode
                  ? 'border border-cyan-200 text-white hover:bg-purple-600 hover:text-white'
                  : 'text-cyan-600 hover:bg-purple-600 hover:text-white'
                } 
                transition duration-300
                ${!darkMode ? 'bg-purple-600 text-white' : ''}`}
            >
              Contact me
            </a>
            <a
              href="#projects"
              className={`px-6 py-3 rounded-full text-sm text-center 
                ${darkMode
                  ? 'text-white hover:bg-purple-600 hover:text-white'
                  : 'border border-cyan-600 text-cyan-600 hover:bg-purple-600 hover:text-white'
                } 
                transition duration-300
                ${darkMode ? 'bg-purple-600 text-white' : ''}`}
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="rounded-2xl overflow-hidden bg-white/10 dark:bg-black/20 backdrop-blur-md p-4 animate__animated animate__fadeIn animate__delay-2s transition-all duration-500">
            <img
              src={codingTerminal}
              alt="Coding Terminal"
              className="w-full h-auto object-cover rounded-2xl max-w-screen-xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator (optional) */}
      <div className="absolute bottom-4 w-full flex justify-center">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-1 animate-bounce">
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
