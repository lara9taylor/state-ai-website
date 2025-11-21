import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative px-4 pt-32">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Logo */}
          <div className="lg:w-1/2">
            <img
              src="https://letaibe.com/images/state%20ai%20strategies.png"
              alt="State AI Strategies - Mississippi AI Consulting Firm Logo"
              className="w-full max-w-[500px] mx-auto"
            />
          </div>

          {/* Right Column - Text and CTAs */}
          <div className="lg:w-1/2 text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Practical AI. Built for your world.
            </h1>
            <p className="text-xl text-white/90 max-w-xl mb-8">
              At State AI Strategies, we design ethical, reliable AI solutions that remove complexity and give you back time. Our work is grounded in listening first, then creating tools that fit your exact needs... whether that's automating reports, streamlining customer outreach, or simplifying research. Based in Mississippi, we bring clarity, strategy, and trust to every project.
            </p>

            {/* New Service Announcement */}
            <div className="mb-6">
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-amber-500/20 via-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-400/40 p-3 shadow-2xl max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 animate-pulse"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-teal-400 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg animate-bounce">
                      NEW SERVICE
                    </div>
                    <h3 className="text-base font-bold text-white">
                      AI Content Jumpstart — $200
                    </h3>
                  </div>
                  <p className="text-xs text-gray-200 mb-2 leading-tight">
                    48-hour content strategy: 30-min session + custom roadmap + 10 AI prompts + 14-day plan.
                  </p>
                  <a
                    href="https://appt.link/lara9taylor/ai-content-jumpstart-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-1.5 rounded-lg font-bold text-xs hover:from-cyan-400 hover:to-teal-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transform"
                  >
                    Book Now
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+16627220335"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                Call or Text
              </a>
              <a
                href="mailto:larataylor@stateaistrategies.com"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
            <div className="mt-4">
              <a
                href="https://appt.link/lara9taylor/web-conference"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#19FF7F] text-black font-semibold rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200"
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};