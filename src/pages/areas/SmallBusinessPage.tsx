import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, DollarSign, Users, CheckCircle, Phone, Mail } from 'lucide-react';
import { PageTemplate } from '../../components/PageTemplate';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { BackButton } from '../../components/BackButton';
import { RelatedServicesCarousel } from '../../components/RelatedServicesCarousel';

export const SmallBusinessPage: React.FC = () => {
  return (
    <PageTemplate>
      <Helmet>
        <title>AI Solutions for Small Business | Mississippi AI Consulting</title>
        <meta name="description" content="Transform your Mississippi small business with AI tools that save time, reduce costs, and help you compete with larger companies. Ethical AI solutions that work." />
        <meta name="keywords" content="AI solutions small business, Mississippi small business AI, AI consulting small business, business automation Mississippi, AI tools small business" />
        <link rel="canonical" href="https://www.stateaistrategies.com/small-business" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Solutions for Small Business | Mississippi AI Consulting" />
        <meta property="og:description" content="Transform your Mississippi small business with AI tools that save time, reduce costs, and help you compete with larger companies. Ethical AI solutions that work." />
        <meta property="og:url" content="https://www.stateaistrategies.com/small-business" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="AI Solutions for Small Business | Mississippi AI Consulting" />
        <meta name="twitter:description" content="Transform your Mississippi small business with AI tools that save time, reduce costs, and help you compete with larger companies. Ethical AI solutions that work." />
      </Helmet>
      <div className="pt-32 pb-12 px-4">
        {/* Navigation */}
        <div className="max-w-4xl mx-auto mb-8">
          <Breadcrumbs />
          <BackButton label="Back to Home" />
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
              AI Solutions for Small Business in Mississippi
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Custom AI Tools That Save Time and Boost Productivity
            </p>
            {/* Hero Image */}
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/Businesswoman or accountant working Financial investment on calculator with calculate.jpeg"
                alt="Professional businesswoman analyzing financial investment calculations and planning business strategy"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Why Small Businesses Choose AI</h2>
            <h3 className="text-xl font-semibold text-[#19FF7F] mb-4">Tools That Fit Your Workflow, Not Silicon Valley Buzzwords</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Save 10+ Hours Per Week</h3>
                  <p className="text-white/80">Automate repetitive tasks like customer inquiries, content creation, and data entry</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Reduce Operating Costs</h3>
                  <p className="text-white/80">Cut expenses on manual processes while improving accuracy and speed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Compete with Larger Companies</h3>
                  <p className="text-white/80">Level the playing field with enterprise-level AI capabilities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Better Customer Service</h3>
                  <p className="text-white/80">Provide 24/7 support and faster response times</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Common Challenges */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Common Small Business Challenges We Solve</h2>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-[#19FF7F] font-semibold mb-2">Customer Service Overwhelm</h3>
                <p className="text-white/80">Spending too much time answering the same questions over and over</p>
                <p className="text-white/60 text-sm mt-2">Solution: AI chatbots handle common inquiries 24/7</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-[#19FF7F] font-semibold mb-2">Content Creation Struggles</h3>
                <p className="text-white/80">Difficulty creating consistent social media posts and marketing content</p>
                <p className="text-white/60 text-sm mt-2">Solution: AI content tools generate posts, emails, and marketing materials</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-[#19FF7F] font-semibold mb-2">Manual Data Entry</h3>
                <p className="text-white/80">Hours spent on repetitive data entry and administrative tasks</p>
                <p className="text-white/60 text-sm mt-2">Solution: Automation tools handle data processing and entry</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-[#19FF7F] font-semibold mb-2">Limited Marketing Budget</h3>
                <p className="text-white/80">Can't afford expensive marketing agencies or tools</p>
                <p className="text-white/60 text-sm mt-2">Solution: AI-powered marketing automation at a fraction of the cost</p>
              </div>
            </div>
          </motion.div>

          {/* Success Stories */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Small Business Success Stories</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#19FF7F] pl-6">
                <h3 className="text-white font-semibold mb-2">Local Retail Store</h3>
                <p className="text-white/80 mb-2">Implemented AI chatbot for customer service and inventory management</p>
                <p className="text-[#19FF7F] font-semibold">Result: 40% reduction in customer service time, 25% increase in sales</p>
              </div>
              <div className="border-l-4 border-[#19FF7F] pl-6">
                <h3 className="text-white font-semibold mb-2">Professional Services Firm</h3>
                <p className="text-white/80 mb-2">Automated client onboarding and document processing</p>
                <p className="text-[#19FF7F] font-semibold">Result: 60% faster client onboarding, 30% more time for billable work</p>
              </div>
              <div className="border-l-4 border-[#19FF7F] pl-6">
                <h3 className="text-white font-semibold mb-2">Restaurant Chain</h3>
                <p className="text-white/80 mb-2">AI-powered scheduling and inventory optimization</p>
                <p className="text-[#19FF7F] font-semibold">Result: 20% reduction in food waste, 15% improvement in staff scheduling</p>
              </div>
            </div>
          </motion.div>

          {/* Recommended Services */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Recommended Services for Small Businesses</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Start with AI Readiness Assessment ($225)</h3>
                  <p className="text-white/80">Perfect first step to understand your AI opportunities without commitment</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Mississippi AI Starter Kit ($2,500)</h3>
                  <p className="text-white/80">Quick wins with chatbot and content tools - see results in 4 weeks</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Private AI Training ($1,200/day)</h3>
                  <p className="text-white/80">Empower your team with practical AI skills they can use immediately</p>
                </div>
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Small Business?</h2>
            <p className="text-lg text-white/90 mb-8">
              Join hundreds of Mississippi small businesses already using AI to save time and increase profits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/assessment"
                className="px-8 py-4 bg-[#19FF7F] text-black font-semibold rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200"
              >
                Start Free Assessment
              </a>
              <a
                href="tel:+16627220335"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                Call (662) 722-0335
              </a>
              <a
                href="mailto:larataylor@stateaistrategies.com"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* Recommended Services */}
        <div className="max-w-6xl mx-auto px-4 mt-16">
          <RelatedServicesCarousel
            audienceType="small-business"
            title="Services Perfect for Small Businesses"
          />
        </div>
      </div>
    </PageTemplate>
  );
};