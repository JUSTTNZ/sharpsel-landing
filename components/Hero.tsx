"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-20">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center rounded-full bg-green-tint px-4 py-1.5 text-sm font-medium text-accent-text">
            Built for Nigerian vendors
          </span>

          <h1 className="mt-6 font-heading text-4xl font-[330] leading-[1.08] tracking-[-0.01em] text-text-primary sm:text-5xl">
            Turn WhatsApp chats into paid orders
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary">
            Sharpsel gives your business an AI-powered WhatsApp bot that
            shows off your products, takes orders, and gets you paid —
            automatically.
          </p>

          <div id="get-started" className="mt-8 max-w-md scroll-mt-24 rounded-3xl bg-dark p-5 sm:p-6">
            <p className="text-base font-semibold text-white">
              Start for free, sell for less
            </p>
            <p className="mt-1 text-sm text-white/60">
              14-day free trial. No card required.
            </p>

            <form className="relative mt-5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="tel"
                placeholder="Enter your WhatsApp number"
                className="w-full rounded-full border border-white/15 bg-white/10 py-3.5 pl-5 pr-14 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/30"
              />
              <button
                type="submit"
                aria-label="Get started"
                className="absolute right-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-accent-gradient text-accent-text transition-transform hover:scale-105"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <svg
            viewBox="0 0 400 400"
            className="pointer-events-none absolute -right-10 -top-10 h-[120%] w-[120%] text-border"
            fill="none"
          >
            <circle
              cx="200"
              cy="200"
              r="180"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 8"
            />
          </svg>

          <div className="relative rounded-[2rem] border border-border bg-green-tint p-5 shadow-sm sm:p-8">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/hero-products.png"
                alt="Sneakers, a handbag, and folded shirts sold through Sharpsel"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 shadow-lg sm:-left-8"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-gradient text-accent-text">
              <CheckCircle2 size={18} />
            </span>
            <div>
              <p className="text-sm font-semibold text-text-primary">
                Order confirmed
              </p>
              <p className="text-xs text-text-secondary">
                ₦75,000 · Paid via Paystack
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.65 }}
            className="absolute -top-6 -right-4 flex items-center gap-2.5 rounded-2xl border border-border bg-background px-3.5 py-2.5 shadow-lg sm:-right-8"
          >
            <Image
              src="/images/hero-badge-order.png"
              alt=""
              width={56}
              height={56}
              className="h-7 w-7"
            />
            <div>
              <p className="text-sm font-semibold text-text-primary">
                New order
              </p>
              <p className="text-xs text-text-secondary">via WhatsApp</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
            className="absolute top-8 -left-4 flex items-center gap-2.5 rounded-2xl border border-border bg-background px-3.5 py-2.5 shadow-lg sm:-left-10"
          >
            <Image
              src="/images/hero-badge-sales.png"
              alt=""
              width={56}
              height={56}
              className="h-7 w-7"
            />
            <div>
              <p className="text-sm font-semibold text-text-primary">
                Sales analytics
              </p>
              <p className="text-xs text-text-secondary">Track every order</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
