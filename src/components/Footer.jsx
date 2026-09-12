import React from 'react';
import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si'; // TikTok icon
import logo from '../assets/icons/logo.png';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`w-full pt-8 pb-6 border-t transition-colors duration-500 ${
      darkMode ? 'bg-dark-bg border-dark-border text-dark-heading' : 'bg-light-bg border-light-border text-light-heading'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Brand Logo & Name */}
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Brian Designs" 
            className="w-auto h-10" 
          />
          <span className="ml-2 text-md font-bold text-primary">
            Brian Dev
          </span>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-6 md:mt-0 text-xl">
          {[
            { icon: <FaGithub />, link: 'https://github.com/enzamabrian' },
            { icon: <FaTwitter />, link: 'https://twitter.com/@brian_enzama' },
            { icon: <FaYoutube />, link: 'https://youtube.com/@devvibes_ug' },
            { icon: <SiTiktok />, link: 'https://www.tiktok.com/@codepro_256' },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`transform hover:scale-125 transition-all duration-300 hover:text-primary ${
                darkMode ? 'text-dark-paragraph' : 'text-light-paragraph'
              }`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Footer Copyright Text */}
      <div className="text-center mt-6 pt-4 border-t border-transparent">
        <p className={`text-xs ${darkMode ? 'text-dark-muted' : 'text-light-muted'}`}>
          © {new Date().getFullYear()} Brian Dev. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;