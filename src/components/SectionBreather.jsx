import React from 'react';
import { Terminal, Cpu, Database, Server, GitBranch, ShieldCheck, Activity } from 'lucide-react';

const SectionBreather = ({ darkMode }) => {
  // Floating technology icons for the background grid
  const techIcons = [
    { Icon: Terminal, label: 'CLI', pos: 'top-16 left-[10%]' },
    { Icon: Cpu, label: 'Core', pos: 'bottom-24 left-[15%]' },
    { Icon: Database, label: 'Data', pos: 'top-20 right-[12%]' },
    { Icon: Server, label: 'VPS', pos: 'bottom-20 right-[14%]' },
    { Icon: GitBranch, label: 'Git', pos: 'top-32 left-[42%]' },
    { Icon: ShieldCheck, label: 'Auth', pos: 'bottom-32 right-[38%]' },
  ];

  return (
    <section className="relative w-full min-h-[550px] md:h-[650px] py-16 md:py-0 overflow-hidden my-16 flex items-center justify-center">
      {/* Background Mesh Network Graphic */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />

      {/* Dark / Light Multi-layer Overlay for Soft Breathing Vignette */}
      <div 
        className={`absolute inset-0 transition-colors duration-500 ${
          darkMode 
            ? 'bg-gradient-to-b via-gray-950/90 from-gray-950 to-gray-950' 
            : 'bg-gradient-to-b via-purple-950/85 from-gray-900 to-gray-950'
        }`} 
      />

      {/* Radial Glow & Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.2)_0%,transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      {/* Floating Network Nodes (Decorative) */}
      <div className="absolute inset-0 hidden md:block pointer-events-none">
        {techIcons.map((item, idx) => {
          const IconComp = item.Icon;
          return (
            <div
              key={idx}
              className={`absolute ${item.pos} flex items-center gap-2.5 px-4 py-2 rounded-full border backdrop-blur-md shadow-xl transition-all duration-700 animate-pulse ${
                darkMode
                  ? 'bg-gray-900/70 border-purple-500/30 text-purple-300'
                  : 'bg-white/10 border-white/20 text-purple-200'
              }`}
              style={{ animationDelay: `${idx * 0.5}s`, animationDuration: '4.5s' }}
            >
              <IconComp size={16} />
              <span className="text-xs font-mono tracking-widest uppercase">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Center Breathing Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center flex flex-col items-center justify-center">
        {/* Animated Pulsing Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 mb-8 rounded-full text-xs font-semibold tracking-widest text-purple-300 border border-purple-500/30 bg-purple-950/50 backdrop-blur-md shadow-lg">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
          </span>
          <span>SYSTEM ARCHITECTURE & INTEGRATION</span>
        </div>

        {/* Breathing Quote / Statement */}
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight md:leading-snug max-w-3xl">
          Building scalable software with{' '}
          <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 text-transparent bg-clip-text">
            clean logic
          </span>{' '}
          & robust infrastructure.
        </h3>

        {/* Subtext description to fill height gracefully */}
        <p className="mt-6 text-sm md:text-base text-gray-400 max-w-xl mx-auto font-normal leading-relaxed">
          Combining the flexibility of JavaScript SPA architectures, strongly-typed .NET APIs, and optimized Linux deployment pipelines.
        </p>

        {/* Micro System Performance Pill Strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10 border border-purple-500/20 bg-gray-900/60 backdrop-blur-md px-6 py-3.5 rounded-2xl text-xs font-mono text-gray-300 shadow-xl">
          <div className="flex items-center gap-2">
            <Activity size={14} className="text-purple-400 animate-pulse" />
            <span>UPTIME: <strong className="text-purple-300">99.9%</strong></span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-700 hidden sm:block" />
          <div>
            STACK: <strong className="text-purple-300">MERN + .NET</strong>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-700 hidden sm:block" />
          <div>
            HOSTING: <strong className="text-purple-300">Linux / VPS</strong>
          </div>
        </div>

        {/* Decorative Divider Line */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-purple-500/50" />
          <div className="w-2 h-2 rounded-full bg-purple-400" />
          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-purple-500/50" />
        </div>
      </div>
    </section>
  );
};

export default SectionBreather;