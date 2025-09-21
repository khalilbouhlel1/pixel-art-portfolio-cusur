'use client';

import { Inter } from 'next/font/google';
import Header from './Header';
import Footer from './Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const pressStart2P = {
  className: 'font-press-start',
  variable: '--font-press-start',
};

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-color focus:text-background-color focus:font-bold focus:rounded"
      >
        Skip to main content
      </a>
      
      <Header />
      
      <main id="main-content" className="flex-1 pt-24">
        {children}
      </main>
      
      <Footer />
      
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
