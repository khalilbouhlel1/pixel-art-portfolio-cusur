'use client';

import { useEffect } from 'react';

export default function ThemeProvider() {
  useEffect(() => {
    // Initialize theme on mount
    const savedTheme = localStorage.getItem('portfolio-theme') || 'cyberpunk';
    // Remove any existing theme classes
    document.documentElement.classList.remove('theme-cyberpunk', 'theme-retro-sunset', 'theme-matrix', 'theme-arctic', 'theme-retro-tv');
    // Add the current theme class
    document.documentElement.classList.add(`theme-${savedTheme}`);
  }, []);

  return null;
}
