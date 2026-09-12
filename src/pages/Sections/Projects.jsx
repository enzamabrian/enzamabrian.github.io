import React, { useState } from 'react';
import {
  Layers,
  Cpu,
  HardDrive,
  ShieldCheck,
  Code,
  ArrowRight,
  X,
  CheckCircle2,
} from 'lucide-react';

const techCategoriesData = [
  {
    id: 'mern',
    category: 'MERN Stack',
    title: 'Full-Stack JavaScript',
    icon: Layers,
    accentColor: 'from-purple-500 to-indigo-500',
    description: 'Dynamic single-page web applications powered by responsive frontends and asynchronous Node.js backends.',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
    highlights: [
      'JWT & Secure Cookie Authentication',
      'Optimistic UI Updates (TanStack Query / Redux)',
      'MongoDB Aggregation & Express Middleware',
    ],
    sampleProjects: [
      { name: 'Real-Time Enterprise Dashboard', tech: 'React, Node.js, Socket.io, MongoDB' },
      { name: 'SaaS E-Commerce Platform', tech: 'React, Express, Tailwind, Stripe API' },
    ],
    codeSnippet: `const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};`,
  },
  {
    id: 'dotnet',
    category: '.NET Ecosystem',
    title: 'Enterprise Backend & C#',
    icon: Cpu,
    accentColor: 'from-blue-500 to-indigo-600',
    description: 'Strongly-typed enterprise backends, high-throughput APIs, and relational database integrations.',
    skills: ['C#', 'ASP.NET Core', 'EF Core', 'SQL Server', 'MySQL', 'Blazor'],
    highlights: [
      'Clean Architecture (Domain, App, Infrastructure)',
      'Entity Framework Query Optimization',
      'ASP.NET Core Identity & Role-Based Access Control',
    ],
    sampleProjects: [
      { name: 'Enterprise ERP Back-End Engine', tech: 'C#, ASP.NET Core API, SQL Server' },
      { name: 'Healthcare Inventory System', tech: 'Blazor WebAssembly, EF Core, MySQL' },
    ],
    codeSnippet: `[HttpGet("{id}")]
[ProducesResponseType(typeof(OrderDto), StatusCodes.Status200OK)]
public async Task<IActionResult> GetOrderById(Guid id, CancellationToken ct)
{
    var result = await _mediator.Send(new GetOrderByIdQuery(id), ct);
    return result != null ? Ok(result) : NotFound();
}`,
  },
  {
    id: 'vps',
    category: 'VPS & DevOps',
    title: 'Server Infrastructure',
    icon: HardDrive,
    accentColor: 'from-cyan-500 to-blue-500',
    description: 'Linux server management, automated deployment pipelines, reverse proxies, and system security.',
    skills: ['Linux/Ubuntu', 'Nginx', 'Docker', 'PM2 / Systemd', 'SSL / Certbot', 'CI/CD'],
    highlights: [
      'Nginx Reverse Proxy & TLS 1.3 Setup',
      'Docker Containerization & Orchestration',
      'UFW Firewall & SSH Hardening',
    ],
    sampleProjects: [
      { name: 'Multi-App Production Server', tech: 'Ubuntu, Nginx, Docker, Certbot' },
      { name: 'Automated CI/CD Pipeline', tech: 'GitHub Actions, PM2, Bash' },
    ],
    codeSnippet: `server {
    listen 443 ssl http2;
    server_name api.example.com;

    ssl_certificate /etc/letsencrypt/live/api.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.example.com/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
    }
}`,
  },
];

const TechStack = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section
      id="tech-stack"
      className={`relative min-h-screen transition-colors duration-300 px-6 py-16 ${
        darkMode ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide border ${
            darkMode ? 'bg-gray-900 text-purple-400 border-gray-800' : 'bg-white border-gray-200 text-purple-600'
          }`}>
            <Layers size={13} /> SKILLS & ARCHITECTURE
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight mt-3 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-transparent bg-clip-text">
            Tech Stack Overview
          </h2>
          <p className={`mt-2 text-sm max-w-lg mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Full-stack application development, enterprise APIs, and self-hosted infrastructure.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techCategoriesData.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`rounded-2xl p-6 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-gray-900/60 border-gray-800 hover:border-purple-500/50'
                    : 'bg-white border-gray-200 shadow-sm hover:border-purple-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.accentColor} text-white shadow-sm`}>
                      <IconComponent size={20} />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                      darkMode ? 'bg-gray-800 text-purple-300 border-gray-700' : 'bg-purple-50 text-purple-700 border-purple-100'
                    }`}>
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className={`text-xs leading-relaxed mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-xs font-medium px-2.5 py-1 rounded-md border ${
                          darkMode
                            ? 'bg-gray-800/80 border-gray-700 text-gray-300'
                            : 'bg-gray-100 border-gray-200 text-gray-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;