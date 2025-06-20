import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiDjango, SiJavascript } from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa'; // replace FaGithub import

import projectImage1 from '../Assets/Projects/trial.png'; // Replace with your actual path
import p10 from '../../assets/projects/portifolio/1.png'
import p11 from '../../assets/projects/portifolio/2.png'
import p12 from '../../assets/projects/portifolio/3.png'
import p13 from '../../assets/projects/portifolio/4.png'
import p14 from '../../assets/projects/portifolio/6.png'

import p20 from '../../assets/projects/ascend/1.png'
import p21 from '../../assets/projects/ascend/2.png'
import p22 from '../../assets/projects/ascend/3.png'
import p23 from '../../assets/projects/ascend/4.png'

import p30 from '../../assets/projects/hclt/1.png'
import p31 from '../../assets/projects/hclt/2.png'
import p32 from '../../assets/projects/hclt/3.png'
import p33 from '../../assets/projects/hclt/4.png'


import p40 from '../../assets/projects/manjo/1.png'
import p41 from '../../assets/projects/manjo/2.png'
import p42 from '../../assets/projects/manjo/3.png'
import p43 from '../../assets/projects/manjo/4.png'


import p50 from '../../assets/projects/mib/1.png'
import p51 from '../../assets/projects/mib/2.png'
import p52 from '../../assets/projects/mib/3.png'
import p53 from '../../assets/projects/mib/4.png'

import p60 from '../../assets/projects/nk/1.png'
import p61 from '../../assets/projects/nk/2.png'
import p62 from '../../assets/projects/nk/3.png'
import p63 from '../../assets/projects/nk/4.png'













