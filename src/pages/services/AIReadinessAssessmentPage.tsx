import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, TrendingUp, Phone, Mail, Calendar } from 'lucide-react';
import { PageTemplate } from '../../components/PageTemplate';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { BackButton } from '../../components/BackButton';
import { RelatedServicesCarousel } from '../../components/RelatedServicesCarousel';

export const AIReadinessAssessmentPage: React.FC = () => {
  return (
    <PageTemplate>
      <Helmet>
        <title>AI Readiness Assessment for Business | State AI Strategies</title>
        <meta name="description" content="Pinpoint your AI opportunities with our $225 AI Readiness Assessment. Get a clear roadmap to boost productivity and save time—no tech overwhelm." />
        <meta name="keywords" content="AI readiness assessment, business AI evaluation, AI adoption roadmap, Mississippi AI consulting, small business AI strategy" />
        <link rel="canonical" href="https://www.stateaistrategies.com/services/ai-readiness-assessment" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Readiness Assessment for Business | State AI Strategies" />
        <meta property="og:description" content="Pinpoint your AI opportunities with our $225 AI Readiness Assessment. Get a clear roadmap to boost productivity and save time—no tech overwhelm." />
        <meta property="og:url" content="https://www.stateaistrategies.com/services/ai-readiness-assessment" />
        <meta property="og:type" content="service" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="AI Readiness Assessment for Business | State AI Strategies" />
        <meta name="twitter:description" content="Pinpoint your AI opportunities with our $225 AI Readiness Assessment. Get a clear roadmap to boost productivity and save time—no tech overwhelm." />
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
              AI Readiness Assessment for Small Business
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Discover Where AI Fits in Your Work
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="bg-[#19FF7F] text-black px-4 py-2 rounded-full font-semibold">$225</span>
              <span className="text-white/70">•</span>
              <span className="text-[#19FF7F] font-semibold">Best for Beginners</span>
            </div>
            {/* Hero Image */}
            <div className="rounded-xl overflow-hidden mb-8">
              <img
                src="/images/Businessman use artificial intelligence AI technology for enhanced work efficiency data analysis and efficient tools, Unlocking work potential with AI.jpeg"
                alt="Business professional leveraging artificial intelligence technology for enhanced work efficiency, data analysis, and productivity optimization"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>

          {/* What You Get */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">What You Get</h2>
            <h3 className="text-xl font-semibold text-[#19FF7F] mb-4">Get a Tailored Roadmap Without the Overwhelm</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Comprehensive Business Analysis</h3>
                  <p className="text-white/80">Deep dive into your current operations, challenges, and opportunities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">AI Opportunity Identification</h3>
                  <p className="text-white/80">Specific areas where AI can save time and increase efficiency</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">ROI Projections</h3>
                  <p className="text-white/80">Clear financial impact estimates for each AI opportunity</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Implementation Roadmap</h3>
                  <p className="text-white/80">Step-by-step plan to implement AI solutions in your business</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Professional Report</h3>
                  <p className="text-white/80">20+ page detailed report with actionable recommendations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Follow-up Consultation</h3>
                  <p className="text-white/80">30-minute call to discuss findings and next steps</p>
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
            <h3 className="text-xl font-semibold text-[#19FF7F] mb-4">Why an AI Readiness Assessment Matters</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#19FF7F] text-black rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Complete the Assessment</h3>
                  <p className="text-white/80">20-30 minute comprehensive questionnaire about your business operations</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#19FF7F] text-black rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">AI Analysis</h3>
                  <p className="text-white/80">Our AI algorithms analyze your responses to identify opportunities and pain points</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#19FF7F] text-black rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Receive Your Report</h3>
                  <p className="text-white/80">Get a detailed PDF report with specific recommendations and ROI projections</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#19FF7F] text-black rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Consultation Call</h3>
                  <p className="text-white/80">30-minute call with Lara to discuss findings and plan next steps</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Who It's For */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Users className="w-12 h-12 text-[#19FF7F] mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Small Businesses</h3>
                <p className="text-white/80">1-50 employees looking to streamline operations</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-[#19FF7F] mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Growing Companies</h3>
                <p className="text-white/80">Ready to scale but facing operational bottlenecks</p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-[#19FF7F] mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Time-Strapped Leaders</h3>
                <p className="text-white/80">Spending too much time on repetitive tasks</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Discover Your AI Potential?</h2>
            <p className="text-lg text-white/90 mb-8">
              Start with our comprehensive AI Readiness Assessment and get a clear roadmap for your AI journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://assessment.stateaistrategies.com/"
                className="px-8 py-4 bg-[#19FF7F] text-black font-semibold rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200"
              >
                Start Assessment Now
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

        {/* Related Services */}
        <div className="max-w-6xl mx-auto px-4 mt-16">
          <RelatedServicesCarousel currentService="ai-readiness-assessment" />
        </div>
      </div>
    </PageTemplate>
  );
};