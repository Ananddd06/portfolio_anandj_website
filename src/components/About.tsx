import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

const About = () => {
  const typedRefAboutMe = useRef<HTMLSpanElement>(null);

  const aboutMeText = `
    I’m a recent Electronics and Communication Engineering graduate from Rajalakshmi Engineering College, Chennai, 
    passionate about leveraging technology to create innovative solutions. With a strong foundation in Data Structures 
    and Algorithms (DSA), I specialize in Python, Java, React.js, React Native, and Expo to build high-performance web 
    and mobile applications. I have hands-on experience with Clerk and Convex for seamless authentication and database integration.

    Proficient in HTML, CSS, and TailwindCSS, I excel at creating responsive interfaces. I thrive in collaborative environments, 
    focusing on clean, maintainable code and best practices. Let’s connect and create something extraordinary together!
  `;

  useEffect(() => {
    if (!typedRefAboutMe.current) return;

    const typedAboutMe = new Typed(typedRefAboutMe.current, {
      strings: [aboutMeText],
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
    <section className="mt-20 w-full max-w-6xl mx-auto px-4 flex flex-col items-center">
      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-white text-center mb-8"
      >
        About Me
      </motion.h3>

      {/* Content Section */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between w-full space-y-8 md:space-y-0">
        {/* About Me Text */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col space-y-4 w-full md:w-1/2"
        >
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
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="/profile.jpg" // Image from public folder
            alt="Anand"
            className="rounded-full w-40 h-40 md:w-60 md:h-60 object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
