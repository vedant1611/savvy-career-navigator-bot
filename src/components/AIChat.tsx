
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, User, SendHorizontal } from 'lucide-react';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
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
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setNewMessage('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(newMessage),
        sender: 'ai',
        timestamp: new Date(),
      };
      
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const getAIResponse = (userMessage: string): string => {
    // Simple response logic - in a real app, this would call an API
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('resume') || lowerCaseMessage.includes('cv')) {
      return "I'd be happy to help with your resume! To create an effective resume, focus on highlighting your relevant achievements with metrics, using action verbs, and tailoring it to each job description. Would you like specific tips for your industry?";
    }
    
    if (lowerCaseMessage.includes('interview')) {
      return "Preparing for interviews is essential! I recommend researching the company, practicing common questions, preparing your own questions, and using the STAR method for behavioral questions. Is there a specific type of interview you're preparing for?";
    }
    
    if (lowerCaseMessage.includes('career change') || lowerCaseMessage.includes('change career')) {
      return "Career transitions can be challenging but rewarding! Start by identifying transferable skills, researching growth industries, networking with professionals in your target field, and potentially acquiring new certifications or education. What field are you interested in moving to?";
    }
    
    if (lowerCaseMessage.includes('skills') || lowerCaseMessage.includes('skill assessment')) {
      return "Skills assessment is a great way to identify your strengths and areas for development. I can help you evaluate your technical, soft, and transferable skills to align them with potential career paths. Would you like to start with a quick assessment?";
    }
    
    return "That's an interesting question about your career journey. Could you tell me more about your background and goals so I can provide more tailored advice?";
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
              <CardTitle className="flex items-center gap-2 text-career-primary">
                <Bot className="h-5 w-5" />
                AI Career Advisor
              </CardTitle>
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
                              : 'bg-muted'
                          }`}
                        >
                          {message.sender === 'user' ? (
                            <User className="h-4 w-4" />
                          ) : (
                            <Bot className="h-4 w-4" />
                          )}
                        </div>
                        <div
                          className={`py-2 px-3 rounded-lg ${
                            message.sender === 'user'
                              ? 'bg-career-primary text-white'
                              : 'bg-muted text-foreground'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
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
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
