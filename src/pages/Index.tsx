
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { GraduationCap, Briefcase, LineChart, FileText, MessageSquare, ArrowRight } from 'lucide-react';
import CareerAssessment from '@/components/CareerAssessment';
import SkillsEvaluation from '@/components/SkillsEvaluation';
import JobMarketInsights from '@/components/JobMarketInsights';
import CareerRecommendations from '@/components/CareerRecommendations';
import ResumeBuilder from '@/components/ResumeBuilder';
import InterviewPrep from '@/components/InterviewPrep';
import AIChat from '@/components/AIChat';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-career-light via-white to-career-light">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-career-dark mb-6 leading-tight">
                  Your AI-Powered<br />
                  <span className="text-career-primary">Career Navigator</span>
                </h1>
                <p className="text-xl mb-8 text-muted-foreground max-w-xl">
                  Discover the perfect career path with personalized guidance, skills assessment, and expert preparation resources.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Button className="bg-career-primary hover:bg-career-secondary text-white">
                    Start Assessment
                  </Button>
                  <Button variant="outline">
                    Explore Careers
                  </Button>
                </div>
              </div>
              <div className="flex-1 flex justify-center md:justify-end">
                <img 
                  src="/placeholder.svg" 
                  alt="Career navigator illustration" 
                  className="max-w-full h-auto rounded-lg shadow-lg"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Grid */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-career-dark mb-4">How CareerCompass Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our intelligent platform guides you through every step of your career journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-career-light rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-career-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Skills Assessment</h3>
                <p className="text-muted-foreground mb-4">
                  Identify your strengths, skills, and personality traits with our comprehensive assessment tools.
                </p>
                <Button variant="link" className="p-0 h-auto text-career-primary gap-1">
                  Start Assessment <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-career-light rounded-lg flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-career-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Job Market Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  Explore current trends, salary data, and growth opportunities across different industries.
                </p>
                <Button variant="link" className="p-0 h-auto text-career-primary gap-1">
                  View Insights <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-career-light rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-career-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Career Recommendations</h3>
                <p className="text-muted-foreground mb-4">
                  Get personalized career suggestions based on your skills, preferences, and market demand.
                </p>
                <Button variant="link" className="p-0 h-auto text-career-primary gap-1">
                  See Matches <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-career-light rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-career-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Resume Building</h3>
                <p className="text-muted-foreground mb-4">
                  Create a standout resume with tailored tips, templates, and AI-powered optimization.
                </p>
                <Button variant="link" className="p-0 h-auto text-career-primary gap-1">
                  Improve Resume <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-career-light rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-career-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Interview Preparation</h3>
                <p className="text-muted-foreground mb-4">
                  Practice with common questions, get feedback, and learn effective strategies for success.
                </p>
                <Button variant="link" className="p-0 h-auto text-career-primary gap-1">
                  Practice Now <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-career-light rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-career-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Advisor</h3>
                <p className="text-muted-foreground mb-4">
                  Chat with our AI career advisor for personalized guidance and answers to your questions.
                </p>
                <Button variant="link" className="p-0 h-auto text-career-primary gap-1">
                  Ask AI <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Career Assessment Section */}
        <CareerAssessment />
        
        {/* Skills Evaluation Section */}
        <SkillsEvaluation />
        
        {/* Job Market Insights Section */}
        <JobMarketInsights />
        
        {/* Career Recommendations Section */}
        <CareerRecommendations />
        
        {/* Resume Builder Section */}
        <ResumeBuilder />
        
        {/* Interview Prep Section */}
        <InterviewPrep />
        
        {/* AI Chat Section */}
        <AIChat />
        
        {/* Testimonials Section */}
        <section className="py-16 bg-career-light bg-opacity-30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-career-dark mb-4">Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how CareerCompass has helped thousands find their ideal career path.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h3 className="font-medium">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">Software Developer</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "With CareerCompass, I discovered my passion for coding and found the perfect bootcamp to learn. Now I'm working at my dream tech company!"
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h3 className="font-medium">Michael Thomas</h3>
                    <p className="text-sm text-muted-foreground">Career Changer</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "After 10 years in retail, I was ready for a change. CareerCompass helped me identify transferable skills and transition into project management."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h3 className="font-medium">Jessica Chen</h3>
                    <p className="text-sm text-muted-foreground">Recent Graduate</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "As a new graduate, I was overwhelmed by career options. The assessment tools helped me find direction and land my first professional job."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-career-primary text-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Find Your Ideal Career Path?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of professionals who've discovered fulfilling careers with CareerCompass.
              </p>
              <Button className="bg-white text-career-primary hover:bg-career-light">
                Get Started Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
