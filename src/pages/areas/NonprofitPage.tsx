import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Heart, Users, FileText, TrendingUp, CheckCircle, Phone, Mail } from 'lucide-react';
import { PageTemplate } from '../../components/PageTemplate';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { BackButton } from '../../components/BackButton';
import { RelatedServicesCarousel } from '../../components/RelatedServicesCarousel';

export const NonprofitPage: React.FC = () => {
  return (
    <PageTemplate>
      <Helmet>
        <title>AI Solutions for Nonprofits | Custom AI Tools Mississippi</title>
        <meta name="description" content="Amplify your mission with AI tools designed for nonprofits. Automate grant writing, donor outreach, and administrative tasks so you can focus on making a difference." />
        <meta name="keywords" content="AI solutions nonprofits, custom AI tools nonprofits, nonprofit automation Mississippi, AI grant writing, AI donor outreach" />
        <link rel="canonical" href="https://www.stateaistrategies.com/nonprofits" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Solutions for Nonprofits | Custom AI Tools Mississippi" />
        <meta property="og:description" content="Amplify your mission with AI tools designed for nonprofits. Automate grant writing, donor outreach, and administrative tasks so you can focus on making a difference." />
        <meta property="og:url" content="https://www.stateaistrategies.com/nonprofits" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="AI Solutions for Nonprofits | Custom AI Tools Mississippi" />
        <meta name="twitter:description" content="Amplify your mission with AI tools designed for nonprofits. Automate grant writing, donor outreach, and administrative tasks so you can focus on making a difference." />
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
              AI Solutions for Nonprofits in Mississippi
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Custom AI Tools for Nonprofits That Amplify Your Mission
            </p>
            {/* Hero Image */}
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/Biloxi, Mississippi, USA.jpeg"
                alt="Scenic coastal view of Biloxi, Mississippi waterfront showcasing Gulf Coast beauty and local nonprofit community"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>

          {/* Nonprofit Challenges */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Unique Nonprofit Challenges</h2>
            <h3 className="text-xl font-semibold text-[#19FF7F] mb-4">Nonprofit AI Solutions: Grant Writing & Donor Outreach</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <FileText className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Grant Writing Burden</h3>
                  <p className="text-white/80">Hours spent researching and writing grant applications with low success rates</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Volunteer Management</h3>
                  <p className="text-white/80">Coordinating schedules, training, and communication with volunteers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Donor Engagement</h3>
                  <p className="text-white/80">Maintaining relationships and consistent communication with donors</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Impact Measurement</h3>
                  <p className="text-white/80">Tracking and reporting on program effectiveness and outcomes</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI Solutions */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">How AI Transforms Nonprofit Operations</h2>
            <div className="space-y-6">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-[#19FF7F] font-semibold mb-3">Grant Writing Automation</h3>
                <p className="text-white/80 mb-3">AI helps research grant opportunities, draft proposals, and track applications</p>
                <div className="text-sm text-white/60">
                  <strong>Impact:</strong> 66% increase in grant application success rate, 50% reduction in writing time
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-[#19FF7F] font-semibold mb-3">Donor Relationship Management</h3>
                <p className="text-white/80 mb-3">Automated donor communications, personalized outreach, and engagement tracking</p>
                <div className="text-sm text-white/60">
                  <strong>Impact:</strong> 40% increase in donor retention, 30% more donations per campaign
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-[#19FF7F] font-semibold mb-3">Volunteer Coordination</h3>
                <p className="text-white/80 mb-3">Smart scheduling, automated reminders, and skill-based volunteer matching</p>
                <div className="text-sm text-white/60">
                  <strong>Impact:</strong> 35% improvement in volunteer show-up rates, 25% better task matching
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-[#19FF7F] font-semibold mb-3">Impact Reporting</h3>
                <p className="text-white/80 mb-3">Automated data collection and report generation for funders and stakeholders</p>
                <div className="text-sm text-white/60">
                  <strong>Impact:</strong> 70% faster report creation, more compelling data visualization
                </div>
              </div>
            </div>
          </motion.div>

          {/* Success Story */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-[#19FF7F]/10 to-[#FDC526]/10 rounded-xl p-8 mb-12 border border-[#19FF7F]/20"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Nonprofit Success Story</h2>
            <div className="space-y-4">
              <h3 className="text-[#19FF7F] font-semibold text-lg">Mississippi Food Bank Network</h3>
              <p className="text-white/90">
                A regional food bank serving 15 counties was struggling with volunteer coordination and donor communications. 
                They were spending 20+ hours per week on administrative tasks that took away from their core mission.
              </p>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">AI Implementation:</h4>
                <ul className="space-y-1 text-white/80">
                  <li>• Automated volunteer scheduling and reminders</li>
                  <li>• AI-powered donor segmentation and personalized outreach</li>
                  <li>• Grant opportunity research and application tracking</li>
                  <li>• Impact reporting dashboard</li>
                </ul>
              </div>
              <div className="bg-[#19FF7F]/10 rounded-lg p-4">
                <h4 className="text-[#19FF7F] font-semibold mb-2">Results After 6 Months:</h4>
                <ul className="space-y-1 text-white/90">
                  <li>• 15 hours per week saved on administrative tasks</li>
                  <li>• 45% increase in volunteer participation</li>
                  <li>• 60% improvement in donor retention</li>
                  <li>• $150,000 in additional grant funding secured</li>
                </ul>
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
            <h2 className="text-2xl font-bold text-white mb-6">Recommended Services for Nonprofits</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">AI Readiness Assessment ($225)</h3>
                  <p className="text-white/80">Identify specific AI opportunities for your nonprofit's unique needs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Custom AI Assistants ($7,500+)</h3>
                  <p className="text-white/80">Specialized tools for grant writing, donor management, and volunteer coordination</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">AI-Powered Dashboards ($5,000+)</h3>
                  <p className="text-white/80">Track impact metrics and generate compelling reports for funders</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Private AI Training ($1,200/day)</h3>
                  <p className="text-white/80">Train your team on AI tools for fundraising, communications, and operations</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Special Nonprofit Pricing */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-xl p-8 mb-12 border border-purple-500/20"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Special Nonprofit Pricing</h2>
            <p className="text-white/90 mb-6">
              We believe in supporting organizations that make a difference. That's why we offer special pricing and payment plans for qualified nonprofits.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-[#19FF7F] font-semibold mb-3">Nonprofit Discounts</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• 15% discount on all services</li>
                  <li>• Extended payment plans available</li>
                  <li>• Pro bono consultations for qualifying organizations</li>
                  <li>• Group training discounts</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#19FF7F] font-semibold mb-3">Grant Funding Support</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Help identifying technology grants</li>
                  <li>• Assistance with grant applications</li>
                  <li>• ROI documentation for funders</li>
                  <li>• Impact measurement frameworks</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-gradient-to-br from-[#19FF7F]/20 to-[#FDC526]/20 rounded-xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Amplify Your Mission?</h2>
            <p className="text-lg text-white/90 mb-8">
              Let AI handle the administrative work so you can focus on changing lives and communities.
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
                href="mailto:larataylor@stateaistrategies.com?subject=Nonprofit AI Solutions Inquiry"
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
            audienceType="nonprofits"
            title="Services Perfect for Nonprofits"
          />
        </div>
      </div>
    </PageTemplate>
  );
};