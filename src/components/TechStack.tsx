import { motion } from 'framer-motion';

const technologies = [
  { name: 'React Native', icon: '📱' },
  { name: 'AWS', icon: '☁️' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'React.js', icon: '⚛️' },
  { name: 'HTML', icon: '🌐' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Clerk', icon: '🔐' },
  { name: 'Convex', icon: '📊' },
  { name: 'Java', icon: '☕' },
  { name: 'Python', icon: '🐍' }
];

const TechStack = () => {
  return (
    <section className="py-20 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        Tech Stack
      </motion.h2>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="bg-gradient-to-br from-dark-pink/20 to-purple-500/20 p-6 rounded-lg text-center hover:from-dark-pink/30 hover:to-purple-500/30 transition-all duration-300"
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <h3 className="text-lg font-semibold">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;