import { GraduationCap, BadgeCheck } from "lucide-react";

import FadeUp from "@/animation/fade-up";
import { EDUCATION, CERTIFICATIONS } from "@/data/profile";

export default function EducationCertifications() {
  return (
    <section
      id="education"
      className="overflow-hidden px-6 py-28 sm:px-14 md:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Education */}
          <FadeUp duration={0.4} whileInView>
            <div className="h-full rounded-2xl border border-border bg-muted/20 p-6 shadow-lg ring-1 ring-zinc-200/50 backdrop-blur-lg dark:ring-accent/20 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap size={22} />
                </span>
                <h2 className="text-2xl font-semibold text-accent sm:text-3xl">
                  Education
                </h2>
              </div>

              <ul className="space-y-6">
                {EDUCATION.map((edu) => (
                  <li
                    key={edu.institution}
                    className="border-l-2 border-accent/30 pl-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent/70">
                      {edu.duration}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-foreground">
                      {edu.program}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      {edu.institution}
                    </p>
                    {edu.detail && (
                      <p className="mt-1 text-sm text-accent">{edu.detail}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* Certifications */}
          <FadeUp duration={0.4} delay={0.1} whileInView>
            <div className="h-full rounded-2xl border border-border bg-muted/20 p-6 shadow-lg ring-1 ring-zinc-200/50 backdrop-blur-lg dark:ring-accent/20 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <BadgeCheck size={22} />
                </span>
                <h2 className="text-2xl font-semibold text-accent sm:text-3xl">
                  Certifications
                </h2>
              </div>

              <ul className="divide-y divide-border">
                {CERTIFICATIONS.map((cert) => (
                  <li
                    key={`${cert.name}-${cert.date}`}
                    className="flex items-start justify-between gap-4 py-3 first:pt-0"
                  >
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {cert.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="whitespace-nowrap rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {cert.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
