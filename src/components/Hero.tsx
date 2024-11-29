import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import About from './About'; // Import About component

const Hero = () => {
  const typedRefHero = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRefHero.current) return;

    const typedHero = new Typed(typedRefHero.current, {
      strings: ['Software <span class="text-dark-pink">Developer</span>', 'AI/ML <span class="text-dark-pink">Engineer</span>'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      loop: false,
      showCursor: true,
      cursorChar: '|',
      html: true,
      onComplete: () => {
        const cursorElement = document.querySelector('.typed-cursor');
        if (cursorElement) {
          cursorElement.classList.add('cursor-blink');
        }
      },
    });

    return () => {
      typedHero.destroy();
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      {/* Main Hero Section */}
      <div className="text-center space-y-8 mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hai There! <span className="animate-wave inline-block">👋</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold"
        >
          I'm Anand
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl text-gray-300"
        >
          <span ref={typedRefHero}></span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-10"
        >
          <a
            href="/resume.pdf" // Link to your PDF file in the public folder
            download
            className="bg-dark-pink text-white px-6 py-2 rounded-md shadow-lg hover:bg-pink-600 transition duration-300"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* About Section */}
      <About /> {/* Include the About component */}
    </section>
  );
};

export default Hero;
