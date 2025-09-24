import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  MapPin, 
  BookOpen, 
  Award, 
  Zap, 
  TrendingUp, 
  Clock,
  CheckCircle,
  ArrowRight 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [profileComplete, setProfileComplete] = useState(65);
  const [isMatching, setIsMatching] = useState(false);
  const [matchFound, setMatchFound] = useState(false);

  const [profile, setProfile] = useState({
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    phone: "",
    location: "",
    education: "",
    skills: [],
    interests: [],
    experience: ""
  });

  const skills = ["JavaScript", "Python", "React", "Data Analysis", "UI/UX Design", "Digital Marketing", "Content Writing"];
  const sectors = ["Technology", "Healthcare", "Finance", "Education", "Manufacturing", "Agriculture"];

  const handleStartMatching = async () => {
    setIsMatching(true);
    // Simulate AI matching process
    setTimeout(() => {
      setIsMatching(false);
      setMatchFound(true);
    }, 3000);
  };

  const mockMatches = [
    {
      company: "TechCorp Solutions",
      role: "Frontend Developer Intern",
      location: "Bangalore, Karnataka",
      match: 94,
      stipend: "₹25,000/month",
      duration: "6 months",
      skills: ["React", "JavaScript", "UI/UX Design"]
    },
    {
      company: "InnovateX Labs",
      role: "UI/UX Design Intern",
      location: "Pune, Maharashtra", 
      match: 89,
      stipend: "₹22,000/month",
      duration: "4 months",
      skills: ["UI/UX Design", "JavaScript"]
    },
    {
      company: "Digital Dynamics",
      role: "Full Stack Developer Intern",
      location: "Hyderabad, Telangana",
      match: 87,
      stipend: "₹28,000/month", 
      duration: "6 months",
      skills: ["JavaScript", "Python", "React"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="font-display font-bold text-lg text-primary">
                Student Portal
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Welcome, {profile.name}</span>
              <Button variant="outline" size="sm" onClick={() => navigate("/")}>
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Completion */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Profile Completion</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Progress value={profileComplete} className="w-full" />
                  <p className="text-sm text-muted-foreground">
                    {profileComplete}% complete. Complete your profile to get better matches!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Profile Views</span>
                  <span className="font-semibold">47</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Applications Sent</span>
                  <span className="font-semibold">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Matches Found</span>
                  <span className="font-semibold">{matchFound ? "3" : "0"}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="matching">AI Matching</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Complete your profile to improve AI matching accuracy
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          value={profile.name}
                          onChange={(e) => setProfile({...profile, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={profile.email}
                          onChange={(e) => setProfile({...profile, email: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          placeholder="+91 9876543210"
                          value={profile.phone}
                          onChange={(e) => setProfile({...profile, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Select onValueChange={(value) => setProfile({...profile, location: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bangalore">Bangalore, Karnataka</SelectItem>
                            <SelectItem value="mumbai">Mumbai, Maharashtra</SelectItem>
                            <SelectItem value="delhi">Delhi</SelectItem>
                            <SelectItem value="pune">Pune, Maharashtra</SelectItem>
                            <SelectItem value="hyderabad">Hyderabad, Telangana</SelectItem>
                            <SelectItem value="rural-bihar">Rural Bihar</SelectItem>
                            <SelectItem value="rural-odisha">Rural Odisha</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="education">Education</Label>
                      <Select onValueChange={(value) => setProfile({...profile, education: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="btech">B.Tech Computer Science</SelectItem>
                          <SelectItem value="bca">BCA</SelectItem>
                          <SelectItem value="mca">MCA</SelectItem>
                          <SelectItem value="mtech">M.Tech</SelectItem>
                          <SelectItem value="bcom">B.Com</SelectItem>
                          <SelectItem value="mcom">M.Com</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Skills</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant={profile.skills.includes(skill) ? "default" : "outline"}
                            className="cursor-pointer"
                            onClick={() => {
                              const newSkills = profile.skills.includes(skill)
                                ? profile.skills.filter(s => s !== skill)
                                : [...profile.skills, skill];
                              setProfile({...profile, skills: newSkills});
                            }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="experience">Experience & Projects</Label>
                      <Textarea 
                        id="experience"
                        placeholder="Describe your relevant experience, projects, and achievements..."
                        value={profile.experience}
                        onChange={(e) => setProfile({...profile, experience: e.target.value})}
                      />
                    </div>

                    <Button className="w-full">Save Profile</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* AI Matching Tab */}
              <TabsContent value="matching" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Zap className="w-5 h-5" />
                      <span>AI-Powered Matching</span>
                    </CardTitle>
                    <CardDescription>
                      Our advanced algorithm will find the best internship matches for you
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {!isMatching && !matchFound && (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                          <Zap className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Ready to Find Your Perfect Match?</h3>
                        <p className="text-muted-foreground mb-6">
                          Our AI will analyze your profile and match you with the best internship opportunities
                        </p>
                        <Button onClick={handleStartMatching} size="lg" variant="hero">
                          Start AI Matching
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                    )}

                    {isMatching && (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                          <TrendingUp className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">AI Analysis in Progress...</h3>
                        <p className="text-muted-foreground mb-6">
                          Analyzing your skills, preferences, and matching with available opportunities
                        </p>
                        <div className="max-w-md mx-auto space-y-2">
                          <Progress value={33} className="w-full" />
                          <p className="text-sm text-muted-foreground">Analyzing profile...</p>
                        </div>
                      </div>
                    )}

                    {matchFound && (
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 text-success">
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-semibold">3 Perfect Matches Found!</span>
                        </div>
                        
                        {mockMatches.map((match, index) => (
                          <Card key={index} className="border-l-4 border-l-primary">
                            <CardContent className="pt-6">
                              <div className="flex items-start justify-between mb-4">
                                <div>
                                  <h4 className="font-semibold text-lg">{match.role}</h4>
                                  <p className="text-muted-foreground">{match.company}</p>
                                  <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                                    <span className="flex items-center space-x-1">
                                      <MapPin className="w-4 h-4" />
                                      <span>{match.location}</span>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                      <Clock className="w-4 h-4" />
                                      <span>{match.duration}</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-2xl font-bold text-primary">{match.match}%</div>
                                  <div className="text-sm text-muted-foreground">Match</div>
                                </div>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-semibold text-accent">{match.stipend}</p>
                                  <div className="flex flex-wrap gap-1 mt-2">
                                    {match.skills.map((skill) => (
                                      <Badge key={skill} variant="secondary" className="text-xs">
                                        {skill}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                <Button size="sm">Apply Now</Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Applications Tab */}
              <TabsContent value="applications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>My Applications</CardTitle>
                    <CardDescription>
                      Track your internship applications and their status
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">No Applications Yet</h3>
                      <p className="text-muted-foreground">
                        Start by completing your profile and finding matches
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;