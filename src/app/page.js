"use client";

import Image from "next/image";
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

  const featuredProjects = [
    {
      title: "Studio Flow",
      category: "Brand website",
      description:
        "A sleek landing page built to turn visitors into leads with clear messaging, subtle motion, and strong conversion cues.",
    },
    {
      title: "Pulse Dashboard",
      category: "Web app UI",
      description:
        "A data-rich interface for tracking engagement, campaign performance, and product metrics in one place.",
    },
    {
      title: "Northstar Notes",
      category: "Personal product",
      description:
        "A minimal note-taking concept focused on fast capture, calm organization, and responsive interactions.",
    },
  ];

  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "UI Design",
    "Responsive Layouts",
    "Accessibility",
    "Performance",
  ];

  const services = [
    "Front-end development",
    "Portfolio and landing pages",
    "Component-driven UI systems",
    "Modern responsive design",
  ];

  return (
    <motion.main
      className="relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.20),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.18),_transparent_28%),linear-gradient(180deg,_rgba(10,10,10,0.98),_rgba(12,12,18,1))]" />
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
            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-white" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
        </motion.header>

        <div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[1.25fr_0.75fr] lg:py-16">
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
                This demo portfolio is designed to feel modern, bold, and easy to scan. It gives
                you a strong starting point for showcasing projects, skills, and contact details in
                one focused page.
              </motion.p>
            </motion.div>

            <motion.div className="flex flex-col gap-3 sm:flex-row" variants={fadeUp} transition={{ duration: 0.45, delay: 0.12 }}>
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-100"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03, y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                View selected work
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03, y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                Let’s talk
              </motion.a>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["3+", "featured projects"],
                ["5", "core skills"],
                ["100%", "responsive"],
              ].map(([value, label]) => (
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
            </div>
          </motion.div>

          <motion.aside className="relative" variants={cardLift} transition={{ duration: 0.5 }}>
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-emerald-400/20 via-sky-400/10 to-transparent blur-3xl" />
            <motion.div
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl"
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            >
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
          id="projects"
          className="space-y-6 py-10 sm:py-14"
          variants={stagger}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/45">Selected work</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Projects with a strong first impression</h2>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <motion.article
                key={project.title}
                className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/8"
                variants={cardLift}
                transition={{ duration: 0.45 }}
                whileHover={shouldReduceMotion ? undefined : { y: -6, rotate: -0.35 }}
              >
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/70">
                  {project.category}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{project.description}</p>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-white/55">
                  <span>UI design</span>
                  <span className="transition group-hover:text-white">Case study</span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="grid gap-6 py-10 lg:grid-cols-[0.9fr_1.1fr]"
          variants={stagger}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div id="skills" className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6" variants={cardLift} whileHover={shouldReduceMotion ? undefined : { y: -4 }}>
            <p className="text-sm uppercase tracking-[0.35em] text-white/45">Skills</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Tools and strengths</h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.04, y: -2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6" variants={cardLift} whileHover={shouldReduceMotion ? undefined : { y: -4 }}>
            <p className="text-sm uppercase tracking-[0.35em] text-white/45">Services</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">What this portfolio can highlight</h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <motion.div
                  key={service}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80"
                  whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.01 }}
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          id="about"
          className="grid gap-6 py-10 lg:grid-cols-[1.05fr_0.95fr]"
          variants={stagger}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8" variants={cardLift} whileHover={shouldReduceMotion ? undefined : { y: -4 }}>
            <p className="text-sm uppercase tracking-[0.35em] text-white/45">About</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">A quick intro to the person behind the screen</h2>
            <p className="mt-4 max-w-2xl text-white/70 leading-7">
              I design and build portfolio websites, product landing pages, and component-rich UI
              systems. My focus is on clear structure, readable typography, and motion that helps
              the page feel alive without getting in the way.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                ["Experience", "2+ years"],
                ["Specialty", "Front-end UI"],
                ["Style", "Bold + clean"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">{label}</p>
                  <p className="mt-2 text-sm text-white/85">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 sm:p-8" variants={cardLift} whileHover={shouldReduceMotion ? undefined : { y: -4 }}>
            <div className="flex items-center gap-5 border-b border-white/10 pb-5">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-white/15 bg-slate-900 sm:h-28 sm:w-28">
                <Image
                  src="/profile-picture.svg"
                  alt="Profile picture of Alex Morgan"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/40">Profile picture</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Alex Morgan</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Front-end developer building polished, motion-aware web experiences.
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {[
                "I like clean dashboards, distinctive hero sections, and strong CTA design.",
                "I use motion to guide attention and make interactions feel intentional.",
                "I keep layouts responsive so the experience works well on every screen size.",
              ].map((item) => (
                <motion.div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/75"
                  whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

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
