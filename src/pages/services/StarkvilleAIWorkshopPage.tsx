import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Users, CheckCircle, Calendar, Mail, GraduationCap, Target, Lightbulb, Award } from 'lucide-react';
import { PageTemplate } from '../../components/PageTemplate';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { BackButton } from '../../components/BackButton';
import { RelatedServicesCarousel } from '../../components/RelatedServicesCarousel';
import { IMAGES } from '../../constants/images';

export const StarkvilleAIWorkshopPage: React.FC = () => {
  const beginnerTopics = [
    'Introduction to AI for Business',
    'AI Tools for Everyday Tasks',
    'Getting Started with ChatGPT and Other Tools',
    'Understanding AI Capabilities and Limitations'
  ];

  const intermediateTopics = [
    'AI for Content Creation',
    'Automating Business Processes',
    'AI-Enhanced Customer Service',
    'Building AI Workflows'
  ];

  const advancedTopics = [
    'Building Custom AI Workflows',
    'AI Integration Strategies',
    'Ethical AI Implementation',
    'Advanced Prompt Engineering'
  ];

  const benefits = [
    'Hands-on practice with AI tools',
    'Real Mississippi business examples',
    'Small class sizes for personalized attention',
    'Take-home resources and templates',
    'Certificate of completion',
    'Network with local professionals',
    'Ongoing community support'
  ];

  const whoShouldAttend = [
    { title: 'Small Business Owners', description: 'Learn how to save time and compete more effectively' },
    { title: 'Nonprofit Staff', description: 'Discover tools to amplify your mission with limited resources' },
    { title: 'Educators', description: 'Understand AI to better prepare students and enhance teaching' },
    { title: 'Local Entrepreneurs', description: 'Get ahead of the curve and build smarter businesses' },
    { title: 'Government Employees', description: 'Improve efficiency and better serve your community' },
    { title: 'Anyone Curious About AI', description: 'No technical background required — just curiosity' }
  ];

  return (
    <PageTemplate>
      <Helmet>
        <title>AI Workshops in Starkville | $150/person | State AI Strategies</title>
        <meta name="description" content="Practical, hands-on AI workshops in Starkville, MS. Learn AI skills for business at all levels from beginner to advanced. Group discounts available." />
        <meta name="keywords" content="AI workshop Starkville, AI training Mississippi, learn AI, business AI workshop, MSU, hands-on AI training, community learning" />
        <link rel="canonical" href="https://www.stateaistrategies.com/services/starkville-ai-workshop" />

        <meta property="og:title" content="AI Workshops in Starkville | $150/person | State AI Strategies" />
        <meta property="og:description" content="Practical, hands-on AI workshops in Starkville, MS. Learn AI skills for business at all levels." />
        <meta property="og:url" content="https://www.stateaistrategies.com/services/starkville-ai-workshop" />
        <meta property="og:type" content="service" />

        <meta name="twitter:title" content="AI Workshops in Starkville | $150/person | State AI Strategies" />
        <meta name="twitter:description" content="Practical, hands-on AI workshops in Starkville, MS." />
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
                  <Users className="w-12 h-12 text-[#19FF7F]" />
                  <span className="text-sm font-semibold text-[#19FF7F] uppercase tracking-wide">Community Learning</span>
                </div>
                <h1 className="text-5xl font-bold text-white mb-4">
                  Learn AI Skills Right Here in Starkville
                </h1>
                <p className="text-xl text-white/80 mb-6">
                  Practical, hands-on workshops for all skill levels. No technical background required.
                </p>
                <div className="bg-gradient-to-r from-[#19FF7F]/10 to-[#FDC526]/10 rounded-xl p-6 border border-[#19FF7F]/20">
                  <div className="text-4xl font-bold text-white mb-2">$150/person</div>
                  <div className="text-lg text-white/70">Group discounts available for teams of 5+</div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.workshops.audience}
                  alt="AI workshop audience"
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
            className="mb-16 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Workshop Philosophy</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-[#19FF7F] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Community-Focused Learning</h3>
                  <p className="text-white/70">Learn alongside other Mississippi professionals facing similar challenges</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-[#FDC526] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Hands-On Practical</h3>
                  <p className="text-white/70">Actually use AI tools during the workshop, not just watch demos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-[#19FF7F] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Mississippi-Specific Examples</h3>
                  <p className="text-white/70">Use cases and examples relevant to local businesses and organizations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="w-6 h-6 text-[#FDC526] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Network with Locals</h3>
                  <p className="text-white/70">Build connections with other Mississippi professionals exploring AI</p>
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
            <h2 className="text-3xl font-bold text-white mb-8">Workshop Topics & Tracks</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border-2 border-[#19FF7F]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#19FF7F]/20 flex items-center justify-center">
                    <span className="text-[#19FF7F] font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Beginner Track</h3>
                </div>
                <ul className="space-y-2">
                  {beginnerTopics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/80 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#19FF7F] flex-shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border-2 border-[#FDC526]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FDC526]/20 flex items-center justify-center">
                    <span className="text-[#FDC526] font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Intermediate Track</h3>
                </div>
                <ul className="space-y-2">
                  {intermediateTopics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/80 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#FDC526] flex-shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border-2 border-[#FF7F19]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FF7F19]/20 flex items-center justify-center">
                    <span className="text-[#FF7F19] font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Advanced Track</h3>
                </div>
                <ul className="space-y-2">
                  {advancedTopics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/80 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#FF7F19] flex-shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
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
            <h2 className="text-3xl font-bold text-white mb-8">Workshop Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-[#19FF7F] mb-3">Duration & Format</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• 3 hours per workshop</li>
                  <li>• Mix of instruction and hands-on practice</li>
                  <li>• Break included with refreshments</li>
                  <li>• Q&A throughout</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-[#19FF7F] mb-3">Location</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• CoWork @ The Hub</li>
                  <li>• Mississippi State University</li>
                  <li>• Starkville, MS</li>
                  <li>• Free parking available</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-[#19FF7F] mb-3">Class Size</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Limited to 15 participants</li>
                  <li>• Small groups ensure personal attention</li>
                  <li>• Ask questions freely</li>
                  <li>• Get individual help when needed</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-[#19FF7F] mb-3">What to Bring</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Your laptop (required)</li>
                  <li>• Willingness to learn</li>
                  <li>• Questions about AI</li>
                  <li>• Business challenges you face</li>
                </ul>
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
            <h2 className="text-3xl font-bold text-white mb-8">Who Should Attend</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {whoShouldAttend.map((attendee, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white/5 rounded-lg p-4 border border-white/10">
                  <Award className="w-6 h-6 text-[#19FF7F] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{attendee.title}</h3>
                    <p className="text-white/70 text-sm">{attendee.description}</p>
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
            className="mb-16 bg-gradient-to-r from-[#19FF7F]/10 to-[#FDC526]/10 rounded-2xl p-8 border border-[#19FF7F]/20"
          >
            <h2 className="text-3xl font-bold text-white mb-6">What You'll Take Home</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[#19FF7F] flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 bg-white/5 rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Bring Your Team</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-white/80 mb-4">
                  Group workshops are perfect for teams who want to learn together and develop a shared understanding of AI.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-white/80">
                    <CheckCircle className="w-5 h-5 text-[#19FF7F] flex-shrink-0 mt-0.5" />
                    <span><span className="font-semibold">5-10 people:</span> 10% discount</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/80">
                    <CheckCircle className="w-5 h-5 text-[#19FF7F] flex-shrink-0 mt-0.5" />
                    <span><span className="font-semibold">11+ people:</span> Custom pricing available</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/80">
                    <CheckCircle className="w-5 h-5 text-[#19FF7F] flex-shrink-0 mt-0.5" />
                    <span><span className="font-semibold">Private workshops:</span> On-site training at your location</span>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={IMAGES.workshops.training1}
                  alt="Team workshop training"
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
            <div className="bg-gradient-to-br from-[#19FF7F]/10 to-[#FDC526]/10 rounded-2xl p-12 border border-[#19FF7F]/20 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Learn AI?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join the waitlist for upcoming workshops or inquire about private team training.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
                <a
                  href="mailto:lara@stateaistrategies.com?subject=Starkville AI Workshop - Join Waitlist"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-[#19FF7F] text-black font-bold rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200 shadow-lg w-full md:w-auto"
                >
                  <Calendar className="w-5 h-5" />
                  Join the Waitlist
                </a>
                <a
                  href="mailto:lara@stateaistrategies.com?subject=Starkville AI Workshop - Private Team Training"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200 border-2 border-white/20 w-full md:w-auto"
                >
                  <Mail className="w-5 h-5" />
                  Book Team Training
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto px-4 mt-16">
          <RelatedServicesCarousel currentService="starkville-ai-workshop" />
        </div>
      </div>
    </PageTemplate>
  );
};
