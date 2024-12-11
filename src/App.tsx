import React, { useState } from 'react';
import StarBackground from './components/StarBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`relative ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <StarBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Experience />
        <TechStack />
        <Projects />
        <Contact />
        {/* Toggle Button */}
        {/* <div className="flex justify-center items-center my-8">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-md bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
          >
            Switch to {isDarkMode ? 'Light' : 'Dark'} Theme
          </button>
        </div> */}
      </main>
    </div>
  );
}

export default App;
