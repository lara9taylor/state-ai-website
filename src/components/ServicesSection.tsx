import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { ClipboardCheck, MessageSquare, Target, GraduationCap, LineChart, Settings, Users, Phone, Mail, Calendar, PawPrint, Globe, Zap, Search, Rocket, ArrowRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8 text-[#19FF7F]" />,
      title: "AI Content Jumpstart",
      badge: "$200 | Best for Quick Clarity",
      price: "Book Your Session",
      description: "Get your content strategy sorted in one 30-minute session. Walk away with a prioritized plan and next steps.",
      bgColor: "bg-gradient-to-br from-[#19FF7F]/10 to-[#FDC526]/10",
      ctaText: "Book Your Session",
      ctaLink: "/ai-content-jumpstart"
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-[#19FF7F]" />,
      title: "AI Readiness Assessment",
      badge: "$225 | Best for Beginners",
      price: "Start Now",
      description: "Get a tailored report pinpointing AI opportunities for your business. No fluff, just actionable steps.",
      bgColor: "bg-white/5",
      ctaText: "Start Now",
      ctaLink: "/services/ai-readiness-assessment"
    },
    {
      icon: <PawPrint className="w-8 h-8 text-[#19FF7F]" />,
      title: "Mississippi AI Starter Kit",
      badge: "$2,500 | Best for Quick Wins",
      price: "Get Started",
      description: "Custom chatbot, content tools, and automation setup built for Mississippi businesses. 0% interest payment plans: $750 down, $291.67/month for 6 months.",
      bgColor: "bg-[#5d1725]",
      ctaText: "Get Started",
      ctaLink: "/services/mississippi-ai-starter-kit"
    },
    {
      icon: <Globe className="w-8 h-8 text-[#19FF7F]" />,
      title: "AI-Enhanced Web Design & Updates",
      badge: "$350 & up | Best for Smart Growth",
      price: "Request a Quote",
      description: "Turn your website into a living, learning part of your business. Add AI chatbots, automated scheduling, analytics dashboards, and voice-assistant visibility to your site.",
      bgColor: "bg-white/5",
      ctaText: "Request a Quote",
      ctaLink: "/services/ai-enhanced-web-design"
    },
    {
      icon: <Target className="w-8 h-8 text-[#19FF7F]" />,
      title: "AI Strategy Workshop",
      badge: "$2,000 | Best for Planning",
      price: "Book Now",
      description: "Interactive session to map AI priorities and create a roadmap for success. 0% interest payment plans: $600 down, $233.33/month for 6 months.",
      bgColor: "bg-white/5",
      ctaText: "Book Now",
      ctaLink: "/services/ai-strategy-workshop"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-[#19FF7F]" />,
      title: "Private AI Training",
      badge: "$1,200/day | Best for Skill-Building",
      price: "Schedule Today",
      description: "Hands-on training tailored to your team's roles, covering AI tools and ethical practices. 0% interest payment plans: $360 down, $140/month for 6 months.",
      bgColor: "bg-white/5",
      ctaText: "Schedule Today",
      ctaLink: "/services/private-ai-training"
    },
    {
      icon: <LineChart className="w-8 h-8 text-[#19FF7F]" />,
      title: "AI-Powered Dashboards",
      badge: "$5,000+ | Best for Data Insights",
      price: "Request a Quote",
      description: "Custom dashboards delivering real-time, AI-driven insights from your data. 0% interest payment plans: $1,500 down, $583.33/month for 6 months.",
      bgColor: "bg-white/5",
      ctaText: "Request a Quote",
      ctaLink: "mailto:larataylor@stateaistrategies.com?subject=AI-Powered Dashboards Quote Request"
    },
    {
      icon: <Settings className="w-8 h-8 text-[#19FF7F]" />,
      title: "Custom AI Assistants",
      badge: "$7,500+ | Best for Automation",
      price: "Contact Us",
      description: "Fully tailored AI to handle customer service, operations, or other processes. 0% interest payment plans: $2,250 down, $875/month for 6 months.",
      bgColor: "bg-white/5",
      ctaText: "Contact Us",
      ctaLink: "mailto:larataylor@stateaistrategies.com?subject=Custom AI Assistants Inquiry"
    },
    {
      icon: <Users className="w-8 h-8 text-[#19FF7F]" />,
      title: "Starkville AI Workshop Series",
      badge: "$150/person | Best for Community Learning",
      price: "Join a Workshop",
      description: "Practical group workshops teaching AI skills, from basics to advanced automation.",
      bgColor: "bg-white/5",
      ctaText: "Join a Workshop",
      ctaLink: "mailto:larataylor@stateaistrategies.com?subject=Starkville AI Workshop Series Inquiry"
    }
  ];

  return (
    <section className="py-6 px-4" id="services">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Save Time, Simplify Work, Boost Productivity
          </h2>
        </motion.div>

        <div className="space-y-8">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`${service.bgColor} backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-200 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    {service.icon}
                    <div className="flex-1">
                      <h3 className="text-lg text-white font-medium leading-tight">{service.title}</h3>
                      <span className="text-xs text-[#19FF7F] block mt-1">{service.badge}</span>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm mb-3">{service.description}</p>
                </div>
                
                <div className="pt-3 border-t border-white/10">
                  {service.ctaLink && (
                    <a
                      href={service.ctaLink}
                      target={service.ctaLink.startsWith('http') ? '_blank' : '_self'}
                      rel={service.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-block px-4 py-2 bg-[#19FF7F] text-black text-sm font-medium rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200 w-full text-center"
                    >
                      {service.ctaText}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * (services.length - 1) }}
            className="relative overflow-hidden rounded-2xl"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#19FF7F]/20 via-[#FDC526]/20 to-[#19FF7F]/10 animate-gradient"></div>

            {/* Decorative pattern overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}></div>

            <div className="relative backdrop-blur-sm border border-[#19FF7F]/30 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-12">
                <motion.h3
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                  Ready to Simplify Your Work?
                </motion.h3>
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-white/80 text-lg max-w-2xl mx-auto"
                >
                  Three simple steps to transform your workflow with AI
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
                {/* Step 1 */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-[#19FF7F]/50 transition-all duration-300 h-full flex flex-col">
                    {/* Icon with glow effect */}
                    <div className="mb-4 relative">
                      <div className="absolute inset-0 bg-[#19FF7F]/20 blur-xl rounded-full group-hover:bg-[#19FF7F]/40 transition-all duration-300"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-[#19FF7F] to-[#FDC526] rounded-full flex items-center justify-center">
                        <Search className="w-8 h-8 text-black" />
                      </div>
                    </div>

                    {/* Step number */}
                    <div className="text-[#19FF7F] font-bold text-sm mb-2">STEP 1 • 2 MINUTES</div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-white mb-3">Discover Your AI Opportunities</h4>

                    {/* Description */}
                    <p className="text-white/70 mb-6 flex-grow">
                      Take our quick quiz to identify where AI can save you time and reduce stress
                    </p>

                    {/* CTA Button */}
                    <a
                      href="#audiences"
                      className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#19FF7F] text-black font-semibold rounded-lg hover:bg-[#19FF7F]/90 transition-all duration-200 hover:shadow-lg hover:shadow-[#19FF7F]/20"
                    >
                      Start Free Quiz
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-[#19FF7F]/50 transition-all duration-300 h-full flex flex-col">
                    {/* Icon with glow effect */}
                    <div className="mb-4 relative">
                      <div className="absolute inset-0 bg-[#19FF7F]/20 blur-xl rounded-full group-hover:bg-[#19FF7F]/40 transition-all duration-300"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-[#19FF7F] to-[#FDC526] rounded-full flex items-center justify-center">
                        <Calendar className="w-8 h-8 text-black" />
                      </div>
                    </div>

                    {/* Step number */}
                    <div className="text-[#19FF7F] font-bold text-sm mb-2">STEP 2 • 15 MINUTES</div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-white mb-3">Get Expert Guidance</h4>

                    {/* Description */}
                    <p className="text-white/70 mb-6 flex-grow">
                      Book a complimentary consultation to explore personalized solutions for your needs
                    </p>

                    {/* CTA Button */}
                    <a
                      href="https://appt.link/lara9taylor/web-conference"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#19FF7F] text-black font-semibold rounded-lg hover:bg-[#19FF7F]/90 transition-all duration-200 hover:shadow-lg hover:shadow-[#19FF7F]/20"
                    >
                      Book Free Call
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-[#19FF7F]/50 transition-all duration-300 h-full flex flex-col">
                    {/* Icon with glow effect */}
                    <div className="mb-4 relative">
                      <div className="absolute inset-0 bg-[#19FF7F]/20 blur-xl rounded-full group-hover:bg-[#19FF7F]/40 transition-all duration-300"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-[#19FF7F] to-[#FDC526] rounded-full flex items-center justify-center">
                        <Rocket className="w-8 h-8 text-black" />
                      </div>
                    </div>

                    {/* Step number */}
                    <div className="text-[#19FF7F] font-bold text-sm mb-2">STEP 3 • 4-8 WEEKS</div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-white mb-3">Launch Your AI Solution</h4>

                    {/* Description */}
                    <p className="text-white/70 mb-6 flex-grow">
                      Watch your custom AI tools come to life and start transforming your workflow
                    </p>

                    {/* CTA Button */}
                    <a
                      href="mailto:larataylor@stateaistrategies.com?subject=Custom AI Tools Inquiry"
                      className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#19FF7F] text-black font-semibold rounded-lg hover:bg-[#19FF7F]/90 transition-all duration-200 hover:shadow-lg hover:shadow-[#19FF7F]/20"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};