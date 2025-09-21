'use client';

import { useState, useEffect } from 'react';

export default function ThemeDebugger() {
  const [currentTheme, setCurrentTheme] = useState('');

  useEffect(() => {
    const updateTheme = () => {
      const htmlElement = document.documentElement;
      const themeClass = Array.from(htmlElement.classList).find(cls => cls.startsWith('theme-'));
      setCurrentTheme(themeClass || 'none');
    };

    updateTheme();
    
    // Update when theme changes
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });

    return () => observer.disconnect();
  }, []);

  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-background-color/90 backdrop-blur-md border border-accent-color p-2 rounded text-xs font-display z-50">
      <div className="text-accent-color">Theme Debug:</div>
      <div className="text-text-color">Current: {currentTheme}</div>
      <div className="text-text-color">Saved: {localStorage.getItem('portfolio-theme') || 'none'}</div>
    </div>
  );
}
