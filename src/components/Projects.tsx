import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'ATS-Friendly Resume Builder',
    description: 'Craft perfect, ATS-friendly resumes effortlessly with live editing and stunning templates!',
    image: 'https://static.vecteezy.com/system/resources/previews/010/379/547/non_2x/close-up-of-resume-with-magnifying-glass-computer-laptop-and-pen-on-wooden-background-photo.jpg',
    tech: ['React', 'Node.js', 'Clerk', 'BrainTree', 'Tailwind'],
    links: {
      github: 'https://github.com/Ananddd06/Resume_Builder_Website',
      live: '#'
    }
  },
  {
    title: 'US-VISA Approval Prediction System',
    description: 'Built a robust ML system to predict US visa approval outcomes based on applicant data using feature engineering, ensemble models, and explainable AI.',
    image: 'https://img.freepik.com/free-photo/closeup-shot-stamp-us-visa-application-form_181624-28139.jpg',
    tech: ['Python', 'Scikit-Learn', 'FastAPI', 'Docker', 'AWS'],
    links: {
      github: 'https://github.com/Ananddd06/US-Visa-Approval-Prediction',
      live: '#'
    }
  },
  {
    title: 'Network Security ML Pipeline',
    description: 'End-to-end ML pipeline for network intrusion detection with DVC for data versioning, MLflow for experiment tracking, and automated CI/CD using MLOps best practices.',
    image: 'data:image/jpeg;base64,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',
    tech: ['DVC', 'MLflow', 'EvidentlyAI', 'CI/CD', 'Docker', 'Python'],
    links: {
      github: 'https://github.com/Ananddd06/Network_Security_end_to_end_Mlops_DVC_Mlflow',
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
