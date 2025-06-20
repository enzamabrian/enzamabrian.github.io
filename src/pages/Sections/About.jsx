import React from 'react';
import profile from '../Assets/profile.jpg'

const AboutMe = ({ darkMode }) => {

const skills = [
  { name: 'HTML', percentage: 90, color: '#14b8a6' },     // teal
  { name: 'CSS', percentage: 85, color: '#3b82f6' },      // blue
  { name: 'JavaScript', percentage: 80, color: '#facc15' }, // yellow
  { name: 'React', percentage: 75, color: '#10b981' },    // green
  { name: 'Node.js', percentage: 70, color: '#ef4444' },  // red
  { name: 'MySQL', percentage: 65, color: '#6366f1' },    // indigo
];


  return (
    <section
      id="about"
      className={`relative min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} px-6 py-16`}
    >
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400 opacity-30 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-blue-400 opacity-20 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400 opacity-10 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Content Section */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 z-10">
       {/* Left Side - Image */}
<div className="flex-1 flex justify-center">
  <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-[0_0_40px_15px_rgba(168,85,247,0.6)] animate-bounce-slow glow-animation">
  <img
    src={profile}
    alt="Profile"
    className="w-full h-full object-cover rounded-full"
  />
</div>

</div>



        {/* Right Side - About Text with Frosted Glass Effect */}
<div className="flex-1 bg-white/10 dark:bg-black/20 backdrop-blur-md p-0 rounded-xl">
    <h2 className="text-3xl font-extrabold mb-8 text-center md:text-left relative text-purple-500">
  About Me

  <span className="block w-20 h-1 bg-purple-500 mx-auto md:ml-0 mt-4 rounded-full"></span>

</h2>

<p className="text-[0.7rem] md:text-sm mb-4 mt-10 text-center md:text-left px-2 md:px-0">
  
    Hello! I’m Enzama Brian, a passionate web developer with a keen eye for detail and a drive for
    creating elegant, efficient, and user-friendly web applications. With a strong background in both
    front-end and back-end development.
  </p>




<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
  {skills.map((skill, index) => (
    <div
      key={index}
      className={`backdrop-blur-lg border shadow-md hover:shadow-lg rounded-xl p-5 transition-transform duration-300 transform hover:-translate-y-1 ${
        darkMode
          ? 'bg-gray-800/60 border-gray-700 text-white'
          : 'bg-white/70 border-gray-300 text-gray-900'
      }`}
    >
      <h3 className="text-lg font-semibold mb-3 text-center">
        {skill.name}
      </h3>
      <div
        className={`relative w-full h-6 rounded-full overflow-hidden shadow-inner ${
          darkMode ? 'bg-gray-700' : 'bg-gray-200'
        }`}
      >
        <div
          className="h-full rounded-full flex items-center justify-center text-[0.7rem] font-bold text-white transition-all duration-700 ease-out"
          style={{
            width: `${skill.percentage}%`,
            background: `linear-gradient(to right, ${skill.color}, ${skill.color}cc)`,
          }}
        >
          {skill.percentage}%
        </div>
      </div>
    </div>
  ))}
</div>






<p className="text-[0.7rem] md:text-sm mb-4 mt-10 text-center md:text-left px-2 md:px-0">
  Here’s what drives me: <span className="font-semibold">Innovation</span>, <span className="font-semibold">Efficiency</span>, and <span className="font-semibold">Simplicity</span>. I always aim to deliver the highest quality work
  while ensuring the user experience is at the forefront of every project I take on.
</p>




</div>

      </div>
    </section>
  );
};

export default AboutMe;
