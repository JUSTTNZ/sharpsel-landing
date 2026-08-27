"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How can I start selling on WhatsApp?",
    answer:
      "Connect your WhatsApp Business number to Sharpsel, add your products, and the AI bot takes over from there: greeting customers, showing your catalogue, taking orders, and collecting payment, all inside the chat.",
  },
  {
    question: "Can I use Sharpsel with no money to start?",
    answer:
      "Yes. Sharpsel starts with a 14-day free trial and no card is required, so you can start selling on WhatsApp before spending anything.",
  },
  {
    question: "When should I start selling with Sharpsel?",
    answer:
      "As soon as you're taking orders over WhatsApp by hand. The moment replying to every chat manually starts slowing you down, Sharpsel's bot can take over.",
  },
  {
    question: "Do I need a business registration to sell on Sharpsel?",
    answer:
      "No. You don't need a registered business or CAC number to start, just a WhatsApp Business number and products to sell.",
  },
  {
    question: "What kind of businesses do well on Sharpsel?",
    answer:
      "Vendors who already sell through WhatsApp chats, especially fashion, gadgets, food, and beauty businesses across Nigeria, see the biggest jump once orders and payments are automated.",
  },
  {
    question: "What is Sharpsel and how does it work?",
    answer:
      "Sharpsel is an AI-powered WhatsApp bot for Nigerian vendors. It turns your WhatsApp number into a storefront that shows off your products, chats with customers in English or Pidgin, takes orders, and collects payment via Paystack, automatically.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-24 bg-dark">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-4xl font-[330] leading-[1.08] tracking-[-0.01em] text-white sm:text-5xl"
        >
          Frequently asked questions
        </motion.h2>

        <div className="mt-12 divide-y divide-white/10 border-t border-white/10">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="text-lg font-semibold text-white sm:text-xl">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-10 w-10 flex-none items-center justify-center rounded-full border transition-colors duration-300 ${
                      isOpen
                        ? "border-white bg-dark text-white"
                        : "border-white bg-white text-dark"
                    }`}
                  >
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-12 text-base font-light leading-relaxed text-white/60">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
