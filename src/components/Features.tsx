import { Brain, Users, MapPin, TrendingUp, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Advanced machine learning algorithms analyze skills, qualifications, and preferences to create perfect matches between students and internships.",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Affirmative Action Compliance",
    description: "Ensures equitable representation from rural/aspirational districts and different social categories while maintaining merit-based selection.",
    color: "text-accent"
  },
  {
    icon: MapPin,
    title: "Location Intelligence",
    description: "Smart geographical matching considers location preferences, regional development needs, and accessibility factors for optimal placements.",
    color: "text-success"
  },
  {
    icon: TrendingUp,
    title: "Industry Insights",
    description: "Real-time analytics on industry trends, skill demands, and career paths to guide students toward future-ready opportunities.",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Secure & Transparent",
    description: "End-to-end encryption and transparent selection processes ensure data security and build trust among all stakeholders.",
    color: "text-accent"
  },
  {
    icon: Clock,
    title: "Real-Time Processing",
    description: "Instant matching and notifications reduce waiting times and enable quick decision-making for both students and employers.",
    color: "text-success"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Intelligent Features for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Better Outcomes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-driven platform combines cutting-edge technology with government policy requirements to deliver fair, efficient, and transparent internship allocations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gradient-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl bg-primary-light mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-primary-light rounded-full text-primary font-medium text-sm mb-8">
            <Brain className="w-4 h-4 mr-2" />
            Powered by Advanced AI/ML Algorithms
          </div>
          
          <div className="bg-gradient-card rounded-2xl p-8 border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Ready to Experience Smart Internship Matching?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of students and hundreds of companies already benefiting from our AI-powered allocation engine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-primary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200">
                Register as Student
              </button>
              <button className="px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary-light transition-all duration-200">
                Partner with Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;