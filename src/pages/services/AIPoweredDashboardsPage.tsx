import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { LineChart, CheckCircle, Calendar, Mail, BarChart3, TrendingUp, Database, Lock, Zap } from 'lucide-react';
import { PageTemplate } from '../../components/PageTemplate';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { BackButton } from '../../components/BackButton';
import { RelatedServicesCarousel } from '../../components/RelatedServicesCarousel';
import { IMAGES } from '../../constants/images';

export const AIPoweredDashboardsPage: React.FC = () => {
  const features = [
    'Custom metrics tracking tailored to your KPIs',
    'Real-time data visualization',
    'Automated reporting on your schedule',
    'Integration with existing systems and databases',
    'AI-driven insights and recommendations',
    'Mobile-responsive dashboards',
    'Training for your team',
    '60 days of optimization and refinement'
  ];

  const useCases = [
    {
      title: 'Sales Performance Tracking',
      description: 'Monitor revenue, pipeline, conversion rates, and team performance in real-time.'
    },
    {
      title: 'Operations Efficiency',
      description: 'Track workflow bottlenecks, resource utilization, and process improvements.'
    },
    {
      title: 'Budget & Financial Reporting',
      description: 'Visualize spending, forecasts, and financial health with automated updates.'
    },
    {
      title: 'Service Delivery Metrics',
      description: 'Monitor service quality, response times, and customer satisfaction scores.'
    },
    {
      title: 'Citizen Engagement Analytics',
      description: 'For government agencies: track engagement, service requests, and community metrics.'
    }
  ];

  const timeline = [
    { week: 'Week 1', title: 'Discovery & Requirements', description: 'Understand your data sources, key metrics, and visualization needs' },
    { week: 'Weeks 2-3', title: 'Data Integration & Design', description: 'Connect data sources and design dashboard layouts' },
    { week: 'Weeks 4-5', title: 'Development & Testing', description: 'Build dashboards, test accuracy, and refine visualizations' },
    { week: 'Week 6-7', title: 'Training & Launch', description: 'Train your team and go live with full support' },
    { week: 'Weeks 8-16', title: 'Optimization Period', description: 'Refine dashboards based on real usage and feedback' }
  ];

  const faqs = [
    {
      question: 'What data sources can you integrate?',
      answer: 'We can integrate with most business systems including CRMs, ERPs, spreadsheets, databases, Google Analytics, social media platforms, and more.'
    },
    {
      question: 'How secure is my data?',
      answer: 'Data security is our top priority. We use encrypted connections, follow industry best practices, and ensure your data never leaves your approved systems without proper authorization.'
    },
    {
      question: 'Can we customize the dashboard later?',
      answer: 'Absolutely! Dashboards are designed to be flexible. You can add new metrics, change visualizations, or integrate additional data sources as your needs evolve.'
    },
    {
      question: 'What training is provided?',
      answer: 'We provide comprehensive training sessions for your team, documentation, and ongoing support to ensure everyone can use and understand the dashboards effectively.'
    },
    {
      question: 'What\'s included in ongoing support?',
      answer: 'After the initial 60-day optimization period, we offer maintenance plans that include updates, troubleshooting, new integrations, and performance monitoring.'
    }
  ];

  return (
    <PageTemplate>
      <Helmet>
        <title>AI-Powered Dashboards | Real-Time Business Insights | State AI Strategies</title>
        <meta name="description" content="Custom dashboards delivering real-time, AI-driven insights from your data. Starting at $5,000 with 6-month payment plans. Transform data into decisions." />
        <meta name="keywords" content="AI dashboards, business intelligence, data visualization, analytics dashboard, Mississippi, real-time insights, custom reporting" />
        <link rel="canonical" href="https://www.stateaistrategies.com/services/ai-powered-dashboards" />

        <meta property="og:title" content="AI-Powered Dashboards | Real-Time Business Insights | State AI Strategies" />
        <meta property="og:description" content="Custom dashboards delivering real-time, AI-driven insights from your data. Transform complex data into clear decisions." />
        <meta property="og:url" content="https://www.stateaistrategies.com/services/ai-powered-dashboards" />
        <meta property="og:type" content="service" />

        <meta name="twitter:title" content="AI-Powered Dashboards | Real-Time Business Insights | State AI Strategies" />
        <meta name="twitter:description" content="Custom dashboards delivering real-time, AI-driven insights from your data." />
      </Helmet>

      <div className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto mb-8">
          <Breadcrumbs />
          <BackButton />
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <LineChart className="w-12 h-12 text-[#19FF7F]" />
                  <span className="text-sm font-semibold text-[#19FF7F] uppercase tracking-wide">AI-Powered Dashboards</span>
                </div>
                <h1 className="text-5xl font-bold text-white mb-4">
                  Real-Time Insights from Your Data
                </h1>
                <p className="text-xl text-white/80 mb-6">
                  Custom AI-powered dashboards that turn complex data into clear decisions.
                </p>
                <div className="bg-gradient-to-r from-[#19FF7F]/10 to-[#FDC526]/10 rounded-xl p-6 border border-[#19FF7F]/20">
                  <div className="text-4xl font-bold text-white mb-2">Starting at $5,000</div>
                  <div className="text-lg text-white/70">0% interest payment plans for 6 months available</div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.dashboards.professional}
                  alt="Professional AI-powered dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white/5 rounded-lg p-4 border border-white/10">
                  <CheckCircle className="w-6 h-6 text-[#19FF7F] flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Who It's For</h2>
            <div className="grid gap-6">
              <div className="flex items-start gap-4 bg-white/5 rounded-xl p-6 border border-white/10">
                <BarChart3 className="w-8 h-8 text-[#19FF7F] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Government Agencies</h3>
                  <p className="text-white/70">Track KPIs, monitor programs, and report outcomes with automated dashboards that make data accessible to stakeholders.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/5 rounded-xl p-6 border border-white/10">
                <TrendingUp className="w-8 h-8 text-[#FDC526] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Growing Businesses</h3>
                  <p className="text-white/70">Make data-driven decisions with real-time insights into sales, operations, and financial performance.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/5 rounded-xl p-6 border border-white/10">
                <Database className="w-8 h-8 text-[#19FF7F] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Organizations with Multiple Data Sources</h3>
                  <p className="text-white/70">Consolidate data from different systems into one unified view, eliminating manual reporting.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/5 rounded-xl p-6 border border-white/10">
                <Zap className="w-8 h-8 text-[#FDC526] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Teams Requiring Real-Time Insights</h3>
                  <p className="text-white/70">Stop waiting for monthly reports. See what's happening right now and respond quickly to changes.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Example Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, idx) => (
                <div key={idx} className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-[#19FF7F] mb-2">{useCase.title}</h3>
                  <p className="text-white/70">{useCase.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 bg-gradient-to-r from-[#19FF7F]/10 to-[#FDC526]/10 rounded-2xl p-8 border border-[#19FF7F]/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-8 h-8 text-[#19FF7F]" />
              <h2 className="text-2xl font-bold text-white">Technology & Security</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Integration Capabilities</h3>
                <p className="text-white/70">
                  We work with your existing tools and systems. Whether you use Excel, Google Sheets, SQL databases,
                  CRMs like Salesforce or HubSpot, or cloud platforms like AWS and Azure — we can connect it all.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Security & Privacy</h3>
                <p className="text-white/70">
                  Your data security is paramount. We use encrypted connections, follow industry best practices,
                  and ensure compliance with relevant regulations. Your data remains under your control.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Process & Timeline</h2>
            <div className="space-y-4">
              {timeline.map((phase, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-24 text-[#19FF7F] font-semibold">{phase.week}</div>
                  <div className="flex-grow bg-white/5 rounded-lg p-4 border-l-4 border-[#19FF7F]">
                    <h3 className="text-lg font-semibold text-white mb-1">{phase.title}</h3>
                    <p className="text-white/70">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-white/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-[#19FF7F]/10 to-[#FDC526]/10 rounded-2xl p-8 border border-[#19FF7F]/20">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Data?</h2>
                <p className="text-lg text-white/80 mb-6">
                  Schedule a consultation to discuss your dashboard needs and see how we can help you make better decisions faster.
                </p>
                <div className="space-y-4">
                  <a
                    href="https://appt.link/lara9taylor/ai-content-jumpstart-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-[#19FF7F] text-black font-bold rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200 shadow-lg"
                  >
                    <Calendar className="w-5 h-5" />
                    Request a Dashboard Consultation
                  </a>
                  <a
                    href="mailto:lara@stateaistrategies.com?subject=AI-Powered Dashboards Inquiry"
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200 border border-white/20"
                  >
                    <Mail className="w-5 h-5" />
                    Email Us
                  </a>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={IMAGES.dashboards.laptop}
                  alt="Dashboard consultation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto px-4 mt-16">
          <RelatedServicesCarousel currentService="ai-powered-dashboards" />
        </div>
      </div>
    </PageTemplate>
  );
};
