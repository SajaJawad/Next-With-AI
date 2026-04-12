"use client";

import { Check } from "lucide-react";
import { motion } from "motion/react";
import { SignUpButton } from "@clerk/nextjs";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaText?: string;
}

export function PricingCard({
  name,
  price,
  description,
  features,
  isPopular,
  ctaText = "Get Started",
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5 }}
      className={`relative flex flex-col rounded-[2rem] border p-8 transition-shadow ${
        isPopular
          ? "border-primary/50 bg-card shadow-[0_32px_120px_color-mix(in_oklab,var(--primary)_16%,transparent)]"
          : "border-border/60 bg-card/40 backdrop-blur-sm"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-lg">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="font-serif text-2xl font-semibold text-foreground">
          {name}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="mb-8 flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tight text-foreground">
          {price}
        </span>
        {price !== "Free" && (
          <span className="text-sm font-medium text-muted-foreground">/mo</span>
        )}
      </div>

      <div className="mb-8 flex-1 space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check
              className={`mt-0.5 size-4 flex-shrink-0 ${
                feature.included ? "text-primary" : "text-muted-foreground/40"
              }`}
            />
            <span
              className={`text-sm ${
                feature.included ? "text-foreground" : "text-muted-foreground/60"
              }`}
            >
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <SignUpButton mode="modal">
        <button
          className={`w-full rounded-full px-6 py-4 text-sm font-bold transition-all active:scale-95 ${
            isPopular
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
              : "bg-foreground/10 text-foreground hover:bg-foreground/15"
          }`}
        >
          {ctaText}
        </button>
      </SignUpButton>
    </motion.div>
  );
}
