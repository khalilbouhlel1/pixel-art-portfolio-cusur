import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Khalil Bouhlel | Full-Stack Developer',
  description: 'Portfolio of Khalil Bouhlel - Full-Stack Developer with a passion for creating pixel-perfect web experiences',
  keywords: ['portfolio', 'developer', 'full-stack', 'pixel art', 'web development'],
  authors: [{ name: 'Khalil Bouhlel' }],
  themeColor: '#1a1a2e',
  viewport: 'width=device-width, initial-scale=1',
  colorScheme: 'dark',
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
