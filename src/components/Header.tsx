
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Briefcase, GraduationCap, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-career-primary" />
          <Link to="/" className="text-xl font-bold text-career-primary">
            CareerCompass
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-career-primary transition-colors">
            Home
          </Link>
          <Link to="/" className="text-sm font-medium hover:text-career-primary transition-colors">
            Assessment
          </Link>
          <Link to="/" className="text-sm font-medium hover:text-career-primary transition-colors">
            Job Market
          </Link>
          <Link to="/" className="text-sm font-medium hover:text-career-primary transition-colors">
            Resume
          </Link>
          <Link to="/" className="text-sm font-medium hover:text-career-primary transition-colors">
            Interviews
          </Link>
          <Button variant="default" className="bg-career-primary hover:bg-career-secondary">
            Get Started
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b shadow-lg z-50">
          <div className="container py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Assessment
            </Link>
            <Link 
              to="/" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Job Market
            </Link>
            <Link 
              to="/" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Link>
            <Link 
              to="/" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Interviews
            </Link>
            <Button 
              variant="default" 
              className="bg-career-primary hover:bg-career-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
