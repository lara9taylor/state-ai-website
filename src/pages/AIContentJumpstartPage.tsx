import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Zap, Target, Clock } from 'lucide-react';
import { PageTemplate } from '../components/PageTemplate';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BackButton } from '../components/BackButton';
import { RelatedServicesCarousel } from '../components/RelatedServicesCarousel';

export const AIContentJumpstartPage: React.FC = () => {
  return (
    <PageTemplate>
      <Helmet>
        <title>AI Content Jumpstart - $200 | State AI Strategies</title>
        <meta name="description" content="Build your content plan in 48 hours. No overwhelm. Just clarity. AI-powered content strategy for small businesses, creators, and growing brands." />
        <meta name="keywords" content="AI content strategy, content planning, content marketing, AI for creators, small business content, Mississippi content marketing" />
        <link rel="canonical" href="https://www.stateaistrategies.com/ai-content-jumpstart" />

        {/* Open Graph */}
        <meta property="og:title" content="AI Content Jumpstart - $200 | State AI Strategies" />
        <meta property="og:description" content="Build your content plan in 48 hours. No overwhelm. Just clarity. AI-powered content strategy for small businesses, creators, and growing brands." />
        <meta property="og:url" content="https://www.stateaistrategies.com/ai-content-jumpstart" />
        <meta property="og:type" content="service" />

        {/* Twitter */}
        <meta name="twitter:title" content="AI Content Jumpstart - $200 | State AI Strategies" />
        <meta name="twitter:description" content="Build your content plan in 48 hours. No overwhelm. Just clarity. AI-powered content strategy for small businesses, creators, and growing brands." />
      </Helmet>
      <div className="pt-32 pb-12 px-4">
        {/* Navigation */}
        <div className="max-w-5xl mx-auto mb-8">
          <Breadcrumbs />
          <BackButton />
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#19FF7F]/10 border border-[#19FF7F]/30 rounded-full px-6 py-2 mb-6">
              <span className="text-[#19FF7F] font-semibold">AI Content Jumpstart — $200</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Unlock Your Content Strategy<br />in One 30-Minute Session
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              AI-powered clarity for small businesses, creators, and growing brands — delivered fast.
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              Build your content plan in 48 hours. No overwhelm. Just clarity.
            </p>
            <a
              href="https://appt.link/lara9taylor/ai-content-jumpstart-200"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#19FF7F] text-black text-lg font-bold rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200 shadow-lg shadow-[#19FF7F]/20"
            >
              <Calendar className="w-6 h-6" />
              Book Your Session — $200
            </a>
            {/* Hero Image */}
            <div className="rounded-xl overflow-hidden mt-12">
              <img
                src="/images/Professional social media marketing dashboard on laptop showing Google ads metrics, AI analytics, colorful charts in modern office setup with clean minimalist.jpeg"
                alt="Professional social media marketing dashboard displaying Google Ads metrics, AI-powered analytics, and colorful performance charts in modern minimalist office"
                className="w-full h-96 object-cover"
              />
            </div>
          </motion.div>

          {/* What You Get */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">What You Get</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#19FF7F]/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#19FF7F]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">30-Minute Strategy Session</h3>
                  <p className="text-white/80">A focused consultation where we map your content goals, audience, and unique value proposition</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#19FF7F]/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#19FF7F]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">AI-Generated Content Plan</h3>
                  <p className="text-white/80">Custom content calendar with topic ideas, headlines, and posting schedule tailored to your brand</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#19FF7F]/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#19FF7F]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">48-Hour Delivery</h3>
                  <p className="text-white/80">Receive your complete content strategy within 2 business days of our session</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#19FF7F]/20 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#19FF7F]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Ready-to-Use Templates</h3>
                  <p className="text-white/80">Practical frameworks and prompts you can implement immediately to start creating</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Perfect For */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Perfect For</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg p-6 text-center">
                <h3 className="text-[#19FF7F] font-semibold text-lg mb-3">Small Businesses</h3>
                <p className="text-white/80">Building a consistent online presence without hiring a full marketing team</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 text-center">
                <h3 className="text-[#19FF7F] font-semibold text-lg mb-3">Creators & Solopreneurs</h3>
                <p className="text-white/80">Growing your brand while staying focused on your core work</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 text-center">
                <h3 className="text-[#19FF7F] font-semibold text-lg mb-3">Growing Brands</h3>
                <p className="text-white/80">Scaling content production efficiently with AI-powered systems</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-[#19FF7F]/20 to-[#FDC526]/20 rounded-xl p-10 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Stop staring at a blank page. Let AI help you create a content plan that actually works.
            </p>
            <a
              href="https://appt.link/lara9taylor/ai-content-jumpstart-200"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#19FF7F] text-black text-lg font-bold rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200 shadow-lg shadow-[#19FF7F]/20"
            >
              <Calendar className="w-6 h-6" />
              Book Your Session — $200
            </a>
          </motion.div>
        </div>

        {/* Related Services */}
        <div className="max-w-6xl mx-auto px-4 mt-16">
          <RelatedServicesCarousel currentService="ai-content-jumpstart" />
        </div>
      </div>
    </PageTemplate>
  );
};
