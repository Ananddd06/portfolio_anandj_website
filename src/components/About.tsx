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
    });

    return () => {
      typedAboutMe.destroy();
    };
  }, []);

  return (
    <section className="mt-20 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-4">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full flex justify-center md:w-1/2 md:order-2 mb-6 md:mb-0"
      >
        <img
          src="/profile.jpg" // Image from public folder
          alt="Anand"
          className="rounded-full w-48 h-48 md:w-60 md:h-60 object-cover shadow-lg"
        />
      </motion.div>

      {/* About Me Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col w-full md:w-1/2 text-center md:text-left"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
          About Me
        </h3>

        <div className="relative">
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 italic">
            <span ref={typedRefAboutMe}></span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
