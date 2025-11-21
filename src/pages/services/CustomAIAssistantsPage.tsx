import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Settings, Zap, Rocket, CheckCircle, Mail, Calendar } from 'lucide-react';
import { PageTemplate } from '../../components/PageTemplate';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { BackButton } from '../../components/BackButton';
import { RelatedServicesCarousel } from '../../components/RelatedServicesCarousel';
import { PricingTier } from '../../components/PricingTier';
import { IMAGES } from '../../constants/images';

export const CustomAIAssistantsPage: React.FC = () => {
  const starterFeatures = [
    'Basic conversational AI assistant',
    'FAQ training (up to 15 documents/pages)',
    'Website embed setup',
    'Lead capture + email forwarding',
    'Basic branding configuration',
    'Scripted fallback responses',
    'Light testing + optimization',
    '7-day post-launch support'
  ];

  const starterUseCases = [
    'Local service providers',
    'boutiques',
    'small shops',
    'hairstylists',
    'barbers',
    'churches',
    'photographers',
    'repair shops'
  ];

  const starterAddOns = [
    { title: 'Monthly maintenance', price: '$99' },
    { title: 'Additional FAQ training pack', price: '$150' },
    { title: 'Custom branded graphic', price: '$50' }
  ];

  const standardFeatures = [
    'Full AI assistant tailored to your business',
    'Custom knowledge base (30–75 documents/pages)',
    'Workflow scripting for real tasks',
    'Lead qualifier + automatic email summaries',
    'Scheduling integrations (when applicable)',
    'CRM-friendly data outputs',
    'Website integration + optimization',
    'Custom branded tone + personality',
    'Testing & performance tuning',
    'Training walkthrough for your team',
    '30 days of priority support'
  ];

  const standardUseCases = [
    'Realtors',
    'clinics',
    'nonprofits',
    'restaurants',
    'consultants',
    'coaches',
    'service-based businesses',
    'multi-location teams'
  ];

  const proFeatures = [
    'Everything in Standard PLUS:',
    'Advanced multi-workflow agent (intake, booking, sales, support)',
    'AI-powered email responder',
    'Automated follow-up sequences',
    'AI-powered document drafting (policies, FAQs, templates)',
    'Multi-step lead routing to CRM, spreadsheets, or email',
    'Data extraction + structured reporting',
    'Monthly optimization for 60 days',
    'Voice assistant option (if desired)',
    'Full analytics dashboard (Notion or Sheets)'
  ];

  const proUseCases = [
    'Real estate teams',
    'law firms',
    'financial advisors',
    'medical clinics',
    'multi-site businesses',
    'nonprofits with heavy inquiry volume'
  ];

  return (
    <PageTemplate>
      <Helmet>
        <title>Custom AI Assistants | 3 Tiers from $750 | State AI Strategies</title>
        <meta name="description" content="Custom AI tools that work the way you think. Choose from Starter ($750), Standard ($2,500), or Pro ($5,000-$7,500) AI assistant systems. 0% interest payment plans available." />
        <meta name="keywords" content="custom AI assistants, AI automation Mississippi, chatbot development, AI systems, small business AI, automated customer service" />
        <link rel="canonical" href="https://www.stateaistrategies.com/services/custom-ai-assistants" />

        <meta property="og:title" content="Custom AI Assistants | 3 Tiers from $750 | State AI Strategies" />
        <meta property="og:description" content="Custom AI tools that work the way you think. Choose from 3 flexible tiers starting at $750." />
        <meta property="og:url" content="https://www.stateaistrategies.com/services/custom-ai-assistants" />
        <meta property="og:type" content="service" />

        <meta name="twitter:title" content="Custom AI Assistants | 3 Tiers from $750 | State AI Strategies" />
        <meta name="twitter:description" content="Custom AI tools that work the way you think. Choose from 3 flexible tiers starting at $750." />
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
                <h1 className="text-5xl font-bold text-white mb-4">
                  Custom AI tools that work the way you think.
                </h1>
                <p className="text-xl text-white/80 mb-6">
                  AI shouldn't feel overwhelming, confusing, or "too big" for small businesses.
                </p>
                <p className="text-lg text-white/70">
                  I build AI assistants that are simple, powerful, and tailor-made for real workflows —
                  responding to customers, handling intake, qualifying leads, answering questions,
                  automating repetitive tasks, and giving you your time back.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.aiAssistants.smartphone}
                  alt="AI assistant interaction on smartphone"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#19FF7F]/10 to-[#FDC526]/10 rounded-2xl p-8 border border-[#19FF7F]/20">
              <p className="text-xl text-white text-center">
                These assistants live on <span className="text-[#19FF7F] font-semibold">your website</span>,
                learn from <span className="text-[#19FF7F] font-semibold">your content</span>, and work
                <span className="text-[#19FF7F] font-semibold"> 24/7</span> — without adding staff costs or overwhelming your team.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Choose Your AI Assistant Tier
            </h2>
            <p className="text-xl text-white/70 text-center mb-12">
              Below are the three options Mississippi businesses trust most.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <PricingTier
                tier="Starter"
                price="$750"
                accentColor="#19FF7F"
                icon={<Settings className="w-8 h-8" style={{ color: '#19FF7F' }} />}
                features={starterFeatures}
                ctaText="Get Started with Starter"
                ctaLink="https://appt.link/lara9taylor/ai-content-jumpstart-200"
                useCases={starterUseCases}
                addOns={starterAddOns}
                index={0}
              />

              <PricingTier
                tier="Standard"
                price="$2,500"
                accentColor="#FDC526"
                icon={<Zap className="w-8 h-8" style={{ color: '#FDC526' }} />}
                features={standardFeatures}
                recommended={true}
                ctaText="Choose Standard"
                ctaLink="https://appt.link/lara9taylor/ai-content-jumpstart-200"
                useCases={standardUseCases}
                paymentPlan="6 payments of $416"
                index={1}
              />

              <PricingTier
                tier="Pro"
                price="$5,000–$7,500"
                accentColor="#FF7F19"
                icon={<Rocket className="w-8 h-8" style={{ color: '#FF7F19' }} />}
                features={proFeatures}
                ctaText="Request Pro System"
                ctaLink="mailto:lara@stateaistrategies.com?subject=Pro AI System Inquiry"
                useCases={proUseCases}
                paymentPlan="8 payments available"
                index={2}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Maintenance & Support Plans
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Because AI evolves — your assistant should too.
            </p>
            <p className="text-lg text-white/60 mb-8">
              Most businesses choose one of these after launch:
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-2">Basic Maintenance</h3>
                <div className="text-3xl font-bold text-[#19FF7F] mb-4">$49/mo</div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-white/80">
                    <CheckCircle className="w-5 h-5 text-[#19FF7F] flex-shrink-0 mt-0.5" />
                    <span>Error monitoring</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/80">
                    <CheckCircle className="w-5 h-5 text-[#19FF7F] flex-shrink-0 mt-0.5" />
                    <span>Simple knowledge updates</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/80">
                    <CheckCircle className="w-5 h-5 text-[#19FF7F] flex-shrink-0 mt-0.5" />
                    <span>Minor prompt revisions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border-2 border-[#FDC526]">
                <h3 className="text-2xl font-bold text-white mb-2">Standard Maintenance</h3>
                <div className="text-3xl font-bold text-[#FDC526] mb-4">$125/mo</div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-white/80">
                    <CheckCircle className="w-5 h-5 text-[#FDC526] flex-shrink-0 mt-0.5" />
                    <span>Monthly improvements</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/80">
                    <CheckCircle className="w-5 h-5 text-[#FDC526] flex-shrink-0 mt-0.5" />
                    <span>Updating knowledge base</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/80">
                    <CheckCircle className="w-5 h-5 text-[#FDC526] flex-shrink-0 mt-0.5" />
                    <span>Workflow revisions</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/80">
                    <CheckCircle className="w-5 h-5 text-[#FDC526] flex-shrink-0 mt-0.5" />
                    <span>Performance testing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-2">Premium Maintenance</h3>
                <div className="text-3xl font-bold text-[#FF7F19] mb-4">$299/mo</div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-white/80">
                    <CheckCircle className="w-5 h-5 text-[#FF7F19] flex-shrink-0 mt-0.5" />
                    <span>Everything above</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/80">
                    <CheckCircle className="w-5 h-5 text-[#FF7F19] flex-shrink-0 mt-0.5" />
                    <span>Analytics review</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/80">
                    <CheckCircle className="w-5 h-5 text-[#FF7F19] flex-shrink-0 mt-0.5" />
                    <span>Monthly refinement</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/80">
                    <CheckCircle className="w-5 h-5 text-[#FF7F19] flex-shrink-0 mt-0.5" />
                    <span>Priority issue resolution</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/80">
                    <CheckCircle className="w-5 h-5 text-[#FF7F19] flex-shrink-0 mt-0.5" />
                    <span>Up to 2 new workflows per month</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-center text-white/60 mt-8 italic">
              Your AI assistant becomes smarter, more accurate, and more aligned over time — without you touching a thing.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Why Mississippi Businesses Trust State AI Strategies
            </h2>

            <p className="text-lg text-white/80 mb-4">
              I'm <span className="text-[#19FF7F] font-semibold">Lara Taylor</span>, founder of State AI Strategies,
              AI educator for CoWork @ The Hub at Mississippi State University,
              <span className="text-[#FDC526] font-semibold"> 2025 Perplexity Business Fellow</span>,
              <span className="text-[#FDC526] font-semibold"> MSAI Collaborative Research Fellow</span>,
              and a long-time advocate for accessible, practical AI adoption.
            </p>

            <p className="text-xl text-white/90 mb-6">
              My AI assistants are:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">Built for real Mississippi workflows</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">Written in natural language</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">Designed to save time immediately</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">Tested for accuracy</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">Easy for your team to understand</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-6 h-6 text-[#19FF7F] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">Yours to keep and embed anywhere</span>
              </div>
            </div>

            <p className="text-2xl text-white font-semibold text-center">
              You don't need to "learn AI." You just need a system that works.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={IMAGES.conferences.closeUp}
                  alt="Schedule a consultation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-white/80 mb-6">
                  Schedule a consultation to see which tier fits your needs:
                </p>

                <div className="space-y-4">
                  <a
                    href="https://appt.link/lara9taylor/ai-content-jumpstart-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-[#19FF7F] text-black font-bold rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200 shadow-lg"
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule Consultation
                  </a>

                  <div className="text-center text-white/60">or</div>

                  <a
                    href="mailto:lara@stateaistrategies.com"
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200 border border-white/20"
                  >
                    <Mail className="w-5 h-5" />
                    Email: lara@stateaistrategies.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto px-4 mt-16">
          <RelatedServicesCarousel currentService="custom-ai-assistants" />
        </div>
      </div>
    </PageTemplate>
  );
};
