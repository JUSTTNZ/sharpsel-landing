"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-4xl font-[330] leading-[1.08] tracking-[-0.01em] text-text-primary sm:text-5xl"
        >
          Your chats. Your storefront.
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          onSubmit={(e) => e.preventDefault()}
          className="relative mx-auto mt-10 max-w-md"
        >
          <input
            type="tel"
            placeholder="Enter your WhatsApp number"
            className="w-full rounded-full border border-border bg-background py-4 pl-6 pr-16 text-base text-text-primary placeholder:text-text-secondary outline-none focus:border-accent-end"
          />
          <button
            type="submit"
            aria-label="Get started"
            className="absolute right-1.5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-accent-gradient text-accent-text transition-transform hover:scale-105"
          >
            <ArrowRight size={20} />
          </button>
        </motion.form>

        <p className="mt-4 text-base font-light text-text-secondary">
          14-day free trial. No card required.
        </p>
      </div>

      <div className="bg-dark">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row sm:px-8 lg:px-12">
          <div className="flex items-center gap-2">
            <Image
              src="/images/sharpsel-logo-icon.png"
              alt=""
              width={130}
              height={147}
              className="h-9 w-auto lg:h-16"
            />
            <Image
              src="/images/sharpsel-logo-text.png"
              alt="Sharpsel"
              width={257}
              height={147}
              className="h-7 w-auto brightness-0 invert lg:h-11"
            />
          </div>
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Sharpsel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
