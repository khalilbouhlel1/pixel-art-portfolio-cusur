import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'accent-color': 'var(--accent-color)',
        'background-color': 'var(--background-color)',
        'text-color': 'var(--text-color)',
        'futuristic-primary': '#1e3a8a',
        'futuristic-secondary': '#9333ea',
        'futuristic-accent': '#14b8a6',
        'minimal-primary': '#ffffff',
        'minimal-secondary': '#e5e7eb',
        'dark-matter-primary': '#0f172a',
        'dark-matter-accent': '#1e293b',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Press Start 2P"', 'cursive'],
      },
      backgroundImage: {
        'dark-matter': "url('/images/dark-matter-bg.png')",
        'futuristic-glow': "linear-gradient(135deg, #1e3a8a, #9333ea)",
      },
      boxShadow: {
        glow: '0 0 15px rgba(147, 51, 234, 0.5)',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
