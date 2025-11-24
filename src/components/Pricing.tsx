import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Floating3DPrism from "./Floating3DPrism";

const pricingPlans = [
  {
    name: "Starter",
    price: "₹25,000",
    period: "/month",
    description: "Perfect for small businesses starting their digital journey",
    features: [
      "2 Social Media Platforms",
      "10 Posts per Month",
      "Basic Analytics",
      "Email Support",
      "Monthly Strategy Call",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹50,000",
    period: "/month",
    description: "Ideal for growing businesses ready to scale",
    features: [
      "All Starter Features",
      "4 Social Media Platforms",
      "20 Posts per Month",
      "Facebook & Google Ads",
      "Advanced Analytics Dashboard",
      "Landing Page Development",
      "Weekly Strategy Calls",
      "Priority Support",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    price: "₹1,00,000",
    period: "/month",
    description: "Enterprise solution for maximum growth and ROI",
    features: [
      "All Growth Features",
      "Unlimited Social Platforms",
      "40+ Posts per Month",
      "AI Video Ad Creation",
      "Full Funnel Development",
      "CRM & Automation Setup",
      "Dedicated Account Manager",
      "24/7 Priority Support",
      "Custom Reporting",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan to accelerate your business growth
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`glass p-8 rounded-3xl transition-all duration-300 hover:scale-105 relative overflow-hidden ${
                plan.highlighted
                  ? "border-2 border-primary glow-primary relative"
                  : "border border-border/50"
              }`}
            >
              {/* 3D Background Element */}
              <div className="absolute inset-0 w-full h-full">
                <Floating3DPrism />
              </div>

              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8 relative z-10">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8 relative z-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full relative z-10 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                    : "glass border-2 border-primary/50 hover:bg-primary/10"
                }`}
                size="lg"
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
