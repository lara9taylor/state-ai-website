import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageTemplate } from '../components/PageTemplate';
import { AboutSection } from '../components/AboutSection';
import { TimelineSection } from '../components/TimelineSection';

export const AboutPage: React.FC = () => {
  return (
    <PageTemplate>
      <Helmet>
        <title>Meet Lara Taylor – AI Consultant in Mississippi | State AI Strategies</title>
        <meta name="description" content="Meet Lara Taylor, founder of State AI Strategies. With 20+ years of experience, she helps small businesses and nonprofits adopt ethical, practical AI tools." />
        <meta name="keywords" content="AI consultant in Mississippi, ethical AI consultant, AI literacy expert, generative AI educator, Lara Taylor AI consultant" />
        <link rel="canonical" href="https://www.stateaistrategies.com/about" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Meet Lara Taylor – AI Consultant in Mississippi | State AI Strategies" />
        <meta property="og:description" content="Meet Lara Taylor, founder of State AI Strategies. With 20+ years of experience, she helps small businesses and nonprofits adopt ethical, practical AI tools." />
        <meta property="og:url" content="https://www.stateaistrategies.com/about" />
        <meta property="og:type" content="profile" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Meet Lara Taylor – AI Consultant in Mississippi | State AI Strategies" />
        <meta name="twitter:description" content="Meet Lara Taylor, founder of State AI Strategies. With 20+ years of experience, she helps small businesses and nonprofits adopt ethical, practical AI tools." />
      </Helmet>
      <div className="pt-32 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Lara Taylor – AI Consultant in Mississippi
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Founder of State AI Strategies, bringing ethical AI solutions to small businesses and nonprofits across Mississippi.
            </p>
          </div>
        </div>
        <AboutSection />
        <TimelineSection />
      </div>
    </PageTemplate>
  );
};