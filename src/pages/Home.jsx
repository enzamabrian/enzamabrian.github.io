import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Services from './Sections/Services';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';
import FAQ from './Sections/FAQs';
import WelcomeDialog from './Sections/WelcomeDialog';
import Testimonials from './Sections/Testmonials';
import Pricing from './Sections/Pricing';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showDialog, setShowDialog] = useState(false);  // Start with the dialog hidden

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      const parsedTheme = JSON.parse(savedTheme);
      setDarkMode(parsedTheme);
      if (parsedTheme) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Animation variants for sections (super smooth spring)
  const sectionVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 15,
        mass: 0.5,
      },
    },
  };

  // Scroll to section when navbar link is clicked
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Close dialog function passed to WelcomeDialog component
  const closeDialog = () => {
    setShowDialog(false);
  };

  // Show the dialog after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDialog(true); // Show the dialog after 6 seconds
    }, 6000);

    // Clear the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''} style={{ scrollBehavior: 'smooth' }}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} scrollToSection={scrollToSection} />

      {/* Conditionally render the WelcomeDialog */}
      {showDialog && (
        <WelcomeDialog closeDialog={closeDialog} darkMode={darkMode} />
      )}

 
        <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />


        <About darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

 
        <Services darkMode={darkMode} toggleDarkMode={toggleDarkMode} />


        <Projects darkMode={darkMode} toggleDarkMode={toggleDarkMode} />


        <Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Testimonials darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <Pricing darkMode={darkMode} toggleDarkMode={toggleDarkMode} />



        <FAQ darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default Home;
