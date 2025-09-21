'use client';

import { motion } from 'framer-motion';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-dark-matter-primary to-dark-matter-accent text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent-color mb-4">
            Skills
          </h2>
          <p className="text-lg md:text-xl text-secondary-color max-w-2xl mx-auto">
            A collection of tools and technologies I use to build amazing digital
            experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-dark-matter-accent rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-accent-color mb-4">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-secondary-color text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
