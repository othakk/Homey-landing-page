"use client";

import { motion } from "framer-motion";
import LegalLayout, { LegalTitle } from "@/components/LegalLayout";
import FAQAccordion from "@/components/FAQAccordion";

const QUICK_LINKS = [
  {
    href: "/privacy",
    title: "Privacy Policy",
    desc: "How we protect your data",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"
        />
      </svg>
    ),
  },
  {
    href: "/terms",
    title: "Terms of Service",
    desc: "Rules for using Homey",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    href: "mailto:joinhomeyapp@gmail.com",
    title: "Email Us",
    desc: "joinhomeyapp@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function SupportPage() {
  return (
    <LegalLayout>
      <LegalTitle plain="Support &" accent="Help" />
      <p className="text-base md:text-lg text-stone-500 leading-relaxed mb-10">
        Your trusted <em className="italic text-stone-700">Friend</em> in finding a place that feels{" "}
        <em className="italic text-stone-700">Homey</em>.
      </p>

      {/* Contact card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" as const }}
        className="glass-card p-8 md:p-10 my-10 text-center"
      >
        <h2 className="text-xl md:text-2xl font-bold text-stone-800 tracking-tight">
          Need help? We&apos;re here.
        </h2>
        <p className="mt-3 text-base text-stone-500 max-w-md mx-auto leading-relaxed">
          Have a question, issue, or feedback? We&apos;d love to hear from you.
        </p>
        <motion.a
          href="mailto:joinhomeyapp@gmail.com"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-800 text-white font-semibold text-sm glow-button"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Contact Us
        </motion.a>
        <p className="mt-5 text-xs text-stone-400">
          We typically respond within 24–48 hours.
        </p>
      </motion.div>

      {/* FAQ */}
      <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-stone-800 mt-16 mb-6 pb-2 border-b border-stone-200/60">
        Frequently asked questions
      </h2>
      <FAQAccordion />

      {/* Quick links */}
      <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-stone-800 mt-16 mb-6 pb-2 border-b border-stone-200/60">
        Quick links
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {QUICK_LINKS.map((link) => (
          <motion.a
            key={link.title}
            href={link.href}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass-card p-5 group block"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-stone-800/5 border border-stone-300/40 flex items-center justify-center text-stone-600 group-hover:bg-stone-800 group-hover:text-white group-hover:border-stone-800 transition-colors mb-3">
              {link.icon}
            </div>
            <div className="text-sm font-semibold text-stone-800 leading-snug">{link.title}</div>
            <div className="mt-0.5 text-xs text-stone-500 truncate">{link.desc}</div>
          </motion.a>
        ))}
      </div>
    </LegalLayout>
  );
}
