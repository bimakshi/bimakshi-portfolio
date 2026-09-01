import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  User,
  Layers,
  FileText,
  Info,
  Hammer,
  Star,
  Image as ImageIcon,
} from "lucide-react";

import SectionDivider from "@/components/section-divider";
import ProjectBanner from "@/components/projects/project-banner";
import Corosel from "@/components/utility/corosel";
import { PROJECTS, getProjectBySlug, type Project } from "@/data/projects";
import { pageSeo } from "@/lib/seo/seo";
import {
  getProjectSchema,
  getProjectBreadcrumbSchema,
  getPersonSchema,
  toJsonLd,
} from "@/lib/seo/schema";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const repos = project.links.repos ?? [];
  const articles = project.links.articles ?? [];
  const hasPrimaryLinks = repos.length > 0 || Boolean(project.links.live);

  return (
    <>
      <NextSeo
        {...pageSeo({
          title: `${project.name} - Bimakshi Gunasekara`,
          description: project.summary,
          path: `/projects/${project.slug}`,
          type: "article",
          imageAlt: `${project.name} - project by Bimakshi Gunasekara`,
        })}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(getProjectSchema(project)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: toJsonLd(getProjectBreadcrumbSchema(project)),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(getPersonSchema()) }}
        />
      </Head>

      <article className="mx-auto mb-32 mt-6 w-full max-w-4xl px-6 sm:mt-12 sm:px-14 md:px-20">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            {project.category} · {project.type}
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {project.name}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            {project.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4 text-accent" /> {project.role}
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-accent" /> {project.period}
            </span>
            <span className="inline-flex items-center gap-2">
              <Layers className="h-4 w-4 text-accent" />
              {project.technologies.length} technologies
            </span>
          </div>

          {hasPrimaryLinks && (
            <div className="mt-6 flex flex-wrap gap-3">
              {repos.map((repo) => (
                <a
                  key={repo.url}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
                >
                  <Github className="h-4 w-4" />
                  {repos.length > 1 ? repo.label : "Source code"}
                </a>
              ))}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-accent px-5 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" /> Live site
                </a>
              )}
            </div>
          )}
        </header>

        <ProjectBanner
          name={project.name}
          category={project.category}
          className="mt-8 aspect-[2.4/1] rounded-2xl border border-accent/15"
        />

        <SectionDivider size="md" />

        <section>
          <h2 className="flex items-center gap-2 text-xl font-bold text-accent">
            <Info className="h-5 w-5" /> Overview
          </h2>
          <p className="mt-3 leading-relaxed text-foreground/90">
            {project.summary}
          </p>
        </section>

        <section className="mt-10">
          <h2 className="flex items-center gap-2 text-xl font-bold text-accent">
            <Hammer className="h-5 w-5" /> What I built
          </h2>
          <ul className="mt-3 space-y-2">
            {project.contributions.map((item) => (
              <li
                key={item}
                className="flex gap-3 leading-relaxed text-foreground/90"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {project.highlights.length > 0 && (
          <section className="mt-10">
            <h2 className="flex items-center gap-2 text-xl font-bold text-accent">
              <Star className="h-5 w-5" /> Highlights
            </h2>
            <ul className="mt-3 space-y-2">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 leading-relaxed text-foreground/90"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-10">
          <h2 className="flex items-center gap-2 text-xl font-bold text-accent">
            <Layers className="h-5 w-5" /> Tech stack
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {articles.length > 0 && (
          <section className="mt-10">
            <h2 className="flex items-center gap-2 text-xl font-bold text-accent">
              <FileText className="h-5 w-5" /> Write-ups
            </h2>
            <ul className="mt-3 space-y-2">
              {articles.map((article) => (
                <li key={article.url}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-medium text-foreground transition-colors hover:text-accent"
                  >
                    <FileText className="h-4 w-4 text-accent" />
                    {article.title}
                    <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <section className="mt-12">
            <h2 className="flex items-center gap-2 text-xl font-bold text-accent">
              <ImageIcon className="h-5 w-5" /> Screens
            </h2>
            <div className="mt-4 overflow-hidden rounded-2xl border border-accent/15 bg-muted/20">
              <Corosel images={project.gallery} />
            </div>
          </section>
        )}
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: PROJECTS.map((project) => ({ params: { slug: project.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ProjectDetailProps> = async (
  context
) => {
  const slug = context.params?.slug as string;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { notFound: true };
  }
  return { props: { project } };
};
