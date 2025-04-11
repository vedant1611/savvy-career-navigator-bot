
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Video, Clock, ThumbsUp, ThumbsDown, Play, Bookmark, BookmarkCheck } from 'lucide-react';

const commonQuestions = [
  {
    id: "1",
    question: "Tell me about yourself",
    answer: "Start with a brief professional summary, then highlight 2-3 key achievements or experiences relevant to the role. End with why you're interested in this position.",
    tips: "Keep it concise (1-2 minutes), professional, and relevant to the job. Avoid personal details unless they relate to your professional story.",
    category: "General",
    difficulty: "Easy"
  },
  {
    id: "2",
    question: "What is your greatest weakness?",
    answer: "Choose a genuine weakness that isn't critical to the job, explain how you've recognized it, and what steps you're taking to improve.",
    tips: "Avoid clichés like 'I'm a perfectionist' and never mention weaknesses critical to the job. Show self-awareness and growth mindset.",
    category: "General",
    difficulty: "Medium"
  },
  {
    id: "3",
    question: "Tell me about a challenge you faced at work and how you handled it",
    answer: "Use the STAR method (Situation, Task, Action, Result) to describe a specific challenge, what you needed to do, the actions you took, and the positive outcome.",
    tips: "Choose a situation that highlights valuable skills for the role. Emphasize your thought process and what you learned.",
    category: "Behavioral",
    difficulty: "Medium"
  },
  {
    id: "4",
    question: "Why should we hire you?",
    answer: "Highlight your most relevant skills and experiences for the position, demonstrate your understanding of their needs, and explain how you can add unique value.",
    tips: "Research the company and role thoroughly so you can be specific about how your qualifications match their needs. Be confident but not arrogant.",
    category: "General",
    difficulty: "Medium"
  },
  {
    id: "5",
    question: "Where do you see yourself in five years?",
    answer: "Express your career aspirations that naturally align with the potential growth path of the position. Show ambition balanced with realism.",
    tips: "Demonstrate commitment to the field and desire for growth, while being flexible. Show you've thought about your career development.",
    category: "General",
    difficulty: "Easy"
  },
  {
    id: "6",
    question: "Describe a situation where you had to work with a difficult team member",
    answer: "Describe the situation briefly, focus on the actions you took to improve the working relationship, and share positive results without criticizing the colleague.",
    tips: "Show your interpersonal skills, conflict resolution abilities, and professionalism. Highlight your patience and collaboration skills.",
    category: "Behavioral",
    difficulty: "Hard"
  },
];

