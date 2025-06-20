import React from 'react';
import pricing from '../../assets/svg/pricing.svg'; // Replace with actual SVG if available

const Pricing = ({ darkMode }) => {
  return (
    <section
      id="pricing"
      className={`relative min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} px-4 sm:px-6 py-12 sm:py-16`}
    >
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400 opacity-20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-indigo-400 opacity-20 rounded-full filter blur-3xl"></div>

      {/* Content Grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        {/* Left Side - SVG or Illustration */}
        <div className="flex justify-center">
          <img
            src={pricing}
            alt="Pricing Illustration"
            className="w-full max-w-md"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl font-extrabold mb-4 text-center md:text-left text-purple-500">
            Pricing
            <span className="block w-20 h-1 bg-purple-500 mx-auto md:ml-0 mt-4 rounded-full"></span>
          </h2>

          <p className={`text-sm max-w-md mb-6 ${darkMode ? 'text-white opacity-80' : 'text-gray-800 opacity-80'}`}>
            Pricing is flexible and tailored to your project's unique needs—whether it's a simple landing page, a business portfolio, or a full-featured platform. It depends on the project scope and the requirements.
          </p>

          <p className={`text-sm max-w-md ${darkMode ? 'text-white opacity-80' : 'text-gray-800 opacity-80'}`}>
            Request a quotation today and let's find the best solution within your budget.
          </p>

<a
  href="#contact"
  className="inline-block w-[200px] px-6 py-2 text-sm rounded-full bg-purple-600 text-white hover:bg-purple-700 transition duration-300"
>
  Request a Quote
</a>


        </div>
      </div>
    </section>
  );
};

export default Pricing;
