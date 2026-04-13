"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";

/* ─── Feature data ─── */
const FEATURES = [
  {
    title: "Swipe to Sublease",
    description: "Browse subleases like you'd browse anything else — swipe right on spots that fit, left on ones that don't. Takes 60 seconds to set up.",
  },
  {
    title: "Verified Users Only",
    description: "Every user goes through verification. No scams, no fake profiles — just real people you can trust.",
  },
  {
    title: "300+ Campuses",
    description: "From DePaul to UCLA, from UT Austin to NYU. Find your next place near any campus in the country.",
  },
];

/* ─── Phone shell ─── */
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[280px] h-[580px] rounded-[48px] border-[5px] border-stone-800/80 bg-black shadow-2xl shadow-black/20 overflow-hidden">
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[24px] bg-black rounded-full z-30 border border-white/10" />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-white/15 rounded-full z-30" />
      <div className="absolute inset-0 z-20 pointer-events-none rounded-[43px] ring-1 ring-inset ring-white/5" />
      {children}
    </div>
  );
}

/* ─── Screen components (stay dark) ─── */
function SwipeScreen() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f1a] to-[#080812] pt-10 px-4">
      <div className="text-center mb-4">
        <div className="text-[10px] text-white/30 font-medium tracking-wider uppercase">Near DePaul University</div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 mt-2 mx-2 rounded-2xl bg-white/[0.03] border border-white/5" />
        <div className="relative bg-gradient-to-b from-white/[0.08] to-white/[0.04] rounded-2xl border border-white/[0.08] p-4 backdrop-blur-sm">
          <div className="h-32 rounded-xl bg-gradient-to-br from-stone-500/15 to-stone-600/10 mb-3 flex items-center justify-center">
            <svg className="w-10 h-10 text-white/10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
          </div>
          <div className="space-y-1.5">
            <div className="text-sm font-semibold text-white/80">Sara&apos;s Summer Sublet</div>
            <div className="text-[11px] text-white/40">DePaul &middot; Summer &middot; $850/mo</div>
            <div className="flex items-center gap-1 mt-1">
              <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white/50" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <span className="text-[10px] text-white/50 font-medium">Verified</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-6 mt-4">
          <div className="w-14 h-14 rounded-full bg-white/5 border border-white/[0.08] flex items-center justify-center">
            <svg className="w-6 h-6 text-red-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
          </div>
          <div className="w-14 h-14 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
            <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function VerifiedScreen() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c18] to-[#06060e] flex flex-col items-center justify-center px-5">
      <div className="relative mb-5">
        <div className="w-20 h-20 rounded-full bg-white/5 border border-white/[0.08] flex items-center justify-center">
          <svg className="w-10 h-10 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        </div>
        <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-stone-600 flex items-center justify-center shadow-lg shadow-black/30">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
        </div>
      </div>
      <div className="h-3 w-20 rounded-full bg-white/15 mb-2" />
      <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 mb-4">
        <svg className="w-3.5 h-3.5 text-white/60" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        <span className="text-xs text-white/60 font-medium">Verified User</span>
      </div>
      <div className="text-[11px] text-white/25 text-center">Identity Verified</div>
    </div>
  );
}

function CampusesScreen() {
  const campuses = ["DePaul", "UCLA", "UT Austin", "UW-Madison", "NYU", "Ohio State", "USC", "Michigan"];
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d1a] to-[#07071a] pt-10 px-4">
      <div className="text-center mb-4">
        <div className="text-[10px] text-white/30 font-medium tracking-wider uppercase">Select Campus</div>
      </div>
      <div className="space-y-1.5">
        {campuses.map((campus, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl border transition-colors ${
              idx === 0
                ? "bg-white/10 border-white/15"
                : "bg-white/[0.03] border-white/5"
            }`}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              idx === 0 ? "bg-white/15" : "bg-white/5"
            }`}>
              <svg className={`w-4 h-4 ${idx === 0 ? "text-white/60" : "text-white/20"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <span className={`text-[11px] font-medium ${idx === 0 ? "text-white/70" : "text-white/40"}`}>{campus}</span>
            {idx === 0 && (
              <svg className="w-3.5 h-3.5 text-white/50 ml-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main StickyScroll ─── */
export default function StickyScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Screen cross-fade opacities
  const s0 = useTransform(scrollYProgress, [0, 0.28, 0.33], [1, 1, 0]);
  const s1 = useTransform(scrollYProgress, [0.27, 0.33, 0.60, 0.66], [0, 1, 1, 0]);
  const s2 = useTransform(scrollYProgress, [0.60, 0.66, 1], [0, 1, 1]);

  // Text visibility — synced with phone screen midpoints
  const [activeText, setActiveText] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.33) setActiveText(0);
    else if (v < 0.66) setActiveText(1);
    else setActiveText(2);
  });

  const screenOpacities = [s0, s1, s2];

  const screenComponents = [
    <SwipeScreen key="swipe" />,
    <VerifiedScreen key="verified" />,
    <CampusesScreen key="campuses" />,
  ];

  return (
    <>
      {/* ─── Desktop: sticky scroll-driven cross-fade ─── */}
      <section
        ref={containerRef}
        className="relative hidden md:block"
        style={{ minHeight: "300vh" }}
      >
        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-stone-300/20 blur-[120px]" />
          <div className="absolute bottom-[30%] left-[5%] w-[350px] h-[350px] rounded-full bg-stone-400/15 blur-[100px]" />
        </div>

        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="max-w-6xl w-full mx-auto px-6">
            <div className="grid grid-cols-2 gap-16 items-center">
              {/* Phone left — floating + hover lift */}
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative"
                >
                  {/* Glow behind phone */}
                  <div className="absolute inset-0 -m-8 flex items-center justify-center pointer-events-none">
                    <div className="w-[340px] h-[640px] rounded-[56px] bg-gradient-to-b from-stone-400/[0.12] via-stone-300/[0.08] to-transparent blur-2xl" />
                  </div>
                  <div className="animate-float">
                    <PhoneFrame>
                      {screenComponents.map((screen, i) => (
                        <motion.div key={i} style={{ opacity: screenOpacities[i] }} className="absolute inset-0 z-10">
                          {screen}
                        </motion.div>
                      ))}
                    </PhoneFrame>
                  </div>
                </motion.div>
              </div>

              {/* Text right — glass card, animated fade in/out */}
              <div className="relative h-[400px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeText}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15, ease: "easeOut" as const }}
                    className="glass-card p-8"
                  >
                    <h3 className="text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-stone-800 leading-tight mb-4">
                      {FEATURES[activeText].title}
                    </h3>
                    <p className="text-lg text-stone-500 leading-relaxed max-w-md">
                      {FEATURES[activeText].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Mobile: simple stacked cards, no sticky, no viewport math ─── */}
      <section className="md:hidden relative py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-stone-300/20 blur-[100px]" />
          <div className="absolute bottom-[20%] left-[-10%] w-[280px] h-[280px] rounded-full bg-stone-400/15 blur-[90px]" />
        </div>

        <div className="relative max-w-md mx-auto px-6 space-y-20">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-8">
                <PhoneFrame>{screenComponents[i]}</PhoneFrame>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-2xl font-bold tracking-tight text-stone-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-base text-stone-500 leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
