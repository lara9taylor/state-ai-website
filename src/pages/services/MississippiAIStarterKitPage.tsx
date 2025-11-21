import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, MessageSquare, FileText, Zap, Phone, Mail, Calendar } from 'lucide-react';
import { PageTemplate } from '../../components/PageTemplate';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { BackButton } from '../../components/BackButton';
import { RelatedServicesCarousel } from '../../components/RelatedServicesCarousel';

export const MississippiAIStarterKitPage: React.FC = () => {
  return (
    <PageTemplate>
      <Helmet>
        <title>Mississippi AI Starter Kit | Custom AI Tools for Small Business</title>
        <meta name="description" content="Launch AI for your Mississippi business with a pre-configured chatbot and content tools. Quick wins with solutions designed specifically for local businesses." />
        <meta name="keywords" content="Mississippi AI starter kit, custom AI tools small business, AI chatbot for business, Mississippi business automation, AI tools Golden Triangle" />
        <link rel="canonical" href="https://www.stateaistrategies.com/services/mississippi-ai-starter-kit" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Mississippi AI Starter Kit | Custom AI Tools for Small Business" />
        <meta property="og:description" content="Launch AI for your Mississippi business with a pre-configured chatbot and content tools. Quick wins with solutions designed specifically for local businesses." />
        <meta property="og:url" content="https://www.stateaistrategies.com/services/mississippi-ai-starter-kit" />
        <meta property="og:type" content="service" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Mississippi AI Starter Kit | Custom AI Tools for Small Business" />
        <meta name="twitter:description" content="Launch AI for your Mississippi business with a pre-configured chatbot and content tools. Quick wins with solutions designed specifically for local businesses." />
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
              Mississippi AI Starter Kit for Small Business
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Custom AI Tools for Small Business & Nonprofits
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="bg-[#19FF7F] text-black px-4 py-2 rounded-full font-semibold">$2,500</span>
              <span className="text-white/70">•</span>
              <span className="text-[#19FF7F] font-semibold">Best for Quick Wins</span>
            </div>
            <p className="text-white/80 mb-8">
              0% interest payment plans available: $750 down, $291.67/month for 6 months
            </p>
            {/* Hero Image */}
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/Laptop displaying colorful project management dashboard with development stages for new AI model, resting on table in business setting, printed documents lying beside device.jpeg"
                alt="Modern laptop displaying colorful AI project management dashboard with development stages, analytics, and business documents in professional office setting"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>

          {/* What's Included */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">What's Included</h2>
            <h3 className="text-xl font-semibold text-[#19FF7F] mb-4">AI-Powered Dashboards for Smarter Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <MessageSquare className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Custom Chatbot</h3>
                  <p className="text-white/80">AI-powered chatbot trained on your business information and FAQs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Content Creation Tools</h3>
                  <p className="text-white/80">AI tools for social media posts, email campaigns, and marketing content</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Automation Setup</h3>
                  <p className="text-white/80">Basic workflow automation for common business processes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Training & Support</h3>
                  <p className="text-white/80">2 hours of training plus 30 days of email support</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI Assistant Image */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-12"
          >
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/AI assistant interaction, Person using smartphone chatbot powered by artificial intelligence.jpeg"
                alt="Professional using smartphone to interact with AI-powered chatbot assistant for seamless business communication"
                className="w-full h-64 object-cover"
              />
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Key Benefits</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#19FF7F]" />
                <span className="text-white">Save 10+ hours per week on customer inquiries</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#19FF7F]" />
                <span className="text-white">Automate content creation for social media and marketing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#19FF7F]" />
                <span className="text-white">24/7 customer support through AI chatbot</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#19FF7F]" />
                <span className="text-white">Consistent brand voice across all communications</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#19FF7F]" />
                <span className="text-white">Easy-to-use tools designed for non-technical users</span>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Implementation Timeline</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#19FF7F] text-black rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Week 1: Discovery & Setup</h3>
                  <p className="text-white/80">Gather business information and configure initial AI tools</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#19FF7F] text-black rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Week 2-3: Chatbot Development</h3>
                  <p className="text-white/80">Build and train your custom chatbot with your business knowledge</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#19FF7F] text-black rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Week 4: Training & Launch</h3>
                  <p className="text-white/80">Team training session and go-live with full support</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Perfect For */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-[#19FF7F] font-semibold mb-3">Business Types</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Retail stores and e-commerce</li>
                  <li>• Restaurants and food service</li>
                  <li>• Professional services</li>
                  <li>• Healthcare practices</li>
                  <li>• Real estate agencies</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#19FF7F] font-semibold mb-3">Business Challenges</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Overwhelmed by customer inquiries</li>
                  <li>• Struggling with content creation</li>
                  <li>• Need 24/7 customer support</li>
                  <li>• Want to automate repetitive tasks</li>
                  <li>• Looking for quick AI wins</li>
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Launch Your AI Journey?</h2>
            <p className="text-lg text-white/90 mb-8">
              Get your Mississippi AI Starter Kit and start seeing results in just 4 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:larataylor@stateaistrategies.com?subject=Mississippi AI Starter Kit Inquiry"
                className="px-8 py-4 bg-[#19FF7F] text-black font-semibold rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200"
              >
                Get Started Today
              </a>
              <a
                href="tel:+16627220335"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                Call (662) 722-0335
              </a>
              <a
                href="https://appt.link/lara9taylor/web-conference"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>

        {/* Related Services */}
        <div className="max-w-6xl mx-auto px-4 mt-16">
          <RelatedServicesCarousel currentService="mississippi-ai-starter-kit" />
        </div>
      </div>
    </PageTemplate>
  );
};