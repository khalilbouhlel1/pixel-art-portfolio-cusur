'use client';

import { motion } from 'framer-motion';

const stats = [
  { name: 'Projects Completed', value: '50+' },
  { name: 'Years of Experience', value: '5+' },
  { name: 'Technologies Mastered', value: '20+' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-dark-matter-primary text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent-color mb-4">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-secondary-color max-w-2xl mx-auto">
            I am a passionate full-stack developer dedicated to creating innovative and user-friendly digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-dark-matter-accent rounded-lg shadow-lg text-center"
            >
              <h3 className="text-2xl font-bold text-accent-color mb-2">
                {stat.value}
              </h3>
              <p className="text-secondary-color text-sm">
                {stat.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
