"use client";

import { motion } from "framer-motion";
import FAQAccordion from "./FAQAccordion";

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden scroll-mt-24">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[8%] w-[380px] h-[380px] rounded-full bg-stone-300/20 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[320px] h-[320px] rounded-full bg-stone-400/15 blur-[100px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-stone-400 uppercase tracking-[0.25em] mb-4">
            Support
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] text-stone-800 leading-[1.05]">
            Frequently asked{" "}
            <span className="text-shimmer">questions</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-stone-500 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about using Homey. Can&apos;t find what you&apos;re looking for?{" "}
            <a
              href="mailto:joinhomeyapp@gmail.com"
              className="text-stone-700 underline underline-offset-2 hover:text-stone-900 transition-colors"
            >
              Email us
            </a>
            .
          </p>
        </motion.div>

        <FAQAccordion />
      </div>
    </section>
  );
}
