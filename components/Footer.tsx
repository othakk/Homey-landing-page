"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const linkColumns = [
  {
    title: "Product",
    links: [
      { label: "How it Works", href: "/#faq" },
      { label: "Campuses", href: "/campuses" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Contact", href: "mailto:joinhomeyapp@gmail.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-stone-200/60 overflow-hidden">
      {/* Background orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-stone-300/20 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* CTA tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-14"
        >
          <p className="text-2xl md:text-3xl font-bold tracking-tight">
            <span className="text-shimmer">Built for students, by students.</span>
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" as const }}
            className="mt-6"
          >
            <motion.a
              href="https://apps.apple.com/us/app/homey-a-friend-to-find-home/id6758169427"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-800 text-white font-semibold text-sm glow-button"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
              Download Homey
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Links grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 gap-8 mb-12 max-w-md mx-auto"
        >
          {linkColumns.map((col) => (
            <motion.div key={col.title} variants={fadeUp}>
              <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-stone-400 hover:text-stone-600 hover:translate-x-1 inline-block transition-all duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-stone-200/60"
        >
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Homey" width={24} height={24} className="rounded-md" />
            <span className="text-sm font-bold text-stone-400">Homey</span>
          </div>
          <p className="text-xs text-stone-300">
            &copy; {new Date().getFullYear()} Homey. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
