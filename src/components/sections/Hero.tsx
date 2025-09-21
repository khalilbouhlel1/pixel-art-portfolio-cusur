'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const text = "Welcome to My Digital Realm";

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-futuristic-primary to-futuristic-secondary relative">
      <div className="absolute inset-0 bg-opacity-50">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent-color rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${Math.random() * 2 + 1}s infinite alternate`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        <p className="text-lg md:text-xl text-accent-color mb-8">
          Crafting immersive digital experiences with creativity and precision.
        </p>

        <div className="flex justify-center gap-4">
          <motion.a
            href="#about"
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
          <motion.a
            href="#contact"
            className="btn bg-secondary-color hover:bg-accent-color"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </div>
    </section>
  );
}
