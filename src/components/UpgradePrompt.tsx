import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

interface UpgradePromptProps {
  feature: string;
  tier: string;
}

export const UpgradePrompt: React.FC<UpgradePromptProps> = ({ feature, tier }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-8 rounded-xl max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-12 h-12 text-[#19FF7F]" />
        </div>
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          Upgrade to {tier}
        </h2>
        <p className="text-white/90 text-center mb-6">
          To use {feature}, you'll need to upgrade to our {tier} plan or higher.
        </p>
        <div className="flex flex-col gap-4">
          <Link
            to="/pricing"
            className="w-full px-6 py-3 bg-[#19FF7F] text-black font-semibold rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200 text-center"
          >
            View Plans
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-200"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
};