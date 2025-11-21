import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, Twitter, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Social Media Links */}
          <div className="flex items-center justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/company/state-ai-strategies"
              className="text-white hover:text-[#FDC526] transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://www.instagram.com/stateaistrategies/"
              className="text-white hover:text-[#FDC526] transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="https://www.facebook.com/stateaistrategies"
              className="text-white hover:text-[#FDC526] transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a 
              href="https://x.com/GenAIforMS"
              className="text-white hover:text-[#FDC526] transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a 
              href="https://substack.com/@lara9taylor"
              className="text-white hover:text-[#FDC526] transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
              </svg>
            </a>
          </div>

          {/* Center Column - Newsletter Signup */}
          <div className="flex flex-col items-center">
            <h3 className="text-[#19FF7F] font-semibold text-xl mb-2">
              Join the AI Newsletter
            </h3>
            <p className="text-white text-sm mb-4">
              Stay updated on AI tools and insights
            </p>
            <form className="w-full max-w-md space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:border-[#FDC526] text-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:border-[#FDC526] text-white"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#19FF7F] text-black font-semibold rounded-md hover:bg-[#19FF7F]/90 transition-colors duration-200"
              >
                Subscribe Now
              </button>
            </form>
          </div>

          {/* Right Column - Contact Information and Copyright */}
          <div className="flex flex-col items-center justify-center h-full text-center text-sm space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4 text-[#19FF7F]" />
                <a 
                  href="tel:+16627220335" 
                  className="text-white hover:text-[#FDC526] transition-colors duration-200"
                >
                  Call or Text (662) 722-0335
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4 text-[#19FF7F]" />
                <a 
                  href="mailto:larataylor@stateaistrategies.com" 
                  className="text-white hover:text-[#FDC526] transition-colors duration-200"
                >
                  larataylor@stateaistrategies.com
                </a>
              </div>
            </div>
            <div className="border-t border-white/20 pt-4 space-y-1">
              <p className="text-white">© 2025 LetAIBe Network, LLC. All rights reserved.</p>
              <p className="text-white">Visit us at letaibe.ai.</p>
            </div>
          </div>
        </div>

        {/* Sitemap Section */}
        <nav aria-label="Site Map" className="border-t border-white/10 mt-8 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            {/* Services Column */}
            <div>
              <h4 className="text-white/60 font-semibold mb-2 uppercase tracking-wider">Services</h4>
              <ul className="space-y-1.5">
                <li>
                  <Link to="/ai-content-jumpstart" className="text-white/50 hover:text-[#19FF7F] transition-colors duration-200">
                    AI Content Jumpstart
                  </Link>
                </li>
                <li>
                  <Link to="/services/ai-readiness-assessment" className="text-white/50 hover:text-[#19FF7F] transition-colors duration-200">
                    AI Readiness Assessment
                  </Link>
                </li>
                <li>
                  <Link to="/services/mississippi-ai-starter-kit" className="text-white/50 hover:text-[#19FF7F] transition-colors duration-200">
                    Mississippi AI Starter Kit
                  </Link>
                </li>
                <li>
                  <Link to="/services/ai-enhanced-web-design" className="text-white/50 hover:text-[#19FF7F] transition-colors duration-200">
                    AI-Enhanced Web Design
                  </Link>
                </li>
                <li>
                  <Link to="/services/ai-strategy-workshop" className="text-white/50 hover:text-[#19FF7F] transition-colors duration-200">
                    AI Strategy Workshop
                  </Link>
                </li>
              </ul>
            </div>

            {/* More Services Column */}
            <div>
              <h4 className="text-white/60 font-semibold mb-2 uppercase tracking-wider">More Services</h4>
              <ul className="space-y-1.5">
                <li>
                  <Link to="/services/private-ai-training" className="text-white/50 hover:text-[#19FF7F] transition-colors duration-200">
                    Private AI Training
                  </Link>
                </li>
                <li>
                  <Link to="/services/custom-ai-assistants" className="text-white/50 hover:text-[#19FF7F] transition-colors duration-200">
                    Custom AI Assistants
                  </Link>
                </li>
                <li>
                  <Link to="/services/ai-powered-dashboards" className="text-white/50 hover:text-[#19FF7F] transition-colors duration-200">
                    AI-Powered Dashboards
                  </Link>
                </li>
                <li>
                  <Link to="/services/starkville-ai-workshop" className="text-white/50 hover:text-[#19FF7F] transition-colors duration-200">
                    Starkville AI Workshop Series
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-white/60 font-semibold mb-2 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-1.5">
                <li>
                  <Link to="/" className="text-white/50 hover:text-[#19FF7F] transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/50 hover:text-[#19FF7F] transition-colors duration-200">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-white/50 hover:text-[#19FF7F] transition-colors duration-200">
                    Services Overview
                  </Link>
                </li>
                <li>
                  <Link to="/small-business" className="text-white/50 hover:text-[#19FF7F] transition-colors duration-200">
                    Small Business
                  </Link>
                </li>
                <li>
                  <Link to="/nonprofits" className="text-white/50 hover:text-[#19FF7F] transition-colors duration-200">
                    Nonprofits
                  </Link>
                </li>
                <li>
                  <Link to="/government" className="text-white/50 hover:text-[#19FF7F] transition-colors duration-200">
                    Government
                  </Link>
                </li>
                <li>
                  <Link to="/startups-solopreneurs" className="text-white/50 hover:text-[#19FF7F] transition-colors duration-200">
                    Startups & Solopreneurs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
};