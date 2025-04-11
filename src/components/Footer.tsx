
import React from 'react';
import { Briefcase, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="h-5 w-5 text-career-primary" />
              <span className="text-lg font-bold text-career-primary">CareerCompass</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your AI-powered career guidance platform helping you navigate your professional journey.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-career-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-career-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-career-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium mb-2">Features</h3>
            <Link to="/" className="text-sm text-muted-foreground hover:text-career-primary transition-colors">
              Skills Assessment
            </Link>
            <Link to="/" className="text-sm text-muted-foreground hover:text-career-primary transition-colors">
              Job Market Insights
            </Link>
            <Link to="/" className="text-sm text-muted-foreground hover:text-career-primary transition-colors">
              Career Recommendations
            </Link>
            <Link to="/" className="text-sm text-muted-foreground hover:text-career-primary transition-colors">
              Resume Builder
            </Link>
            <Link to="/" className="text-sm text-muted-foreground hover:text-career-primary transition-colors">
              Interview Preparation
            </Link>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium mb-2">Resources</h3>
            <Link to="/" className="text-sm text-muted-foreground hover:text-career-primary transition-colors">
              Blog
            </Link>
            <Link to="/" className="text-sm text-muted-foreground hover:text-career-primary transition-colors">
              Career Guide
            </Link>
            <Link to="/" className="text-sm text-muted-foreground hover:text-career-primary transition-colors">
              Success Stories
            </Link>
            <Link to="/" className="text-sm text-muted-foreground hover:text-career-primary transition-colors">
              FAQ
            </Link>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium mb-2">Company</h3>
            <Link to="/" className="text-sm text-muted-foreground hover:text-career-primary transition-colors">
              About Us
            </Link>
            <Link to="/" className="text-sm text-muted-foreground hover:text-career-primary transition-colors">
              Contact
            </Link>
            <Link to="/" className="text-sm text-muted-foreground hover:text-career-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="text-sm text-muted-foreground hover:text-career-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} CareerCompass. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
