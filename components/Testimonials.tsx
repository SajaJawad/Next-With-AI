"use client";
import { TESTIMONIAL_COLUMNS } from "@/lib/constants";
import { motion } from "motion/react";
import { TestimonialsColumn } from "./TestimonialsColumns";

const [firstColumn, secondColumn, thirdColumn] = TESTIMONIAL_COLUMNS;

export function Testimonials() {
  return (
    <section className="bg-background py-24 relative overflow-hidden">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
        >
          <div className="flex justify-center">
            <div className="border border-primary/20 bg-primary/5 py-1 px-4 rounded-full text-sm font-medium text-primary">
              Testimonials
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-6 text-foreground">
            What our users say
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Discover how our ERP has transformed businesses globally, from
            startups to enterprises.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-16 mask-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
