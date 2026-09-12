import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const Projects = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState('next'); // 'next' or 'prev'

  const projectsData = [
    {
      id: 1,
      title: 'UB Staff SACCO',
      category: 'Web Application',
      subtitle: 'Digital savings, loans & member-focused financial services platform',
      description:
        'A modern web platform for UB Staff SACCO designed to provide members with convenient access to savings, loans, membership information, and other SACCO services.',
      mainImage: '/project1.png',
      tags: [
        'React',
        'Node.js',
        'MySQL',
        'Tailwind CSS',
        'REST API',
        'Authentication'
      ],
      demoLink: 'https://ubstaffsacco.com',
      githubLink: '#',
    },
    {
      id: 2,
      title: 'WoodHub International',
      category: 'Website',
      subtitle:
        'Elegant furniture showcase platform for handcrafted home and interior pieces',
      description:
        'A modern, responsive website for WoodHub International showcasing a curated collection of handcrafted furniture, including tables, beds, sofas, and other pieces designed to bring style and comfort to modern living spaces.',
      mainImage: '/project2.png',
      tags: [
        'React',
        'Tailwind CSS',
        'TypeScript',
        'Vite',
        'Responsive Design',
        'WhatsApp Integration'
      ],
      demoLink: 'https://woodhubinternational.com/',
      githubLink: '#',
    },
    {
      id: 3,
      title: 'Namayemba Christian School',
      category: 'Website',
      subtitle:
        'Modern school website connecting students, parents, and the school community',
      description:
        'A responsive website for Namayemba Christian School designed to present the school, its educational environment, admissions information, and community activities through a clear and engaging digital experience.',
      mainImage: '/project3.png',
      tags: [
        'React',
        'Tailwind CSS',
        'TypeScript',
        'Vite',
        'Responsive Design',
        'UI/UX'
      ],
      demoLink: 'https://namayembachristianschool.com/',
      githubLink: '#',
    },
    {
      id: 4,
      title: 'MMKC Investment Limited',
      category: 'Website',
      subtitle:
        'Professional construction company website showcasing projects, services & expertise',
      description:
        'A modern and responsive website for MMKC Investment Limited, designed to showcase its construction services, completed projects, expertise, and professional capabilities while providing potential clients with an easy way to connect with the company.',
      mainImage: '/project4.png',
      tags: [
        'React',
        'Tailwind CSS',
        'TypeScript',
        'Vite',
        'Responsive Design',
        'UI/UX'
      ],
      demoLink: 'https://www.mmkc-investmentlimited.com/',
      githubLink: '#',
    },
    {
      id: 5,
      title: 'Yamba Africa',
      category: 'Web Application',
      subtitle:
        'Full-featured crowdfunding platform connecting African causes with donors through secure digital payments',
      description:
        'A full-stack crowdfunding and fundraising platform built to help individuals and organizations create campaigns, receive donations, and connect supporters with causes that matter. I contributed to the platform with a focus on payment integration, enabling donors to make secure contributions through PayPal and mobile money.',
      mainImage: '/project5.png',
      tags: [
        'React',
        'Node.js',
        'TypeScript',
        'Tailwind CSS',
        'PayPal',
        'Mobile Money',
        'REST API',
        'Payment Integration'
      ],
      demoLink: 'https://yambaafrica.com/',
      githubLink: '#',
    },
    {
      id: 6,
      title: 'MiB Rock Contractors Limited',
      category: 'Website',
      subtitle:
        'Professional construction and civil engineering website showcasing projects, services & expertise',
      description:
        'A modern, responsive corporate website for MiB Rock Contractors Limited, built to showcase the company’s construction and civil engineering capabilities, projects, services, values, and commitment to quality, safety, and sustainable infrastructure.',
      mainImage: '/project6.png',
      tags: [
        'React',
        'Tailwind CSS',
        'TypeScript',
        'Vite',
        'Responsive Design',
        'UI/UX'
      ],
      demoLink: 'https://mibrockcontractorsltd.com/',
      githubLink: '#',
    }
  ];

  const categories = ['All', 'Web Application', 'Website', 'Backend'];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  useEffect(() => {
    setDirection('next');
    setCurrentIndex(0);
  }, [activeFilter]);

  // Automated 8-Second Cycle
  useEffect(() => {
    if (isPaused || filteredProjects.length <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, filteredProjects.length]);

  const handleNext = () => {
    setDirection('next');
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection('prev');
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (idx) => {
    setDirection(idx > currentIndex ? 'next' : 'prev');
    setCurrentIndex(idx);
  };

  const currentProject = filteredProjects[currentIndex] || filteredProjects[0];

  return (
    <section
      id="projects"
      className={`relative min-h-screen transition-colors duration-500 px-6 py-20 flex flex-col justify-center overflow-hidden ${
        darkMode ? 'bg-dark-bg text-dark-heading' : 'bg-light-bg text-light-heading'
      }`}
    >
      {/* Dynamic Keyframe Animations for Slide In */}
      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-next {
          animation: slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-prev {
          animation: slideInLeft 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] pointer-events-none bg-[radial-gradient(#8e918f_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-5xl mx-auto w-full z-10 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            My Projects
          </h2>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-primary text-white shadow-md shadow-primary/20 scale-105'
                  : darkMode
                  ? 'bg-dark-card text-dark-muted hover:text-dark-heading hover:bg-dark-border border border-dark-border'
                  : 'bg-light-card text-light-paragraph hover:bg-light-card/80 border border-light-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* MAIN SINGLE PROJECT VIEWPORT CONTAINER */}
        <div
          className="relative w-full flex items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrev}
            className={`absolute -left-4 sm:-left-6 z-30 p-3 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer ${
              darkMode
                ? 'bg-dark-card/90 text-dark-heading border border-dark-border shadow-lg hover:bg-primary hover:text-white hover:border-primary'
                : 'bg-light-card/90 text-light-heading border border-light-border shadow-xl hover:bg-primary hover:text-white hover:border-primary'
            }`}
            aria-label="Previous Project"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            className={`absolute -right-4 sm:-right-6 z-30 p-3 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer ${
              darkMode
                ? 'bg-dark-card/90 text-dark-heading border border-dark-border shadow-lg hover:bg-primary hover:text-white hover:border-primary'
                : 'bg-light-card/90 text-light-heading border border-light-border shadow-xl hover:bg-primary hover:text-white hover:border-primary'
            }`}
            aria-label="Next Project"
          >
            <ChevronRight size={22} />
          </button>

          {/* Single Focused Card Display */}
          {currentProject && (
            <div
              key={`${currentProject.id}-${currentIndex}`}
              className={`w-full rounded-xl overflow-hidden border ${
                direction === 'next' ? 'animate-slide-next' : 'animate-slide-prev'
              } ${
                darkMode
                  ? 'bg-dark-card border-dark-border shadow-2xl shadow-black/40'
                  : 'bg-light-card border-light-border shadow-xl shadow-gray-200/50'
              }`}
            >
              {/* Card Header & Content - Grid ensures equal height for full-height image */}
              <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
                {/* Full Height Image Section */}
                <div className="relative w-full h-64 sm:h-80 lg:h-auto overflow-hidden group">
                  <img
                    src={currentProject.mainImage}
                    alt={currentProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span
                    className={`absolute top-4 left-4 text-xs font-semibold px-3.5 py-1.5 rounded-full backdrop-blur-md border ${
                      darkMode
                        ? 'bg-dark-bg/80 text-dark-heading border-dark-border'
                        : 'bg-light-card/90 text-light-heading border-light-border shadow-xs'
                    }`}
                  >
                    {currentProject.category}
                  </span>
                </div>

                {/* Primary Info Section */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        Project {currentIndex + 1} of {filteredProjects.length}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
                      {currentProject.title}
                    </h3>
                    
                    <p className={`text-xs sm:text-sm font-medium mb-4 ${
                      darkMode ? 'text-dark-muted' : 'text-light-muted'
                    }`}>
                      {currentProject.subtitle}
                    </p>

                    <p
                      className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                        darkMode ? 'text-dark-paragraph' : 'text-light-paragraph'
                      }`}
                    >
                      {currentProject.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {currentProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs font-semibold px-3 py-1 rounded-full border transition-transform hover:scale-105 ${
                            darkMode
                              ? 'bg-dark-bg border-dark-border text-dark-paragraph'
                              : 'bg-light-bg border-light-border text-light-paragraph'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div
                    className={`flex items-center gap-3 pt-4 border-t ${
                      darkMode ? 'border-dark-border' : 'border-light-border'
                    }`}
                  >
                    <a
                      href={currentProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full text-white bg-primary hover:bg-primary-hover shadow-md shadow-primary/20 transition-all hover:scale-105"
                    >
                      Demo <ExternalLink size={14} />
                    </a>
                    <a
                      href={currentProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border transition-all hover:scale-105 ${
                        darkMode
                          ? 'bg-dark-bg border-dark-border text-dark-heading hover:bg-dark-border'
                          : 'bg-light-bg border-light-border text-light-heading hover:bg-light-card'
                      }`}
                    >
                      Code <Github size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center gap-2 mt-8">
          {filteredProjects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? 'w-8 bg-primary shadow-sm shadow-primary/20'
                  : darkMode
                  ? 'w-2.5 bg-dark-card hover:bg-dark-border border border-dark-border'
                  : 'w-2.5 bg-light-card hover:bg-light-bg border border-light-border'
              }`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;