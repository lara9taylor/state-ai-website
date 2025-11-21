import React, { useEffect } from 'react';
import { TIERS, TierType } from '../lib/tiers';
import { Check, X, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

declare global {
  interface Window {
    paypal: any;
  }
}

const PAYPAL_BUTTON_IDS = {
  starter: 'P-6D3438924Y974545BNATEN2Y',
  standard: 'P-99D16299UV6057847NATERKA',
  pro: 'P-7LN80427JA810664DNATESMQ',
  power_user: 'P-6RR63810AT8043832NATEUBQ',
  enterprise: 'P-50C88592KR0430927NATEVBY'
};

export const PricingPage: React.FC = () => {
  const [loading, setLoading] = React.useState<TierType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    let scriptElement: HTMLScriptElement | null = null;

    const loadPayPalScript = () => {
      scriptElement = document.createElement('script');
      scriptElement.src = `https://www.paypal.com/sdk/js?client-id=AbDvxgWxzeo64lGx2Na6mYhChbWPhoHMDuWgYM-VRoOO0xv9g0vnadjiyfMXYIIDXXQ_DRLNF4POewY-&vault=true&intent=subscription`;
      scriptElement.async = true;
      scriptElement.dataset.sdkIntegrationSource = 'button-factory';
      
      scriptElement.onload = () => {
        if (window.paypal) {
          initializePayPalButtons();
        }
      };

      document.body.appendChild(scriptElement);
    };

    loadPayPalScript();

    return () => {
      if (scriptElement && document.body.contains(scriptElement)) {
        document.body.removeChild(scriptElement);
      }
    };
  }, []);

  const initializePayPalButtons = () => {
    Object.entries(PAYPAL_BUTTON_IDS).forEach(([tier, planId]) => {
      const container = document.getElementById(`paypal-button-container-${planId}`);
      if (container && !container.hasChildNodes()) {
        window.paypal.Buttons({
          style: {
            shape: 'pill',
            color: 'gold',
            layout: 'horizontal',
            label: 'subscribe'
          },
          createSubscription: function(data: any, actions: any) {
            return actions.subscription.create({
              plan_id: planId
            });
          },
          onApprove: async function(data: any, actions: any) {
            try {
              // Update subscription in database
              const { error } = await supabase
                .from('subscriptions')
                .insert([
                  { 
                    subscription_id: data.subscriptionID,
                    plan_id: planId,
                    status: 'active'
                  }
                ]);

              if (error) throw error;
              toast.success('Subscription activated successfully!');
            } catch (error: any) {
              console.error('Error updating subscription:', error);
              toast.error('There was an error activating your subscription. Please contact support.');
            }
          },
          onError: function(err: any) {
            console.error('PayPal error:', err);
            toast.error('There was an error processing your payment. Please try again.');
          }
        }).render(container);
      }
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-white/90">
            Scale your AI assistant capabilities with our flexible pricing tiers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {(Object.entries(TIERS) as [TierType, typeof TIERS[TierType]][]).map(([key, tier]) => (
            <div
              key={key}
              className="bg-gradient-to-br from-purple-600/90 to-pink-500/90 rounded-xl p-6 backdrop-blur-lg border border-white/10 flex flex-col"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-[#19FF7F]">${tier.price}</span>
                  <span className="text-white/70 ml-2">/month</span>
                </div>
                <p className="text-white/90">
                  {tier.messages.toLocaleString()} messages included
                </p>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-[#19FF7F] mr-2" />
                  <span className="text-white">
                    {tier.features.maxBots === -1 ? 'Unlimited' : tier.features.maxBots} bots
                  </span>
                </div>
                
                <div className="flex items-center">
                  {tier.features.fileUpload ? (
                    <Check className="w-5 h-5 text-[#19FF7F] mr-2" />
                  ) : (
                    <X className="w-5 h-5 text-red-400 mr-2" />
                  )}
                  <span className="text-white">File upload</span>
                </div>

                <div className="flex items-center">
                  {tier.features.apiAccess ? (
                    <Check className="w-5 h-5 text-[#19FF7F] mr-2" />
                  ) : (
                    <X className="w-5 h-5 text-red-400 mr-2" />
                  )}
                  <span className="text-white">API access</span>
                </div>

                <div className="flex items-center">
                  {tier.features.teamAccess ? (
                    <Check className="w-5 h-5 text-[#19FF7F] mr-2" />
                  ) : (
                    <X className="w-5 h-5 text-red-400 mr-2" />
                  )}
                  <span className="text-white">Team access</span>
                </div>

                <div className="flex items-center">
                  {tier.features.whiteLabel ? (
                    <Check className="w-5 h-5 text-[#19FF7F] mr-2" />
                  ) : (
                    <X className="w-5 h-5 text-red-400 mr-2" />
                  )}
                  <span className="text-white">White label</span>
                </div>

                <div className="flex items-center">
                  {tier.features.advancedAnalytics ? (
                    <Check className="w-5 h-5 text-[#19FF7F] mr-2" />
                  ) : (
                    <X className="w-5 h-5 text-red-400 mr-2" />
                  )}
                  <span className="text-white">Advanced analytics</span>
                </div>
              </div>

              <div id={`paypal-button-container-${PAYPAL_BUTTON_IDS[key]}`} className="w-full min-h-[50px]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};