const InterviewPrep = () => {
  const [savedQuestions, setSavedQuestions] = useState<string[]>([]);
  
  const toggleSaveQuestion = (id: string) => {
    if (savedQuestions.includes(id)) {
      setSavedQuestions(savedQuestions.filter(qId => qId !== id));
    } else {
      setSavedQuestions([...savedQuestions, id]);
    }
  };
  
  return (
    <section className="py-10">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-career-dark mb-4">Interview Preparation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Prepare for your interviews with common questions, answers, and practice tools.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="common">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="common">Common Questions</TabsTrigger>
              <TabsTrigger value="practice">Practice Interview</TabsTrigger>
              <TabsTrigger value="tips">Interview Tips</TabsTrigger>
            </TabsList>
            
            <TabsContent value="common" className="mt-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">All</Button>
                  <Button variant="outline" size="sm">General</Button>
                  <Button variant="outline" size="sm">Behavioral</Button>
                  <Button variant="outline" size="sm">Technical</Button>
                </div>
                <div>
                  <Button variant="outline" size="sm" className="gap-1">
                    <BookmarkCheck className="h-4 w-4" />
                    Saved ({savedQuestions.length})
                  </Button>
                </div>
              </div>
              
              <Accordion type="single" collapsible className="mb-8">
                {commonQuestions.map((item) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger>
                      <div className="flex justify-between w-full pr-4">
                        <div className="text-left">{item.question}</div>
                        <div className="flex gap-2">
                          <Badge variant="outline" className={
                            item.difficulty === "Easy" ? "bg-green-100 text-green-800 border-green-200" : 
                            item.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800 border-yellow-200" :
                            "bg-red-100 text-red-800 border-red-200"
                          }>
                            {item.difficulty}
                          </Badge>
                          <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                            {item.category}
                          </Badge>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-sm mb-2">Suggested Answer:</h4>
                          <p className="text-sm text-muted-foreground">{item.answer}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Tips:</h4>
                          <p className="text-sm text-muted-foreground">{item.tips}</p>
                        </div>
                        <div className="flex justify-between pt-2">
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="gap-1 text-xs">
                              <ThumbsUp className="h-3.5 w-3.5" />
                              Helpful
                            </Button>
                            <Button variant="outline" size="sm" className="gap-1 text-xs">
                              <MessageSquare className="h-3.5 w-3.5" />
                              Add Note
                            </Button>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className={`gap-1 text-xs ${savedQuestions.includes(item.id) ? 'text-career-primary' : ''}`}
                            onClick={() => toggleSaveQuestion(item.id)}
                          >
                            {savedQuestions.includes(item.id) ? (
                              <>
                                <BookmarkCheck className="h-3.5 w-3.5" />
                                Saved
                              </>
                            ) : (
                              <>
                                <Bookmark className="h-3.5 w-3.5" />
                                Save
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <div className="flex justify-center">
                <Button variant="outline">Load More Questions</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="practice" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Virtual Interview Practice</CardTitle>
                  <CardDescription>
                    Practice answering interview questions with our AI-powered virtual interviewer
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-muted p-6 rounded-md text-center">
                      <Video className="h-12 w-12 mx-auto text-career-primary mb-4" />
                      <h3 className="text-xl font-medium mb-2">Start Practice Interview</h3>
                      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                        Our virtual interviewer will ask you questions and provide feedback on your answers.
                      </p>
                      <div className="flex flex-wrap gap-4 justify-center mb-6">
                        <Button variant="outline" className="gap-2">
                          <Clock className="h-4 w-4" />
                          15 Minutes
                        </Button>
                        <Button variant="outline" className="gap-2">
                          <Clock className="h-4 w-4" />
                          30 Minutes
                        </Button>
                        <Button variant="outline" className="gap-2">
                          <Clock className="h-4 w-4" />
                          45 Minutes
                        </Button>
                      </div>
                      <Button className="bg-career-primary hover:bg-career-secondary gap-2">
                        <Play className="h-4 w-4" />
                        Start Interview
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="py-4">
                          <CardTitle className="text-sm">General Interview</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-4">
                          <p className="text-xs text-muted-foreground">
                            Common questions asked in most job interviews
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="py-4">
                          <CardTitle className="text-sm">Technical Interview</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-4">
                          <p className="text-xs text-muted-foreground">
                            Role-specific technical questions
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="py-4">
                          <CardTitle className="text-sm">Behavioral Interview</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-4">
                          <p className="text-xs text-muted-foreground">
                            Questions about past experiences and behaviors
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="tips" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Interview Success Strategies</CardTitle>
                  <CardDescription>
                    Expert advice to help you perform at your best during interviews
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Before the Interview</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex gap-2 items-start">
                              <ThumbsUp className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Research the company thoroughly</span>
                            </li>
                            <li className="flex gap-2 items-start">
                              <ThumbsUp className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Practice answers to common questions</span>
                            </li>
                            <li className="flex gap-2 items-start">
                              <ThumbsUp className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Prepare questions to ask the interviewer</span>
                            </li>
                            <li className="flex gap-2 items-start">
                              <ThumbsUp className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Plan your outfit and route in advance</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">During the Interview</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex gap-2 items-start">
                              <ThumbsUp className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Make a strong first impression with confident body language</span>
                            </li>
                            <li className="flex gap-2 items-start">
                              <ThumbsUp className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Use the STAR method for behavioral questions</span>
                            </li>
                            <li className="flex gap-2 items-start">
                              <ThumbsUp className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Show enthusiasm for the role and company</span>
                            </li>
                            <li className="flex gap-2 items-start">
                              <ThumbsDown className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                              <span>Avoid speaking negatively about past employers</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">After the Interview</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex gap-2 items-start">
                              <ThumbsUp className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Send a personalized thank-you email within 24 hours</span>
                            </li>
                            <li className="flex gap-2 items-start">
                              <ThumbsUp className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Follow up if you haven't heard back in a week</span>
                            </li>
                            <li className="flex gap-2 items-start">
                              <ThumbsUp className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Reflect on your performance to improve</span>
                            </li>
                            <li className="flex gap-2 items-start">
                              <ThumbsDown className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                              <span>Don't stop your job search until you have an offer</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">STAR Method for Behavioral Questions</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          <div className="bg-muted p-3 rounded-md">
                            <h4 className="font-bold text-sm mb-1">Situation</h4>
                            <p className="text-xs text-muted-foreground">
                              Describe the context and background of the specific situation you were in.
                            </p>
                          </div>
                          <div className="bg-muted p-3 rounded-md">
                            <h4 className="font-bold text-sm mb-1">Task</h4>
                            <p className="text-xs text-muted-foreground">
                              Explain the challenge or responsibility you were given in that situation.
                            </p>
                          </div>
                          <div className="bg-muted p-3 rounded-md">
                            <h4 className="font-bold text-sm mb-1">Action</h4>
                            <p className="text-xs text-muted-foreground">
                              Describe the specific steps you took to address the situation.
                            </p>
                          </div>
                          <div className="bg-muted p-3 rounded-md">
                            <h4 className="font-bold text-sm mb-1">Result</h4>
                            <p className="text-xs text-muted-foreground">
                              Share the outcomes of your actions and what you learned.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-career-primary hover:bg-career-secondary">Book a Mock Interview</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default InterviewPrep;
