'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type Theme = {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  preview: string;
};

const themes: Theme[] = [
  {
    id: 'cyberpunk',
    name: 'Cyberpunk Neon',
    description: 'Electric purple, pink, and cyan',
    colors: {
      primary: '#ff00ff',
      secondary: '#00ffff',
      accent: '#ff0080',
    },
    preview: 'cyberpunk',
  },
  {
    id: 'retro-sunset',
    name: 'Retro Sunset',
    description: 'Warm orange, yellow, and red',
    colors: {
      primary: '#ff6600',
      secondary: '#ffaa00',
      accent: '#ff3300',
    },
    preview: 'sunset',
  },
  {
    id: 'matrix',
    name: 'Matrix Green',
    description: 'Classic terminal green',
    colors: {
      primary: '#00ff00',
      secondary: '#00cc00',
      accent: '#00aa00',
    },
    preview: 'matrix',
  },
  {
    id: 'arctic',
    name: 'Arctic Blue',
    description: 'Ice blue and cyan tones',
    colors: {
      primary: '#00bfff',
      secondary: '#87ceeb',
      accent: '#4682b4',
    },
    preview: 'arctic',
  },
  {
    id: 'retro-tv',
    name: 'Retro TV',
    description: 'Monochrome CRT aesthetic',
    colors: {
      primary: '#ffffff',
      secondary: '#cccccc',
      accent: '#888888',
    },
    preview: 'tv',
  },
];

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('cyberpunk');

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('portfolio-theme') || 'cyberpunk';
    setCurrentTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    if (!theme) return;

    // Remove existing theme classes
    document.documentElement.classList.remove('theme-cyberpunk', 'theme-retro-sunset', 'theme-matrix', 'theme-arctic', 'theme-retro-tv');
    
    // Add new theme class
    document.documentElement.classList.add(`theme-${themeId}`);
    
    // Save to localStorage
    localStorage.setItem('portfolio-theme', themeId);
    setCurrentTheme(themeId);
  };

  const currentThemeData = themes.find(t => t.id === currentTheme);

  return (
    <div className="fixed top-4 right-4 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary-color/90 backdrop-blur-md border-2 border-accent-color p-3 rounded-lg hover:bg-secondary-color hover:text-white transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title="Switch Theme"
      >
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: currentThemeData?.colors.primary }}></div>
          <span className="text-xs font-display">THEME</span>
        </div>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 right-0 bg-background-color/95 backdrop-blur-md border-2 border-accent-color rounded-lg p-4 min-w-64"
        >
          <h3 className="text-accent-color text-sm font-display mb-3">CHOOSE THEME</h3>
          <div className="space-y-2">
            {themes.map((theme) => (
              <motion.button
                key={theme.id}
                onClick={() => {
                  applyTheme(theme.id);
                  setIsOpen(false);
                }}
                className={`w-full p-3 rounded border-2 transition-all duration-200 text-left ${
                  currentTheme === theme.id
                    ? 'border-accent-color bg-accent-color/10'
                    : 'border-accent-color/30 hover:border-accent-color/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <div 
                      className="w-3 h-3 rounded-full border border-accent-color/30" 
                      style={{ backgroundColor: theme.colors.primary }}
                    ></div>
                    <div 
                      className="w-3 h-3 rounded-full border border-accent-color/30" 
                      style={{ backgroundColor: theme.colors.secondary }}
                    ></div>
                    <div 
                      className="w-3 h-3 rounded-full border border-accent-color/30" 
                      style={{ backgroundColor: theme.colors.accent }}
                    ></div>
                  </div>
                  <div>
                    <div className="text-accent-color text-xs font-display">{theme.name}</div>
                    <div className="text-text-color text-xs">{theme.description}</div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
          
          <div className="mt-4 pt-3 border-t border-accent-color/30">
            <p className="text-text-color text-xs text-center">
              Current: <span className="text-accent-color">{currentThemeData?.name}</span>
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
