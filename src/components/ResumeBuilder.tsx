
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { CheckCircle2, AlertCircle, FileText, Download, Info, Edit, Copy } from 'lucide-react';

const ResumeBuilder = () => {
  return (
    <section className="py-10 bg-career-light bg-opacity-30">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-career-dark mb-4">Resume Building</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Create a compelling resume that highlights your strengths and speaks to your target employers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="tips">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="tips">Resume Tips</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
              <TabsTrigger value="analysis">Resume Analysis</TabsTrigger>
            </TabsList>
            
            <TabsContent value="tips" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Crafting an Effective Resume</CardTitle>
                  <CardDescription>
                    Key strategies to make your resume stand out to employers and applicant tracking systems
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium text-career-dark mb-4 flex items-center">
                      Content Optimization
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 ml-2 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-sm">These techniques will help your resume pass through Applicant Tracking Systems (ATS) and impress human recruiters</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Target keywords from the job description</p>
                          <p className="text-sm text-muted-foreground">
                            Identify and include relevant keywords from the job description to pass through Applicant Tracking Systems.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Quantify achievements with metrics</p>
                          <p className="text-sm text-muted-foreground">
                            Use numbers and percentages to demonstrate impact (e.g., "Increased sales by 20%").
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Focus on relevant experience</p>
                          <p className="text-sm text-muted-foreground">
                            Prioritize experiences that demonstrate skills needed for the target position.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Avoid generic statements</p>
                          <p className="text-sm text-muted-foreground">
                            Replace clichés like "team player" with specific examples that demonstrate these qualities.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-career-dark mb-4">Format & Structure</h3>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Clean, consistent formatting</p>
                          <p className="text-sm text-muted-foreground">
                            Use a clean, professional design with consistent fonts, spacing, and bullet styles.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Scannable structure</p>
                          <p className="text-sm text-muted-foreground">
                            Use clear headings, bullet points, and white space to make your resume easy to scan.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">One to two pages maximum</p>
                          <p className="text-sm text-muted-foreground">
                            Keep your resume concise — one page for early career, two pages maximum for experienced professionals.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Avoid complex graphics or tables</p>
                          <p className="text-sm text-muted-foreground">
                            These elements can confuse ATS systems and make your resume difficult to parse.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button className="gap-2 bg-career-primary hover:bg-career-secondary">
                      <FileText className="h-4 w-4" />
                      Get Personalized Resume Tips
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="examples" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Technical Resume</CardTitle>
                    <CardDescription>
                      Software Developer with 3 years experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="bg-muted rounded-md p-4 border relative">
                      <div className="absolute top-2 right-2 flex gap-2">
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-bold">ALEX RODRIGUEZ</h4>
                        <p className="text-sm">Software Developer | alex.rodriguez@email.com | (555) 123-4567</p>
                      </div>
                      <div className="mb-3">
                        <h5 className="text-sm font-bold border-b pb-1 mb-2">SUMMARY</h5>
                        <p className="text-xs">
                          Full-stack developer with 3 years of experience building web applications using React and Node.js. Passionate about creating efficient, scalable, and user-friendly solutions.
                        </p>
                      </div>
                      <div className="mb-3">
                        <h5 className="text-sm font-bold border-b pb-1 mb-2">EXPERIENCE</h5>
                        <div className="mb-2">
                          <div className="flex justify-between">
                            <p className="text-xs font-bold">Software Developer, Tech Solutions Inc.</p>
                            <p className="text-xs">Jan 2022 - Present</p>
                          </div>
                          <ul className="text-xs list-disc list-inside pl-1">
                            <li>Developed responsive web applications using React, leading to a 25% increase in user engagement</li>
                            <li>Optimized database queries, improving application performance by 40%</li>
                            <li>Collaborated with UX designers to implement intuitive user interfaces</li>
                          </ul>
                        </div>
                      </div>
                      {/* Additional sections would continue here */}
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Edit className="h-3.5 w-3.5" />
                        <span>Use as Template</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Business Resume</CardTitle>
                    <CardDescription>
                      Marketing Manager with 5 years experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="bg-muted rounded-md p-4 border relative">
                      <div className="absolute top-2 right-2 flex gap-2">
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-bold">TAYLOR WILLIAMS</h4>
                        <p className="text-sm">Marketing Manager | taylor.williams@email.com | (555) 234-5678</p>
                      </div>
                      <div className="mb-3">
                        <h5 className="text-sm font-bold border-b pb-1 mb-2">PROFESSIONAL SUMMARY</h5>
                        <p className="text-xs">
                          Results-driven marketing manager with 5 years of experience developing and executing comprehensive marketing campaigns that drive growth and brand awareness.
                        </p>
                      </div>
                      <div className="mb-3">
                        <h5 className="text-sm font-bold border-b pb-1 mb-2">PROFESSIONAL EXPERIENCE</h5>
                        <div className="mb-2">
                          <div className="flex justify-between">
                            <p className="text-xs font-bold">Marketing Manager, Global Brands Inc.</p>
                            <p className="text-xs">Mar 2020 - Present</p>
                          </div>
                          <ul className="text-xs list-disc list-inside pl-1">
                            <li>Led digital marketing initiatives that increased web traffic by 150% and conversions by 30%</li>
                            <li>Managed a $500K annual marketing budget, consistently staying under budget while exceeding KPIs</li>
                            <li>Developed and implemented social media strategy that grew following by 200% across platforms</li>
                          </ul>
                        </div>
                      </div>
                      {/* Additional sections would continue here */}
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Edit className="h-3.5 w-3.5" />
                        <span>Use as Template</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="analysis" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Resume Analysis Tool</CardTitle>
                  <CardDescription>
                    Get personalized feedback on your resume to make it more effective
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed rounded-md mb-6">
                    <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground mb-4">Upload your resume or drag and drop</p>
                    <p className="text-xs text-muted-foreground mb-6">Supports PDF, DOCX (Max size: 5MB)</p>
                    <Button className="bg-career-primary hover:bg-career-secondary">Choose File</Button>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      Our AI assistant will analyze your resume and provide specific recommendations 
                      based on industry standards and best practices.
                    </p>
                    <Button variant="outline" className="gap-2">
                      <Info className="h-4 w-4" />
                      <span>How It Works</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ResumeBuilder;
