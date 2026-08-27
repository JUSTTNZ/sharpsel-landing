"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect your WhatsApp",
    description: "Link your WhatsApp Business number to Sharpsel in a few minutes, no coding required.",
  },
  {
    number: "02",
    title: "Add your products",
    description: "Upload your catalogue with prices and photos so the bot knows exactly what you sell.",
  },
  {
    number: "03",
    title: "Let the bot take orders",
    description: "The AI bot chats with customers, answers questions, and takes orders in English or Pidgin.",
  },
  {
    number: "04",
    title: "Get paid instantly",
    description: "Customers pay via a secure Paystack link, and the money lands straight in your account.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-green-tint">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-4xl font-[330] leading-[1.08] tracking-[-0.01em] text-text-primary sm:text-5xl"
        >
          How Sharpsel works
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
            >
              <span className="font-heading text-3xl font-semibold text-accent-text">
                {step.number}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-base font-light leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
