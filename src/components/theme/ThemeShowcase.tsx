'use client';

import { motion } from 'framer-motion';

const themePreviews = [
  {
    id: 'cyberpunk',
    name: 'Cyberpunk Neon',
    description: 'Electric purple, pink, and cyan for a futuristic vibe',
    colors: ['#ff00ff', '#00ffff', '#ff0080'],
    preview: '🌟',
  },
  {
    id: 'retro-sunset',
    name: 'Retro Sunset',
    description: 'Warm orange, yellow, and red gradients',
    colors: ['#ff6600', '#ffaa00', '#ff3300'],
    preview: '🌅',
  },
  {
    id: 'matrix',
    name: 'Matrix Green',
    description: 'Classic terminal green aesthetic',
    colors: ['#00ff00', '#00cc00', '#00aa00'],
    preview: '💚',
  },
  {
    id: 'arctic',
    name: 'Arctic Blue',
    description: 'Ice blue and cyan tones',
    colors: ['#00bfff', '#87ceeb', '#4682b4'],
    preview: '🧊',
  },
  {
    id: 'retro-tv',
    name: 'Retro TV',
    description: 'Monochrome CRT aesthetic',
    colors: ['#ffffff', '#cccccc', '#888888'],
    preview: '📺',
  },
];

export default function ThemeShowcase() {
  return (
    <section className="py-20 bg-background-color/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent-color mb-4">
            THEME GALLERY
          </h2>
          <div className="w-24 h-1 bg-accent-color mx-auto mb-6"></div>
          <p className="text-text-color max-w-2xl mx-auto">
            Choose your perfect aesthetic from our collection of retro-inspired themes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themePreviews.map((theme, index) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background-color/80 border-2 border-accent-color/30 rounded-lg p-6 hover:border-accent-color transition-colors"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{theme.preview}</div>
                <h3 className="text-xl font-bold text-accent-color mb-2">{theme.name}</h3>
                <p className="text-text-color text-sm">{theme.description}</p>
              </div>
              
              <div className="flex justify-center gap-2 mb-4">
                {theme.colors.map((color, colorIndex) => (
                  <div
                    key={`${theme.id}-color-${colorIndex}`}
                    className="w-8 h-8 rounded border border-accent-color/30"
                    style={{ backgroundColor: color }}
                    title={color}
                  ></div>
                ))}
              </div>
              
              <div className="text-center">
                <div className="text-xs text-text-color mb-2">PREVIEW COLORS:</div>
                <div className="flex justify-center gap-1">
                  {theme.colors.map((color, colorIndex) => (
                    <div
                      key={`${theme.id}-preview-${colorIndex}`}
                      className="w-3 h-3 rounded-full border border-accent-color/30"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-text-color mb-4">
            Click the theme button in the top-right corner to switch themes instantly!
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-color text-background-color rounded text-sm font-display">
            🎨 LIVE THEME SWITCHER
          </div>
        </motion.div>
      </div>
    </section>
  );
}
