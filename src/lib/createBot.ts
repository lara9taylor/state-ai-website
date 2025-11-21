import { supabase } from './supabase';

export interface BotConfig {
  name: string;
  gender: 'male' | 'female';
  personality: {
    tone: string;
    voice: string;
    style: string;
    truthfulness: number;
    eyeColor: string;
    hairstyle: string;
    makeup: boolean;
  };
  knowledge: {
    sources: string[];
    uploadedSources: File[];
    complexity: number;
    specializations: string[];
  };
  design: {
    backgroundColor: string;
    backgroundStyle: string;
    antennaStyle: string;
    accessories: string[];
  };
  settings: {
    title: string;
    subtitle: string;
    description: string;
    greeting: string;
    openingPrompt: string;
  };
}

export async function createBot(config: BotConfig) {
  try {
    // Get current user
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError) throw userError;
    if (!user) throw new Error('No user logged in');

    // Upload any custom knowledge files
    const uploadedFiles = await Promise.all(
      config.knowledge.uploadedSources.map(async (file) => {
        const { data, error } = await supabase.storage
          .from('bot-knowledge')
          .upload(`${user.id}/${file.name}`, file);
        
        if (error) throw error;
        return data.path;
      })
    );

    // Prepare bot data
    const botData = {
      user_id: user.id,
      name: config.name,
      gender: config.gender,
      personality: {
        ...config.personality,
      },
      knowledge: {
        ...config.knowledge,
        uploadedSources: uploadedFiles,
      },
      design: config.design,
      settings: config.settings,
      is_public: false, // Default to private
    };

    // Insert bot into database
    const { data, error } = await supabase
      .from('bots')
      .insert([botData])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating bot:', error);
    throw error;
  }
}