"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function GetStarted() {
  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-20 text-center sm:px-8"
      style={{
        backgroundImage: "radial-gradient(circle, var(--border) 2px, transparent 2px)",
        backgroundSize: "32px 32px",
      }}
    >
      <Link href="/" className="flex items-center gap-1.5">
        <Image
          src="/images/sharpsel-logo-icon.png"
          alt=""
          width={130}
          height={147}
          className="h-9 w-auto"
        />
        <Image
          src="/images/sharpsel-logo-text.png"
          alt="Sharpsel"
          width={257}
          height={147}
          className="h-14 w-auto"
        />
      </Link>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-8 font-heading text-4xl font-[330] leading-[1.08] tracking-[-0.01em] text-text-primary sm:text-5xl"
      >
        Get the Sharpsel app
      </motion.h1>

      <p className="mt-4 max-w-md text-base font-light leading-relaxed text-text-secondary">
        Download Sharpsel on your phone to manage your WhatsApp storefront,
        or head to our main website to learn more.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <a href="#" className="transition-transform hover:scale-105">
          <Image
            src="/images/app-store-badge.png"
            alt="Download on the App Store"
            width={665}
            height={220}
            className="h-14 w-auto"
          />
        </a>

        <a href="#" className="transition-transform hover:scale-105">
          <Image
            src="/images/google-play-badge.png"
            alt="Get it on Google Play"
            width={670}
            height={220}
            className="h-14 w-auto"
          />
        </a>
      </div>

      <a
        href="https://sharpsel.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent-text hover:underline"
      >
        <Globe size={16} />
        Visit sharpsel.com
      </a>
    </section>
  );
}
