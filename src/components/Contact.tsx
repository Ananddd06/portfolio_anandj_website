import { motion } from 'framer-motion';
import { Linkedin, Github, Code2 } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/anandj06/',
      icon: Linkedin,
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Ananddd06',
      icon: Github,
      color: 'hover:text-purple-500'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/getMaAnG/',
      icon: Code2,
      color: 'hover:text-yellow-500'
    }
  ];

  return (
    <section id="contact-me" className="py-20 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-8"
      >
        Feel Free to Connect with Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center space-x-8 mt-8"
      >
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className={`text-white transition-colors ${link.color}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Icon size={32} />
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Contact;