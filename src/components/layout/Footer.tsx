const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-color text-text-color py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {currentYear} Khalil Bouhlel. All rights reserved.</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            {[
              { name: 'GitHub', url: 'https://github.com' },
              { name: 'LinkedIn', url: 'https://linkedin.com' },
              { name: 'Twitter', url: 'https://twitter.com' },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-color hover:text-text-color transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-accent-color">Made with ❤️ and creativity</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
