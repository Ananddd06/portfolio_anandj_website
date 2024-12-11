import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'ATS-Friendly Resume Builder',
    description: 'Craft perfect, ATS-friendly resumes effortlessly with live editing and stunning templates!',
    image: 'https://alison.com/html/site/img/resume-builder/build-a-resume.svg',
    tech: ['React', 'Node.js', 'Clerk', 'BrainTree' , 'Tailwind'],
    links: {
      github: 'https://github.com/Ananddd06/Resume_Builder_Website',
      live: '#'
    }
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management and payment processing.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    tech: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind'],
    links: {
      github: 'https://github.com/Ananddd06/Amazon_Clone',
      live: '#'
    }
  },
  {
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with real-time updates and interactive visualizations.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000',
    tech: ['React', 'D3.js', 'Weather API', 'CSS'],
    links: {
      github: 'https://github.com/Ananddd06/react_native_Weather_app',
      live: '#'
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        Projects
      </motion.h2>

      <div className="container mx-auto px-4">
        {projects.map((project, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1
          });

          return (
            <motion.div
              key={project.title}
              ref={ref}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.links.github}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.links.live}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;