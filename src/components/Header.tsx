import React, { useState, useEffect } from 'react';
import { Bot, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-purple-500" />
            <span className="text-xl font-bold text-white">My AI Bots</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#bots" className="text-gray-300 hover:text-white transition-colors">Bots</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Try Now
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#bots" className="text-gray-300 hover:text-white transition-colors">Bots</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Try Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};