const Projects = ({ darkMode }) => {
  const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing projects, built with React, vite and TailwindCSS.",
    imageUrl: p10,
    galleryImages: [p10,p11,p12,p13,p14], // Replace with real gallery images
    link: "#",
    launchedIn: "2025",
    clientRating: 5,
    client: "Enzama Brian",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },
  {
    title: "Ascend Engineering Limited",
    description: "Asceend Engineering Limited is a dynamic engineering firm specializing in civil, electrical, and mechanical works. Committed to innovation and quality, the company delivers reliable infrastructure",
    imageUrl: p20,
    galleryImages: [p20,p21,p22,p23], // Replace with real gallery images
    link: "https://www.ascendengineeringlimited.com",
    launchedIn: "2023",
    clientRating: 4,
    client: "Mwesiga Frankline",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },

    ],
  },
  {
    title: "Hope For Trauma Healing Center",
    description: "Hope For Trauma Healing Center is a Uganda-based counseling organization dedicated to supporting individuals, families, and communities through comprehensive mental health services",
    imageUrl: p30,
    galleryImages: [p30,p31,p32,p33], // Replace with real gallery images
    link: "https://hopecounsellingltdug.com/",
    launchedIn: "2021",
    clientRating: 3,
    client: "Hope For Trauma Healing Center, Uganda",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],
  },
  {
    title: "Manjo Consults website",
    description: "Manjo Consults Limited is a leading construction agency in Uganda, renowned for delivering successful projects across various sectors.",
    imageUrl: p40,
    galleryImages: [p40,p41,p42,p43], // Replace with real gallery images
    link: "https://manjoconsultslimited.com",
    launchedIn: "2023",
    clientRating: 4,
    client: "Manjo Consults",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 /> },

      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],
  },
  {
    title: "MiB Rock Contractors Website",
    description: "MIB Rock Contractors Ltd is a Kampala-based construction company offering a range of services, including construction works, renovation projects, and the supply of construction materials.",
    imageUrl: p50,
    galleryImages: [p50,p51,p52,p53], // Replace with real gallery images
    link: "https://mibrockcontractorsltd.com/",
    launchedIn: "2022",
    clientRating: 4,
    client: "MiB Rock Contractors",
    technologies: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Express.js", icon: <FaNodeJs /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },
  
  {
    title: "NK General Dealers Website",
    description: "NK General Dealers is a Ugandan company specializing in the supply of high-quality general merchandise, industrial materials, and construction equipment. Serving both businesses and individuals.",
    imageUrl: p60,
    galleryImages: [p60,p61,p62,p63], // Replace with real gallery images
    link: "https://nkgeneraldealers.com/",
    launchedIn: "2025",
    clientRating: 4,
    client: "NK General Dealers",
    technologies: [
       { name: "Node.js", icon: <FaNodeJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Express.js", icon: <FaNodeJs /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },
 
];


  const handlePrevImage = (index) => {
    setActiveImages((prevImages) =>
      prevImages.map((activeImage, idx) =>
        idx === index ? (activeImage === 0 ? projects[index].galleryImages.length - 1 : activeImage - 1) : activeImage
      )
    );
  };

  const handleNextImage = (index) => {
    setActiveImages((prevImages) =>
      prevImages.map((activeImage, idx) =>
        idx === index ? (activeImage === projects[index].galleryImages.length - 1 ? 0 : activeImage + 1) : activeImage
      )
    );
  };

  const [activeImages, setActiveImages] = useState(projects.map(() => 0));

  return (
    <section
      id="projects"
      className={`min-h-screen py-12 sm:py-16 px-4 sm:px-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-12 text-center relative text-purple-500">
          My projects
          <span className="block w-20 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:scale-105 ${darkMode
                ? 'bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md text-white border border-gray-700'
                : 'bg-gradient-to-r from-teal-400 to-blue-500 text-white border border-gray-300'
              } `}
            >
              {/* Project Image */}
              <div className="relative w-full h-56 sm:h-72 overflow-hidden rounded-lg mt-10">
                <div
                  className="absolute inset-0 flex transition-all duration-500 ease-in-out transform"
                  style={{
                    transform: `translateX(-${activeImages[index] * 100}%)`,
                  }}
                >
                  {project.galleryImages.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
<div className="absolute inset-y-0 left-0 flex items-center justify-center p-4">
  <button
    className="bg-gray-600 bg-opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-700"
    onClick={() => handlePrevImage(index)}
  >
    &lt;
  </button>
</div>
<div className="absolute inset-y-0 right-0 flex items-center justify-center p-4">
  <button
    className="bg-gray-600 bg-opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-700"
    onClick={() => handleNextImage(index)}
  >
    &gt;
  </button>
</div>

              </div>

              {/* Project Info */}
              <div className="p-6 sm:p-8 flex flex-col items-center text-center">
                <h3
                  className={`font-semibold text-lg sm:text-xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
                >
                  {project.title}
                </h3>

                <p
                  className={`text-[0.75rem] sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4">
                  {project.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center space-x-2 px-3 py-1 rounded-full border text-xs sm:text-sm ${darkMode
                        ? 'border-gray-600 bg-white/10 text-white'
                        : 'border-gray-300 bg-white text-gray-800'
                      }`}
                    >
                      <span className="text-base">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Client Name */}
                <div className="mt-4 text-sm text-gray-400">
                  <span className="font-medium text-gray-500">Client:</span> {project.client}
                </div>

                {/* Client Rating */}
                <div className="mt-4 flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-400">Client Rating:</span>

                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={star <= project.clientRating ? "purple" : "gray"}
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 15l-5.4 3.2 1-6.6-4.9-4.8 6.8-1L10 .8l3 6.8 6.8 1-4.9 4.8 1 6.6L10 15z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{project.clientRating} / 5</span>
                </div>

                {/* Launched Date Pill and View Live Button */}
                <div className="mt-6 flex items-center justify-between space-x-4">
                  <div
                    className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-medium ${darkMode
                      ? 'bg-transparent border border-gray-600 text-white'
                      : 'bg-gray-300 text-gray-800'
                    }`}
                  >
                    Launched: {project.launchedIn}
                  </div>

                 <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className={`inline-flex items-center px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
    darkMode
      ? 'bg-purple-600 hover:bg-purple-500 text-white'
      : 'bg-gray-800 hover:bg-gray-700 text-white'
  } focus:outline-none focus:ring-2 focus:ring-purple-400`}
>
  View Live <FaExternalLinkAlt className="ml-2" />
</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
