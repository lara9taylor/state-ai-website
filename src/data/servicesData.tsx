import React from 'react';
import { ClipboardCheck, MessageSquare, Target, GraduationCap, LineChart, Settings, Users, PawPrint, Globe, Zap } from 'lucide-react';

export interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  badge: string;
  price: string;
  description: string;
  bgColor: string;
  ctaText: string;
  ctaLink: string;
  audienceTypes: string[];
}

export const servicesData: Service[] = [
  {
    id: 'ai-content-jumpstart',
    icon: <Zap className="w-8 h-8 text-[#19FF7F]" />,
    title: 'AI Content Jumpstart',
    badge: '$200 | Best for Quick Clarity',
    price: 'Book Your Session',
    description: 'Get your content strategy sorted in one 30-minute session. Walk away with a prioritized plan and next steps.',
    bgColor: 'bg-gradient-to-br from-[#19FF7F]/10 to-[#FDC526]/10',
    ctaText: 'Book Your Session',
    ctaLink: '/ai-content-jumpstart',
    audienceTypes: ['small-business', 'startups-solopreneurs']
  },
  {
    id: 'ai-readiness-assessment',
    icon: <ClipboardCheck className="w-8 h-8 text-[#19FF7F]" />,
    title: 'AI Readiness Assessment',
    badge: '$225 | Best for Beginners',
    price: 'Start Now',
    description: 'Get a tailored report pinpointing AI opportunities for your business. No fluff, just actionable steps.',
    bgColor: 'bg-white/5',
    ctaText: 'Start Now',
    ctaLink: '/services/ai-readiness-assessment',
    audienceTypes: ['small-business', 'nonprofits', 'government', 'startups-solopreneurs']
  },
  {
    id: 'mississippi-ai-starter-kit',
    icon: <PawPrint className="w-8 h-8 text-[#19FF7F]" />,
    title: 'Mississippi AI Starter Kit',
    badge: '$2,500 | Best for Quick Wins',
    price: 'Get Started',
    description: 'Custom chatbot, content tools, and automation setup built for Mississippi businesses. 0% interest payment plans: $750 down, $291.67/month for 6 months.',
    bgColor: 'bg-[#5d1725]',
    ctaText: 'Get Started',
    ctaLink: '/services/mississippi-ai-starter-kit',
    audienceTypes: ['small-business', 'nonprofits', 'startups-solopreneurs']
  },
  {
    id: 'ai-enhanced-web-design',
    icon: <Globe className="w-8 h-8 text-[#19FF7F]" />,
    title: 'AI-Enhanced Web Design & Updates',
    badge: '$350 & up | Best for Smart Growth',
    price: 'Request a Quote',
    description: 'Turn your website into a living, learning part of your business. Add AI chatbots, automated scheduling, analytics dashboards, and voice-assistant visibility to your site.',
    bgColor: 'bg-white/5',
    ctaText: 'Request a Quote',
    ctaLink: '/services/ai-enhanced-web-design',
    audienceTypes: ['small-business', 'startups-solopreneurs']
  },
  {
    id: 'ai-strategy-workshop',
    icon: <Target className="w-8 h-8 text-[#19FF7F]" />,
    title: 'AI Strategy Workshop',
    badge: '$2,000 | Best for Planning',
    price: 'Book Now',
    description: 'Interactive session to map AI priorities and create a roadmap for success. 0% interest payment plans: $600 down, $233.33/month for 6 months.',
    bgColor: 'bg-white/5',
    ctaText: 'Book Now',
    ctaLink: '/services/ai-strategy-workshop',
    audienceTypes: ['government', 'nonprofits']
  },
  {
    id: 'private-ai-training',
    icon: <GraduationCap className="w-8 h-8 text-[#19FF7F]" />,
    title: 'Private AI Training',
    badge: '$1,200/day | Best for Skill-Building',
    price: 'Schedule Today',
    description: 'Hands-on training tailored to your team\'s roles, covering AI tools and ethical practices. 0% interest payment plans: $360 down, $140/month for 6 months.',
    bgColor: 'bg-white/5',
    ctaText: 'Schedule Today',
    ctaLink: '/services/private-ai-training',
    audienceTypes: ['small-business', 'nonprofits', 'government']
  },
  {
    id: 'ai-powered-dashboards',
    icon: <LineChart className="w-8 h-8 text-[#19FF7F]" />,
    title: 'AI-Powered Dashboards',
    badge: '$5,000+ | Best for Data Insights',
    price: 'Request a Quote',
    description: 'Custom dashboards delivering real-time, AI-driven insights from your data. 0% interest payment plans for 6 months available.',
    bgColor: 'bg-white/5',
    ctaText: 'Request a Quote',
    ctaLink: '/services/ai-powered-dashboards',
    audienceTypes: ['government']
  },
  {
    id: 'custom-ai-assistants',
    icon: <Settings className="w-8 h-8 text-[#19FF7F]" />,
    title: 'Custom AI Assistants',
    badge: '$750+ | Best for Automation',
    price: 'Get Started',
    description: 'Fully tailored AI to handle customer service, operations, or other processes. 0% interest payment plans for 6 months available.',
    bgColor: 'bg-white/5',
    ctaText: 'Get Started',
    ctaLink: '/services/custom-ai-assistants',
    audienceTypes: ['small-business', 'startups-solopreneurs']
  },
  {
    id: 'starkville-ai-workshop',
    icon: <Users className="w-8 h-8 text-[#19FF7F]" />,
    title: 'Starkville AI Workshop Series',
    badge: '$150/person | Best for Community Learning',
    price: 'Join a Workshop',
    description: 'Practical group workshops teaching AI skills, from basics to advanced automation.',
    bgColor: 'bg-white/5',
    ctaText: 'Join a Workshop',
    ctaLink: '/services/starkville-ai-workshop',
    audienceTypes: ['small-business', 'nonprofits', 'startups-solopreneurs']
  }
];

export function getServiceById(id: string): Service | undefined {
  return servicesData.find(service => service.id === id);
}

export function getServicesByIds(ids: string[]): Service[] {
  return ids.map(id => getServiceById(id)).filter((service): service is Service => service !== undefined);
}

export function getServicesByAudience(audienceType: string): Service[] {
  return servicesData.filter(service => service.audienceTypes.includes(audienceType));
}
