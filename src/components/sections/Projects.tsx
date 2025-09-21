'use client';

import { motion } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
};

const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration.',
    technologies: ['Next.js', 'Node.js', 'Stripe'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates.',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio with a unique pixel art theme.',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    demoUrl: '#',
    codeUrl: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-dark-matter-primary text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent-color mb-4">
            Projects
          </h2>
          <p className="text-lg md:text-xl text-secondary-color max-w-2xl mx-auto">
            A showcase of my recent work and accomplishments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-dark-matter-accent rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-accent-color mb-2">
                {project.title}
              </h3>
              <p className="text-secondary-color text-sm mb-4">
                {project.description}
              </p>
              <ul className="space-y-1 mb-4">
                {project.technologies.map((tech) => (
                  <li key={tech} className="text-secondary-color text-xs">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between">
                <a
                  href={project.demoUrl}
                  className="text-accent-color hover:underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeUrl}
                  className="text-accent-color hover:underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
