import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, GraduationCap, Users, Award, Phone, Mail, Calendar } from 'lucide-react';
import { PageTemplate } from '../../components/PageTemplate';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { BackButton } from '../../components/BackButton';
import { RelatedServicesCarousel } from '../../components/RelatedServicesCarousel';

export const PrivateAITrainingPage: React.FC = () => {
  return (
    <PageTemplate>
      <Helmet>
        <title>AI Training for Educators | Mississippi AI Workshops</title>
        <meta name="description" content="Join Starkville's AI workshops for educators, nonprofits, and businesses. Hands-on AI training to simplify tasks, save time, and boost skills." />
        <meta name="keywords" content="AI training educators, AI workshops Mississippi, AI literacy workshops, AI training nonprofits, Starkville AI training" />
        <link rel="canonical" href="https://www.stateaistrategies.com/services/private-ai-training" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Training for Educators | Mississippi AI Workshops" />
        <meta property="og:description" content="Join Starkville's AI workshops for educators, nonprofits, and businesses. Hands-on AI training to simplify tasks, save time, and boost skills." />
        <meta property="og:url" content="https://www.stateaistrategies.com/services/private-ai-training" />
        <meta property="og:type" content="service" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="AI Training for Educators | Mississippi AI Workshops" />
        <meta name="twitter:description" content="Join Starkville's AI workshops for educators, nonprofits, and businesses. Hands-on AI training to simplify tasks, save time, and boost skills." />
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
              AI Training for Educators & Mississippi Businesses
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Hands-On AI Skills for Teachers, Nonprofits & Leaders
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="bg-[#19FF7F] text-black px-4 py-2 rounded-full font-semibold">$1,200/day</span>
              <span className="text-white/70">•</span>
              <span className="text-[#19FF7F] font-semibold">Best for Skill-Building</span>
            </div>
            <p className="text-white/80 mb-8">
              0% interest payment plans available: $360 down, $140/month for 6 months
            </p>
            {/* Hero Image */}
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/Audience listens lecturer at workshop.jpeg"
                alt="Engaged audience listening attentively during professional AI training workshop session"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>

          {/* Training Overview */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Training Overview</h2>
            <h3 className="text-xl font-semibold text-[#19FF7F] mb-4">Starkville AI Workshop Series</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <GraduationCap className="w-12 h-12 text-[#19FF7F] mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Hands-On Learning</h3>
                <p className="text-white/80">Interactive workshops with real business scenarios</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-[#19FF7F] mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Role-Specific</h3>
                <p className="text-white/80">Customized content for different team roles and responsibilities</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-[#19FF7F] mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Ethical Focus</h3>
                <p className="text-white/80">Emphasis on responsible AI use and best practices</p>
              </div>
            </div>
          </motion.div>

          {/* Training Methods Image */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-12"
          >
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/Training methods include lectures, workshops, and e-learning, offering diverse ways to build skills, share knowledge, and enhance professional growth.jpeg"
                alt="Diverse training methods including interactive workshops, lectures, and e-learning platforms for comprehensive AI skill development"
                className="w-full h-64 object-cover"
              />
            </div>
          </motion.div>

          {/* Training Modules */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Training Modules</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#19FF7F] pl-6">
                <h3 className="text-white font-semibold mb-2">AI Fundamentals</h3>
                <p className="text-white/80">Understanding AI, machine learning, and their business applications</p>
              </div>
              <div className="border-l-4 border-[#19FF7F] pl-6">
                <h3 className="text-white font-semibold mb-2">Practical AI Tools</h3>
                <p className="text-white/80">Hands-on training with ChatGPT, automation tools, and industry-specific AI</p>
              </div>
              <div className="border-l-4 border-[#19FF7F] pl-6">
                <h3 className="text-white font-semibold mb-2">Ethical AI Use</h3>
                <p className="text-white/80">Best practices, bias awareness, and responsible AI implementation</p>
              </div>
              <div className="border-l-4 border-[#19FF7F] pl-6">
                <h3 className="text-white font-semibold mb-2">Workflow Integration</h3>
                <p className="text-white/80">How to integrate AI tools into existing business processes</p>
              </div>
              <div className="border-l-4 border-[#19FF7F] pl-6">
                <h3 className="text-white font-semibold mb-2">Prompt Engineering</h3>
                <p className="text-white/80">Writing effective prompts to get better results from AI tools</p>
              </div>
              <div className="border-l-4 border-[#19FF7F] pl-6">
                <h3 className="text-white font-semibold mb-2">Security & Privacy</h3>
                <p className="text-white/80">Protecting sensitive data while using AI tools effectively</p>
              </div>
            </div>
          </motion.div>

          {/* What's Included */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Full-Day Training Session</h3>
                  <p className="text-white/80">8 hours of intensive, hands-on AI training</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Custom Curriculum</h3>
                  <p className="text-white/80">Training content tailored to your industry and roles</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Training Materials</h3>
                  <p className="text-white/80">Digital workbooks, templates, and reference guides</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Follow-up Support</h3>
                  <p className="text-white/80">30 days of email support and Q&A sessions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Certification</h3>
                  <p className="text-white/80">Completion certificates for all participants</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Implementation Plan</h3>
                  <p className="text-white/80">Personalized action plan for each team member</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Training Formats */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Training Formats</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-[#19FF7F] font-semibold mb-3">On-Site Training</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Conducted at your location</li>
                  <li>• Team building and collaboration</li>
                  <li>• Hands-on with your actual systems</li>
                  <li>• Immediate application to work</li>
                  <li>• Available throughout Mississippi</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-[#19FF7F] font-semibold mb-3">Virtual Training</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Interactive online sessions</li>
                  <li>• Screen sharing and demos</li>
                  <li>• Breakout rooms for practice</li>
                  <li>• Recorded for future reference</li>
                  <li>• Flexible scheduling options</li>
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Empower Your Team with AI?</h2>
            <p className="text-lg text-white/90 mb-8">
              Invest in your team's future with comprehensive AI training that delivers immediate results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:larataylor@stateaistrategies.com?subject=Private AI Training Inquiry"
                className="px-8 py-4 bg-[#19FF7F] text-black font-semibold rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200"
              >
                Schedule Training
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
                Book Consultation
              </a>
            </div>
          </motion.div>
        </div>

        {/* Related Services */}
        <div className="max-w-6xl mx-auto px-4 mt-16">
          <RelatedServicesCarousel currentService="private-ai-training" />
        </div>
      </div>
    </PageTemplate>
  );
};