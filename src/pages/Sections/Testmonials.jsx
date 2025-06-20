import React from 'react';

const testimonials = [
  {
    name: 'Maliki Abdallah Ireeta',
    role: 'Managing Director, MIB Contractors Limited',
    message:
      'I love my website that was done by him. He met all my requirements',
    image: 'https://mibrockcontractorsltd.com/static/media/team%202.6f6e9a1c135a41f64b0d.png',
  },
  {
    name: 'Eng. Frankiline Mwesiga',
    role: 'Founder & CEO, Ascend Engineering Services',
    message:
      'Delivered high-quality work when building my company website. Highly recommend for any future web development needs.',
    image: 'https://www.ascendengineeringlimited.com/wp-content/uploads/2024/03/IMG-20240315-WA0005.jpg',
  },
  {
    name: 'Dr. Rogers Namwiyiri',
    role: 'CEO and Director, Hope Counselling Uganda',
    message:
      'Working with him was seamless. Great communication, transparency, and execution of the website building tasks and 24/7 support.',
    image: 'https://hopecounsellingltdug.com/wp-content/uploads/2024/03/Rogers-Namwiyiri.jpg',
  },

];

const Testimonials = ({ darkMode }) => {
  return (
    <section
      className={`py-16 px-4 sm:px-6 lg:px-20 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
         <h2 className="text-3xl font-extrabold mb-12 text-center relative text-purple-500">
          Client Testimonials
          <span className="block w-20 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></span>
        </h2>
        <p className="mb-12 text-sm opacity-80">
          Hear from some of the clients I have worked with and designed, built for them their systems
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-6 pt-16 transition-transform duration-300 ease-in-out hover:scale-[1.02] ${
                darkMode
                  ? 'bg-gray-800 border border-purple-700'
                  : 'bg-white border border-purple-200'
              }`}
            >
              {/* Profile Image */}
              <div className="absolute -top-8 left-6 w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500 shadow-md">
                <div className="bg-white">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                </div>
              </div>

              <p className="text-sm mb-4 italic mt-0">"{testimonial.message}"</p>
              <div className="text-sm font-semibold text-purple-500">{testimonial.name}</div>
              <div className="text-xs opacity-70">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
