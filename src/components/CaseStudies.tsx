import { TrendingUp, Users, GraduationCap } from "lucide-react";

const caseStudies = [
  {
    icon: TrendingUp,
    title: "Real Estate Lead Gen",
    description: "Premium property developer in Mumbai",
    results: [
      { label: "Leads Generated", value: "2000+" },
      { label: "Cost Per Lead", value: "₹18" },
      { label: "ROAS", value: "8.5X" },
    ],
    gradient: "from-primary to-blue-600",
  },
  {
    icon: Users,
    title: "D2C Brand Growth",
    description: "Fashion & lifestyle e-commerce brand",
    results: [
      { label: "Revenue Growth", value: "320%" },
      { label: "Customer Acquisition", value: "50K+" },
      { label: "ROAS", value: "12X" },
    ],
    gradient: "from-secondary to-purple-600",
  },
  {
    icon: GraduationCap,
    title: "Coaching Institute",
    description: "Competitive exam preparation academy",
    results: [
      { label: "Admissions", value: "1500+" },
      { label: "Cost Per Admission", value: "₹280" },
      { label: "Conversion Rate", value: "24%" },
    ],
    gradient: "from-accent to-pink-600",
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from businesses that trusted AINova Marketing Lab
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="glass p-8 rounded-3xl hover:scale-105 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${study.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow`}>
                <study.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
              <p className="text-muted-foreground text-sm mb-8">{study.description}</p>

              {/* Results */}
              <div className="space-y-4">
                {study.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{result.label}</span>
                    <span className="text-xl font-bold gradient-text">{result.value}</span>
                  </div>
                ))}
              </div>

              {/* Graph Visualization */}
              <div className="mt-6 h-24 relative overflow-hidden rounded-lg bg-gradient-to-r from-transparent via-primary/10 to-transparent">
                <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between px-2 gap-1">
                  {[40, 60, 45, 80, 55, 90, 70, 95].map((height, i) => (
                    <div
                      key={i}
                      className={`bg-gradient-to-t ${study.gradient} rounded-t opacity-60 hover:opacity-100 transition-opacity`}
                      style={{
                        width: "10%",
                        height: `${height}%`,
                        animation: `fade-in-up 0.5s ease-out ${i * 0.1}s both`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
