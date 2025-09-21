'use client';

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ThemeSwitcher from '../theme/ThemeSwitcher';
import ThemeProvider from '../theme/ThemeProvider';
import ThemeDebugger from '../theme/ThemeDebugger';

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <ThemeProvider />
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-pixel-neon-green focus:text-pixel-dark focus:font-bold focus:rounded"
      >
        Skip to main content
      </a>
      
      <Header />
      
      <main id="main-content" className="flex-1 pt-24">
        {children}
      </main>
      
      <Footer />
      
      <ThemeSwitcher />
      <ThemeDebugger />
      
      {/* Add a focus ring for keyboard navigation */}
      <style jsx global>{`
        :focus-visible {
          outline: 2px solid var(--accent-color);
          outline-offset: 2px;
        }
        
        /* Smooth scrolling for anchor links */
        html {
          scroll-behavior: smooth;
        }
        
        /* Better text rendering for pixel font */
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
      `}</style>
    </>
  );
}
