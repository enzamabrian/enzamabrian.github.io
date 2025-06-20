import React, { useState } from 'react';
import contact from '../../assets/svg/contact.svg';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section
      id="contact"
      className={`relative min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} px-4 sm:px-6 py-12 sm:py-16`}
    >
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-400 opacity-20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-pink-400 opacity-20 rounded-full filter blur-3xl"></div>

      {/* Content Grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        {/* Left Side - SVG */}
        <div className="flex justify-center">
          <img
            src={contact}
            alt="Contact Illustration"
            className="w-full max-w-md"
          />
        </div>

        {/* Right Side - Form */}
        <div className="flex flex-col gap-8">
          

         <h2 className="text-3xl font-extrabold mb-4 text-center md:text-left relative text-purple-500">
  Contact Me

  <span className="block w-20 h-1 bg-purple-500 mx-auto md:ml-0 mt-4 rounded-full"></span>

</h2>


          <p className={`text-sm max-w-md mb-6 ${darkMode ? 'text-white opacity-80' : 'text-gray-800 opacity-80'}`}>
            Feel free to reach out for project collaborations, freelance opportunities, or just a friendly hello. I'm excited to connect and explore how we can work together!
          </p>

        <form onSubmit={handleSubmit} className="w-full space-y-8">
  {/* Form Field Group */}
  <div className="flex flex-col space-y-6">
    {[
      { name: 'name', placeholder: 'Your Name', type: 'text' },
      { name: 'email', placeholder: 'Your Email', type: 'email' },
    ].map((field, index) => (
      <div key={index} className="transition-transform duration-300 ease-in-out hover:scale-[1.01]">
       <input
  type={field.type}
  name={field.name}
  value={formData[field.name]}
  onChange={handleChange}
  required
  placeholder={field.placeholder}
  className={`w-full rounded-lg border bg-transparent py-3 px-3 text-sm text-left placeholder-gray-400 placeholder:text-left transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
    darkMode ? 'border-purple-700 text-white' : 'border-purple-400 text-gray-800'
  }`}
/>
      </div>
    ))}

    {/* Textarea */}
    <div className="transition-transform duration-300 ease-in-out hover:scale-[1.01]">
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        required
        rows="4"
        className={`w-full rounded-lg border bg-transparent pt-4 pb-2 px-3 text-sm resize-none placeholder-gray-400 placeholder:text-center transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
          darkMode ? 'border-purple-700 text-white' : 'border-purple-400 text-gray-800'
        }`}
      />
    </div>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="py-2 px-6 rounded-full text-sm hidden lg:inline-block transition duration-300 bg-purple-600 text-white hover:bg-purple-700"
>
    Send Message
  </button>
</form>


        </div>
      </div>
    </section>
  );
};

export default Contact;
