"use client";

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

export default function ContactPage() {
  const shouldReduceMotion = useReducedMotion();

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/", tone: "from-slate-950 to-slate-700" },
    { label: "LinkedIn", href: "https://www.linkedin.com/", tone: "from-sky-600 to-cyan-400" },
    { label: "Dribbble", href: "https://dribbble.com/", tone: "from-pink-500 to-rose-300" },
  ];

  return (
    <motion.main className="relative overflow-hidden" initial="hidden" animate="visible" variants={stagger}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.22),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(236,72,153,0.16),_transparent_24%),linear-gradient(180deg,_rgba(10,10,10,0.98),_rgba(12,12,18,1))]" />
      <section className="relative mx-auto min-h-screen w-full max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
        <motion.header className="mb-10 flex items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl" variants={fadeUp} transition={{ duration: 0.45 }}>
          <Link href="/" className="text-sm font-medium uppercase tracking-[0.35em] text-emerald-300">Demo Portfolio</Link>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <Link className="transition hover:text-white" href="/about">About</Link>
            <Link className="transition hover:text-white" href="/projects">Projects</Link>
          </nav>
        </motion.header>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div className="rounded-[2rem] border border-emerald-400/20 bg-gradient-to-r from-emerald-400/15 via-white/5 to-sky-400/15 p-6 sm:p-8" variants={cardLift} whileHover={shouldReduceMotion ? undefined : { y: -4 }}>
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-200/80">Contact</p>
            <h1 className="mt-2 text-4xl font-semibold text-white sm:text-5xl">Want a version of this portfolio customized to your name and projects?</h1>
            <p className="mt-4 max-w-2xl text-white/70 leading-7">
              Swap in your details, replace the sample projects, and you’ll have a clean portfolio ready to publish or expand.
            </p>

            <a href="mailto:hello@alexmorgan.dev" className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-100">
              hello@alexmorgan.dev
            </a>
          </motion.div>

          <motion.div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 sm:p-8" variants={cardLift} whileHover={shouldReduceMotion ? undefined : { y: -4 }}>
            <p className="text-sm uppercase tracking-[0.35em] text-white/45">Social links</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Connect across the web</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {socialLinks.map((link) => (
                <motion.a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={`group rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${link.tone} p-5 text-white shadow-lg shadow-black/20 transition`} whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.01 }}>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/70">{link.label}</p>
                  <p className="mt-3 text-sm leading-6 text-white/85 group-hover:text-white">View profile</p>
                </motion.a>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-white/45">Resume</p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Download the placeholder resume and replace it with your real PDF when ready.
              </p>
              <a href="/resume.txt" download className="mt-4 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15">
                Download resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}