import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// These are server components by default
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const pressStart2P = {
  className: 'font-press-start',
  variable: '--font-press-start',
};

// This is a server component by default, so we can export metadata
export const metadata: Metadata = {
  title: 'Khalil Bouhlel | Full-Stack Developer',
  description: 'Portfolio of Khalil Bouhlel - Full-Stack Developer with a passion for creating pixel-perfect web experiences',
  keywords: ['portfolio', 'developer', 'full-stack', 'pixel art', 'web development'],
  authors: [{ name: 'Khalil Bouhlel' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://khalil-bouhlel.vercel.app',
    title: 'Khalil Bouhlel | Full-Stack Developer',
    description: 'Portfolio of Khalil Bouhlel - Full-Stack Developer with a passion for creating pixel-perfect web experiences',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Khalil Bouhlel Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khalil Bouhlel | Full-Stack Developer',
    description: 'Portfolio of Khalil Bouhlel - Full-Stack Developer with a passion for creating pixel-perfect web experiences',
    creator: '@khalilbouhlel',
    images: ['/og-image.jpg'],
  },
};

// This is a server component by default
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${pressStart2P.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1a1a2e" />
      </head>
      <body className={`${inter.variable} ${pressStart2P.variable} font-sans min-h-screen flex flex-col bg-background-color text-text-color antialiased`}>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}

// Import the client-side wrapper component
import ClientLayoutWrapper from '@/components/layout/ClientLayoutWrapper';
