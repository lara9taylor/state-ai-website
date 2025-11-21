import React from 'react';
import { Menu, X, ExternalLink, ChevronDown, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavBarProps {
  scrolled: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  const [mobileAudiencesOpen, setMobileAudiencesOpen] = React.useState(false);
  const [desktopNetworkOpen, setDesktopNetworkOpen] = React.useState(false);

  const networkLinks = [
    { name: "Starkville Events", url: "https://starkville.letaibe.com", status: "coming-soon" },
    { name: "The Ripple Talk", url: "https://ripple.letaibe.com", status: "coming-soon" },
    { name: "My Published Books", url: "https://books.letaibe.com", status: "coming-soon" },
    { name: "My AI Bots", url: "https://bots.letaibe.com", status: "active" },
    { name: "Learning the Gaps", url: "https://learning.letaibe.com", status: "coming-soon" },
    { name: "The Spark", url: "https://sparksymbol.org", status: "active" },
    { name: "Morphos Foundation", url: "https://morphos.letaibe.com", status: "coming-soon" },
    { name: "Kindness Generator", url: "https://kindness.letaibe.com", status: "active" },
    { name: "AI Consulting", url: "https://www.stateaistrategies.com", status: "active" },
    { name: "Coffee & Kayaks", url: "https://www.coffeeandkayaks.com", status: "active" }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Reset all submenu states when closing main menu
    if (mobileMenuOpen) {
      setMobileServicesOpen(false);
      setMobileAudiencesOpen(false);
    }
  };

  const services = [
    { name: 'AI Readiness Assessment', path: '/services/ai-readiness-assessment', price: '$225' },
    { name: 'Mississippi AI Starter Kit', path: '/services/mississippi-ai-starter-kit', price: '$2,500' },
    { name: 'AI Strategy Workshop', path: '/services/ai-strategy-workshop', price: '$2,000' },
    { name: 'Private AI Training', path: '/services/private-ai-training', price: '$1,200/day' },
  ];

  const audiences = [
    { name: 'Small Businesses', path: '/small-business' },
    { name: 'Nonprofits', path: '/nonprofits' },
    { name: 'Government Agencies', path: '/government' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center ${
        scrolled 
          ? 'bg-gradient-to-r from-[hsla(220,80%,35%,0.9)] via-[hsla(220,80%,35%,0.95)] to-[hsla(220,80%,35%,0.9)] backdrop-blur-md shadow-md' 
          : 'bg-gradient-to-r from-[hsla(220,80%,35%,1)] via-[hsla(220,80%,35%,1)] to-[hsla(220,80%,35%,1)]'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left side - Logo + Hamburger Menu */}
          <div className="flex items-center gap-4">
            {/* State AI Strategies Logo */}
            <Link 
              to="/"
              className="flex items-center"
            >
              <img 
                src="https://letaibe.com/images/state%20ai%20strategies.png" 
                alt="State AI Strategies - AI Consulting for Mississippi Businesses" 
                className="h-16 w-auto filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:drop-shadow-[0_0_12px_rgba(25,255,127,0.8)] transition-all duration-300"
              />
            </Link>

            {/* Hamburger Menu Button */}
            <button 
              className="focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>

          {/* Center - The Spark logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center pointer-events-auto">
            <a
              href="https://sparksymbol.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="https://github.com/lara9taylor/spark-symbol/raw/main/assets/spark-icon-color.png"
                alt="The Spark"
                className="h-14 sm:h-16 w-auto animate-flicker"
              />
            </a>
          </div>

          {/* Right side - Network Menu (Desktop Only) */}
          <div className="hidden lg:block relative">
            <button
              onClick={() => setDesktopNetworkOpen(!desktopNetworkOpen)}
              className="px-4 py-2 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e40af] transition-colors duration-200 font-medium"
            >
              Launch Network
            </button>
            
            {desktopNetworkOpen && (
              <div className="absolute right-0 top-full mt-2 w-[600px] bg-[hsla(210,100%,20%,0.95)] backdrop-blur-md shadow-lg rounded-lg border border-white/10 p-6">
                <div className="grid grid-cols-2 gap-4">
                  {networkLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                        link.status === 'active'
                          ? 'text-white bg-white/10 hover:bg-white/20'
                          : 'text-white/50 bg-white/5 cursor-not-allowed'
                      }`}
                      {...(link.status === 'active' ? {
                        target: "_blank",
                        rel: "noopener noreferrer"
                      } : {})}
                      onClick={() => link.status === 'active' && setDesktopNetworkOpen(false)}
                    >
                      <span className="text-sm font-medium">{link.name}</span>
                      {link.status === 'active' ? (
                        <ExternalLink className="h-4 w-4" />
                      ) : (
                        <span className="text-xs">Coming Soon</span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Slide-out Menu */}
        {mobileMenuOpen && (
          <div className="absolute left-0 top-full w-80 bg-[hsla(210,100%,20%,0.95)] backdrop-blur-md shadow-lg rounded-br-lg border-r border-b border-white/10">
            <div className="px-6 py-6">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/"
                  className="text-white font-medium hover:text-[#19FF7F] transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                
                <Link 
                  to="/about"
                  className="text-white font-medium hover:text-[#19FF7F] transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                
                {/* Services Menu */}
                <div>
                  <button 
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full text-white font-medium hover:text-[#19FF7F] transition-colors duration-200"
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      <Link
                        to="/services"
                        className="block text-white/80 hover:text-[#19FF7F] transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        All Services
                      </Link>
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block text-white/80 hover:text-[#19FF7F] transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Audiences Menu */}
                <div>
                  <button 
                    onClick={() => setMobileAudiencesOpen(!mobileAudiencesOpen)}
                    className="flex items-center justify-between w-full text-white font-medium hover:text-[#19FF7F] transition-colors duration-200"
                  >
                    Who We Serve
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAudiencesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileAudiencesOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {audiences.map((audience) => (
                        <Link
                          key={audience.path}
                          to={audience.path}
                          className="block text-white/80 hover:text-[#19FF7F] transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {audience.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};