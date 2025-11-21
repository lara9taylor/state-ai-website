import { supabase } from './supabase';

export const TIERS = {
  starter: {
    name: 'Starter',
    messages: 250,
    price: 7.00,
    features: {
      maxBots: 1,
      fileUpload: false,
      apiAccess: false,
      whiteLabel: false,
      teamAccess: false,
      advancedAnalytics: false
    }
  },
  standard: {
    name: 'Standard',
    messages: 500,
    price: 12.00,
    features: {
      maxBots: 3,
      fileUpload: false,
      apiAccess: false,
      whiteLabel: false,
      teamAccess: false,
      advancedAnalytics: false
    }
  },
  pro: {
    name: 'Pro',
    messages: 1000,
    price: 22.00,
    features: {
      maxBots: 10,
      fileUpload: true,
      apiAccess: false,
      whiteLabel: false,
      teamAccess: false,
      advancedAnalytics: false
    }
  },
  power_user: {
    name: 'Power User',
    messages: 2000,
    price: 42.00,
    features: {
      maxBots: 25,
      fileUpload: true,
      apiAccess: true,
      whiteLabel: false,
      teamAccess: true,
      advancedAnalytics: false
    }
  },
  enterprise: {
    name: 'Enterprise',
    messages: 5000,
    price: 105.00,
    features: {
      maxBots: -1, // unlimited
      fileUpload: true,
      apiAccess: true,
      whiteLabel: true,
      teamAccess: true,
      advancedAnalytics: true
    }
  }
} as const;

export type TierType = keyof typeof TIERS;

export function getTierDetails(tier: TierType) {
  return TIERS[tier];
}

export async function validateMessageLimit(botId: string) {
  const { data, error } = await supabase
    .from('bots')
    .select('messages_remaining')
    .eq('id', botId)
    .single();

  if (error) throw error;
  if (!data || data.messages_remaining <= 0) {
    throw new Error('No messages remaining. Please purchase more messages to continue.');
  }

  // Decrement message count
  const { error: updateError } = await supabase
    .from('bots')
    .update({ messages_remaining: data.messages_remaining - 1 })
    .eq('id', botId);

  if (updateError) throw updateError;
  return true;
}

export async function validateTierFeature(botId: string, feature: keyof typeof TIERS[TierType]['features']) {
  const { data, error } = await supabase
    .from('bots')
    .select('tier_features')
    .eq('id', botId)
    .single();

  if (error) throw error;
  if (!data?.tier_features?.[feature]) {
    throw new Error(`This feature is not available in your current tier.`);
  }

  return true;
}