import React from 'react';
import { Menu, X, Sun, Moon, Search } from 'lucide-react';
import logo from '../assets/icons/logo.png';
import HireMeDialog from '../pages/Sections/HiremeDialog'; // 🆕 Import the Hire Me Dialog
import './custom.css';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false); // 🆕 For Dialog

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDialog = () => setOpenDialog(!openDialog); // 🆕

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${darkMode ? 'header-blur-dark' : 'header-blur'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Brian Designs" className="w-auto h-10" />
            <span className={`ml-2 text-xl font-bold ${darkMode ? 'text-white' : 'text-purple-700'}`}>
  Brian Dev
</span>

          </div>

          {/* Desktop Search */}
          <div className="hidden md:block flex-grow max-w-xs mx-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className={`w-full py-2 pl-10 pr-4 rounded-md shadow-sm focus:outline-none ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}
              />
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`hover:text-purple-400 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-800'}`}
              >
                {item}
              </a>
            ))}

            {/* Hire Me Button */}
            <button
  onClick={toggleDialog}
  className="py-2 px-6 rounded-full text-sm hidden lg:inline-block transition duration-300 bg-purple-600 text-white hover:bg-purple-700"
>
  Hire Me
</button>


            {/* Theme Toggle */}
            <button onClick={toggleDarkMode} className="flex items-center transition-transform duration-300 transform hover:scale-110">
              {darkMode ? (
                <Sun size={22} className="text-purple-400" />
              ) : (
                <Moon size={22} className="text-purple-600" />
              )}
            </button>
          </nav>

          {/* Mobile Right */}
          <div className="flex items-center gap-4 md:hidden">
            <button onClick={toggleDarkMode} className="transition-transform duration-300 transform hover:scale-110">
              {darkMode ? <Sun size={22} className="text-purple-400" /> : <Moon size={22} className="text-purple-600" />}
            </button>

            <div>
              {menuOpen ? (
                <X size={28} onClick={toggleMenu} className="cursor-pointer transition-transform duration-300 transform hover:rotate-90 text-purple-400" />
              ) : (
                <Menu size={28} onClick={toggleMenu} className="cursor-pointer transition-transform duration-300 transform hover:scale-110 text-purple-400" />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={`md:hidden ${darkMode ? 'header-blur-dark' : 'header-blur'} animate-slideDown`}>
            <nav className="flex flex-col items-center space-y-6 py-6 text-sm">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={toggleMenu}
                  className={`hover:bg-purple-500 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => { toggleDialog(); toggleMenu(); }}
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-all duration-300"
              >
                Hire Me
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hire Me Dialog */}
      {openDialog && <HireMeDialog closeDialog={toggleDialog} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
    </>
  );
};

export default Header;
