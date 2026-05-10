"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
};

const cardLift = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  const values = [
    ["Experience", "2+ years"],
    ["Specialty", "Front-end UI"],
    ["Style", "Bold + clean"],
  ];

  const principles = [
    "Keep the structure simple so the message is easy to scan.",
    "Use motion to guide attention, not distract from content.",
    "Design every layout to feel strong on mobile first.",
  ];

  return (
    <motion.main className="relative overflow-hidden" initial="hidden" animate="visible" variants={stagger}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.22),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(236,72,153,0.16),_transparent_24%),linear-gradient(180deg,_rgba(10,10,10,0.98),_rgba(12,12,18,1))]" />
      <section className="relative mx-auto min-h-screen w-full max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
        <motion.header className="mb-10 flex items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl" variants={fadeUp} transition={{ duration: 0.45 }}>
          <Link href="/" className="text-sm font-medium uppercase tracking-[0.35em] text-emerald-300">
            Demo Portfolio
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <Link className="transition hover:text-white" href="/projects">Projects</Link>
            <Link className="transition hover:text-white" href="/contact">Contact</Link>
          </nav>
        </motion.header>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8" variants={cardLift} whileHover={shouldReduceMotion ? undefined : { y: -4 }}>
            <p className="text-sm uppercase tracking-[0.35em] text-white/45">About</p>
            <h1 className="mt-2 text-4xl font-semibold text-white sm:text-5xl">A quick intro to the person behind the screen</h1>
            <p className="mt-4 max-w-2xl leading-7 text-white/70">
              I design and build portfolio websites, product landing pages, and component-rich UI systems. My focus is on clear structure, readable typography, and motion that helps the page feel alive without getting in the way.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {values.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">{label}</p>
                  <p className="mt-2 text-sm text-white/85">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3">
              {principles.map((item) => (
                <motion.div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/75" whileHover={shouldReduceMotion ? undefined : { x: 4 }}>
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 sm:p-8" variants={cardLift} whileHover={shouldReduceMotion ? undefined : { y: -4 }}>
            <div className="flex items-center gap-5 border-b border-white/10 pb-5">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-white/15 bg-slate-900 sm:h-28 sm:w-28">
                <Image src="/profile-picture.svg" alt="Profile picture of Alex Morgan" fill priority className="object-cover" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/40">Profile picture</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Alex Morgan</h2>
                <p className="mt-2 text-sm leading-6 text-white/70">Front-end developer building polished, motion-aware web experiences.</p>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-gradient-to-r from-emerald-400/10 via-sky-400/10 to-pink-400/10 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-white/40">What I care about</p>
              <p className="mt-2 text-base leading-7 text-white/80">
                Strong hierarchy, expressive cards, responsive layouts, and interactions that feel intentional.
              </p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["Available", "Freelance / entry-level"],
                ["Location", "Remote / Global"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">{label}</p>
                  <p className="mt-2 text-sm text-white/80">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}