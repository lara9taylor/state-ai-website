import React from 'react';
import { NavBar } from './NavBar';
import { BackToTop } from './BackToTop';

interface PageTemplateProps {
  children: React.ReactNode;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 min-h-screen flex flex-col">
        <NavBar scrolled={scrolled} />
        <main className="flex-grow">
          {children}
        </main>
      </div>
      <BackToTop />
    </div>
  );
};