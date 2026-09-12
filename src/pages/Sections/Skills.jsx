import React from 'react';
import { Code2, Server, Database, Cloud } from 'lucide-react';

const skillsData = [
  {
    category: 'Frontend',
    icon: Code2,
    skills: ['React.js', 'Blazor', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'HTML & CSS'],
  },
  {
    category: 'Backend',
    icon: Server,
    skills: ['Node.js & Express', '.NET Core', 'REST APIs', 'Authentication'],
  },
  {
    category: 'Databases',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL', 'Sequelize ORM', 'Database Migrations'],
  },
  {
    category: 'DevOps & Servers',
    icon: Cloud,
    skills: ['Deployments', 'Server Management', 'CI/CD Pipelines', 'Nginx', 'Git'],
  },
];

const Skills = ({ darkMode }) => {
  return (
    <section
      id="skills"
      className={`relative py-20 px-4 sm:px-8 lg:px-12 transition-colors duration-500 ${
        darkMode ? 'bg-dark-bg text-dark-heading' : 'bg-light-bg text-light-heading'
      }`}
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Skills & Expertise
          </h2>
          <p
            className={`text-sm sm:text-base ${
              darkMode ? 'text-dark-muted' : 'text-light-muted'
            }`}
          >
            Technologies and tools I work with to build scalable applications.
          </p>
        </div>

        {/* Skills Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((group) => {
            const IconComponent = group.icon;
            return (
              <div
                key={group.category}
                className={`group rounded-lg p-6 border transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white hover:border-primary cursor-pointer ${
                  darkMode
                    ? 'bg-dark-card border-dark-border text-dark-heading shadow-black/40'
                    : 'bg-light-card border-light-border text-light-heading shadow-gray-200/50'
                }`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-inherit transition-colors duration-300">
                  <div className="text-primary group-hover:text-white transition-colors duration-300">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight">
                    {group.category}
                  </h3>
                </div>

                {/* Skill List */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-md border transition-colors duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:text-primary ${
                        darkMode
                          ? 'bg-dark-bg border-dark-border text-dark-paragraph'
                          : 'bg-light-bg border-light-border text-light-paragraph'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;