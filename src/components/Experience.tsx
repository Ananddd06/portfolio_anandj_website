import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Brain } from 'lucide-react';

const experiences = [
  {
    timeframe: 'January 2024 - April 2024',
    role: 'ELV and ICT Design Engineer',
    company: 'Larsen & Toubro',
    headerIcon: './l&t.png', // Path to the L&T logo for the header
    icon: Building2, // Original icon for the gradient box
    details: [
      'Design and integrate ELV systems like fire alarms, CCTV, access control, and BMS into the data center',
      'Create engineering drawings and layouts using AutoCAD, ensuring compliance with standards',
      'Plan and install structured cabling (fiber optic and copper) for optimal data center communication',
      'Prepare a Bill of Quantity based on technical specifications'
    ]
  },
  {
    timeframe: 'December 2024 - Present',
    role: 'AI/ML Engineer Intern',
    company: 'Gradtwin',
    headerIcon: './gradtwin.png', // Path to the Gradtwin logo for the header
    icon: Brain, // Original icon for the gradient box
    details: [
      'Developing and implementing machine learning models',
      'Working on natural language processing projects',
      'Collaborating with cross-functional teams on AI solutions',
      'Contributing to data preprocessing and feature engineering'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        Experience
      </motion.h2>

      <div className="container mx-auto px-4">
        {experiences.map((exp, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1
          });

          const Icon = exp.icon;

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="w-full md:w-1/2 space-y-4">
                {/* Updated to show the image logo near the header */}
                <div className="flex items-center gap-4">
                  <img
                    src={exp.headerIcon}
                    alt={`${exp.company} logo`}
                    className="w-10 h-10 object-contain"
                  />
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                </div>
                <p className="text-xl text-gray-400">{exp.company}</p>
                <p className="text-gray-500">{exp.timeframe}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 rounded-lg">
                <div className="aspect-video bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-lg flex items-center justify-center">
                  {/* Keep the original icon inside the box */}
                  <Icon size={64} className="text-white/50" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
