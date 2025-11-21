import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageTemplate } from '../components/PageTemplate';
import { ServicesSection } from '../components/ServicesSection';

export const ServicesOverviewPage: React.FC = () => {
  return (
    <PageTemplate>
      <Helmet>
        <title>AI Strategy Services & Automation | State AI Strategies</title>
        <meta name="description" content="Discover AI strategy, automation, dashboards, and assistants built for your business. Practical, ethical, and tailored AI services that deliver results." />
        <meta name="keywords" content="AI strategy services, AI automation for businesses, AI-powered dashboards, custom AI assistants, AI consulting services Mississippi" />
        <link rel="canonical" href="https://www.stateaistrategies.com/services" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Strategy Services & Automation | State AI Strategies" />
        <meta property="og:description" content="Discover AI strategy, automation, dashboards, and assistants built for your business. Practical, ethical, and tailored AI services that deliver results." />
        <meta property="og:url" content="https://www.stateaistrategies.com/services" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="AI Strategy Services & Automation | State AI Strategies" />
        <meta name="twitter:description" content="Discover AI strategy, automation, dashboards, and assistants built for your business. Practical, ethical, and tailored AI services that deliver results." />
      </Helmet>
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Strategy Services & Automation for Your Business
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations, 
              save time, and boost productivity with ethical, practical tools.
            </p>
          </div>
        </div>
        <ServicesSection />
      </div>
    </PageTemplate>
  );
};