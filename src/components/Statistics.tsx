import { TrendingUp, Users, Building2, MapPin, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "25,000+",
    label: "Students Registered",
    description: "Active candidates seeking internships",
    color: "text-primary"
  },
  {
    icon: Building2,
    value: "750+",
    label: "Partner Organizations",
    description: "Companies offering internships",
    color: "text-accent"
  },
  {
    icon: TrendingUp,
    value: "98.5%",
    label: "Satisfaction Rate",
    description: "Students satisfied with placements",
    color: "text-success"
  },
  {
    icon: MapPin,
    value: "650+",
    label: "Districts Covered",
    description: "Including rural & aspirational districts",
    color: "text-primary"
  },
  {
    icon: Award,
    value: "85%",
    label: "Rural Representation",
    description: "Students from rural areas placed",
    color: "text-accent"
  },
  {
    icon: Clock,
    value: "2.5 days",
    label: "Average Match Time",
    description: "From application to placement",
    color: "text-success"
  }
];

const achievements = [
  "Winner of Digital India Innovation Award 2024",
  "Recognized by Ministry of Skill Development",
  "ISO 27001 Certified for Data Security",
  "Featured in Times Higher Education Report"
];

const Statistics = () => {
  return (
    <section id="statistics" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Impact{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              By Numbers
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-driven platform has transformed internship allocation across India, creating opportunities and ensuring equitable representation.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gradient-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className={`inline-flex p-3 rounded-xl bg-primary-light mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              
              <div className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-2">
                {stat.value}
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </h3>
              
              <p className="text-muted-foreground text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-display font-bold mb-6">
                Transforming Lives Across India
              </h3>
              <p className="text-white/90 leading-relaxed mb-8">
                From remote villages in Odisha to bustling tech hubs in Bangalore, our AI matching engine has connected students with life-changing opportunities while ensuring fair representation across all demographics.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90">60% placements in tier-2 and tier-3 cities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90">45% female participation rate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90">35% from scheduled castes & tribes</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-2xl font-bold mb-2">150+</div>
                <div className="text-white/80 text-sm">Success Stories Published</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-2xl font-bold mb-2">92%</div>
                <div className="text-white/80 text-sm">Full-time Job Conversion</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-2xl font-bold mb-2">₹45K</div>
                <div className="text-white/80 text-sm">Average Monthly Stipend</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-2xl font-bold mb-2">4.8/5</div>
                <div className="text-white/80 text-sm">Platform Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-card rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
            Recognition & Achievements
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;