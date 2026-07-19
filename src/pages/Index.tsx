import { Link } from "react-router-dom";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  Globe,
  Smartphone,
  ArrowUpRight,
  Sparkles,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import profileImg from "../assets/profile.jpg";
import {
  projects,
  skills,
  experience,
  currentlyLearning,
  certifications,
  stats,
  services,
  contact,
} from "../lib/portfolio-data";
import { Reveal } from "../services/reveal";
import { CountStat } from "../services/countstat";

const serviceIcons = { Globe, Smartphone } as const;

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/50">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-display font-semibold text-lg tracking-tight"
        >
          Blek<span className="text-gradient-primary">.</span>dev
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <a href="#work" className="hover:text-foreground transition-colors">
            Work
          </a>
          <a href="#skills" className="hover:text-foreground transition-colors">
            Skills
          </a>
          <a
            href="#experience"
            className="hover:text-foreground transition-colors"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </nav>
        <a
          href={`mailto:${contact.email}`}
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          <Mail className="size-4" /> Get in touch
        </a>
      </div>
    </header>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-primary-soft">
      <span className="h-px w-8 bg-primary/60" />
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]" />
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 lg:gap-14 items-center relative">
        <Reveal>
          <SectionLabel>About me</SectionLabel>
          <h1 className="mt-5 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
            Building With <span className="text-gradient-primary">Purpose</span>
            .
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            I'm Blake — a full-stack developer with the intent to deliver
            quality apps. I care about fast load times, calm interfaces, and
            code that other engineers want to read on a Monday morning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <Download className="size-4" /> Download CV
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:border-primary/50 transition-colors"
            >
              View selected work <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="flex justify-center md:justify-end">
          <ProfileFrame />
        </Reveal>
      </div>

      <div className="mx-auto max-w-6xl px-6 relative mt-16">
        <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-border/60 pt-10">
            {stats.map((s) => (
              <CountStat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProfileFrame() {
  return (
    <div className="relative">
      <div className="absolute -inset-10 rounded-full bg-[var(--gradient-radial-primary)] blur-2xl animate-pulse-glow" />
      <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-primary/60 via-primary/10 to-transparent blur-xl opacity-80" />

      <div className="relative animate-float-slow">
        <div className="relative rounded-[2rem] p-[1.5px] bg-gradient-to-br from-primary/70 via-primary/20 to-transparent">
          <div className="relative rounded-[calc(2rem-1.5px)] overflow-hidden bg-surface noise">
            <img
              src={profileImg}
              alt="Portrait of Blake"
              width={520}
              height={620}
              className="block w-[280px] sm:w-[340px] md:w-[380px] h-auto object-cover"
            />
            <div className="pointer-events-none absolute -top-10 -right-10 size-48 rounded-full bg-primary/30 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-border/70 bg-background/70 backdrop-blur px-4 py-3">
              <div>
                <div className="text-sm font-medium">
                  Cristian Blake Laviano
                </div>
                <div className="text-xs text-muted-foreground">
                  Full Stack · Remote
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-primary-soft">
                <span className="size-2 rounded-full bg-primary animate-pulse" />
                Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>What I do</SectionLabel>
          <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold max-w-3xl">
            Focused craft across{" "}
            <span className="text-gradient-primary">web and mobile</span>.
          </h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon as keyof typeof serviceIcons];
            return (
              <Reveal key={s.title} delay={i * 100}>
                <article className="card-interactive group relative h-full rounded-3xl border border-border bg-surface p-8 overflow-hidden">
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-surface-elevated border border-border">
                    <Icon className="size-6 text-primary-soft" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>Technical skills</SectionLabel>
          <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold">
            The toolkit I reach for.
          </h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Object.entries(skills).map(([group, list], i) => (
            <Reveal key={group} delay={i * 80}>
              <div className="card-interactive h-full rounded-3xl border border-border bg-surface p-6">
                <div className="text-xs font-mono uppercase tracking-widest text-primary-soft">
                  {group}
                </div>
                <ul className="mt-4 space-y-2">
                  {list.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm">
                      <span className="size-1.5 rounded-full bg-primary/70" />{" "}
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <SectionLabel>Featured projects</SectionLabel>
              <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold">
                Selected <span className="text-gradient-primary">work</span>.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              A small set of products I've designed and built end-to-end. Click
              any card to read the case study.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link
                to={`/projects/${p.slug}`}
                className="card-interactive group block rounded-3xl border border-border bg-surface overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={p.logo}
                    alt={`${p.title} logo`}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-background/60 backdrop-blur px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-primary-soft border border-border/60">
                    {p.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                    {p.tagline}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1fr,1.4fr] gap-12">
        <Reveal>
          <SectionLabel>Experience</SectionLabel>
          <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold">
            Where I've <span className="text-gradient-primary">worked</span>.
          </h2>
          <p className="mt-5 text-muted-foreground">
            A timeline of full-time roles and internships, in reverse
            chronological order.
          </p>
        </Reveal>

        <ol className="relative border-l border-border/70 pl-6 space-y-8">
          {experience.map((e, i) => (
            <Reveal key={e.company} as="li" delay={i * 80} className="relative">
              <span className="absolute -left-[31px] top-1.5 size-3 rounded-full bg-primary shadow-[0_0_0_4px_oklch(0.63_0.24_25_/_0.2)]" />
              <div className="card-interactive rounded-2xl border border-border bg-surface p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{e.role}</h3>
                  <span className="text-xs font-mono text-muted-foreground">
                    {e.period}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-2 text-primary-soft">
                  <Briefcase className="size-4" />
                  <span className="text-sm">{e.company}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {e.summary}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Learning() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>Currently learning</SectionLabel>
          <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold">
            <Sparkles className="inline size-8 text-primary mb-2" /> Always a
            beginner at something.
          </h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {currentlyLearning.map((l, i) => (
            <Reveal key={l.title} delay={i * 80}>
              <div className="card-interactive h-full rounded-3xl border border-border bg-surface p-6">
                <div className="text-xs font-mono uppercase tracking-widest text-primary-soft">
                  In progress
                </div>
                <h3 className="mt-2 text-xl font-semibold">{l.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {l.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>Certifications</SectionLabel>
          <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold">
            <GraduationCap className="inline size-8 text-primary mb-2" />{" "}
            Verified credentials.
          </h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <article className="card-interactive h-full rounded-3xl border border-border bg-surface p-6 text-center">
                <div className="relative mx-auto size-32 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[var(--gradient-radial-primary)] blur-xl opacity-70" />
                  <img
                    src={c.badge}
                    alt={`${c.title} badge`}
                    loading="lazy"
                    width={256}
                    height={256}
                    className="relative size-32 object-contain"
                  />
                </div>
                <h3 className="mt-5 text-base font-semibold">{c.title}</h3>
                <p className="mt-1 text-xs font-mono text-muted-foreground">
                  Issued {c.issued}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="relative rounded-3xl border border-border bg-surface overflow-hidden p-10 md:p-14 text-center">
            <div className="absolute -inset-x-20 -top-20 h-60 bg-[var(--gradient-radial-primary)] blur-3xl opacity-60" />
            <div className="relative">
              <SectionLabel>Contact</SectionLabel>
              <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold">
                Got something to{" "}
                <span className="text-gradient-primary">build</span>?
              </h2>
              <p className="mt-5 text-muted-foreground max-w-lg mx-auto">
                I'm available for freelance work and full-time roles. The
                fastest way to reach me is email.
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Mail className="size-4" /> {contact.email}
              </a>
              <div className="mt-8 flex items-center justify-center gap-3">
                {[
                  { href: contact.github, Icon: Github, label: "GitHub" },
                  { href: contact.linkedin, Icon: Linkedin, label: "LinkedIn" },
                  // { href: contact.twitter, Icon: Twitter, label: "Twitter" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface-elevated hover:border-primary/60 hover:text-primary transition-colors"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
        <div>
          © {new Date().getFullYear()} Alex Morgan. All rights reserved.
        </div>
        <div className="font-mono text-xs">Built with React · React Router</div>
      </div>
    </footer>
  );
}

export default function Index() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Services />
      <Work />
      <Skills />
      <Experience />
      <Certifications />
      <Learning />
      <Contact />
      <Footer />
    </main>
  );
}
