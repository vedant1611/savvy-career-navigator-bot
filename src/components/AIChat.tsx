
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, User, SendHorizontal, Key, AlertCircle } from 'lucide-react';
import { useAIResponse } from '@/hooks/useAIResponse';
import { GeminiAPIKeyManager } from '@/components/GeminiAPIKeyManager';
import { toast } from 'sonner';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  error?: boolean;
};

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI career advisor. How can I help you today with your career search or development?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const { loading: isLoading, getResponse, apiKey, error } = useAIResponse();
  const [showApiKeyInput, setShowApiKeyInput] = useState(!apiKey);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (error) {
      toast.error(`AI Error: ${error}`);
    }
  }, [error]);

  useEffect(() => {
    // Show API key input if no key is set
    setShowApiKeyInput(!apiKey);
  }, [apiKey]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;
    
    if (!apiKey) {
      setShowApiKeyInput(true);
      toast.error('Please set your Gemini API key first');
      return;
    }

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setNewMessage('');

    try {
      // Get AI response from Gemini API
      const aiResponse = await getResponse(newMessage);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        sender: 'ai',
        timestamp: new Date(),
        error: aiResponse.includes('error') || aiResponse.includes('Error'),
      };
      
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I couldn't process your request. Please check your API key and try again.",
        sender: 'ai',
        timestamp: new Date(),
        error: true,
      };
      
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section className="py-10 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <Card className="border-career-primary border-t-4">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2 text-career-primary">
                  <Bot className="h-5 w-5" />
                  AI Career Advisor
                </CardTitle>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-1 text-xs"
                  onClick={() => setShowApiKeyInput(!showApiKeyInput)}
                >
                  <Key className="h-3.5 w-3.5" />
                  {apiKey ? "Change API Key" : "Set API Key"}
                </Button>
              </div>
              {showApiKeyInput && (
                <div className="mt-3">
                  <GeminiAPIKeyManager />
                </div>
              )}
            </CardHeader>
            <CardContent>
              <div className="flex flex-col h-[400px]">
                <div className="flex-1 overflow-y-auto mb-4 pr-2 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`flex gap-3 max-w-[80%] ${
                          message.sender === 'user'
                            ? 'flex-row-reverse'
                            : 'flex-row'
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.sender === 'user'
                              ? 'bg-career-primary text-white'
                              : message.error 
                                ? 'bg-destructive text-white'
                                : 'bg-muted'
                          }`}
                        >
                          {message.sender === 'user' ? (
                            <User className="h-4 w-4" />
                          ) : message.error ? (
                            <AlertCircle className="h-4 w-4" />
                          ) : (
                            <Bot className="h-4 w-4" />
                          )}
                        </div>
                        <div
                          className={`py-2 px-3 rounded-lg ${
                            message.sender === 'user'
                              ? 'bg-career-primary text-white'
                              : message.error
                                ? 'bg-destructive/10 text-destructive border border-destructive/20'
                                : 'bg-muted text-foreground'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-line">{message.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-muted">
                          <Bot className="h-4 w-4" />
                        </div>
                        <div className="py-2 px-3 rounded-lg bg-muted">
                          <div className="flex gap-1">
                            <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask me about your career path, skills, or job market..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1"
                  />
                  <Button 
                    className="bg-career-primary hover:bg-career-secondary"
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim() || isLoading}
                  >
                    <SendHorizontal className="h-4 w-4" />
                    <span className="sr-only">Send message</span>
                  </Button>
                </div>
                {!apiKey && (
                  <p className="text-sm text-destructive mt-2 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    Please set your Gemini API key to use the chat
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
