import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaYoutube,FaTiktok } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si'; // TikTok icon
import { Sun, Moon } from 'lucide-react'; // lucide-react icons
import logo from '../assets/icons/logo.png'

const Footer = ({ darkMode, toggleDarkMode }) => {
  return (
    <footer className={`w-full pt-8 pb-6 ${darkMode ? 'bg-gray-900' : 'bg-white'} text-white shadow-lg`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
      <div className="flex items-center">
  <img 
    src={logo} 
    alt="Brian Designs" 
    className="w-auto h-10" 
  />
<span className={`ml-2 text-md font-bold ${darkMode ? 'text-white' : 'text-purple-700'}`}>
  Brian Dev
</span>

</div>


        {/* Navigation Links */}
        <nav className="flex space-x-8 mt-6 md:mt-0 text-sm">
          {['Home', 'About', 'Projects', 'Contact', 'Blog'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative group transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-800'}`}
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

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
              className={`transform hover:scale-125 transition-transform duration-300 hover:text-purple-400 ${darkMode ? 'text-white' : 'text-gray-800'}`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center mt-6">
        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
          © {new Date().getFullYear()} Brian Dev All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
