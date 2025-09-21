import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-color/90 backdrop-blur-md border-b border-accent-color shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-text-color text-2xl font-bold tracking-wide">
          KHALIL.BOUHLEL
        </Link>

        <nav className="hidden md:flex space-x-8">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-text-color hover:text-accent-color transition-colors text-lg"
            >
              {item}
            </Link>
          ))}
        </nav>

        <button className="bg-accent-color text-background-color px-4 py-2 rounded-lg shadow-md hover:bg-secondary-color hover:text-background-color transition-all">
          Theme
        </button>
      </div>
    </header>
  );
}
