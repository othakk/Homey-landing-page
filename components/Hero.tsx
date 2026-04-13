"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const headlineWords = ["Sublease", "in", "swipes,"];
const gradientWords = ["not", "DMs."];

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: blobs drift slower than scroll
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const blob3Y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: blob1Y }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-stone-300/30 blur-[140px] animate-float"
        />
        <motion.div
          style={{ y: blob2Y }}
          className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-stone-400/20 blur-[120px] animate-float [animation-delay:-3s]"
        />
        <motion.div
          style={{ y: blob3Y }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-stone-300/15 blur-[100px] animate-float [animation-delay:-5s]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-sm font-semibold text-stone-400 uppercase tracking-[0.25em] mb-6"
        >
          The swipe-first sublease marketplace
        </motion.p>

        {/* Word-by-word headline */}
        <motion.h1
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[1.05] mb-6 text-stone-800"
        >
          {headlineWords.map((word, i) => (
            <motion.span key={i} custom={i + 1} variants={wordVariants} className="inline-block mr-[0.25em]">
              {word}
            </motion.span>
          ))}
          <br className="hidden sm:block" />
          {gradientWords.map((word, i) => (
            <motion.span
              key={`g-${i}`}
              custom={headlineWords.length + i + 1}
              variants={wordVariants}
              className="inline-block mr-[0.25em] text-shimmer"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" as const }}
          className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          The swipe-first marketplace for college subleases. Verified users, 300+ campuses, zero hassle.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" as const }}
        >
          <motion.a
            href="https://apps.apple.com/us/app/homey-a-friend-to-find-home/id6758169427"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-stone-800 text-white font-semibold text-base glow-button"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
            Download Now
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
        >
          <svg className="w-5 h-5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
