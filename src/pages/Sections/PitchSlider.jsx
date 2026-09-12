import React, { useState, useEffect } from 'react';
import { Sparkles, MessageSquare, X, Send } from 'lucide-react';

// Replace with your actual hero image path
import myImage from '../../assets/hero-image.png';

const FloatingPitchCard = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [selectedService, setSelectedService] = useState('systems');
  const [showInputForm, setShowInputForm] = useState(false);
  const [userMessage, setUserMessage] = useState('');

  // Handle scroll detection to show/hide the floating overlay
  useEffect(() => {
    const handleScroll = () => {
      // Don't show again if user manually clicked close
      if (isDismissed) return;

      // Appears after scrolling down 300px, hides when back near top
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  // Pitch Options tailored for Software Developers
  const pitchData = {
    systems: {
      title: "Need a Custom Software System?",
      desc: "End-to-end software solutions, custom business platforms, and core API development.",
      badge: "Systems & APIs",
      defaultPrompt: "Hi! I'm looking for a custom software system for my business. Let's discuss scope and budget."
    },
    web: {
      title: "Need a Website or Web App?",
      desc: "High-performance React/Next.js platforms, landing pages, or feature upgrades for existing sites.",
      badge: "Web Solutions",
      defaultPrompt: "Hey! I need help building/upgrading a web app. Could you share your availability?"
    },
    servers: {
      title: "Need Server & Infra Support?",
      desc: "Cloud infrastructure setup, database optimization, DevOps pipelines, and server management.",
      badge: "DevOps & Cloud",
      defaultPrompt: "Hello! I need assistance optimizing database performance and setup for our cloud infrastructure."
    },
  };

  const activePitch = pitchData[selectedService];

  // Quick preset options users can tap to quickly populate message
  const quickPrompts = [
    "What's your current availability?",
    "Can you share estimated pricing?",
    "Let's schedule a brief call."
  ];

  const handleServiceSelect = (key) => {
    setSelectedService(key);
    setUserMessage(pitchData[key].defaultPrompt);
  };

const handleSendMessage = (e) => {
  e.preventDefault();  
  const phoneNumber = '256750335944';   
  const encodedMsg = encodeURIComponent(userMessage);  
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, '_blank');
};
  if (isDismissed) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 max-w-sm w-full transition-all duration-500 ease-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      {/* Main Overlay Card with Theme-Based Styles */}
      <div
        className={`relative rounded-xl p-4 shadow-2xl transition-all duration-300 border ${
          darkMode
            ? 'bg-dark-card border-gray-800 text-gray-100 shadow-black/60'
            : 'bg-light-card border-gray-100 text-gray-900 shadow-xl'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className={`absolute top-3 right-3 p-1 rounded-full transition-colors cursor-pointer ${
            darkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-500'
          }`}
          aria-label="Dismiss message"
        >
          <X size={16} />
        </button>

        {/* Content Body: Fixed 12x12 Avatar + Pitch Details */}
        <div className="flex items-start gap-3 mb-3">
          {/* Avatar Container: Explicit 12x12 (48px x 48px) sizing */}
          <div className="relative shrink-0 w-12 h-12">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
              <img
                src={myImage}
                alt="Developer Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Online Pulse Indicator */}
            <span className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 ${
              darkMode ? 'border-gray-900' : 'border-white'
            } animate-pulse`} />
          </div>

          {/* Pitch Text */}
          <div className="flex-1 min-w-0 pr-4">
            <h4 className="text-sm font-bold tracking-tight text-primary">
              {activePitch.title}
            </h4>
            <p
              className={`text-xs mt-1 leading-relaxed ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}
            >
              {activePitch.desc}
            </p>
          </div>
        </div>

        {/* Service Selector Tabs */}
        <div className={`grid grid-cols-3 gap-1 p-1 rounded-lg mb-3 text-xs font-medium ${
          darkMode ? 'bg-gray-800/80' : 'bg-gray-100'
        }`}>
          <button
            onClick={() => handleServiceSelect('systems')}
            className={`py-1.5 rounded-md transition-all cursor-pointer ${
              selectedService === 'systems'
                ? 'bg-primary text-white shadow-xs font-semibold'
                : darkMode
                ? 'text-gray-400 hover:text-gray-200'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Systems
          </button>
          <button
            onClick={() => handleServiceSelect('web')}
            className={`py-1.5 rounded-md transition-all cursor-pointer ${
              selectedService === 'web'
                ? 'bg-primary text-white shadow-xs font-semibold'
                : darkMode
                ? 'text-gray-400 hover:text-gray-200'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Web Apps
          </button>
          <button
            onClick={() => handleServiceSelect('servers')}
            className={`py-1.5 rounded-md transition-all cursor-pointer ${
              selectedService === 'servers'
                ? 'bg-primary text-white shadow-xs font-semibold'
                : darkMode
                ? 'text-gray-400 hover:text-gray-200'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Servers
          </button>
        </div>

        {/* EXPANDABLE MESSAGE FORM DRAWER */}
        {showInputForm ? (
          <form onSubmit={handleSendMessage} className="space-y-2.5 animate-in fade-in duration-300">
            {/* Quick Prompt Recommendation Chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setUserMessage(prompt)}
                  className={`text-xs font-medium px-2 py-1 rounded-full border transition-all cursor-pointer ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <textarea
                rows={3}
                value={userMessage || activePitch.defaultPrompt}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Type your message here..."
                className={`w-full p-2.5 text-xs rounded-lg border focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500'
                    : 'bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400'
                }`}
              />
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowInputForm(false)}
                className={`py-3 px-3 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  darkMode
                    ? 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-1.5 py-3 px-4 rounded-md text-xs font-semibold text-white bg-primary hover:bg-primary-hover active:scale-98 transition-all shadow-md shadow-primary/20 cursor-pointer"
              >
                <span>Send Message</span>
                <Send size={12} />
              </button>
            </div>
          </form>
        ) : (
          /* Primary Action CTA Toggle */
          <button
            onClick={() => {
              setShowInputForm(true);
              if (!userMessage) setUserMessage(activePitch.defaultPrompt);
            }}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-xs font-semibold text-white bg-primary hover:bg-primary-hover active:scale-98 transition-all shadow-md shadow-primary/20 cursor-pointer"
          >
            <MessageSquare size={14} />
            <span>Chat with me</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default FloatingPitchCard;