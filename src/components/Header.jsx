import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Search } from 'lucide-react';
import logo from '../assets/icons/logo.png';
import HireMeDialog from '../pages/Sections/HiremeDialog';
import './custom.css';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleDialog = () => setOpenDialog((prev) => !prev);

  const navItems = [
    { name: 'My Projects', href: '#projects' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${darkMode ? 'header-blur-dark' : 'header-blur'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3.5">
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-2.5 group cursor-pointer">
            <img
              src={logo}
              alt="Brian Dev Logo"
              className="w-auto h-8 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span
              className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                darkMode
                  ? 'text-dark-heading group-hover:text-primary'
                  : 'text-light-heading group-hover:text-primary'
              }`}
            >
              Brian Dev
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative py-1 transition-colors duration-300 hover:text-primary group ${
                  darkMode ? 'text-dark-paragraph' : 'text-light-paragraph'
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 active:scale-95 cursor-pointer ${
                darkMode
                  ? 'bg-dark-card text-primary border border-dark-border hover:bg-dark-border'
                  : 'bg-light-card text-primary border border-light-border hover:bg-light-bg'
              }`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 ${
                darkMode
                  ? 'bg-dark-card text-primary border border-dark-border'
                  : 'bg-light-card text-primary border border-light-border'
              }`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg transition-all duration-300 cursor-pointer ${
                darkMode
                  ? 'text-dark-heading hover:bg-dark-card'
                  : 'text-light-heading hover:bg-light-card'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden border-t ${
            menuOpen
              ? 'max-h-96 opacity-100 border-dark-border'
              : 'max-h-0 opacity-0 pointer-events-none border-transparent'
          } ${darkMode ? 'bg-dark-bg/95 text-dark-heading' : 'bg-light-bg/95 text-light-heading'}`}
        >
          <div className="flex flex-col px-6 py-5 space-y-3">
            {/* Search Input for Mobile */}
            <div className="relative mb-1">
              <input
                type="text"
                placeholder="Search..."
                className={`w-full py-2 pl-9 pr-4 text-xs rounded-full border focus:outline-none focus:ring-1 focus:ring-primary ${
                  darkMode
                    ? 'bg-dark-card border-dark-border text-dark-heading placeholder:text-dark-muted'
                    : 'bg-light-card border-light-border text-light-heading placeholder:text-light-muted'
                }`}
              />
              <Search
                size={14}
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                  darkMode ? 'text-dark-muted' : 'text-light-muted'
                }`}
              />
            </div>

            {/* Mobile Nav Links */}
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={toggleMenu}
                className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors ${
                  darkMode
                    ? 'text-dark-paragraph hover:bg-dark-card hover:text-primary'
                    : 'text-light-paragraph hover:bg-light-card hover:text-primary'
                }`}
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Hire Me Button */}
            <button
              onClick={() => {
                toggleDialog();
                toggleMenu();
              }}
              className="w-full py-2.5 mt-2 bg-primary hover:bg-primary-hover text-white text-xs font-semibold rounded-full shadow-md shadow-primary/20 transition-all cursor-pointer"
            >
              Hire Me
            </button>
          </div>
        </div>
      </header>

      {/* Hire Me Dialog Modal */}
      {openDialog && (
        <HireMeDialog
          closeDialog={toggleDialog}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      )}
    </>
  );
};

export default Header;