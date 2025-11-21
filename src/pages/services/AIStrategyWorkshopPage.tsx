import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Users, MapPin, Phone, Mail, Calendar } from 'lucide-react';
import { PageTemplate } from '../../components/PageTemplate';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { BackButton } from '../../components/BackButton';
import { RelatedServicesCarousel } from '../../components/RelatedServicesCarousel';

export const AIStrategyWorkshopPage: React.FC = () => {
  return (
    <PageTemplate>
      <Helmet>
        <title>AI Strategy Workshop | Business AI Planning Mississippi</title>
        <meta name="description" content="Map your AI opportunities in a clear, collaborative session tailored for Mississippi businesses. Align your team and create a strategic roadmap for AI implementation." />
        <meta name="keywords" content="AI strategy workshop, business AI planning, AI roadmap development, Mississippi AI consulting, team AI alignment" />
        <link rel="canonical" href="https://www.stateaistrategies.com/services/ai-strategy-workshop" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Strategy Workshop | Business AI Planning Mississippi" />
        <meta property="og:description" content="Map your AI opportunities in a clear, collaborative session tailored for Mississippi businesses. Align your team and create a strategic roadmap for AI implementation." />
        <meta property="og:url" content="https://www.stateaistrategies.com/services/ai-strategy-workshop" />
        <meta property="og:type" content="service" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="AI Strategy Workshop | Business AI Planning Mississippi" />
        <meta name="twitter:description" content="Map your AI opportunities in a clear, collaborative session tailored for Mississippi businesses. Align your team and create a strategic roadmap for AI implementation." />
      </Helmet>
      <div className="pt-32 pb-12 px-4">
        {/* Navigation */}
        <div className="max-w-4xl mx-auto mb-8">
          <Breadcrumbs />
          <BackButton />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Strategy Workshop for Mississippi Businesses
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              AI Strategy Services & Automation for Your Business
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="bg-[#19FF7F] text-black px-4 py-2 rounded-full font-semibold">$2,000</span>
              <span className="text-white/70">•</span>
              <span className="text-[#19FF7F] font-semibold">Best for Planning</span>
            </div>
            <p className="text-white/80 mb-8">
              0% interest payment plans available: $600 down, $233.33/month for 6 months
            </p>
            {/* Hero Image */}
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/Two businesswoman discuss investment project working and planning strategy on digital tablet.jpeg"
                alt="Two professional businesswomen collaborating on investment strategy and AI implementation planning using digital tablet"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>

          {/* Workshop Overview */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Workshop Overview</h2>
            <h3 className="text-xl font-semibold text-[#19FF7F] mb-4">Custom AI Tools for Small Business & Nonprofits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Target className="w-12 h-12 text-[#19FF7F] mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Strategic Focus</h3>
                <p className="text-white/80">Identify high-impact AI opportunities aligned with your business goals</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-[#19FF7F] mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Team Alignment</h3>
                <p className="text-white/80">Get your leadership team on the same page about AI strategy</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#19FF7F] mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Clear Roadmap</h3>
                <p className="text-white/80">Leave with a concrete plan for AI implementation</p>
              </div>
            </div>
          </motion.div>

          {/* What's Included */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">What's Included</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">4-Hour Interactive Workshop</h3>
                  <p className="text-white/80">In-person or virtual session with your leadership team</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Business Process Mapping</h3>
                  <p className="text-white/80">Visual mapping of current processes and AI integration points</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Priority Matrix Development</h3>
                  <p className="text-white/80">Collaborative prioritization of AI opportunities by impact and effort</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Implementation Timeline</h3>
                  <p className="text-white/80">Detailed 6-12 month roadmap with milestones and dependencies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Resource Planning</h3>
                  <p className="text-white/80">Budget estimates, team requirements, and vendor recommendations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Follow-up Materials</h3>
                  <p className="text-white/80">Digital copies of all workshop materials and action items</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Workshop Agenda */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Workshop Agenda</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#19FF7F] text-black rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Current State Assessment (60 min)</h3>
                  <p className="text-white/80">Review existing processes, pain points, and technology landscape</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#19FF7F] text-black rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">AI Opportunity Identification (90 min)</h3>
                  <p className="text-white/80">Brainstorm and evaluate potential AI applications for your business</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#19FF7F] text-black rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Prioritization & Planning (60 min)</h3>
                  <p className="text-white/80">Create priority matrix and develop implementation timeline</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#19FF7F] text-black rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Action Planning (30 min)</h3>
                  <p className="text-white/80">Define next steps, assign responsibilities, and set follow-up schedule</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Who Should Attend */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Who Should Attend</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-[#19FF7F] font-semibold mb-3">Key Stakeholders</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• CEO/Owner</li>
                  <li>• Operations Manager</li>
                  <li>• IT/Technology Lead</li>
                  <li>• Department Heads</li>
                  <li>• Project Managers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#19FF7F] font-semibold mb-3">Ideal Team Size</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• 3-8 participants</li>
                  <li>• Decision-making authority</li>
                  <li>• Cross-functional representation</li>
                  <li>• Process knowledge</li>
                  <li>• Implementation ownership</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-br from-[#19FF7F]/20 to-[#FDC526]/20 rounded-xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Align Your Team on AI Strategy?</h2>
            <p className="text-lg text-white/90 mb-8">
              Book your AI Strategy Workshop and leave with a clear roadmap for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://appt.link/lara9taylor/web-conference"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#19FF7F] text-black font-semibold rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200"
              >
                Schedule Workshop
              </a>
              <a
                href="tel:+16627220335"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                Call (662) 722-0335
              </a>
              <a
                href="mailto:larataylor@stateaistrategies.com?subject=AI Strategy Workshop Inquiry"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* Related Services */}
        <div className="max-w-6xl mx-auto px-4 mt-16">
          <RelatedServicesCarousel currentService="ai-strategy-workshop" />
        </div>
      </div>
    </PageTemplate>
  );
};