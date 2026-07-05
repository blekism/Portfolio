import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Github,
  ExternalLink,
  Blocks,
  Building2,
  MessageSquare,
  Star,
} from "lucide-react";
import { projects } from "../lib/portfolio-data";
import { Reveal } from "../services/reveal";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <NotFound />;

  return (
    <main className="min-h-screen pb-24">
      <div className="mx-auto max-w-6xl px-6 pt-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" /> Back to Home
        </Link>
      </div>

      {/* Top: logo + screenshots | meta + tech + built for */}
      <section className="mx-auto max-w-6xl px-6 mt-8 grid lg:grid-cols-2 gap-10 lg:gap-14">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden border border-border bg-surface aspect-[4/3]">
            <div className="absolute -inset-10 bg-[var(--gradient-radial-primary)] blur-3xl opacity-40" />
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              width={900}
              height={700}
              className="relative size-full object-cover"
            />
          </div>

          {project.screenshots.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-3">
              {project.screenshots.map((s, i) => (
                <div
                  key={i}
                  className="card-interactive aspect-[4/3] rounded-xl border border-border overflow-hidden bg-surface"
                >
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    width={400}
                    height={300}
                    className="size-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </Reveal>

        <Reveal delay={100}>
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest">
            <span className="rounded-full bg-primary/15 text-primary-soft border border-primary/30 px-3 py-1">
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-muted-foreground">
              <Calendar className="size-3.5" />
              {project.year}
            </span>
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-6xl font-semibold leading-[1.05]">
            {project.title}
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            {project.tagline}
          </p>

          {/* Tech stack */}
          <div className="mt-10">
            <h2 className="flex items-center gap-2 text-base font-semibold">
              <Blocks className="size-5 text-primary" /> Tech Stack
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-foreground/90"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Built for */}
          {project.builtFor && (
            <div className="mt-10 border-t border-border/60 pt-8">
              <h2 className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                <Building2 className="size-4" /> Built for
              </h2>
              <div className="mt-4 card-interactive flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-4">
                <div className="flex items-center gap-3">
                  <div className="size-11 rounded-full bg-surface-elevated border border-border overflow-hidden flex items-center justify-center text-sm font-semibold text-primary-soft">
                    {project.builtFor.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{project.builtFor.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {project.builtFor.description}
                    </div>
                  </div>
                </div>
                <a
                  href={project.builtFor.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs font-medium hover:opacity-90 whitespace-nowrap"
                >
                  Visit <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* CTA links */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="size-4" /> Live site
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium hover:border-primary/50 transition-colors"
            >
              <Github className="size-4" /> Repository
            </a>
          </div>
        </Reveal>
      </section>

      {/* User Reviews */}
      {project.reviews && project.reviews.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 mt-16">
          <Reveal>
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <MessageSquare className="size-5 text-primary" /> User Reviews
            </h2>
          </Reveal>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.reviews.map((r, i) => (
              <Reveal key={i} delay={i * 80}>
                <article className="card-interactive h-full rounded-2xl border border-border bg-surface p-5">
                  {r.rating && (
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className={`size-4 ${idx < r.rating! ? "fill-primary text-primary" : "text-muted-foreground/30"}`}
                        />
                      ))}
                    </div>
                  )}
                  <p className="mt-3 text-sm text-foreground/90 leading-relaxed">
                    "{r.body}"
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="size-9 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-xs font-semibold text-primary-soft">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{r.name}</div>
                      {r.handle && (
                        <div className="text-xs text-muted-foreground">
                          {r.handle}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
