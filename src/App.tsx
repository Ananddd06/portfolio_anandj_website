import React from 'react';
import StarBackground from './components/StarBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative">
      <StarBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Experience />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;