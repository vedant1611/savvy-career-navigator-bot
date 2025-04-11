
import { useState } from 'react';

type AIResponseOptions = {
  initialLoading?: boolean;
};

export function useAIResponse({ initialLoading = false }: AIResponseOptions = {}) {
  const [loading, setLoading] = useState(initialLoading);
  const [error, setError] = useState<string | null>(null);

  // Simulate getting a response from an AI API
  const getResponse = async (prompt: string): Promise<string> => {
    try {
      setLoading(true);
      setError(null);
      
      // In a real implementation, this would be an API call to a service like Gemini
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      
      // Simple response logic - in a real app, this would call an API
      const response = generateSimpleResponse(prompt);
      
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to get AI response';
      setError(errorMessage);
      return 'I apologize, but I encountered an error while processing your request. Please try again.';
    } finally {
      setLoading(false);
    }
  };

  const generateSimpleResponse = (prompt: string): string => {
    const lowerCasePrompt = prompt.toLowerCase();
    
    if (lowerCasePrompt.includes('resume') || lowerCasePrompt.includes('cv')) {
      return "Based on your skills and experience, I recommend highlighting your technical expertise and quantifiable achievements on your resume. Use action verbs and tailor your resume to each job description by including relevant keywords.";
    }
    
    if (lowerCasePrompt.includes('interview')) {
      return "For your upcoming interview, prepare to discuss your experience with specific examples using the STAR method. Research the company thoroughly and prepare thoughtful questions to ask the interviewer.";
    }
    
    if (lowerCasePrompt.includes('career') || lowerCasePrompt.includes('job')) {
      return "Looking at your profile and the current job market, roles in data analysis, product management, and UX design align well with your skills and show strong growth potential. Would you like me to provide more specific information about any of these career paths?";
    }
    
    if (lowerCasePrompt.includes('skill') || lowerCasePrompt.includes('learn')) {
      return "Based on your current skills and career interests, I recommend focusing on developing your data analysis, project management, and UX design skills. These are highly transferable and in-demand in today's job market.";
    }
    
    return "I've analyzed your profile and the current job market. I'd be happy to provide personalized career advice, resume feedback, or interview preparation assistance. What specific aspect of your career journey would you like help with?";
  };

  return {
    loading,
    error,
    getResponse,
  };
}
