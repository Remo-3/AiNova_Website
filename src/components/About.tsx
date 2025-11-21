import { Brain, Rocket, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">AINova Marketing Lab</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              AINova Marketing Lab is a next-gen marketing agency that blends AI automation with 
              performance-driven strategies. We build fast-growing brands with powerful ad creatives, 
              analytics, and funnel systems.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is to democratize enterprise-level marketing technology, making it accessible 
              to businesses of all sizes through AI-powered automation and data-driven insights.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                <span className="text-sm">AI-Driven</span>
              </div>
              <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
                <Rocket className="w-4 h-4 text-secondary" />
                <span className="text-sm">Performance Focused</span>
              </div>
              <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-sm">Growth Experts</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="glass p-8 rounded-3xl">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center animate-gradient">
                {/* Neural Network Visualization */}
                <div className="relative w-full h-full">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/30 rounded-full blur-xl animate-pulse-glow"></div>
                  <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full animate-float"></div>
                  <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-secondary rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
                  <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-accent rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
                  <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-primary rounded-full animate-float" style={{ animationDelay: "3s" }}></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Brain className="w-24 h-24 text-primary animate-pulse-glow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
