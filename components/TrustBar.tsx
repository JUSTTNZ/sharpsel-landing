"use client";

import { motion } from "framer-motion";
import { Headphones, Bot, BookOpen, Users } from "lucide-react";

const stats = [
  { value: "12", label: "Vendors selling on Sharpsel" },
  { value: "200+", label: "Orders processed" },
  { value: "10 states", label: "Across Nigeria" },
];

const helpItems = [
  {
    icon: Headphones,
    title: "24/7 support",
    description: "Our support team is here around the clock whenever you need help.",
  },
  {
    icon: Bot,
    title: "WhatsApp automation",
    description: "Let the AI bot handle replies, orders, and payments while you focus on your business.",
  },
  {
    icon: BookOpen,
    title: "Setup guides",
    description: "Step-by-step guides to get your WhatsApp shop up and running fast.",
  },
  {
    icon: Users,
    title: "Dedicated success team",
    description: "A real team ready to help you grow, not just a help desk.",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-4xl font-[330] leading-[1.08] tracking-[-0.01em] text-text-primary sm:text-5xl"
        >
          Growing with Nigerian vendors
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className="rounded-3xl border border-border bg-green-tint p-6 sm:p-8"
            >
              <p className="font-heading text-4xl font-semibold tracking-[-0.01em] text-text-primary sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-base font-medium text-text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-24 font-heading text-4xl font-[330] leading-[1.08] tracking-[-0.01em] text-text-primary sm:text-5xl"
        >
          Build with help by your side
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {helpItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
            >
              <item.icon size={28} className="text-accent-text" />
              <h3 className="mt-5 text-xl font-semibold text-text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-base font-light leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
