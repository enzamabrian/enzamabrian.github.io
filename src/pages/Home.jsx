import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
import SectionBreather from '../components/SectionBreather';
import Skills from './Sections/Skills';

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

const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={sectionVariants}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ position: 'relative', zIndex: 20 }}>
        {children}
      </div>
    </motion.div>
  );
};

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      const parsed = JSON.parse(savedTheme);
      setDarkMode(parsed);
      if (parsed) document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => setShowDialog(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  const closeDialog = () => setShowDialog(false);

  // Scroll refs (optional)
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className={darkMode ? 'dark' : ''}
      style={{
        scrollBehavior: 'smooth',
        backgroundColor: darkMode ? '#121212' : '#ffffff',
        color: darkMode ? '#eee' : '#111',
        minHeight: '100vh',
      }}
    >
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} scrollToSection={scrollToSection} />


      <AnimatedSection>
  <div className="mt-4 md:mt-8">
  <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} ref={heroRef} />
</div>
</AnimatedSection>





      <AnimatedSection>
        <About darkMode={darkMode} toggleDarkMode={toggleDarkMode} ref={aboutRef} />
      </AnimatedSection>

      <AnimatedSection>
        <Testimonials darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </AnimatedSection>

      <AnimatedSection>
        <Skills darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </AnimatedSection>

      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default Home;
