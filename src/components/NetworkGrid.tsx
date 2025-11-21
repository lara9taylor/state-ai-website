import React from 'react';
import { Calendar, MessageSquare, Book, Bot, Brain, Building2, Heart, Coffee, Briefcase, Flame } from 'lucide-react';
import { NetworkCard } from './NetworkCard';

export const NetworkGrid: React.FC = () => {
  const websites = [
    {
      id: 1,
      title: "Starkville Events",
      description: "Your comprehensive guide to events and happenings in Starkville.",
      icon: <Calendar className="w-12 h-12 text-blue-500" />,
      color: "blue",
      url: "https://starkville.letaibe.com",
      status: "coming-soon" as const
    },
    {
      id: 2,
      title: "The Ripple Talk",
      description: "Engaging discussions and insights on technology and society.",
      icon: <MessageSquare className="w-12 h-12 text-emerald-500" />,
      color: "emerald",
      url: "https://ripple.letaibe.com",
      status: "coming-soon" as const
    },
    {
      id: 3,
      title: "My Published Books",
      description: "Collection of published works and literary contributions.",
      icon: <Book className="w-12 h-12 text-red-500" />,
      color: "red",
      url: "https://books.letaibe.com",
      status: "coming-soon" as const
    },
    {
      id: 4,
      title: "My AI Bots",
      description: "Showcase of innovative AI chatbots and automation tools.",
      icon: <Bot className="w-12 h-12 text-amber-500" />,
      color: "amber",
      url: "https://bots.letaibe.com",
      status: "active" as const
    },
    {
      id: 5,
      title: "Learning the Gaps",
      description: "Educational resources and learning management platform.",
      icon: <Brain className="w-12 h-12 text-purple-500" />,
      color: "purple",
      url: "https://learning.letaibe.com",
      status: "coming-soon" as const
    },
    {
      id: 6,
      title: "The Spark",
      description: "From one human spark, infinite creation.",
      icon: <Flame className="w-12 h-12 text-indigo-500" />,
      color: "indigo",
      url: "https://sparksymbol.org",
      status: "active" as const
    },
    {
      id: 7,
      title: "Morphos Foundation",
      description: "Supporting innovation and technological advancement.",
      icon: <Building2 className="w-12 h-12 text-green-500" />,
      color: "green",
      url: "https://morphos.letaibe.com",
      status: "coming-soon" as const
    },
    {
      id: 8,
      title: "Kindness Generator",
      description: "Spreading positivity through random acts of kindness.",
      icon: <Heart className="w-12 h-12 text-pink-500" />,
      color: "purple",
      url: "https://kindness.letaibe.com",
      status: "active" as const
    },
    {
      id: 9,
      title: "AI Consulting",
      description: "Expert guidance for AI implementation and strategy.",
      icon: <Briefcase className="w-12 h-12 text-slate-500" />,
      color: "indigo",
      url: "https://stateaistrategies.com",
      status: "active" as const
    },
    {
      id: 10,
      title: "Coffee & Kayaks",
      description: "Adventures and coffee culture exploration.",
      icon: <Coffee className="w-12 h-12 text-amber-500" />,
      color: "amber",
      url: "https://www.coffeeandkayaks.com",
      status: "active" as const
    }
  ];

  return (
    <section id="network" className="relative py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The letAIbe Network
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our specialized websites, each designed to provide targeted solutions for specific needs and interests.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {websites.map((site) => (
            <NetworkCard key={site.id} site={site} />
          ))}
        </div>
      </div>
    </section>
  );
};