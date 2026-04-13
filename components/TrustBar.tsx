"use client";

import { motion } from "framer-motion";

const UNIVERSITIES = [
  "DePaul", "UW-Madison", "UCLA", "Ohio State", "UT Austin",
  "USC", "Michigan", "NYU", "Boston University", "UF", "Penn State", "Indiana",
];

export default function TrustBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" as const }}
      className="py-20 overflow-hidden"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" as const }}
        className="text-center text-stone-400 text-[10px] font-semibold uppercase tracking-[0.25em] mb-8"
      >
        Trusted at top universities
      </motion.p>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f0ebe1] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f0ebe1] to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee whitespace-nowrap">
          {[...UNIVERSITIES, ...UNIVERSITIES].map((name, i) => (
            <span key={i} className="mx-10 text-lg font-semibold text-stone-300 tracking-tight flex-shrink-0">
              {name}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
