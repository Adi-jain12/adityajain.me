"use client";

import { motion } from "framer-motion";
import { AnimatedHeadline } from "@/features/about/components/AnimatedHeadline";

export function Hero() {
  return (
    <section className="pt-10 pb-12 sm:pt-16 sm:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs text-text-muted"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        available for new work
      </motion.div>

      <AnimatedHeadline
        text="Aditya Jain."
        className="mt-6 font-heading text-6xl font-bold leading-[0.95] tracking-tighter text-foreground sm:text-8xl md:text-9xl"
      />

      <motion.p
        initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 max-w-3xl text-xl leading-snug text-text sm:text-2xl md:text-3xl"
      >
        Software engineer building{" "}
        <span className="italic text-foreground">thoughtful</span>,
        type-driven products for the web.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.85 }}
        className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.2em] text-text-muted sm:text-sm"
      >
        <span>India</span>
        <span aria-hidden className="text-accent/50">/</span>
        <span>Yudiz Solutions</span>
        <span aria-hidden className="text-accent/50">/</span>
        <span>{new Date().getFullYear()}</span>
      </motion.div>
    </section>
  );
}
