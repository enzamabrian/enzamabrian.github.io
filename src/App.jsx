import React, { useState } from 'react';
import Home from './pages/Home';
import TechCursorCanvas from './components/TechCursorCanvas';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ServicesPitch from './pages/Sections/PitchSlider';

function App() {
  // Pass down or toggle darkMode state as needed by your components
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      {/* Dynamic tech cursor animation overlay */}
      <TechCursorCanvas darkMode={darkMode} />
      <ServicesPitch darkMode={darkMode} />
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
}

export default App;