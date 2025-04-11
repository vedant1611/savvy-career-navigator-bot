
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

type Question = {
  id: number;
  text: string;
  options: {
    id: string;
    text: string;
    trait: string;
  }[];
};

const questions: Question[] = [
  {
    id: 1,
    text: "How do you feel about working with other people?",
    options: [
      { id: "a", text: "I thrive in team environments", trait: "social" },
      { id: "b", text: "I prefer working independently", trait: "independent" },
      { id: "c", text: "I like a balance of both", trait: "balanced" },
      { id: "d", text: "It depends on the project", trait: "adaptable" },
    ]
  },
  {
    id: 2,
    text: "When faced with a problem, you typically:",
    options: [
      { id: "a", text: "Analyze it logically", trait: "analytical" },
      { id: "b", text: "Trust your intuition", trait: "intuitive" },
      { id: "c", text: "Seek different perspectives", trait: "collaborative" },
      { id: "d", text: "Try different solutions until one works", trait: "experimental" },
    ]
  },
  {
    id: 3,
    text: "Which environment do you prefer working in?",
    options: [
      { id: "a", text: "Structured with clear expectations", trait: "structured" },
      { id: "b", text: "Creative with room for innovation", trait: "creative" },
      { id: "c", text: "Fast-paced and dynamic", trait: "dynamic" },
      { id: "d", text: "Relaxed and flexible", trait: "flexible" },
    ]
  },
  {
    id: 4,
    text: "What motivates you the most in your career?",
    options: [
      { id: "a", text: "Financial security", trait: "security-oriented" },
      { id: "b", text: "Making a positive impact", trait: "purpose-driven" },
      { id: "c", text: "Learning and personal growth", trait: "growth-oriented" },
      { id: "d", text: "Recognition and achievement", trait: "achievement-oriented" },
    ]
  },
  {
    id: 5,
    text: "How do you handle change in your work environment?",
    options: [
      { id: "a", text: "I embrace it as an opportunity", trait: "adaptable" },
      { id: "b", text: "I prefer stability and consistency", trait: "stability-oriented" },
      { id: "c", text: "I need time to adjust but can adapt", trait: "cautious" },
      { id: "d", text: "I like to lead and shape the change", trait: "leadership" },
    ]
  },
];

const CareerAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [assessmentComplete, setAssessmentComplete] = useState(false);

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    if (selectedOption) {
      // Save the answer
      setAnswers({
        ...answers,
        [questions[currentQuestion].id]: selectedOption,
      });

      // Go to next question or finish
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setAssessmentComplete(true);
      }
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setSelectedOption(null);
    setAssessmentComplete(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className="py-10 bg-career-light bg-opacity-30">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-career-dark mb-4">Career Personality Assessment</h2>
            <p className="text-muted-foreground mb-6">
              Discover your career personality through this short assessment. Your answers will help us tailor recommendations to your unique traits and preferences.
            </p>
          </div>

          {!assessmentComplete ? (
            <Card>
              <CardHeader>
                <CardTitle>Question {currentQuestion + 1} of {questions.length}</CardTitle>
                <CardDescription>
                  {questions[currentQuestion].text}
                </CardDescription>
                <Progress value={progress} className="h-2 mt-2" />
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedOption || ""} className="gap-3">
                  {questions[currentQuestion].options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={option.id}
                        id={option.id}
                        onClick={() => handleOptionSelect(option.id)}
                      />
                      <Label 
                        htmlFor={option.id} 
                        className="flex-1 py-2 cursor-pointer"
                      >
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={handleNext} 
                  disabled={!selectedOption}
                  className="w-full bg-career-primary hover:bg-career-secondary"
                >
                  {currentQuestion < questions.length - 1 ? "Next Question" : "Complete Assessment"}
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Assessment Complete!</CardTitle>
                <CardDescription>
                  Thank you for completing the career personality assessment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Based on your answers, we've analyzed your career personality traits. 
                  These insights will help match you with career paths that align with your 
                  natural preferences and strengths.
                </p>
                <div className="bg-muted p-4 rounded-md">
                  <p className="font-medium">Your top traits:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Strong analytical thinking</li>
                    <li>Preference for collaborative environments</li>
                    <li>Motivated by learning and growth</li>
                    <li>Adaptable to changing circumstances</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="outline" 
                  onClick={resetAssessment}
                  className="w-full sm:w-auto"
                >
                  Retake Assessment
                </Button>
                <Button 
                  className="w-full sm:w-auto bg-career-primary hover:bg-career-secondary"
                >
                  View Career Matches
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default CareerAssessment;
