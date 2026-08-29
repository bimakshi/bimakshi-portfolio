import Head from "next/head";
import { NextSeo } from "next-seo";
import Link from "next/link";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import EducationCertifications from "@/components/education-certifications";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { PROFILE } from "@/data/profile";
import FadeUp from "@/animation/fade-up";
import { AnimatePresence } from "framer-motion";
import SectionDivider from "@/components/section-divider";
import { pageSeo } from "@/lib/seo/seo";
import { getPersonSchema, getWebsiteSchema, toJsonLd } from "@/lib/seo/schema";

export default function Home() {
  return (
    <>
      <NextSeo
        {...pageSeo({
          title: "Bimakshi Gunasekara - Software Engineering Intern",
          description:
            "Portfolio of Bimakshi Gunasekara, an IT & Management undergraduate at the University of Moratuwa and full-stack developer working with Next.js, TypeScript, Spring Boot, PHP, MySQL and PostgreSQL.",
          path: "",
        })}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: toJsonLd(getWebsiteSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: toJsonLd(getPersonSchema()),
          }}
        />
      </Head>

      {/* Hero Section */}
      <LandingHero />

      <SectionDivider />

      {/* About Summary Section */}
      <AnimatePresence>
        <FadeUp key="about-title" duration={0.2} whileInView={true}>
          <section className="px-6 py-16 sm:px-14 md:px-20">
            <div className="mx-auto max-w-7xl">
              <div className="rounded-2xl border border-border bg-muted/20 p-6 shadow-lg ring-1 ring-zinc-200/50 backdrop-blur-lg dark:ring-accent/20 sm:p-8 md:p-12">
                <h2 className="text-3xl font-bold text-accent sm:text-4xl md:text-5xl">
                  About Me
                </h2>
                <p className="mt-6 text-lg font-medium leading-relaxed text-zinc-900 dark:text-zinc-300 sm:text-xl">
                  {PROFILE.summary}
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {PROFILE.focusAreas.map((area) => (
                    <div
                      key={area.heading}
                      className="rounded-lg bg-accent/10 p-4 backdrop-blur-sm"
                    >
                      <h3 className="font-semibold text-accent">
                        {area.heading}
                      </h3>
                      <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                        {area.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeUp>
      </AnimatePresence>

      <SectionDivider />

      {/* Skills Section */}
      <SkillsShowcase skills={SKILLS_DATA} />

      <SectionDivider />

      {/* Featured Projects Section */}
      <ProjectShowcase projects={PROJECT_SHOWCASE} />

      <SectionDivider />

      {/* Education & Certifications */}
      <EducationCertifications />

      <SectionDivider />

      {/* Call to Action Section */}
      <AnimatePresence>
        <FadeUp key="cta-title" duration={0.6} whileInView={true}>
          <section className="px-6 py-16 sm:px-14 md:px-20">
            <div className="mx-auto max-w-7xl">
              <div className="mb-16 rounded-2xl border border-border bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 p-6 shadow-lg ring-1 ring-accent/20 backdrop-blur-lg sm:mb-20 sm:p-8 md:p-12">
                <h2 className="text-center text-3xl font-bold text-accent sm:text-4xl md:text-5xl">
                  Open to Software Engineering Internships
                </h2>
                <p className="mt-6 text-center text-lg font-medium text-zinc-900 dark:text-zinc-300 sm:text-xl">
                  I&apos;m looking for a team where I can contribute to
                  real-world products and keep growing as an engineer.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Link
                    href="/projects"
                    className="rounded-full bg-accent px-8 py-3 text-center text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-accent-light active:scale-95"
                  >
                    View My Work
                  </Link>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="rounded-full border-2 border-accent px-8 py-3 text-center text-lg font-semibold text-accent transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-white active:scale-95"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </section>
        </FadeUp>
      </AnimatePresence>
    </>
  );
}
