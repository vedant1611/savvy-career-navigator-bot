
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAIResponse } from '@/hooks/useAIResponse';
import { toast } from 'sonner';
import { Key, Trash2 } from 'lucide-react';

export const GeminiAPIKeyManager = () => {
  const [key, setKey] = useState('');
  const { saveApiKey, clearApiKey, apiKey } = useAIResponse();
  const [keyIsSet, setKeyIsSet] = useState(false);

  useEffect(() => {
    setKeyIsSet(!!apiKey);
  }, [apiKey]);

  const handleSaveKey = () => {
    if (key.trim()) {
      saveApiKey(key);
      setKey('');
    } else {
      toast.error('Please enter a valid API key');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSaveKey();
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Input 
          type="password"
          placeholder="Enter your Gemini API Key" 
          value={key}
          onChange={(e) => setKey(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1"
        />
        <Button 
          onClick={handleSaveKey}
          className="bg-career-primary hover:bg-career-secondary"
        >
          <Key className="h-4 w-4 mr-1" />
          Save Key
        </Button>
        {keyIsSet && (
          <Button 
            variant="destructive" 
            onClick={clearApiKey}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </div>
      {keyIsSet && (
        <p className="text-xs text-muted-foreground">API key is set ✓</p>
      )}
      <p className="text-xs text-muted-foreground">
        Get your API key from <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-career-primary hover:underline">Google AI Studio</a>
      </p>
    </div>
  );
};
