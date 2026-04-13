"use client";

import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

export function LegalTitle({ plain, accent }: { plain: string; accent: string }) {
  const plainWords = plain.split(" ");
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      className="text-5xl md:text-6xl font-bold tracking-[-0.04em] text-stone-800 leading-[1.05] pb-6 border-b border-stone-200/60 mb-4"
    >
      {plainWords.map((w, i) => (
        <motion.span key={i} custom={i + 1} variants={wordVariants} className="inline-block mr-[0.25em]">
          {w}
        </motion.span>
      ))}
      <motion.span custom={plainWords.length + 1} variants={wordVariants} className="inline-block text-shimmer">
        {accent}
      </motion.span>
    </motion.h1>
  );
}

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />

      {/* Background orb */}
      <div className="absolute top-20 right-[8%] w-[500px] h-[400px] rounded-full bg-stone-300/25 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-40 left-[5%] w-[400px] h-[300px] rounded-full bg-stone-400/15 blur-[120px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 pt-32 pb-20">
        {/* Back link */}
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          whileHover={{ x: -4 }}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors mb-10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Homey
        </motion.a>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="legal-content"
        >
          {children}
        </motion.article>
      </div>

      <Footer />
    </main>
  );
}
