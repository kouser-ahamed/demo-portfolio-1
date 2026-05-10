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

export default function ProjectsPage() {
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
    <motion.main className="relative overflow-hidden" initial="hidden" animate="visible" variants={stagger}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.22),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(236,72,153,0.16),_transparent_24%),linear-gradient(180deg,_rgba(10,10,10,0.98),_rgba(12,12,18,1))]" />
      <section className="relative mx-auto min-h-screen w-full max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
        <motion.header className="mb-10 flex items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl" variants={fadeUp} transition={{ duration: 0.45 }}>
          <Link href="/" className="text-sm font-medium uppercase tracking-[0.35em] text-emerald-300">
            Demo Portfolio
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <Link className="transition hover:text-white" href="/about">About</Link>
            <Link className="transition hover:text-white" href="/contact">Contact</Link>
          </nav>
        </motion.header>

        <motion.section className="space-y-8" variants={stagger}>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/45">Projects</p>
            <h1 className="mt-2 text-4xl font-semibold text-white sm:text-5xl">Projects with a strong first impression</h1>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <motion.article key={project.title} className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6" variants={cardLift} whileHover={shouldReduceMotion ? undefined : { y: -6, rotate: -0.35 }}>
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/70">{project.category}</p>
                <h2 className="mt-4 text-2xl font-semibold text-white">{project.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/65">{project.description}</p>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-white/55">
                  <span>UI design</span>
                  <span className="transition group-hover:text-white">Case study</span>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6" variants={cardLift} whileHover={shouldReduceMotion ? undefined : { y: -4 }}>
              <p className="text-sm uppercase tracking-[0.35em] text-white/45">Skills</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Tools and strengths</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">{skill}</span>
                ))}
              </div>
            </motion.div>

            <motion.div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6" variants={cardLift} whileHover={shouldReduceMotion ? undefined : { y: -4 }}>
              <p className="text-sm uppercase tracking-[0.35em] text-white/45">Services</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">What this portfolio can highlight</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {services.map((service) => (
                  <div key={service} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">{service}</div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      </section>
    </motion.main>
  );
}