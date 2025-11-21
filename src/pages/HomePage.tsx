import React from 'react';
import { NetworkGrid } from '../components/NetworkGrid';
import { ServicesSection } from '../components/ServicesSection';
import { AboutSection } from '../components/AboutSection';
import { ExternalLink } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <>
      <NetworkGrid />

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-8 shadow-lg">
          <div className="flex items-start gap-3 mb-4">
            <div className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">NEW</div>
            <h2 className="text-2xl font-bold text-gray-900">AI Content Jumpstart — $200</h2>
          </div>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            A fast, focused 48-hour content strategy built for small businesses, creators, and local entrepreneurs.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Book a 30-minute strategy session and get a custom content roadmap, 10 personalized AI prompts, and a 14-day content plan — delivered in 48 hours.
          </p>
          <a
            href="https://appt.link/lara9taylor/ai-content-jumpstart-200"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            Book Now
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <ServicesSection />
      <AboutSection />
    </>
  );
};