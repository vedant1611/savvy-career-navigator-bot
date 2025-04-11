
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

type AIResponseOptions = {
  initialLoading?: boolean;
};

export function useAIResponse({ initialLoading = false }: AIResponseOptions = {}) {
  const [loading, setLoading] = useState(initialLoading);
  const [error, setError] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState<string | null>(null);

  // Load API key from localStorage on component mount
  useEffect(() => {
    const savedKey = localStorage.getItem('geminiApiKey');
    if (savedKey) {
      setApiKey(savedKey);
    }
  }, []);

  const saveApiKey = (key: string) => {
    if (!key.trim()) {
      toast.error('Please enter a valid API key');
      return;
    }
    
    localStorage.setItem('geminiApiKey', key);
    setApiKey(key);
    toast.success('API Key saved successfully');
  };

  const clearApiKey = () => {
    localStorage.removeItem('geminiApiKey');
    setApiKey(null);
    toast.info('API Key removed');
  };

  const validateApiKey = (key: string): boolean => {
    // Basic validation - Gemini API keys typically start with "AI" and are at least 30 chars
    return key.trim().length >= 30;
  };

  const getResponse = async (prompt: string): Promise<string> => {
    if (!apiKey) {
      setError('Gemini API key is not set');
      return 'Please set your Gemini API key first.';
    }

    try {
      setLoading(true);
      setError(null);
      
      const response = await fetchGeminiResponse(prompt, apiKey);
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to get AI response';
      setError(errorMessage);
      console.error("Error in getResponse:", errorMessage);
      return `I apologize, but I encountered an error: ${errorMessage}. Please check your API key and try again.`;
    } finally {
      setLoading(false);
    }
  };

  const fetchGeminiResponse = async (prompt: string, apiKey: string): Promise<string> => {
    console.log("Attempting to fetch from Gemini API...");
    
    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }]
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API response not OK:", response.status, errorText);
        throw new Error(`API error (${response.status}): ${errorText}`);
      }

      const data = await response.json();
      if (!data.candidates || !data.candidates[0]?.content?.parts?.length) {
        console.error("Unexpected API response format:", data);
        throw new Error('Unexpected API response format');
      }
      
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error("Error in fetchGeminiResponse:", error);
      throw error;
    }
  };

  return {
    loading,
    error,
    apiKey,
    saveApiKey,
    clearApiKey,
    getResponse,
  };
}
