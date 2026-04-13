"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "How do I create an account?",
    a: "You can sign up or log in directly from the home screen using Apple or Google. If you'd like to explore the app first, tap \"Get Started\" to browse as a guest, then create an account when you're ready.",
  },
  {
    q: "How do I save a listing?",
    a: "For long-term listings, swipe right to save it to your Saved tab, then apply for the apartment from there. For subleases, swiping right automatically sends your renter profile to the lister for review, and the listing appears in your Saved tab.",
  },
  {
    q: "How do I list my apartment or sublease?",
    a: "Tap \"Get Started\" and select that you're looking to list. Create an account, and from the Listings tab, tap \"Add Listing\" and choose between a long-term rental or sublease. Add photos, pricing, and details to publish your listing.",
  },
  {
    q: "How do I contact a landlord?",
    a: "After you apply, the lister will review your profile. If accepted, both parties will get access to each other's email addresses to get in contact.",
  },
  {
    q: "How do I change my campus?",
    a: "Go to the Discover tab and tap the filter icon. Select your university from the campus dropdown to see listings near your school. Homey supports 300+ campuses across the US.",
  },
  {
    q: "How do I delete my account?",
    a: "Go to Profile and press \"Delete Account.\" This will permanently remove all your personal data, saved listings, and account information. This action cannot be undone.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

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

        {/* FAQ list */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="space-y-3"
        >
          {FAQS.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
                  },
                }}
                className="glass-card overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                >
                  <span className="text-base md:text-lg font-semibold text-stone-800 tracking-tight">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" as const }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-stone-800/5 border border-stone-300/50 flex items-center justify-center text-stone-700 group-hover:bg-stone-800 group-hover:text-white group-hover:border-stone-800 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-sm md:text-base text-stone-600 leading-relaxed border-t border-stone-200/50">
                        <p className="pt-4">{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
