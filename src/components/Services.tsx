import { Video, Target, Globe, Share2, Palette, Zap } from "lucide-react";
import Floating3DCard from "./Floating3DCard";

const services = [
  {
    icon: Video,
    title: "AI Video Ads",
    description: "AI-generated video content that converts. Create stunning ads in minutes with our advanced AI engine.",
  },
  {
    icon: Target,
    title: "Performance Marketing",
    description: "Data-driven Facebook & Google Ads campaigns optimized for maximum ROI and conversions.",
  },
  {
    icon: Globe,
    title: "Website & Funnel Development",
    description: "High-converting landing pages and sales funnels designed to turn visitors into customers.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Complete social media strategy, content creation, and community management across all platforms.",
  },
  {
    icon: Palette,
    title: "Branding & Content",
    description: "Build a memorable brand identity with compelling visuals and engaging content strategies.",
  },
  {
    icon: Zap,
    title: "Automation & CRM Setup",
    description: "Streamline your operations with intelligent automation and CRM systems that save time and boost efficiency.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI-powered marketing solutions tailored to accelerate your business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 group hover:glow-primary cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* 3D Background Element */}
              <div className="absolute inset-0 w-full h-full">
                <Floating3DCard />
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow relative z-10">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all relative z-10">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
