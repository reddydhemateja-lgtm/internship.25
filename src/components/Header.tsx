import { Button } from "@/components/ui/button";
import { Menu, X, User, Building2, BarChart3 } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div className="font-display font-bold text-xl text-primary">
              PM Internship AI
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#statistics" className="text-muted-foreground hover:text-primary transition-colors">
              Statistics
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => window.location.href = "/login"}>
              <User className="w-4 h-4 mr-2" />
              Student Login
            </Button>
            <Button variant="outline" size="sm" onClick={() => window.location.href = "/login"}>
              <Building2 className="w-4 h-4 mr-2" />
              Employer Portal
            </Button>
            <Button variant="hero" size="sm" onClick={() => window.location.href = "/login"}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-accent"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#statistics" className="text-muted-foreground hover:text-primary transition-colors">
                Statistics
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" size="sm" onClick={() => window.location.href = "/login"}>
                  <User className="w-4 h-4 mr-2" />
                  Student Login
                </Button>
                <Button variant="outline" size="sm" onClick={() => window.location.href = "/login"}>
                  <Building2 className="w-4 h-4 mr-2" />
                  Employer Portal
                </Button>
                <Button variant="hero" size="sm" onClick={() => window.location.href = "/login"}>
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;