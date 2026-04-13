"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const NAV_LINKS = [
  { label: "Campuses", href: "/campuses" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 150], [0.4, 0.75]);
  const borderOpacity = useTransform(scrollY, [0, 150], [0.2, 0.5]);
  const shadowOpacity = useTransform(scrollY, [0, 150], [0, 0.06]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-6 pt-4">
        <motion.div
          style={{
            backgroundColor: useTransform(bgOpacity, (v) => `rgba(255, 255, 255, ${v})`),
            borderColor: useTransform(borderOpacity, (v) => `rgba(255, 255, 255, ${v})`),
            boxShadow: useTransform(shadowOpacity, (v) => `0 4px 24px rgba(0, 0, 0, ${v})`),
          }}
          className="relative flex items-center justify-between rounded-2xl backdrop-blur-xl border px-5 py-2.5"
        >
          {/* Logo + brand */}
          <a href="/" className="flex items-center gap-2.5">
            <Image src="/logo.svg" alt="Homey" width={28} height={28} className="rounded-lg" />
            <span className="text-sm font-bold tracking-tight text-stone-700">Homey</span>
          </a>

          {/* Nav links — absolutely centered, hidden on mobile */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ backgroundColor: "rgba(28, 25, 23, 0.05)" }}
                transition={{ duration: 0.2 }}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-stone-500 hover:text-stone-700 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Right side: status + CTA */}
          <div className="flex items-center gap-3">
            {/* Live status pill */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-semibold text-emerald-600 tracking-wide">300+ campuses</span>
            </div>

            {/* CTA button */}
            <motion.a
              href="https://apps.apple.com/us/app/homey-a-friend-to-find-home/id6758169427"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-stone-800 text-white text-xs font-semibold glow-button"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
              Get the App
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
