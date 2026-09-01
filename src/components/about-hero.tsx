import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";
import ProfilePhoto from "@/components/profile-photo";
import { PROFILE } from "@/data/profile";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 max-w-7xl px-6 py-20 sm:px-14 md:mt-20 md:px-20 lg:mt-0">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/20 p-6 shadow-lg ring-1 ring-zinc-200/50 backdrop-blur-lg dark:ring-accent/20 sm:p-8 md:p-12">
        {/* Background accents */}
        <div className="bg-accent/15 pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full blur-3xl sm:h-72 sm:w-72" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl sm:h-96 sm:w-96" />

        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:text-left">
          <div className="flex w-full justify-center lg:w-2/5">
            <AnimatePresence>
              <FadeUp key="hero-profile-photo" duration={0.6} whileInView>
                <div className="relative">
                  <ProfilePhoto size="lg" />
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-accent/20 bg-background px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                    {PROFILE.title}
                  </span>
                </div>
              </FadeUp>
            </AnimatePresence>
          </div>
          <div className="mt-6 w-full lg:mt-0 lg:w-3/5">
            <AnimatePresence>
              <FadeUp key="title-greeting" duration={0.6}>
                <h1 className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-5xl lg:text-4xl xl:text-6xl">
                  Hi, I&apos;m Bimakshi Gunasekara
                </h1>
              </FadeUp>
              <FadeUp key="description-1" duration={0.6} delay={0.2}>
                <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-relaxed text-zinc-900 dark:text-zinc-300 sm:text-lg lg:mx-0">
                  {PROFILE.summary}
                </p>
              </FadeUp>
              <FadeUp key="description-2" duration={0.6} delay={0.35}>
                <p className="mx-auto mt-4 max-w-3xl text-base font-medium leading-relaxed text-zinc-900 dark:text-zinc-300 sm:text-lg lg:mx-0">
                  Most of my experience comes from group and personal projects
                  spanning a hospital laboratory system, an expense-tracking app,
                  a blogging platform, and an embedded battery monitor, working
                  across the stack from database design to UI.
                </p>
              </FadeUp>

              {/* Highlights row */}
              <FadeUp key="highlights" duration={0.6} delay={0.5}>
                <div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3 lg:mx-0">
                  {PROFILE.focusAreas.map((area) => (
                    <div
                      key={area.heading}
                      className="rounded-lg border border-accent/20 bg-accent/10 px-3 py-2 text-sm font-semibold text-accent backdrop-blur-sm"
                    >
                      {area.heading}
                    </div>
                  ))}
                </div>
              </FadeUp>

              {/* CTAs */}
              <FadeUp key="about-ctas" duration={0.6} delay={0.65}>
                <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-3 sm:flex-row sm:justify-center lg:mx-0 lg:justify-start">
                  <Link
                    href="/projects"
                    className="rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-accent-light active:scale-95 sm:text-base"
                  >
                    View Projects
                  </Link>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="rounded-full border-2 border-accent bg-accent/10 px-6 py-3 text-center text-sm font-semibold text-accent backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:bg-accent hover:text-white active:scale-95 sm:text-base"
                  >
                    Contact Me
                  </a>
                </div>
              </FadeUp>

              <FadeRight
                key="hero-location"
                duration={0.6}
                delay={0.8}
                className="mr-0 mt-8 flex items-center justify-center gap-4 lg:justify-start"
              >
                <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
                  <Image
                    className="-z-10 h-full w-full bg-cover bg-no-repeat"
                    alt="Sri Lankan flag"
                    src="https://flagcdn.com/lk.svg"
                    width={20}
                    height={14}
                  />
                </div>
                <span className="text-lg font-medium text-foreground">
                  {PROFILE.location}
                </span>
              </FadeRight>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
