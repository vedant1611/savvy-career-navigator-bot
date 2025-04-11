
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAIResponse } from '@/hooks/useAIResponse';
import { toast } from 'sonner';

export const GeminiAPIKeyManager = () => {
  const [key, setKey] = useState('');
  const { saveApiKey } = useAIResponse();

  const handleSaveKey = () => {
    if (key.trim()) {
      saveApiKey(key);
      toast.success('API Key saved successfully');
      setKey('');
    } else {
      toast.error('Please enter a valid API key');
    }
  };

  return (
    <div className="space-y-2">
      <Input 
        type="password"
        placeholder="Enter your Gemini API Key" 
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <Button onClick={handleSaveKey}>Save API Key</Button>
    </div>
  );
};
