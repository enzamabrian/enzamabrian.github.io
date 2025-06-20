import React from 'react';
import { X } from 'lucide-react';

const HireMeDialog = ({ closeDialog, darkMode }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div
        className={`bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full mx-4 relative animate-fadeIn shadow-lg transition-all duration-300 ${
          darkMode ? 'dark' : ''
        }`}
        style={{ fontSize: '0.8rem' }}
      >
        <button
          onClick={closeDialog}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-purple-600 dark:text-purple-300">
          Hire Me
        </h2>

        <div className="mb-6 text-gray-700 dark:text-gray-300">
          <p className="mb-4">
            I’m a web developer with experience in creating responsive, user-friendly websites. Let's work together to bring your project to life.
            Please fill out the form below, and I’ll get back to you as soon as possible.
          </p>
        </div>

        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none"
          />

          <div className="relative">
            <select
              className="p-3 pl-4 pr-10 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-300 transition-all duration-300 w-full appearance-none"
            >
              <option value="">Select the service you're interested in</option>
              <option value="Web Development">Web Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
              <option value="Consultation">Consultation</option>
            </select>

            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-white">
              <svg width="12" height="12" fill="currentColor" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4l4 4 4-4z" />
              </svg>
            </div>
          </div>

          <input
            type="tel"
            placeholder="Your Phone Number"
            className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none"
          />

          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="contactMethod"
                value="Email"
                className="mr-2"
                defaultChecked
              />
              Email
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="contactMethod"
                value="Phone"
                className="mr-2"
              />
              Phone
            </label>
          </div>

          <textarea
            placeholder="Your Message"
            className="p-3 h-32 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none resize-none"
          />

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default HireMeDialog;
