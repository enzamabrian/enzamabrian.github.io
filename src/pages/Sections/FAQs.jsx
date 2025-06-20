import React, { useState } from 'react';

const FAQ = ({ darkMode }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How can I contact you?',
      answer: 'You can reach out to me using the contact form on this site or send an email directly. I usually check my inbox regularly and would love to hear from you regarding projects, partnerships, or even a simple hello!',
    },
  
    {
      question: 'How soon can I expect a response?',
      answer: 'Typically, I respond within 24 to 48 hours. In cases where I am handling a heavy workload, it might take slightly longer, but I always make it a priority to respond as promptly as possible.',
    },
    {
      question: 'What kind of projects do you specialize in?',
      answer: 'I specialize in full-stack web development, modern UI/UX design, responsive mobile-first websites, and building intuitive user experiences. I also have experience in API development and cloud integrations.',
    },
    {
      question: 'Do you offer consultation services?',
      answer: 'Absolutely! I provide 1-on-1 consultation sessions where I can help you plan your project, design better workflows, troubleshoot problems, and offer strategic advice to help your business or idea grow.',
    },
    {
      question: 'Can you work remotely?',
      answer: 'Yes! I am fully equipped to work remotely and have collaborated with teams from different parts of the world. Distance is never a barrier when it comes to delivering quality work and maintaining clear communication.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className={`min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div className="max-w-5xl w-full flex flex-col gap-8 z-10">
        <h2 className="text-3xl font-extrabold mb-8 text-center relative text-purple-500">
          Frequently Asked Questions
          <span className="block w-20 h-1 bg-purple-500 mx-auto mt-2 rounded-full"></span>
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                darkMode ? 'border-gray-700' : 'border-gray-300'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center p-6 text-lg font-semibold focus:outline-none transition-colors ${
                  darkMode ? 'bg-gray-800 hover:bg-purple-600' : 'bg-gray-100 hover:bg-purple-100'
                }`}
              >
                <span>{faq.question}</span>
                <span className="text-2xl text-purple-500">{openIndex === index ? '-' : '+'}</span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100 p-6' : 'max-h-0 opacity-0 p-0'
                } overflow-hidden ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-50'
                } text-sm leading-relaxed`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
