import { PerplexityClient } from '@perplexity/core';

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

const RATE_LIMIT = 50;
const TIME_WINDOW = 36e5; // 1 hour in milliseconds
const requestTimes: number[] = [];

function checkRateLimit(): boolean {
  const now = Date.now();
  while (requestTimes.length > 0 && requestTimes[0] < now - TIME_WINDOW) {
    requestTimes.shift();
  }
  if (requestTimes.length < RATE_LIMIT) {
    requestTimes.push(now);
    return true;
  }
  return false;
}

export async function getPerplexityResponse(messages: Message[]) {
  if (!checkRateLimit()) {
    throw new Error('Rate limit exceeded. Please try again later.');
  }

  const apiKey = import.meta.env.VITE_PERPLEXITY_API_KEY;
  if (!apiKey) {
    throw new Error('Perplexity API key is not configured.');
  }

  try {
    // Format messages to ensure proper alternation
    const formattedMessages = messages.reduce((acc: Message[], msg, index) => {
      // Always keep system messages
      if (msg.role === 'system') {
        acc.push(msg);
        return acc;
      }

      // Get the last non-system message
      const lastMsg = [...acc].reverse().find(m => m.role !== 'system');

      // If this is the first non-system message, make it a user message
      if (!lastMsg) {
        acc.push({ ...msg, role: 'user' });
        return acc;
      }

      // Ensure alternating pattern
      const expectedRole = lastMsg.role === 'user' ? 'assistant' : 'user';
      
      // If current message matches expected role, add it
      // If not, combine with previous message of same role
      if (msg.role === expectedRole) {
        acc.push(msg);
      } else {
        const lastIndex = acc.length - 1;
        acc[lastIndex] = {
          ...acc[lastIndex],
          content: `${acc[lastIndex].content}\n${msg.content}`
        };
      }

      return acc;
    }, []);

    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'sonar-pro',
        messages: formattedMessages,
        temperature: 0.1,
        top_p: 0.9,
        max_tokens: 150,
        frequency_penalty: 1.5
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Perplexity API error details:', {
        status: response.status,
        statusText: response.statusText,
        errorText
      });

      if (response.status === 401) {
        throw new Error('Invalid API key. Please check your configuration.');
      } else if (response.status === 429) {
        throw new Error('Rate limit exceeded. Please try again later.');
      } else {
        const errorData = JSON.parse(errorText);
        throw new Error(errorData.error?.message || `API request failed: ${response.status} ${response.statusText}`);
      }
    }

    const data = await response.json();
    if (!data.choices?.[0]?.message?.content) {
      console.error('Unexpected API response format:', data);
      throw new Error('Invalid response format from API');
    }

    return data.choices[0].message.content;
  } catch (error: any) {
    console.error('Perplexity API error:', error);
    
    if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
      throw new Error('Network error. Please check your internet connection and try again.');
    }
    
    throw error;
  }
}