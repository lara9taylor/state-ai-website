import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, Globe, MessageSquare, Calendar, BarChart3, Mic, Phone, Mail } from 'lucide-react';
import { PageTemplate } from '../../components/PageTemplate';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { BackButton } from '../../components/BackButton';
import { RelatedServicesCarousel } from '../../components/RelatedServicesCarousel';

export const AIEnhancedWebDesignPage: React.FC = () => {
  return (
    <PageTemplate>
      <Helmet>
        <title>AI-Enhanced Web Design & Updates | State AI Strategies</title>
        <meta name="description" content="Transform your website with AI chatbots, automated scheduling, analytics dashboards, and voice-search optimization. Starting at $350." />
        <meta name="keywords" content="AI web design, chatbot integration, voice search optimization, automated scheduling, analytics dashboard, Mississippi web design, AI website features" />
        <link rel="canonical" href="https://www.stateaistrategies.com/services/ai-enhanced-web-design" />

        {/* Open Graph */}
        <meta property="og:title" content="AI-Enhanced Web Design & Updates | State AI Strategies" />
        <meta property="og:description" content="Transform your website with AI chatbots, automated scheduling, analytics dashboards, and voice-search optimization. Starting at $350." />
        <meta property="og:url" content="https://www.stateaistrategies.com/services/ai-enhanced-web-design" />
        <meta property="og:type" content="service" />

        {/* Twitter */}
        <meta name="twitter:title" content="AI-Enhanced Web Design & Updates | State AI Strategies" />
        <meta name="twitter:description" content="Transform your website with AI chatbots, automated scheduling, analytics dashboards, and voice-search optimization. Starting at $350." />
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
              AI-Enhanced Web Design & Updates
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Your Website Should Work as Hard as You Do
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="bg-[#19FF7F] text-black px-4 py-2 rounded-full font-semibold">$350 & up</span>
              <span className="text-white/70">•</span>
              <span className="text-[#19FF7F] font-semibold">Best for Smart Growth</span>
            </div>
            {/* Hero Image */}
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/Website development team sketching wireframe layout for responsive web content.jpeg"
                alt="Web development team collaborating on wireframe layout for responsive website design and AI integration"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>

          {/* Overview */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Why AI-Enhanced Websites?</h2>
            <p className="text-white/90 text-lg mb-4">
              A modern website should do more than sit online—it should think with you. Our AI-enhanced websites integrate automation, chatbots, and analytics tools that save time and turn visitors into customers.
            </p>
            <p className="text-white/90 text-lg">
              Whether you're adding smart forms, scheduling systems, or voice-search optimization, we make sure your digital presence keeps learning and adapting right alongside your business.
            </p>
          </motion.div>

          {/* What You Get */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">AI Features We Integrate</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <MessageSquare className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">AI Chatbots</h3>
                  <p className="text-white/80">24/7 customer support that answers questions, captures leads, and routes inquiries intelligently</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Automated Scheduling</h3>
                  <p className="text-white/80">Smart booking systems that sync with your calendar and send automatic reminders</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BarChart3 className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Analytics Dashboards</h3>
                  <p className="text-white/80">Real-time insights into visitor behavior, conversion rates, and performance metrics</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mic className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Voice Search Optimization</h3>
                  <p className="text-white/80">Make your site discoverable via Alexa, Siri, and Google Assistant</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Smart Forms & Lead Capture</h3>
                  <p className="text-white/80">Intelligent forms that adapt based on user responses and qualify leads automatically</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Modern, Responsive Design</h3>
                  <p className="text-white/80">Beautiful, fast-loading sites that work perfectly on all devices</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#19FF7F] text-black rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Discovery Call or Meeting</h3>
                  <p className="text-white/80">We discuss your goals, current website challenges, and which AI features would benefit you most</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#19FF7F] text-black rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Design & Development</h3>
                  <p className="text-white/80">We build or update your site with modern design and integrate the AI features you need</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#19FF7F] text-black rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Training & Launch</h3>
                  <p className="text-white/80">We train you on managing your new AI features and launch your enhanced website</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#19FF7F] text-black rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Ongoing Support</h3>
                  <p className="text-white/80">Your site continues to learn and improve with optional maintenance and updates</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pricing Tiers */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Choose Your Next Step</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#19FF7F]/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">Refresh & Revive</h3>
                <div className="text-sm text-[#19FF7F] font-semibold mb-4">$350+ | Best for a clean start</div>
                <p className="text-white/80 leading-relaxed">
                  A modern website redesign that brings your business to life online—faster, clearer, and mobile-ready. Start here if you want a beautiful site without AI yet (upgrade anytime).
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#19FF7F]/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">Smart Start Website</h3>
                <div className="text-sm text-[#19FF7F] font-semibold mb-4">$1,500+ | Best for growing businesses</div>
                <p className="text-white/80 leading-relaxed">
                  Everything in Refresh & Revive plus your choice of 2 AI upgrades—like chatbots, automated scheduling, or smart lead forms—to save you time and capture more customers.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#19FF7F]/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">Always-On AI Website</h3>
                <div className="text-sm text-[#19FF7F] font-semibold mb-4">$3,500+ | Best for full automation and insight</div>
                <p className="text-white/80 leading-relaxed">
                  A complete website with AI woven throughout: intelligent chat, analytics dashboards, and voice-search optimization. Designed to learn, adapt, and evolve with your business. Includes training and ongoing support.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-br from-[#19FF7F]/20 to-[#FDC526]/20 rounded-xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Upgrade Your Website?</h2>
            <p className="text-lg text-white/90 mb-8">
              Let's discuss how AI can transform your digital presence and help you work smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:larataylor@stateaistrategies.com?subject=AI-Enhanced Web Design Quote Request"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#19FF7F] text-black font-semibold rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                Request a Quote
              </a>
              <a
                href="tel:+16627220335"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                Call (662) 722-0335
              </a>
            </div>
          </motion.div>
        </div>

        {/* Related Services */}
        <div className="max-w-6xl mx-auto px-4 mt-16">
          <RelatedServicesCarousel currentService="ai-enhanced-web-design" />
        </div>
      </div>
    </PageTemplate>
  );
};
