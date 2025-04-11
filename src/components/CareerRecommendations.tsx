
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase, DollarSign, TrendingUp, Compass, UserCheck, GraduationCap, PieChart } from 'lucide-react';

type CareerPath = {
  id: string;
  title: string;
  description: string;
  salary: string;
  growth: string;
  matchPercentage: number;
  skills: string[];
  education: string;
  tags: string[];
};

const careerPaths: CareerPath[] = [
  {
    id: "1",
    title: "Data Scientist",
    description: "Analyze complex data to help organizations make better decisions through statistical analysis, machine learning, and data visualization.",
    salary: "$120,000 - $150,000",
    growth: "+28%",
    matchPercentage: 92,
    skills: ["Python", "Machine Learning", "Statistical Analysis", "Data Visualization", "SQL"],
    education: "Bachelor's in Computer Science, Statistics, or related field",
    tags: ["Technology", "Analytics", "High Demand"]
  },
  {
    id: "2",
    title: "UX/UI Designer",
    description: "Create intuitive and engaging interfaces for digital products by combining design thinking, user research, and visual communication.",
    salary: "$95,000 - $125,000",
    growth: "+18%",
    matchPercentage: 85,
    skills: ["User Research", "Wireframing", "Prototyping", "Visual Design", "User Testing"],
    education: "Bachelor's in Design, HCI, or related field",
    tags: ["Creative", "Technology", "Growing"]
  },
  {
    id: "3",
    title: "Product Manager",
    description: "Lead the development of products by understanding user needs, defining strategy, and coordinating with engineering, design, and marketing teams.",
    salary: "$110,000 - $140,000",
    growth: "+15%",
    matchPercentage: 78,
    skills: ["Product Strategy", "User Empathy", "Project Management", "Market Analysis", "Communication"],
    education: "Bachelor's in Business, Computer Science, or related field",
    tags: ["Business", "Leadership", "High Demand"]
  }
];

const CareerRecommendations = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-career-dark mb-4">Career Recommendations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Based on your skills, preferences, and the current job market, these career paths might be a great match for you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-6 mb-10">
            {careerPaths.map((career) => (
              <Card key={career.id} className="overflow-hidden border-l-4" style={{ borderLeftColor: getMatchColor(career.matchPercentage) }}>
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">{career.title}</CardTitle>
                          <CardDescription className="mt-1">
                            {career.description}
                          </CardDescription>
                        </div>
                        <div className="ml-4 bg-career-light text-career-primary rounded-full px-3 py-1 text-sm font-bold flex items-center">
                          <UserCheck className="h-4 w-4 mr-1" />
                          {career.matchPercentage}% Match
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-green-500" />
                          <div>
                            <div className="text-sm text-muted-foreground">Salary Range</div>
                            <div className="font-medium">{career.salary}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-career-primary" />
                          <div>
                            <div className="text-sm text-muted-foreground">Growth Rate</div>
                            <div className="font-medium text-green-500">{career.growth}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-5 w-5 text-career-secondary" />
                          <div>
                            <div className="text-sm text-muted-foreground">Typical Education</div>
                            <div className="font-medium">{career.education.split(',')[0]}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="text-sm font-medium mb-2">Key Skills</div>
                        <div className="flex flex-wrap gap-2">
                          {career.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="font-normal">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex flex-wrap gap-2">
                          {career.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="bg-career-light text-career-dark font-normal">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
                <CardFooter className="bg-muted bg-opacity-30 flex flex-wrap gap-3 justify-between">
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      <PieChart className="h-3.5 w-3.5 mr-1" />
                      Detailed Analysis
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      <Briefcase className="h-3.5 w-3.5 mr-1" />
                      Job Listings
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      <Compass className="h-3.5 w-3.5 mr-1" />
                      Career Path
                    </Button>
                  </div>
                  <Button className="bg-career-primary hover:bg-career-secondary text-xs">
                    Explore This Career
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Button variant="outline" className="gap-2">
              <PieChart className="h-4 w-4" />
              <span>View More Recommendations</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

function getMatchColor(percentage: number): string {
  if (percentage >= 90) return '#10b981'; // green-500
  if (percentage >= 75) return '#0ea5e9'; // sky-500
  if (percentage >= 60) return '#f59e0b'; // amber-500
  return '#6b7280'; // gray-500
}

export default CareerRecommendations;
