import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';
import HireMeDialog from './HiremeDialog';

const WelcomeDialog = ({ closeDialog, darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [openDialog, setOpenDialog] = useState(false); // 🆕 For Dialog

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('hasVisited');
    if (!hasVisitedBefore) {
      setIsVisible(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    closeDialog();
  };

  const toggleDialog = () => setOpenDialog(!openDialog); // 🆕 Toggle HireMe Dialog

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 ${
        darkMode ? 'dark' : ''
      } ${isVisible ? 'animate-slideDown' : ''}`}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl p-10 max-w-lg w-full mx-4 relative animate-fadeIn shadow-xl transition-all duration-300"
        style={{ fontSize: '0.8rem' }}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-center text-purple-600 dark:text-purple-300">
          Welcome to My Services!
        </h2>

        <div className="mb-6 text-gray-700 dark:text-gray-300 text-center">
          <p className="mb-4">
            Hi there! I'm a web developer passionate about creating modern, responsive websites. I offer a range of services to help bring your project to life. Take a look at what I can do for you:
          </p>
        </div>

        <ul className="space-y-4 mb-6 text-gray-700 dark:text-gray-300 font-medium">
          {[
            'Web Development - Building fast, responsive websites',
            'UI/UX Design - Designing user-friendly interfaces',
            'Mobile App Development - Creating apps for iOS and Android',
            'SEO & Digital Marketing - Helping your website rank higher',
            'Consultation - Offering expert advice on tech solutions',
          ].map((item, idx) => (
            <li className="flex items-start" key={idx}>
              <div className="w-2.5 h-2.5 rounded-full bg-purple-600 dark:bg-purple-300 mr-4 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="text-center space-y-4">
          <button
            onClick={toggleDialog} // This toggles the dialog visibility
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300"
          >
            Hire Me!
          </button>

          <div className="flex justify-center items-center gap-6 mt-2 text-purple-600 dark:text-purple-300">
            <a
              href="https://your-portfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Portfolio"
              className="hover:scale-110 transition-transform"
            >
              <Globe size={22} />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="hover:scale-110 transition-transform"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="hover:scale-110 transition-transform"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:youremail@example.com"
              title="Email"
              className="hover:scale-110 transition-transform"
            >
              <Mail size={22} />
            </a>
          </div>

          {openDialog && <HireMeDialog closeDialog={toggleDialog} darkMode={darkMode} />} {/* Conditionally render HireMeDialog */}

        </div>
      </div>
    </div>
  );
};

export default WelcomeDialog;
