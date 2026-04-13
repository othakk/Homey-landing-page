"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CAMPUSES, REGIONS, TOTAL_CAMPUSES, TOTAL_INSTITUTIONS, TOTAL_STATES, type Region } from "@/lib/campuses";

type Filter = "All" | Region;

const FILTERS: Filter[] = ["All", ...REGIONS];

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

export default function CampusesPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CAMPUSES.filter((c) => {
      const matchesFilter = filter === "All" || c.region === filter;
      if (!matchesFilter) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.state.toLowerCase().includes(q) ||
        (c.city?.toLowerCase().includes(q) ?? false) ||
        c.region.toLowerCase().includes(q)
      );
    });
  }, [filter, query]);

  // Count per region for filter chips
  const regionCounts = useMemo(() => {
    const counts: Record<string, number> = { All: CAMPUSES.length };
    for (const r of REGIONS) counts[r] = 0;
    for (const c of CAMPUSES) counts[c.region] = (counts[c.region] ?? 0) + 1;
    return counts;
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[8%] right-[5%] w-[500px] h-[500px] rounded-full bg-stone-300/25 blur-[140px]" />
        <div className="absolute top-[50%] left-[5%] w-[400px] h-[400px] rounded-full bg-stone-400/15 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[15%] w-[350px] h-[350px] rounded-full bg-stone-300/20 blur-[100px]" />
      </div>

      <section className="relative pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="text-sm font-semibold text-stone-400 uppercase tracking-[0.25em] mb-6 text-center"
          >
            Where Homey lives
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-bold tracking-[-0.04em] leading-[1.05] text-stone-800 text-center"
          >
            {"Find your".split(" ").map((w, i) => (
              <motion.span key={i} custom={i + 1} variants={wordVariants} className="inline-block mr-[0.25em]">
                {w}
              </motion.span>
            ))}
            <br className="hidden sm:block" />
            <motion.span custom={3} variants={wordVariants} className="inline-block mr-[0.25em] text-shimmer">
              campus.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" as const }}
            className="mt-6 text-lg md:text-xl text-stone-500 max-w-2xl mx-auto text-center leading-relaxed"
          >
            Homey is live at 300+ campuses across the US. Search for yours — or explore the map of where we&apos;ve
            landed.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" as const }}
            className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {[
              { n: `${TOTAL_INSTITUTIONS}+`, l: "Institutions" },
              { n: TOTAL_CAMPUSES, l: "Campus locations" },
              { n: TOTAL_STATES, l: "States" },
            ].map((s, i) => (
              <div key={i} className="glass-card p-5 text-center">
                <div className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-stone-800">{s.n}</div>
                <div className="mt-1 text-xs text-stone-500 uppercase tracking-wider font-semibold">{s.l}</div>
              </div>
            ))}
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: "easeOut" as const }}
            className="mt-14 max-w-2xl mx-auto"
          >
            <div className="relative">
              <svg
                className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for your school, city, or state…"
                className="w-full pl-14 pr-5 py-4 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/60 text-base text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-800/10 focus:border-stone-800/20 transition-all shadow-sm"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center transition-colors"
                  aria-label="Clear search"
                >
                  <svg className="w-3.5 h-3.5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </motion.div>

          {/* Filter chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" as const }}
            className="mt-6 flex flex-wrap justify-center gap-2"
          >
            {FILTERS.map((f) => {
              const active = filter === f;
              return (
                <motion.button
                  key={f}
                  onClick={() => setFilter(f)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    active
                      ? "bg-stone-800 text-white"
                      : "bg-white/50 backdrop-blur-md border border-white/60 text-stone-600 hover:text-stone-800"
                  }`}
                >
                  {f}
                  <span
                    className={`ml-1.5 text-[10px] font-bold ${
                      active ? "text-white/60" : "text-stone-400"
                    }`}
                  >
                    {regionCounts[f]}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Results count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.1 }}
            className="mt-10 text-center text-sm text-stone-500"
          >
            Showing <span className="font-bold text-stone-800">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "campus" : "campuses"}
            {filter !== "All" && (
              <>
                {" "}in <span className="font-bold text-stone-800">{filter}</span>
              </>
            )}
            {query && (
              <>
                {" "}matching &ldquo;<span className="font-bold text-stone-800">{query}</span>&rdquo;
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Campus grid */}
      <section className="relative pb-32">
        <div className="max-w-6xl mx-auto px-6">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-12 text-center max-w-xl mx-auto"
            >
              <div className="text-5xl mb-4">🔍</div>
              <div className="text-xl font-bold text-stone-800 mb-2">No campuses found</div>
              <div className="text-stone-500">
                Try a different search or clear your filters.
              </div>
              <button
                onClick={() => {
                  setQuery("");
                  setFilter("All");
                }}
                className="mt-6 px-5 py-2 rounded-full bg-stone-800 text-white text-sm font-semibold hover:bg-stone-700 transition-colors"
              >
                Reset filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((c, i) => (
                  <motion.div
                    key={`${c.name}-${c.state}`}
                    layout
                    initial={{ opacity: 0, y: 16, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.3,
                      delay: Math.min(i * 0.015, 0.3),
                      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
                    }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="glass-card p-5 cursor-default group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-stone-800/5 border border-stone-300/40 flex items-center justify-center group-hover:bg-stone-800 group-hover:border-stone-800 transition-colors">
                        <svg
                          className="w-5 h-5 text-stone-600 group-hover:text-white transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 14l9-5-9-5-9 5 9 5z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-stone-800 leading-snug truncate">{c.name}</div>
                        <div className="mt-0.5 text-xs text-stone-500">
                          {c.city ? `${c.city}, ${c.state}` : c.state} &middot; {c.region}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Bottom note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center text-sm text-stone-400 italic"
          >
            Don&apos;t see your campus? Homey keeps growing —{" "}
            <a
              href="mailto:joinhomeyapp@gmail.com"
              className="text-stone-600 underline underline-offset-2 hover:text-stone-800 transition-colors not-italic font-medium"
            >
              tell us which school to add next
            </a>
            .
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
