import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2, 
  Users, 
  Plus, 
  Eye,
  Calendar,
  MapPin,
  Briefcase,
  TrendingUp,
  CheckCircle,
  Clock,
  Star
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const EmployerDashboard = () => {
  const navigate = useNavigate();
  const [showCreateForm, setShowCreateForm] = useState(false);

  const mockInternships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      department: "Technology",
      location: "Bangalore, Karnataka",
      stipend: "₹25,000/month",
      duration: "6 months",
      applicants: 47,
      status: "Active",
      skills: ["React", "JavaScript", "CSS"],
      description: "Work on our main web application using React and modern web technologies."
    },
    {
      id: 2,
      title: "Data Analyst Intern", 
      department: "Analytics",
      location: "Mumbai, Maharashtra",
      stipend: "₹22,000/month",
      duration: "4 months",
      applicants: 23,
      status: "Active",
      skills: ["Python", "SQL", "Data Analysis"],
      description: "Analyze business data and create insights using Python and SQL."
    },
    {
      id: 3,
      title: "Digital Marketing Intern",
      department: "Marketing", 
      location: "Delhi",
      stipend: "₹18,000/month",
      duration: "3 months",
      applicants: 31,
      status: "Draft",
      skills: ["Digital Marketing", "Content Writing", "SEO"],
      description: "Help develop and execute digital marketing campaigns."
    }
  ];

  const mockCandidates = [
    {
      name: "Priya Sharma",
      education: "B.Tech Computer Science",
      location: "Bangalore, Karnataka",
      skills: ["React", "JavaScript", "UI/UX Design"],
      match: 94,
      experience: "2 years of project experience",
      category: "General"
    },
    {
      name: "Rahul Kumar",
      education: "BCA",
      location: "Rural Bihar",
      skills: ["Python", "Data Analysis", "SQL"],
      match: 89,
      experience: "1 year freelance experience",
      category: "Rural/Aspirational District"
    },
    {
      name: "Anjali Patel",
      education: "B.Com",
      location: "Pune, Maharashtra",
      skills: ["Digital Marketing", "Content Writing"],
      match: 87,
      experience: "Internship at local startup",
      category: "SC/ST"
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
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div className="font-display font-bold text-lg text-primary">
                Employer Portal
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">TechCorp Solutions</span>
              <Button variant="outline" size="sm" onClick={() => navigate("/")}>
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Stats Cards */}
          <div className="lg:col-span-4 grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Positions</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Applicants</p>
                    <p className="text-2xl font-bold">284</p>
                  </div>
                  <Users className="w-8 h-8 text-accent" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Placements Made</p>
                    <p className="text-2xl font-bold">45</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                    <p className="text-2xl font-bold">92%</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-4">
            <Tabs defaultValue="internships" className="w-full">
              <div className="flex items-center justify-between mb-6">
                <TabsList>
                  <TabsTrigger value="internships">My Internships</TabsTrigger>
                  <TabsTrigger value="candidates">AI Recommendations</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>
                
                <Button onClick={() => setShowCreateForm(!showCreateForm)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Position
                </Button>
              </div>

              {/* Create Form */}
              {showCreateForm && (
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Create New Internship Position</CardTitle>
                    <CardDescription>
                      Fill in the details to create a new internship opportunity
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="title">Position Title</Label>
                        <Input id="title" placeholder="e.g. Frontend Developer Intern" />
                      </div>
                      <div>
                        <Label htmlFor="department">Department</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="hr">Human Resources</SelectItem>
                            <SelectItem value="operations">Operations</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" placeholder="e.g. Bangalore, Karnataka" />
                      </div>
                      <div>
                        <Label htmlFor="stipend">Monthly Stipend</Label>
                        <Input id="stipend" placeholder="e.g. ₹25,000" />
                      </div>
                      <div>
                        <Label htmlFor="duration">Duration</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3months">3 months</SelectItem>
                            <SelectItem value="6months">6 months</SelectItem>
                            <SelectItem value="12months">12 months</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="positions">Number of Positions</Label>
                        <Input id="positions" type="number" placeholder="1" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Job Description</Label>
                      <Textarea 
                        id="description"
                        placeholder="Describe the role, responsibilities, and requirements..."
                        rows={4}
                      />
                    </div>
                    
                    <div className="flex space-x-4">
                      <Button>Create Position</Button>
                      <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Internships Tab */}
              <TabsContent value="internships" className="space-y-6">
                <div className="grid gap-6">
                  {mockInternships.map((internship) => (
                    <Card key={internship.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold">{internship.title}</h3>
                              <Badge variant={internship.status === "Active" ? "default" : "secondary"}>
                                {internship.status}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-2">{internship.description}</p>
                            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                              <span className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{internship.location}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{internship.duration}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Users className="w-4 h-4" />
                                <span>{internship.applicants} applicants</span>
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-primary">{internship.stipend}</p>
                            <div className="flex space-x-2 mt-2">
                              <Button size="sm" variant="outline">
                                <Eye className="w-4 h-4 mr-1" />
                                View
                              </Button>
                              <Button size="sm">Edit</Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {internship.skills.map((skill) => (
                            <Badge key={skill} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Candidates Tab */}
              <TabsContent value="candidates" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-accent" />
                      <span>AI-Recommended Candidates</span>
                    </CardTitle>
                    <CardDescription>
                      Top candidates matched by our AI algorithm for your positions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockCandidates.map((candidate, index) => (
                        <Card key={index} className="border-l-4 border-l-accent">
                          <CardContent className="pt-6">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <h4 className="font-semibold text-lg">{candidate.name}</h4>
                                  <Badge variant="outline">{candidate.category}</Badge>
                                </div>
                                <p className="text-muted-foreground mb-2">{candidate.education}</p>
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                                  <span className="flex items-center space-x-1">
                                    <MapPin className="w-4 h-4" />
                                    <span>{candidate.location}</span>
                                  </span>
                                  <span>{candidate.experience}</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {candidate.skills.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="text-xs">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-accent">{candidate.match}%</div>
                                <div className="text-sm text-muted-foreground mb-3">Match Score</div>
                                <div className="flex space-x-2">
                                  <Button size="sm" variant="outline">View Profile</Button>
                                  <Button size="sm">Contact</Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Analytics Tab */}
              <TabsContent value="analytics" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Application Trends</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>This Month</span>
                          <span className="font-semibold">89 applications</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Last Month</span>
                          <span className="font-semibold">67 applications</span>
                        </div>
                        <div className="flex justify-between items-center text-success">
                          <span>Growth</span>
                          <span className="font-semibold">+33%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Diversity Metrics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Rural Candidates</span>
                          <span className="font-semibold">32%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>SC/ST Candidates</span>
                          <span className="font-semibold">28%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Female Candidates</span>
                          <span className="font-semibold">45%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;