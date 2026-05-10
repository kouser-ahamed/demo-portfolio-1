export default function Home() {
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
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.20),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.18),_transparent_28%),linear-gradient(180deg,_rgba(10,10,10,0.98),_rgba(12,12,18,1))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
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
        </header>

        <div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[1.25fr_0.75fr] lg:py-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_24px_rgba(52,211,153,0.9)]" />
              Available for freelance and junior front-end roles
            </div>

            <div className="max-w-3xl space-y-6">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-white/45">
                Creative front-end developer
              </p>
              <h1 className="text-5xl font-semibold leading-none text-balance text-white sm:text-6xl lg:text-7xl">
                I build polished digital experiences with Next.js and Tailwind.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                This demo portfolio is designed to feel modern, bold, and easy to scan. It gives
                you a strong starting point for showcasing projects, skills, and contact details in
                one focused page.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-100"
              >
                View selected work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Let’s talk
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["3+", "featured projects"],
                ["5", "core skills"],
                ["100%", "responsive"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-3xl font-semibold text-white">{value}</p>
                  <p className="mt-1 text-sm text-white/55">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-emerald-400/20 via-sky-400/10 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl">
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
                    <div key={label} className="rounded-2xl border border-white/8 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-white/40">{label}</p>
                      <p className="mt-2 text-sm text-white/80">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        <section id="projects" className="space-y-6 py-10 sm:py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/45">Selected work</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Projects with a strong first impression</h2>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/8"
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
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 py-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div id="skills" className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-white/45">Skills</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Tools and strengths</h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-white/45">Services</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">What this portfolio can highlight</h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mb-4 rounded-[2rem] border border-emerald-400/20 bg-gradient-to-r from-emerald-400/15 via-white/5 to-sky-400/15 p-6 sm:p-8"
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
        </section>
      </section>
    </main>
  );
}
