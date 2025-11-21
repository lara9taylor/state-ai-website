import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MessageSquare, ListChecks, FileText, Users, Target, Clock, TrendingUp, Zap, Phone, Mail } from 'lucide-react';
import { PageTemplate } from '../../components/PageTemplate';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { BackButton } from '../../components/BackButton';
import { RelatedServicesCarousel } from '../../components/RelatedServicesCarousel';

export const StartupsSolopreneursPage: React.FC = () => {
  return (
    <PageTemplate>
      <Helmet>
        <title>AI Solutions for Startups & Solopreneurs | State AI Strategies</title>
        <meta name="description" content="Build smarter. Launch faster. Grow with AI that scales as you do. Custom AI tools for startups and solopreneurs in Mississippi." />
        <meta name="keywords" content="AI for startups, solopreneur AI tools, startup automation, AI chatbots, project management AI, content automation, Mississippi startups" />
        <link rel="canonical" href="https://www.stateaistrategies.com/startups-solopreneurs" />

        {/* Open Graph */}
        <meta property="og:title" content="AI Solutions for Startups & Solopreneurs | State AI Strategies" />
        <meta property="og:description" content="Build smarter. Launch faster. Grow with AI that scales as you do. Custom AI tools for startups and solopreneurs in Mississippi." />
        <meta property="og:url" content="https://www.stateaistrategies.com/startups-solopreneurs" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:title" content="AI Solutions for Startups & Solopreneurs | State AI Strategies" />
        <meta name="twitter:description" content="Build smarter. Launch faster. Grow with AI that scales as you do. Custom AI tools for startups and solopreneurs in Mississippi." />
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
              Startups & Solopreneurs
            </h1>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Build smarter. Launch faster. Grow with AI that scales as you do.
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Starting something new shouldn't mean doing everything alone. Whether you're launching your first venture or turning your side hustle into a full-time business, AI can handle the repetitive work while you focus on ideas that matter.
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mt-4 mb-8">
              At State AI Strategies, we design tools that think like you—helping you move from chaos to clarity with automation that feels human.
            </p>
            {/* Hero Image */}
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/Path to success with gears from starting with vision and idea, professional achievement.jpeg"
                alt="Visual metaphor showing entrepreneurial path to success with interconnected gears representing vision, strategic planning, and professional achievement"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>

          {/* What We Build For You */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">What We Build For You</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MessageSquare className="w-6 h-6 text-[#19FF7F] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Custom Chatbots</h3>
                  <p className="text-white/80">Turn conversations into conversions. Your AI assistant answers questions, collects leads, and books consultations while you sleep.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ListChecks className="w-6 h-6 text-[#19FF7F] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">AI-Powered Project Management</h3>
                  <p className="text-white/80">Streamline your to-do list with AI task sorting, reminders, and automated progress tracking—so you can spend more time creating and less time managing.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-[#19FF7F] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Smart Content Systems</h3>
                  <p className="text-white/80">Plan, write, and schedule posts with AI that learns your tone and audience. Perfect for building your brand voice from day one.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-[#19FF7F] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Client & Lead Automation</h3>
                  <p className="text-white/80">Capture leads through adaptive forms, send personalized follow-ups, and integrate everything with your email or CRM automatically.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Target className="w-6 h-6 text-[#19FF7F] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Business Plan & Strategy Tools</h3>
                  <p className="text-white/80">Our AI-powered frameworks—like IdeaHatch—turn your goals into step-by-step launch plans with clear priorities and timelines.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Why It Matters */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Why It Matters</h2>
            <p className="text-white/90 text-lg mb-6">
              Solo founders and small teams waste 10–15 hours a week on admin and content.
            </p>
            <p className="text-white/90 text-lg mb-8">
              With the right AI systems in place, you get that time back—to build, market, and actually enjoy the work you started this for.
            </p>
            <h3 className="text-xl font-semibold text-white mb-4">Results You Can Expect</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-[#19FF7F] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">Save hours each week with automated admin and scheduling</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-[#19FF7F] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">Boost productivity by 60% with smarter task management</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-[#19FF7F] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">Capture more clients through instant, 24/7 AI engagement</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-[#19FF7F]/20 to-[#FDC526]/20 rounded-xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to work smarter?</h2>
            <p className="text-lg text-white/90 mb-8">
              Take our 2-Minute AI Readiness Assessment to see where automation can make the biggest impact—or request a custom quote to design your AI-enhanced system today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/assessment"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#19FF7F] text-black font-semibold rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200"
              >
                Take the Assessment
              </a>
              <a
                href="mailto:larataylor@stateaistrategies.com?subject=Custom AI Solutions Quote Request"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                Request a Custom Quote
              </a>
            </div>
            <div className="mt-6">
              <a
                href="tel:+16627220335"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                Call (662) 722-0335
              </a>
            </div>
          </motion.div>
        </div>

        {/* Recommended Services */}
        <div className="max-w-6xl mx-auto px-4 mt-16">
          <RelatedServicesCarousel
            audienceType="startups-solopreneurs"
            title="Services Perfect for Startups & Solopreneurs"
          />
        </div>
      </div>
    </PageTemplate>
  );
};
