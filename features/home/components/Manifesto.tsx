"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const CREAM = "#f1e6cf";
const POSTER_RED = "#e23a26";
const INK_SOFT = "#3a3a3a";

const YEAR = new Date().getFullYear();

export function Manifesto() {
  return (
    <section
      aria-label="In the Mess of Life and Work"
      className="relative w-full bg-background px-6 pb-16 pt-10 sm:px-10 sm:pt-14 sm:pb-20 lg:px-16 lg:pt-16 lg:pb-24"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Top metadata bar */}
        <div className="grid grid-cols-3 items-center pb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted sm:pb-8 sm:text-[11px]">
          <span className="justify-self-start">Typography &amp; Layout</span>
          <span className="hidden justify-self-center sm:block">Grid Used</span>
          <span className="justify-self-end">The Golden Canon</span>
        </div>

        {/* Poster card — cream area on top, flat red block on bottom */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-md shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)]"
        >
          {/* Upper — cream area with title + body */}
          <div
            className="grid grid-cols-12 gap-x-6 gap-y-8 px-6 py-12 sm:px-10 sm:py-14 md:gap-x-10 md:px-14 md:py-16 lg:px-20 lg:py-20"
            style={{ backgroundColor: CREAM }}
          >
            {/* Left — big italic serif title */}
            <div className="col-span-12 md:col-span-7">
              <h2
                className="font-heading font-bold italic leading-[0.92] tracking-tight text-[3rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[6.25rem]"
                style={{ color: POSTER_RED }}
              >
                <TitleLine delay={0.05}>
                  <span className="font-normal">In the</span>{" "}
                  <span>Mess</span>
                </TitleLine>
                <TitleLine delay={0.15}>
                  <span className="font-normal">of</span> <span>Life</span>
                </TitleLine>
                <TitleLine delay={0.25}>
                  <span className="font-normal">&amp;</span>{" "}
                  <span>Work</span>
                </TitleLine>
              </h2>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.22em] sm:text-[11px]"
                style={{ color: INK_SOFT }}
              >
                <span>{YEAR}</span>
                <span aria-hidden>──</span>
                <span>Aditya Jain</span>
                <span aria-hidden>──</span>
                <span>Typography &amp; Layout</span>
                <span aria-hidden>──</span>
                <span>Explorations</span>
              </motion.div>
            </div>

            {/* Right — subhead, paragraph, CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-12 self-start md:col-span-5 md:pt-3"
            >
              <h3
                className="font-heading text-xl font-bold leading-tight sm:text-2xl md:text-[1.625rem]"
                style={{ color: INK_SOFT }}
              >
                Breathe easy. Escape the mess.
              </h3>

              <p
                className="mt-4 text-sm leading-relaxed sm:text-[15px] md:text-justify"
                style={{ color: INK_SOFT }}
              >
                Modern work is a knot of tools, tabs, and tickets. I build
                software that quietly cuts through the noise — calm
                interfaces, opinionated systems, and code you can read at
                3&nbsp;a.m. without flinching. Less mess. More signal.
                Software that gives you back the day.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 border-b pb-1 transition-opacity hover:opacity-80"
                  style={{ color: POSTER_RED, borderColor: POSTER_RED }}
                >
                  see the work
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </Link>
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center gap-2 border-b pb-1 transition-opacity hover:opacity-80"
                  style={{ color: POSTER_RED, borderColor: POSTER_RED }}
                >
                  start a project
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </Link>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-8 font-mono text-[10px] font-bold uppercase tracking-[0.22em] sm:text-[11px]"
                style={{ color: POSTER_RED }}
              >
                Built with care &middot; not AI
              </motion.p>
            </motion.div>
          </div>

          {/* Lower — flat red rectangle (no decoration) */}
          <motion.div
            initial={{ scaleY: 0.6, opacity: 0.4 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="h-40 w-full origin-top sm:h-56 md:h-64 lg:h-72"
            style={{ backgroundColor: POSTER_RED }}
            aria-hidden
          />
        </motion.article>

        {/* Bottom metadata bar */}
        {/* <div className="grid grid-cols-1 items-start gap-y-2 pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted sm:grid-cols-3 sm:items-center sm:gap-y-0 sm:pt-8 sm:text-[11px]">
          <span className="max-w-md justify-self-start normal-case tracking-normal text-[11px] leading-relaxed">
            In the mess of work &amp; life — crafted with care, shipped with
            intent.
          </span>
          <span className="hidden justify-self-center text-foreground sm:block">
            Aditya Jain
          </span>
          <span className="justify-self-start sm:justify-self-end">
            Software Engineer
          </span>
        </div> */}
      </div>
    </section>
  );
}

function TitleLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: "0.35em", filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="block"
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.span>
  );
}
