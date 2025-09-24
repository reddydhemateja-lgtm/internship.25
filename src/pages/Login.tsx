import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Building2, BarChart3, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [studentForm, setStudentForm] = useState({ email: "", password: "" });
  const [employerForm, setEmployerForm] = useState({ email: "", password: "" });

  const handleStudentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate("/student-dashboard");
  };

  const handleEmployerLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate("/employer-dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-white to-accent-light flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BarChart3 className="w-7 h-7 text-white" />
            </div>
            <div className="font-display font-bold text-2xl text-primary">
              PM Internship AI
            </div>
          </div>
          <p className="text-muted-foreground">
            Access your personalized dashboard
          </p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl">Welcome Back</CardTitle>
            <CardDescription>
              Choose your login type to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="student" className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Student</span>
                </TabsTrigger>
                <TabsTrigger value="employer" className="flex items-center space-x-2">
                  <Building2 className="w-4 h-4" />
                  <span>Employer</span>
                </TabsTrigger>
              </TabsList>

              {/* Student Login */}
              <TabsContent value="student">
                <form onSubmit={handleStudentLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-email">Email</Label>
                    <Input
                      id="student-email"
                      type="email"
                      placeholder="student@example.com"
                      value={studentForm.email}
                      onChange={(e) => setStudentForm({...studentForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-password">Password</Label>
                    <Input
                      id="student-password"
                      type="password"
                      value={studentForm.password}
                      onChange={(e) => setStudentForm({...studentForm, password: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Login as Student
                  </Button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    Don't have an account?
                  </p>
                  <Button variant="outline" className="w-full">
                    Register as Student
                  </Button>
                </div>

                {/* Demo Access */}
                <div className="mt-4 p-4 bg-primary-light rounded-lg">
                  <p className="text-sm text-primary font-medium mb-2">
                    Demo Access
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    Try the platform with sample data
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => navigate("/student-dashboard")}
                  >
                    Enter as Demo Student
                  </Button>
                </div>
              </TabsContent>

              {/* Employer Login */}
              <TabsContent value="employer">
                <form onSubmit={handleEmployerLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="employer-email">Company Email</Label>
                    <Input
                      id="employer-email"
                      type="email"
                      placeholder="hr@company.com"
                      value={employerForm.email}
                      onChange={(e) => setEmployerForm({...employerForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employer-password">Password</Label>
                    <Input
                      id="employer-password"
                      type="password"
                      value={employerForm.password}
                      onChange={(e) => setEmployerForm({...employerForm, password: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Login as Employer
                  </Button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    New partner organization?
                  </p>
                  <Button variant="outline" className="w-full">
                    Register Your Company
                  </Button>
                </div>

                {/* Demo Access */}
                <div className="mt-4 p-4 bg-accent-light rounded-lg">
                  <p className="text-sm text-accent font-medium mb-2">
                    Demo Access
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    Explore employer features
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => navigate("/employer-dashboard")}
                  >
                    Enter as Demo Employer
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="text-center mt-6 text-sm text-muted-foreground">
          <p>
            Secured by Government of India 🔒
          </p>
          <p className="mt-1">
            Your data is protected under Digital India guidelines
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;