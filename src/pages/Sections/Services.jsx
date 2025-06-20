import React from 'react';

const Services = ({ darkMode }) => {
  return (
    <section
      id="services"
      className={`relative min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} px-4 sm:px-6 py-12 sm:py-16`}
    >
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-400 opacity-20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-pink-400 opacity-20 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-400 opacity-10 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-teal-300 opacity-15 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-300 opacity-25 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Content */}
      <div className="max-w-6xl w-full flex flex-col items-center gap-8 z-10">
         <h2 className="text-3xl font-extrabold mb-8 text-center relative text-purple-500">
          Services 
          <span className="block w-20 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></span>
        </h2>

        <p className={`text-[0.8rem] sm:text-sm text-center max-w-3xl mb-10 ${darkMode ? 'text-white opacity-80' : 'text-gray-800 opacity-80'}`}>
          I offer a range of web development services tailored to bring your ideas to life. From building full-stack applications to modernizing your website, I focus on delivering clean, efficient, and user-centric solutions.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 - Web Development */}
          <div
            className={`${
              darkMode
                ? 'bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-md text-white border border-gray-600'
                : 'bg-gradient-to-r from-teal-400 to-blue-500 border border-gray-300'
            } p-6 sm:p-8 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105`}
          >
            <div className={`text-cyan-600 mb-4 text-3xl sm:text-4xl ${darkMode ? 'text-white opacity-80' : ''}`}>
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3 className="font-semibold text-lg sm:text-xl mb-2">Web Development</h3>
            <p className={`text-[0.8rem] sm:text-sm ${darkMode ? 'text-white opacity-60' : 'opacity-80'}`}>
              Building responsive, modern websites that deliver a seamless experience across all devices.
            </p>
          </div>

          {/* Card 2 - Full-Stack Web Apps */}
          <div
            className={`${
              darkMode
                ? 'bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-md text-white border border-gray-600'
                : 'bg-gradient-to-r from-teal-400 to-blue-500 border border-gray-300'
            } p-6 sm:p-8 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105`}
          >
            <div className={`text-cyan-600 mb-4 text-3xl sm:text-4xl ${darkMode ? 'text-white opacity-80' : ''}`}>
              <i className="fas fa-cogs"></i>
            </div>
            <h3 className="font-semibold text-lg sm:text-xl mb-2">Full-Stack Web Apps</h3>
            <p className={`text-[0.8rem] sm:text-sm ${darkMode ? 'text-white opacity-60' : 'opacity-80'}`}>
              Developing robust and scalable full-stack applications that are optimized for performance and user experience.
            </p>
          </div>

          {/* Card 3 - Custom Solutions */}
          <div
            className={`${
              darkMode
                ? 'bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-md text-white border border-gray-600'
                : 'bg-gradient-to-r from-teal-400 to-blue-500 border border-gray-300'
            } p-6 sm:p-8 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105`}
          >
            <div className={`text-cyan-600 mb-4 text-3xl sm:text-4xl ${darkMode ? 'text-white opacity-80' : ''}`}>
              <i className="fas fa-cogs"></i>
            </div>
            <h3 className="font-semibold text-lg sm:text-xl mb-2">Custom Solutions</h3>
            <p className={`text-[0.8rem] sm:text-sm ${darkMode ? 'text-white opacity-60' : 'opacity-80'}`}>
              Tailored software solutions designed to meet the unique needs of your business or project.
            </p>
          </div>

          {/* Card 4 - Website Overhaul */}
          <div
            className={`${
              darkMode
                ? 'bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-md text-white border border-gray-600'
                : 'bg-gradient-to-r from-teal-400 to-blue-500 border border-gray-300'
            } p-6 sm:p-8 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105`}
          >
            <div className={`text-cyan-600 mb-4 text-3xl sm:text-4xl ${darkMode ? 'text-white opacity-80' : ''}`}>
              <i className="fas fa-sync-alt"></i>
            </div>
            <h3 className="font-semibold text-lg sm:text-xl mb-2">Website Overhaul</h3>
            <p className={`text-[0.8rem] sm:text-sm ${darkMode ? 'text-white opacity-60' : 'opacity-80'}`}>
              Revamping your outdated website with modern technologies, improved design, and enhanced functionality.
            </p>
          </div>

          {/* Card 5 - SEO Optimization */}
          <div
            className={`${
              darkMode
                ? 'bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-md text-white border border-gray-600'
                : 'bg-gradient-to-r from-teal-400 to-blue-500 border border-gray-300'
            } p-6 sm:p-8 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105`}
          >
            <div className={`text-cyan-600 mb-4 text-3xl sm:text-4xl ${darkMode ? 'text-white opacity-80' : ''}`}>
              <i className="fas fa-search"></i>
            </div>
            <h3 className="font-semibold text-lg sm:text-xl mb-2">SEO Optimization</h3>
            <p className={`text-[0.8rem] sm:text-sm ${darkMode ? 'text-white opacity-60' : 'opacity-80'}`}>
              Helping your website rank higher on search engines and attract more organic traffic through proven SEO strategies.
            </p>
          </div>

          {/* Card 6 - E-commerce Solutions */}
          <div
            className={`${
              darkMode
                ? 'bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-md text-white border border-gray-600'
                : 'bg-gradient-to-r from-teal-400 to-blue-500 border border-gray-300'
            } p-6 sm:p-8 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105`}
          >
            <div className={`text-cyan-600 mb-4 text-3xl sm:text-4xl ${darkMode ? 'text-white opacity-80' : ''}`}>
              <i className="fas fa-store"></i>
            </div>
            <h3 className="font-semibold text-lg sm:text-xl mb-2">E-commerce Solutions</h3>
            <p className={`text-[0.8rem] sm:text-sm ${darkMode ? 'text-white opacity-60' : 'opacity-80'}`}>
              Building powerful, secure, and scalable e-commerce websites to help you sell your products online effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
