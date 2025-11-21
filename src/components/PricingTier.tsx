import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface AddOn {
  title: string;
  price: string;
}

export interface PricingTierProps {
  tier: 'Starter' | 'Standard' | 'Pro';
  price: string;
  accentColor: string;
  icon: ReactNode;
  features: string[];
  recommended?: boolean;
  ctaText: string;
  ctaLink: string;
  useCases?: string[];
  addOns?: AddOn[];
  paymentPlan?: string;
  index?: number;
}

export const PricingTier: React.FC<PricingTierProps> = ({
  tier,
  price,
  accentColor,
  icon,
  features,
  recommended = false,
  ctaText,
  ctaLink,
  useCases,
  addOns,
  paymentPlan,
  index = 0
}) => {
  const [showAddOns, setShowAddOns] = React.useState(false);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`
        relative rounded-2xl p-8
        bg-white/5 backdrop-blur-sm
        border-2 transition-all duration-300
        hover:transform hover:scale-105 hover:shadow-2xl
        ${recommended ? `border-${accentColor} shadow-lg shadow-${accentColor}/20` : 'border-white/10'}
      `}
      style={{
        borderColor: recommended ? accentColor : undefined
      }}
    >
      {recommended && (
        <div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-black text-sm font-bold"
          style={{ backgroundColor: accentColor }}
        >
          Most Popular
        </div>
      )}

      <div className="flex items-center gap-3 mb-4">
        <div
          className="p-3 rounded-lg"
          style={{ backgroundColor: `${accentColor}20` }}
        >
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white">{tier} AI Assistant</h3>
      </div>

      <div className="mb-6">
        <div className="text-4xl font-bold text-white mb-2">{price}</div>
        {paymentPlan && (
          <div className="text-sm text-white/60">
            {paymentPlan}
          </div>
        )}
      </div>

      <div className="space-y-3 mb-6">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <CheckCircle
              className="w-5 h-5 flex-shrink-0 mt-0.5"
              style={{ color: accentColor }}
            />
            <span className="text-white/90 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      {useCases && useCases.length > 0 && (
        <div className="mb-6 p-4 rounded-lg bg-white/5">
          <h4 className="text-sm font-semibold text-white/70 mb-2">Great for:</h4>
          <p className="text-sm text-white/80">{useCases.join(', ')}</p>
        </div>
      )}

      {addOns && addOns.length > 0 && (
        <div className="mb-6">
          <button
            onClick={() => setShowAddOns(!showAddOns)}
            className="flex items-center justify-between w-full text-left text-sm font-semibold text-white/70 hover:text-white transition-colors"
          >
            <span>Optional Add-Ons</span>
            {showAddOns ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          {showAddOns && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-3 space-y-2"
            >
              {addOns.map((addOn, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm text-white/70">
                  <span>{addOn.title}</span>
                  <span className="font-semibold">{addOn.price}</span>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      )}

      <Link
        to={ctaLink}
        className={`
          block w-full py-3 px-6 rounded-lg text-center font-bold transition-all duration-200
          ${recommended ? 'text-black shadow-lg' : 'text-white border-2'}
          hover:transform hover:scale-105
        `}
        style={{
          backgroundColor: recommended ? accentColor : 'transparent',
          borderColor: recommended ? accentColor : accentColor
        }}
      >
        {ctaText}
      </Link>
    </motion.div>
  );
};
