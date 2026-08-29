import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";

import FadeUp from "@/animation/fade-up";
import HeroIllustration from "@/components/hero-illustration";

export default function LandingHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let lastVisible = true;

    const onScroll = () => {
      const nextVisible = window.scrollY < 80;
      if (nextVisible !== lastVisible) {
        lastVisible = nextVisible;
        setShowScroll(nextVisible);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Determine the button text color based on the theme
  const buttonTextColor =
    mounted && resolvedTheme === "dark" ? "text-black" : "text-white";

  return (
    <>
      <section
        ref={ref}
        className="pointer-events-auto relative flex min-h-[70vh] items-center px-6 pb-10 pt-8 sm:px-14 sm:pt-12 md:px-20"
      >
        {/* Background gradient effects */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/4 top-1/4 h-56 w-56 rounded-full bg-accent/15 blur-3xl sm:h-72 sm:w-72"></div>
          <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl sm:h-96 sm:w-96"></div>
        </div>

        <div className="w-full">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
           <div>
            <AnimatePresence>
              <FadeUp key="title-main" duration={0.6} whileInView={true}>
                <div className="relative max-w-max">
                  <h1 className="py-1 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                    Bimakshi{" "}
                    <span className="text-accent">Gunasekara</span>
                  </h1>
                  {/* Animated underline */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-2 h-1 rounded-full bg-accent"
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-accent/10 px-3 py-1.5 text-sm font-semibold text-accent backdrop-blur-sm sm:text-base">
                    Software Engineering Intern
                  </span>
                  <span className="rounded-full bg-accent/10 px-3 py-1.5 text-sm font-semibold text-accent backdrop-blur-sm sm:text-base">
                    Full-Stack Developer
                  </span>
                </div>
              </FadeUp>

              <FadeUp
                key="description"
                duration={0.6}
                delay={0.2}
                whileInView={true}
              >
                <div className="mt-6 max-w-xl">
                  <p className="text-lg font-medium leading-relaxed text-zinc-900 dark:text-zinc-200 sm:text-xl">
                    <span className="text-accent">Hi</span>, I&apos;m
                    <span className="font-semibold text-accent"> Bimakshi</span>.
                  </p>
                  <p className="mt-3 text-base font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg">
                    An IT &amp; Management undergraduate at the University of
                    Moratuwa building
                    <span className="font-semibold text-accent">
                      {" "}
                      full-stack web applications
                    </span>{" "}
                    and
                    <span className="font-semibold text-accent">
                      {" "}
                      RESTful APIs
                    </span>
                    .
                  </p>
                </div>
              </FadeUp>

              <FadeUp key="stats" duration={0.6} delay={0.4} whileInView={true}>
                <div className="mt-8 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-3">
                  <div className="rounded-lg border border-accent/20 bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-accent">3.7</div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">
                      CGPA / 4.00
                    </div>
                  </div>
                  <div className="rounded-lg border border-accent/20 bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-accent">4</div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">
                      Featured Projects
                    </div>
                  </div>
                  <div className="col-span-2 rounded-lg border border-accent/20 bg-white/10 p-4 backdrop-blur-sm sm:col-span-1">
                    <div className="text-2xl font-bold text-accent">6</div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">
                      Certifications
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp key="cta-buttons" duration={0.6} delay={0.6}>
                <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row">
                  <Link
                    href="/projects"
                    className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-accent px-7 py-3 text-base font-semibold ${buttonTextColor} transition-all duration-300 hover:scale-105 hover:bg-accent-light active:scale-95 sm:px-8 sm:py-4 sm:text-lg`}
                  >
                    <span className="relative z-10">View My Work</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>

                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center rounded-full border-2 border-accent bg-accent/10 px-7 py-3 text-base font-semibold text-accent backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-white active:scale-95 sm:px-8 sm:py-4 sm:text-lg"
                  >
                    Learn More
                  </Link>
                </div>
              </FadeUp>
            </AnimatePresence>
           </div>

           <FadeUp key="hero-illustration" duration={0.6} delay={0.3} whileInView={true}>
             <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
               <HeroIllustration className="w-full text-accent" />
             </div>
           </FadeUp>
          </div>
        </div>
      </section>

      {/* Scroll indicator - fixed to viewport, fades out on scroll */}
      <AnimatePresence>
        {mounted && showScroll && (
          <div className="fixed bottom-8 left-1/2 z-10 hidden -translate-x-1/2 sm:block">
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="flex flex-col items-center gap-2"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  Scroll to explore
                </span>
                <div className="h-6 w-4 rounded-full border-2 border-accent/50">
                  <motion.div
                    className="mx-auto mt-1 h-2 w-1 rounded-full bg-accent"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
