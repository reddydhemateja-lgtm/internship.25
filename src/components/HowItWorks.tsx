import { ArrowRight, UserPlus, Settings, Zap, CheckCircle } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

const steps = [
  {
    icon: UserPlus,
    title: "Profile Creation",
    description: "Students and employers create comprehensive profiles with skills, preferences, and requirements.",
    color: "bg-primary"
  },
  {
    icon: Settings,
    title: "AI Analysis",
    description: "Our advanced algorithms analyze profiles, considering skills, location, sector interests, and affirmative action requirements.",
    color: "bg-accent"
  },
  {
    icon: Zap,
    title: "Smart Matching",
    description: "The system generates optimal matches based on compatibility scores and policy compliance factors.",
    color: "bg-success"
  },
  {
    icon: CheckCircle,
    title: "Placement Confirmation",
    description: "Both parties review matches and confirm placements through our secure platform.",
    color: "bg-primary"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gradient-to-br from-primary-light via-white to-accent-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
            How Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI Engine Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From registration to placement, our streamlined process ensures efficient and fair internship allocation through intelligent automation.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center group">
                <div className={`inline-flex p-4 rounded-xl ${step.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <step.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow connector (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-4 z-10">
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 lg:p-12 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-success-light rounded-full text-success font-medium text-sm">
                <Zap className="w-4 h-4 mr-2" />
                Live Dashboard Preview
              </div>
              
              <h3 className="text-3xl font-display font-bold text-foreground">
                Real-Time Matching Dashboard
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                Monitor the AI matching process in real-time with comprehensive analytics, success metrics, and detailed compatibility scores. Our intuitive interface provides transparency at every step.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm">Live matching algorithm status</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Compatibility score visualization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Affirmative action compliance tracking</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={dashboardPreview} 
                alt="AI dashboard showing internship matching analytics and charts"
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;