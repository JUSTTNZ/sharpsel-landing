"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { PRICING } from "@/lib/constants";

const plans = [
  {
    key: "starter",
    ...PRICING.starter,
    description: "For vendors just getting started on WhatsApp.",
    highlighted: false,
  },
  {
    key: "growth",
    ...PRICING.growth,
    description: "For vendors ready to scale their orders.",
    highlighted: true,
  },
  {
    key: "pro",
    ...PRICING.pro,
    description: "For high-volume vendors who need no limits.",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-4xl font-[330] leading-[1.08] tracking-[-0.01em] text-text-primary sm:text-5xl"
        >
          Simple pricing, no surprises
        </motion.h2>

        <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-text-secondary">
          Every plan starts with a 14-day free trial. No card required.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className={`rounded-3xl border p-8 ${
                plan.highlighted
                  ? "border-transparent bg-dark text-white"
                  : "border-border bg-background text-text-primary"
              }`}
            >
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p
                className={`mt-2 text-sm font-light leading-relaxed ${
                  plan.highlighted ? "text-white/60" : "text-text-secondary"
                }`}
              >
                {plan.description}
              </p>

              <p className="mt-6 font-heading text-4xl font-semibold tracking-[-0.01em]">
                {plan.price}
                <span
                  className={`text-base font-normal ${
                    plan.highlighted ? "text-white/60" : "text-text-secondary"
                  }`}
                >
                  {plan.period}
                </span>
              </p>

              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-2.5 text-sm">
                  <Check
                    size={18}
                    className={plan.highlighted ? "text-accent-start" : "text-accent-text"}
                  />
                  <span>
                    {typeof plan.products === "number" ? `Up to ${plan.products}` : plan.products}{" "}
                    products
                  </span>
                </li>
                <li className="flex items-center gap-2.5 text-sm">
                  <Check
                    size={18}
                    className={plan.highlighted ? "text-accent-start" : "text-accent-text"}
                  />
                  <span>
                    {typeof plan.orders === "number" ? `Up to ${plan.orders}` : plan.orders} orders
                    per month
                  </span>
                </li>
              </ul>

              <a
                href="#get-started"
                className={`mt-8 block rounded-full px-5 py-3 text-center text-sm font-semibold transition-transform hover:scale-105 ${
                  plan.highlighted
                    ? "bg-accent-gradient text-accent-text"
                    : "bg-green-tint text-accent-text"
                }`}
              >
                Start free trial
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
