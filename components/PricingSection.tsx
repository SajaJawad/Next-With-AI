"use client";

import { PricingCard } from "./PricingCard";

const plans = [
  {
    name: "Free",
    price: "Free",
    description: "Perfect for exploring the basics of the studio.",
    features: [
      { text: "Up to 3 projects", included: true },
      { text: "Standard rendering speed", included: true },
      { text: "Community support", included: true },
      { text: "Basic export formats", included: true },
      { text: "Team collaboration", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$29",
    description: "Advanced tools for professional creators.",
    features: [
      { text: "Unlimited projects", included: true },
      { text: "Priority rendering", included: true },
      { text: "1-on-1 expert support", included: true },
      { text: "All export formats", included: true },
      { text: "Team collaboration", included: true },
    ],
    isPopular: true,
  },
  {
    name: "Studio",
    price: "$99",
    description: "The ultimate power for studios and agencies.",
    features: [
      { text: "Custom render farm access", included: true },
      { text: "24/7 VIP support line", included: true },
      { text: "White-label exports", included: true },
      { text: "API access & webhooks", included: true },
      { text: "Custom brand presets", included: true },
    ],
    ctaText: "Contact Sales",
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="section-shell mt-6 px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="caps-sm text-sm font-semibold uppercase text-primary">
            Pricing
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
            Simple plans for every creator
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
            Pick Free, Pro, or Studio. Upgrade or change anytime from your
            account.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
