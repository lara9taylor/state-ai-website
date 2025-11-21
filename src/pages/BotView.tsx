import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Loader2, Send, AlertCircle } from 'lucide-react';
import { getPerplexityResponse } from '../lib/perplexity';

export const BotView: React.FC = () => {
  const { id } = useParams();
  const [bot, setBot] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ role: 'system' | 'user' | 'assistant', content: string }>>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBot() {
      try {
        const { data, error } = await supabase
          .from('bots')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        if (!data) throw new Error('Bot not found');

        setBot(data);
        
        // Initialize with system message and greeting
        setMessages([
          {
            role: 'system',
            content: `You are ${data.name}, an AI assistant with the following purpose: ${data.settings.purpose}. 
                     Your personality is ${data.personality.tone} and ${data.personality.style}.
                     Respond in a way that matches this personality.
                     Keep responses concise and under 150 tokens.`
          },
          {
            role: 'assistant',
            content: data.settings.greeting
          }
        ]);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBot();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isProcessing) return;

    const userMessage = message;
    setMessage('');
    setIsProcessing(true);
    setApiError(null);

    // Add user message to chat
    const updatedMessages = [...messages, { role: 'user', content: userMessage }];
    setMessages(updatedMessages);

    try {
      const botResponse = await getPerplexityResponse(updatedMessages);
      setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
    } catch (err: any) {
      console.error('Error getting response:', err);
      setApiError(err.message);
      
      const errorMessage = err.message.includes('API key') 
        ? "I'm currently experiencing configuration issues. Please try again later."
        : err.message.includes('Rate limit') 
          ? "I'm currently experiencing high traffic. Please try again in a few minutes."
          : "I apologize, but I encountered an error. Please try again in a moment.";
      
      setMessages(prev => [...prev, { role: 'assistant', content: errorMessage }]);
    } finally {
      setIsProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#19FF7F] animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="bg-red-500/10 text-red-500 p-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-purple-600/90 to-pink-500/90 p-8 rounded-xl backdrop-blur-lg">
          {/* Bot Info */}
          <div className="mb-8 space-y-4">
            <h1 className="text-4xl font-bold text-white">{bot.name}</h1>
            <div className="bg-white/10 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-white mb-2">Purpose</h2>
              <p className="text-white/90">{bot.settings.purpose}</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-white mb-2">About</h2>
              <p className="text-white/90">{bot.settings.openingPrompt}</p>
            </div>
          </div>
          
          {/* API Error Banner */}
          {apiError && (
            <div className="mb-4 bg-red-500/10 text-red-400 p-4 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              <span>{apiError}</span>
            </div>
          )}
          
          {/* Chat Messages */}
          <div className="bg-black/20 rounded-lg p-4 mb-4 h-[400px] overflow-y-auto">
            {messages.slice(1).map((msg, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  msg.role === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-[#19FF7F] text-black'
                      : 'bg-white/10 text-white'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#19FF7F]"
              disabled={isProcessing}
            />
            <button
              type="submit"
              disabled={isProcessing}
              className="px-4 py-2 bg-[#19FF7F] text-black rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              {isProcessing ? 'Processing...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}