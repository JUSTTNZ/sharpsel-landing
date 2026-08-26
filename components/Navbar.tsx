"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    const target = document.getElementById("features");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setOnDark(entry.isIntersecting),
      { rootMargin: "-80px 0px -100% 0px", threshold: 0 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur transition-colors duration-300 ${
        onDark ? "border-white/10 bg-dark/80" : "border-border bg-background/80"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-1.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/sharpsel-logo-icon.png"
            alt=""
            width={130}
            height={147}
            priority
            className="h-8 w-auto sm:h-9"
          />
          <Image
            src="/images/sharpsel-logo-text.png"
            alt="Sharpsel"
            width={257}
            height={147}
            priority
            className={`h-6 w-auto transition duration-300 sm:h-7 ${
              onDark ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                onDark
                  ? "text-white/70 hover:text-white"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#get-started"
          className="hidden rounded-full bg-accent-gradient px-5 py-2.5 text-sm font-semibold text-accent-text transition-transform hover:scale-105 lg:inline-block"
        >
          Get started
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors lg:hidden ${
            onDark ? "text-white" : "text-text-primary"
          }`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          className={`flex flex-col gap-1 border-t px-6 py-4 lg:hidden ${
            onDark ? "border-white/10" : "border-border"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-2 py-2.5 text-sm font-medium ${
                onDark
                  ? "text-white/70 hover:bg-white/10 hover:text-white"
                  : "text-text-secondary hover:bg-green-tint hover:text-text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#get-started"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-accent-gradient px-5 py-2.5 text-center text-sm font-semibold text-accent-text"
          >
            Get started
          </a>
        </nav>
      )}
    </header>
  );
}
