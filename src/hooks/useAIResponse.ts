
import { useState, useEffect } from 'react';

type AIResponseOptions = {
  initialLoading?: boolean;
};

export function useAIResponse({ initialLoading = false }: AIResponseOptions = {}) {
  const [loading, setLoading] = useState(initialLoading);
  const [error, setError] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState<string | null>(localStorage.getItem('geminiApiKey'));

  const saveApiKey = (key: string) => {
    localStorage.setItem('geminiApiKey', key);
    setApiKey(key);
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
      return 'I apologize, but I encountered an error while processing your request. Please try again.';
    } finally {
      setLoading(false);
    }
  };

  const fetchGeminiResponse = async (prompt: string, apiKey: string): Promise<string> => {
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
      throw new Error('Gemini API request failed');
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  };

  return {
    loading,
    error,
    apiKey,
    saveApiKey,
    getResponse,
  };
}
