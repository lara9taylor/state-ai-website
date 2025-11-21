import React, { useState, useEffect } from 'react';
import { Loader2, Info, Lightbulb, Brain, Shield, Database } from 'lucide-react';
import { nanoid } from 'nanoid';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';

interface BotConfig {
  name: string;
  gender: 'male' | 'female';
  personality: {
    tone: string;
    voice: string;
    style: string;
    truthfulness: number;
  };
  knowledge: {
    sources: string[];
    complexity: number;
    specializations: string[];
  };
  settings: {
    purpose: string;
    greeting: string;
    openingPrompt: string;
    isPublic: boolean;
  };
}

interface WorkshopStep {
  title: string;
  description: string;
  tips: string[];
  icon: React.ReactNode;
  examples?: string[];
  guidelines?: {
    dos: string[];
    donts: string[];
  };
}

const STORAGE_KEY = 'buildABotProgress';

export const BuildABot: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [botConfig, setBotConfig] = useState<BotConfig>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {
      name: '',
      gender: 'female',
      personality: {
        tone: 'friendly',
        voice: 'casual',
        style: 'helpful',
        truthfulness: 50
      },
      knowledge: {
        sources: [],
        complexity: 5,
        specializations: []
      },
      settings: {
        purpose: '',
        greeting: '',
        openingPrompt: '',
        isPublic: true
      }
    };
  });

  const [isCreating, setIsCreating] = useState(false);
  const [autoSaveIndicator, setAutoSaveIndicator] = useState('');

  useEffect(() => {
    const saveProgress = () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(botConfig));
      setAutoSaveIndicator('Progress saved');
      setTimeout(() => setAutoSaveIndicator(''), 2000);
    };

    const timeoutId = setTimeout(saveProgress, 1000);
    return () => clearTimeout(timeoutId);
  }, [botConfig]);

  const knowledgeBaseInfo = {
    title: "Understanding Bot Knowledge Bases",
    description: "While this workshop focuses on creating bots with predefined knowledge, it's important to understand how bot knowledge bases work in AI development:",
    points: [
      {
        title: "Document Upload",
        description: "Many bot builders allow uploading PDFs, docs, or text files to create custom knowledge bases. The AI processes and indexes this content to answer related questions."
      },
      {
        title: "Web Scraping",
        description: "Some platforms can crawl specified websites to build knowledge from online content, keeping information current and comprehensive."
      },
      {
        title: "API Integration",
        description: "Advanced bots can connect to external APIs to access real-time data and expand their knowledge dynamically."
      },
      {
        title: "Vector Databases",
        description: "Modern AI systems store knowledge in vector databases, allowing semantic search and contextual understanding of information."
      }
    ]
  };

  const workshopSteps: WorkshopStep[] = [
    {
      title: "Basic Information",
      description: "Start by giving your bot a unique identity. The name and gender you choose will influence how users perceive and interact with your bot.",
      tips: [
        "Choose a name that reflects your bot's purpose",
        "Consider how gender might affect user comfort and engagement",
        "Keep the name memorable and easy to pronounce"
      ],
      icon: <Info className="w-6 h-6 text-[#19FF7F]" />
    },
    {
      title: "Bot Purpose & Security",
      description: "Define your bot's core mission and establish security boundaries. A well-defined purpose helps users understand what your bot can do, while security measures protect both your bot and its users.",
      tips: [
        "Be specific about what your bot can and cannot do",
        "Include clear security boundaries",
        "Define interaction limits and acceptable use"
      ],
      examples: [
        "✅ Purpose: 'I am a financial advisor bot specializing in personal budgeting and investment education. I can help explain financial concepts, create basic budget plans, and provide general investment information. I cannot make specific investment recommendations or handle personal financial data.'",
        "❌ Purpose: 'I help with money and investments.'",
        "✅ Purpose: 'I am a fitness coaching bot focused on beginner-friendly workout plans and nutrition guidance. I can suggest exercises, explain proper form, and provide general dietary advice. I cannot diagnose medical conditions or create personalized meal plans.'",
        "❌ Purpose: 'I help you get fit.'"
      ],
      guidelines: {
        dos: [
          "Clearly state what data the bot will NOT collect",
          "Specify which topics are off-limits",
          "Include usage limitations (e.g., 'responses limited to general advice')",
          "Define user data handling policies"
        ],
        donts: [
          "Accept or store sensitive personal information",
          "Make promises about accuracy or results",
          "Claim medical, legal, or professional certifications",
          "Encourage unsafe or harmful behavior"
        ]
      },
      icon: <Shield className="w-6 h-6 text-[#19FF7F]" />
    },
    {
      title: "Bot Communication",
      description: "Create your bot's greeting message and about section. These are different but complementary elements that help users understand and engage with your bot effectively.",
      tips: [
        "Greeting: A warm welcome that sets immediate expectations",
        "About: Detailed capabilities and limitations",
        "Keep security in mind for both sections"
      ],
      examples: [
        "✅ Greeting: 'Hello! I'm FinanceHelper, your friendly guide to personal finance basics. What would you like to learn about today? Remember, I provide general information only and cannot access or handle your personal financial data.'",
        "✅ About: 'I am designed to help you understand basic financial concepts and planning. I can:\n- Explain financial terms in simple language\n- Suggest budgeting strategies\n- Provide general investment education\n\nI cannot:\n- Access your financial accounts\n- Make specific investment recommendations\n- Store or process personal financial data\n- Provide tax or legal advice\n\nFor specific financial advice, please consult with a qualified financial advisor.'",
        "❌ Greeting: 'Hi, I'm here to help with money stuff!'",
        "❌ About: 'I know everything about finance and can help you make lots of money.'"
      ],
      icon: <Lightbulb className="w-6 h-6 text-[#19FF7F]" />
    },
    {
      title: "Personality Configuration",
      description: "Shape your bot's character through tone and behavior settings. This determines how your bot expresses itself while maintaining professional boundaries.",
      tips: [
        "Match the tone to your target audience",
        "Balance friendliness with professionalism",
        "Maintain consistent security messaging"
      ],
      icon: <Brain className="w-6 h-6 text-[#19FF7F]" />
    },
    {
      title: "Knowledge & Boundaries",
      description: "Select the information domains your bot will specialize in while establishing clear boundaries for user interaction.",
      tips: [
        "Define clear knowledge boundaries",
        "Include security-focused specializations",
        "Consider ethical implications"
      ],
      icon: <Database className="w-6 h-6 text-[#19FF7F]" />
    }
  ];

  const knowledgeSources = [
    { id: 'career', name: 'Career Development', description: 'Career guidance, job search, and professional growth' },
    { id: 'wellness', name: 'Health & Wellness', description: 'Physical and mental health, fitness, and nutrition' },
    { id: 'education', name: 'Education', description: 'Academic support, study techniques, and learning resources' },
    { id: 'lifestyle', name: 'Lifestyle & Entertainment', description: 'Hobbies, entertainment, and social activities' }
  ];

  const handleCreateBot = async () => {
    try {
      setIsCreating(true);

      if (!botConfig.name) {
        toast.error('Please provide a name for your bot');
        return;
      }
      if (!botConfig.settings.purpose) {
        toast.error('Please provide a purpose for your bot');
        return;
      }
      if (!botConfig.settings.greeting) {
        toast.error('Please provide a greeting message');
        return;
      }
      if (!botConfig.settings.openingPrompt) {
        toast.error('Please provide an about section for your bot');
        return;
      }

      const botId = nanoid();

      const { data, error } = await supabase
        .from('bots')
        .insert([{
          id: botId,
          name: botConfig.name,
          gender: botConfig.gender,
          personality: botConfig.personality,
          knowledge: botConfig.knowledge,
          settings: botConfig.settings,
          is_public: botConfig.settings.isPublic
        }])
        .select()
        .single();

      if (error) throw error;

      localStorage.removeItem(STORAGE_KEY);
      
      toast.success('Bot created successfully!');
      navigate(`/bot/${botId}`);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsCreating(false);
    }
  };

  const renderWorkshopStep = () => {
    const step = workshopSteps[currentStep];
    return (
      <div className="mb-8 bg-white/10 p-6 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          {step.icon}
          <h2 className="text-2xl font-semibold text-white">{step.title}</h2>
        </div>
        <p className="text-white/90 mb-4">{step.description}</p>
        
        {step.guidelines && (
          <div className="mb-6 space-y-4">
            <div className="bg-emerald-500/10 p-4 rounded-lg">
              <h3 className="text-emerald-400 font-semibold mb-2">Best Practices:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {step.guidelines.dos.map((item, index) => (
                  <li key={index} className="text-white/90">{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-500/10 p-4 rounded-lg">
              <h3 className="text-red-400 font-semibold mb-2">Avoid These:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {step.guidelines.donts.map((item, index) => (
                  <li key={index} className="text-white/90">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {step.examples && (
          <div className="mb-6 space-y-4">
            <h3 className="text-white font-semibold">Examples:</h3>
            {step.examples.map((example, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg ${
                  example.startsWith('✅') 
                    ? 'bg-emerald-500/10 border border-emerald-500/20' 
                    : 'bg-red-500/10 border border-red-500/20'
                }`}
              >
                <p className="text-white/90">{example}</p>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-2">
          {step.tips.map((tip, index) => (
            <div key={index} className="flex items-center gap-2 text-[#19FF7F]/90">
              <div className="w-1.5 h-1.5 rounded-full bg-[#19FF7F]" />
              <p className="text-sm">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8 bg-gradient-to-br from-purple-600/90 to-pink-500/90 p-8 rounded-xl backdrop-blur-lg">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-white">Build-A-Bot Workshop</h1>
            <div className="flex gap-2">
              {workshopSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentStep === index ? 'bg-[#19FF7F]' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {autoSaveIndicator && (
            <div className="text-sm text-[#19FF7F] text-right animate-fade-out">
              {autoSaveIndicator}
            </div>
          )}

          {renderWorkshopStep()}
          
          {currentStep === 0 && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Bot Name"
                value={botConfig.name}
                onChange={(e) => setBotConfig({ ...botConfig, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#19FF7F]"
              />
              
              <select
                value={botConfig.gender}
                onChange={(e) => setBotConfig({ ...botConfig, gender: e.target.value as 'male' | 'female' })}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#19FF7F]"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg mb-4">
                <h3 className="text-white font-semibold mb-2">Purpose Guidelines:</h3>
                <p className="text-white/90 text-sm">
                  Your bot's purpose should clearly define:
                  <br />1. Primary function (what it does)
                  <br />2. Limitations (what it won't do)
                  <br />3. Security boundaries (data handling)
                  <br />4. User expectations (response types)
                </p>
              </div>
              <textarea
                placeholder="What is your bot's main purpose? Be specific about what it can and cannot do."
                value={botConfig.settings.purpose}
                onChange={(e) => setBotConfig({
                  ...botConfig,
                  settings: { ...botConfig.settings, purpose: e.target.value }
                })}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#19FF7F] min-h-[150px]"
              />
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg mb-4">
                <h3 className="text-white font-semibold mb-2">Understanding Greeting vs About:</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[#19FF7F] font-medium">Greeting Message:</h4>
                    <p className="text-white/90 text-sm">
                      - First point of contact
                      <br />- Warm welcome that sets immediate expectations
                      <br />- Brief introduction of capabilities
                      <br />- Invitation to engage
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#19FF7F] font-medium">About Section:</h4>
                    <p className="text-white/90 text-sm">
                      - Detailed explanation of capabilities
                      <br />- Clear limitations and boundaries
                      <br />- Security measures and data handling
                      <br />- Specific use cases and examples
                    </p>
                  </div>
                </div>
              </div>

              <textarea
                placeholder="Greeting Message (How does your bot introduce itself?)"
                value={botConfig.settings.greeting}
                onChange={(e) => setBotConfig({
                  ...botConfig,
                  settings: { ...botConfig.settings, greeting: e.target.value }
                })}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#19FF7F] min-h-[100px]"
              />

              <textarea
                placeholder="About (Detailed description of capabilities, limitations, and security measures)"
                value={botConfig.settings.openingPrompt}
                onChange={(e) => setBotConfig({
                  ...botConfig,
                  settings: { ...botConfig.settings, openingPrompt: e.target.value }
                })}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#19FF7F] min-h-[150px]"
              />
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <select
                value={botConfig.personality.tone}
                onChange={(e) => setBotConfig({
                  ...botConfig,
                  personality: { ...botConfig.personality, tone: e.target.value }
                })}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#19FF7F]"
              >
                <option value="friendly">Friendly</option>
                <option value="professional">Professional</option>
                <option value="casual">Casual</option>
                <option value="formal">Formal</option>
              </select>

              <div className="space-y-2">
                <label className="block text-white">Creative vs Truthful</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={botConfig.personality.truthfulness}
                  onChange={(e) => setBotConfig({
                    ...botConfig,
                    personality: { ...botConfig.personality, truthfulness: parseInt(e.target.value) }
                  })}
                  className="w-full accent-[#19FF7F]"
                />
                <div className="flex justify-between text-sm text-white">
                  <span>Creative</span>
                  <span>Truthful</span>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-4">
              <div className="mb-6 bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">{knowledgeBaseInfo.title}</h3>
                <p className="text-white/90 mb-6">{knowledgeBaseInfo.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {knowledgeBaseInfo.points.map((point, index) => (
                    <div key={index} className="bg-white/10 p-4 rounded-lg">
                      <h4 className="text-[#19FF7F] font-medium mb-2">{point.title}</h4>
                      <p className="text-white/80 text-sm">{point.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                {knowledgeSources.map((source) => (
                  <label key={source.id} className="flex items-center space-x-2 text-white">
                    <input
                      type="checkbox"
                      checked={botConfig.knowledge.sources.includes(source.id)}
                      onChange={(e) => {
                        const newSources = e.target.checked
                          ? [...botConfig.knowledge.sources, source.id]
                          : botConfig.knowledge.sources.filter(s => s !== source.id);
                        setBotConfig({
                          ...botConfig,
                          knowledge: { ...botConfig.knowledge, sources: newSources }
                        });
                      }}
                      className="rounded accent-[#19FF7F]"
                    />
                    <div>
                      <div className="font-medium">{source.name}</div>
                      <div className="text-sm text-white/80">{source.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-4">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              className={`px-6 py-2 text-white rounded-lg hover:bg-white/10 transition-colors duration-200 ${
                currentStep === 0 ? 'invisible' : ''
              }`}
            >
              Previous
            </button>

            {currentStep < workshopSteps.length - 1 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="px-6 py-2 bg-[#19FF7F] text-black font-semibold rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleCreateBot}
                disabled={isCreating}
                className="px-6 py-2 bg-[#19FF7F] text-black font-semibold rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCreating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Creating Bot...</span>
                  </>
                ) : (
                  <span>Create Bot</span>
                )}
              </button>
            )}
          </div>

          <div className="mt-6 pt-6 border-t border-white/10">
            <Link
              to="/pricing"
              className="block w-full px-6 py-3 bg-[#19FF7F] text-black font-semibold rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200 text-center"
            >
              Upgrade Your Plan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildABot;