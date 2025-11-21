import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export const SuccessPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const service = searchParams.get('service');

  useEffect(() => {
    // Track successful purchase
    if (service) {
      // You can add analytics tracking here
      console.log(`Purchase completed for: ${service}`);
    }
  }, [service]);

  const getServiceDetails = () => {
    switch (service) {
      case 'ai-assessment':
        return {
          title: 'AI Readiness Assessment',
          description: 'Your comprehensive AI evaluation is on its way!',
          nextSteps: [
            'Check your email for a confirmation and next steps',
            'You\'ll receive a detailed questionnaire within 24 hours',
            'Schedule your consultation call to review results',
            'Get your personalized AI implementation roadmap'
          ]
        };
      default:
        return {
          title: 'Purchase Successful',
          description: 'Thank you for your purchase!',
          nextSteps: [
            'Check your email for confirmation details',
            'We\'ll be in touch within 24 hours',
            'Questions? Contact us anytime'
          ]
        };
    }
  };

  const serviceDetails = getServiceDetails();

  return (
    <div className="min-h-screen pt-32 pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-20 h-20 text-[#19FF7F]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Payment Successful!
          </h1>
          <p className="text-xl text-white/90">
            {serviceDetails.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-purple-600/90 to-pink-500/90 rounded-xl p-8 backdrop-blur-lg border border-white/10 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            What Happens Next?
          </h2>
          <div className="space-y-4">
            {serviceDetails.nextSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#19FF7F] text-black rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  {index + 1}
                </div>
                <p className="text-white/90">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/5 rounded-xl p-8 backdrop-blur-lg border border-white/10"
        >
          <h3 className="text-xl font-bold text-white mb-4">
            Need to Get in Touch?
          </h3>
          <p className="text-white/90 mb-6">
            Have questions about your purchase or want to discuss your AI journey? 
            I'm here to help every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:larataylor@stateaistrategies.com"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              Email Lara
            </a>
            <a
              href="tel:+16627220335"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#19FF7F] text-black font-semibold rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
              Call (662) 722-0335
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#19FF7F] hover:text-[#FDC526] transition-colors duration-200"
          >
            Return to Homepage
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};