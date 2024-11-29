import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

const Hero = () => {
  const typedRefHero = useRef<HTMLSpanElement>(null); // Ref for the typing effect in Hero section
  const typedRefAboutMe = useRef<HTMLSpanElement>(null); // Ref for the typing effect in About Me section

  // About Me Text (Your provided content)
  const aboutMeText = `
    I’m a recent Electronics and Communication Engineering graduate from Rajalakshmi Engineering College, Chennai, 
    passionate about leveraging technology to create innovative solutions. With a strong foundation in Data Structures 
    and Algorithms (DSA), I specialize in Python, Java, React.js, React Native, and Expo to build high-performance web 
    and mobile applications. I have hands-on experience with Clerk and Convex for seamless authentication and database integration.

    Proficient in HTML, CSS, and TailwindCSS, I excel at creating responsive interfaces. I thrive in collaborative environments, 
    focusing on clean, maintainable code and best practices. Let’s connect and create something extraordinary together!
  `;

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
        // Add cursor blinking animation after typing is complete
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

  useEffect(() => {
    if (!typedRefAboutMe.current) return;

    const typedAboutMe = new Typed(typedRefAboutMe.current, {
      strings: [aboutMeText], // Full about me text
      typeSpeed: 40,
      backSpeed: 20,
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
      typedAboutMe.destroy();
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
            href="/resume.pdf"
            download
            className="bg-dark-pink text-white px-6 py-2 rounded-md shadow-lg hover:bg-pink-600 transition duration-300"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* About Me Section */}
      <div className="mt-20 flex items-center justify-center w-full max-w-6xl mx-auto px-4">
        {/* About Me Text */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col space-y-4 w-full md:w-1/2"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white text-center mb-4">
            About Me
          </h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl leading-relaxed text-gray-300 italic"
          >
            <span ref={typedRefAboutMe}></span>
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0"
        >
          <img
            src="/profile.jpg" // Image from public folder
            alt="Anand"
            className="rounded-lg w-60 h-80 object-cover" // Larger image, rectangular shape
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
