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
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const cardLift = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const highlights = [
    ["3 pages", "clean route structure"],
    ["Motion", "Framer Motion interactions"],
    ["Tailwind", "modern responsive styling"],
  ];

  return (
    <motion.main
      className="relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.22),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(236,72,153,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.16),_transparent_26%),linear-gradient(180deg,_rgba(10,10,10,0.98),_rgba(12,12,18,1))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-10">
        <motion.header
          className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl"
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-emerald-300">
              Demo Portfolio
            </p>
            <p className="text-xs text-white/55">Next.js + Tailwind + JavaScript</p>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            {navLinks.map((link) => (
              <Link key={link.label} className="transition hover:text-white" href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.header>

        <div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[1.18fr_0.82fr] lg:py-16">
          <motion.div className="space-y-8" variants={stagger}>
            <motion.div
              className="inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200"
              variants={fadeUp}
              transition={{ duration: 0.45 }}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_24px_rgba(52,211,153,0.9)]" />
              Available for freelance and junior front-end roles
            </motion.div>

            <motion.div className="max-w-3xl space-y-6" variants={stagger}>
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-white/45">
                Creative front-end developer
              </p>
              <motion.h1
                className="text-5xl font-semibold leading-none text-balance text-white sm:text-6xl lg:text-7xl"
                variants={fadeUp}
                transition={{ duration: 0.55, delay: 0.05 }}
              >
                I build polished digital experiences with Next.js and Tailwind.
              </motion.h1>
              <motion.p
                className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
                variants={fadeUp}
                transition={{ duration: 0.55, delay: 0.1 }}
              >
                This demo portfolio is now split into separate pages for your bio, projects, and
                contact details while keeping the same bold animated style.
              </motion.p>
            </motion.div>

            <motion.div className="flex flex-col gap-3 sm:flex-row" variants={fadeUp} transition={{ duration: 0.45, delay: 0.12 }}>
              <motion.a
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-100"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03, y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                View projects
              </motion.a>
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03, y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                Contact me
              </motion.a>
            </motion.div>

            <motion.div className="grid gap-4 sm:grid-cols-3" variants={fadeUp} transition={{ duration: 0.45, delay: 0.16 }}>
              {highlights.map(([value, label]) => (
                <motion.div
                  key={label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                  variants={cardLift}
                  transition={{ duration: 0.45 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -5, rotate: -0.5 }}
                >
                  <p className="text-3xl font-semibold text-white">{value}</p>
                  <p className="mt-1 text-sm text-white/55">{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.aside className="relative" variants={cardLift} transition={{ duration: 0.5 }}>
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-emerald-400/20 via-sky-400/10 to-transparent blur-3xl" />
            <motion.div
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl"
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/45">Profile</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Alex Morgan</h2>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                  Open for work
                </div>
              </div>

              <div className="space-y-5 py-5">
                <motion.div
                  className="rounded-[1.5rem] border border-white/10 bg-gradient-to-r from-emerald-400/10 via-sky-400/10 to-pink-400/10 p-4"
                  variants={fadeUp}
                  transition={{ duration: 0.45 }}
                >
                  <p className="text-sm uppercase tracking-[0.3em] text-white/40">Now building</p>
                  <p className="mt-2 text-base text-white/85">
                    Bold portfolio experiences with a clean structure and expressive motion.
                  </p>
                </motion.div>

                <div className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-white/15 bg-slate-900">
                    <Image
                      src="/profile-picture.svg"
                      alt="Profile picture of Alex Morgan"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/40">About Me</p>
                    <p className="mt-2 text-sm leading-6 text-white/75">
                      I’m a front-end developer focused on clean interfaces, thoughtful motion, and
                      smooth user experience.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-sm text-white/50">Focus</p>
                  <p className="mt-2 text-base text-white/85">
                    Front-end experiences that are clear, fast, and visually sharp.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-sm text-white/50">Stack</p>
                  <p className="mt-2 text-base text-white/85">JavaScript, React, Next.js, Tailwind CSS</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ["Location", "Remote / Global"],
                    ["Email", "hello@alexmorgan.dev"],
                  ].map(([label, value]) => (
                    <motion.div
                      key={label}
                      className="rounded-2xl border border-white/8 bg-white/5 p-4"
                      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                    >
                      <p className="text-xs uppercase tracking-[0.25em] text-white/40">{label}</p>
                      <p className="mt-2 text-sm text-white/80">{value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.aside>
        </div>

        <motion.section
          id="contact"
          className="mb-4 rounded-[2rem] border border-emerald-400/20 bg-gradient-to-r from-emerald-400/15 via-white/5 to-sky-400/15 p-6 sm:p-8"
          variants={fadeUp}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-200/80">Contact</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">
                Want a version of this portfolio customized to your name and projects?
              </h2>
              <p className="mt-3 text-white/70">
                Swap in your details, replace the sample projects, and you’ll have a clean portfolio
                ready to publish or expand.
              </p>
            </div>

            <a
              href="mailto:hello@alexmorgan.dev"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-100"
            >
              hello@alexmorgan.dev
            </a>
          </div>
        </motion.section>
      </section>
    </motion.main>
  );
}
