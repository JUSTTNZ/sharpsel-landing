"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Checkout without leaving the chat",
    description:
      "Customers get a secure Paystack link, pay in seconds, and receive instant confirmation — all inside the same WhatsApp thread.",
    image: "/images/feature-checkout.png",
    alt: "A WhatsApp chat showing a customer paying via a Paystack link and getting order confirmation and delivery updates",
  },
  {
    title: "A bot that never sleeps",
    description:
      "Your WhatsApp becomes an automated shop. The bot greets customers, shows your catalogue, takes orders, and collects delivery addresses — in English or Pidgin — even at 2am while you sleep.",
    video: "/images/feature-night-bot.mp4",
    poster: "/images/feature-night-bot.png",
  },
  {
    title: "Always on, never slow",
    description:
      "Your AI sales assistant replies in seconds, day and night, so no customer question or order ever goes unanswered.",
    video: "/images/feature-always-on.mp4",
    poster: "/images/feature-always-on.png",
    stat: { value: "<10s", label: "avg. response time" },
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-dark">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl font-heading text-4xl font-[330] leading-[1.08] tracking-[-0.01em] text-white sm:text-5xl"
        >
          Smarter selling starts on WhatsApp
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/5">
                {feature.video ? (
                  <video
                    src={feature.video}
                    poster={feature.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={feature.image!}
                    alt={feature.alt!}
                    fill
                    className="object-cover"
                  />
                )}
                {feature.stat && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-heading text-4xl font-semibold text-white">
                      {feature.stat.value}
                    </span>
                    <span className="mt-1 text-xs text-white/60">
                      {feature.stat.label}
                    </span>
                  </div>
                )}
              </div>

              <h3 className="mt-6 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.figure
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-20 max-w-2xl"
        >
          <blockquote className="font-heading text-2xl font-[330] leading-[1.3] tracking-[-0.01em] text-white sm:text-3xl">
            &ldquo;We built Sharpsel because Nigerian vendors deserve a way to
            sell that&apos;s as simple as chatting with a customer — no app,
            no website, no stress.&rdquo;
          </blockquote>
          <figcaption className="mt-4 text-sm font-medium text-white/60">
            — Sharpsel Team
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
