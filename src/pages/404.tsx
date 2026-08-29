import Link from "next/link";
import { NextSeo } from "next-seo";
import { ArrowLeft, FolderGit2, Home } from "lucide-react";

import HeroIllustration from "@/components/hero-illustration";

export default function PageNotFound() {
  return (
    <>
      <NextSeo noindex nofollow title="404 - Page Not Found" />

      <section className="relative flex min-h-[80vh] items-center overflow-hidden px-6 py-16 sm:px-14 md:px-20">
        {/* Background accents, matching the hero */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/4 top-1/4 h-56 w-56 rounded-full bg-accent/15 blur-3xl sm:h-72 sm:w-72" />
          <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl sm:h-96 sm:w-96" />
        </div>

        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Error 404
            </p>

            <h1 className="mt-3 flex items-baseline gap-3 text-6xl font-extrabold tracking-tight text-foreground sm:text-7xl md:text-8xl">
              4
              <span className="text-accent">0</span>
              4
            </h1>

            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
              This page took a wrong turn. It might have moved, or it never
              existed. Let&apos;s get you back on track.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-accent-light active:scale-95"
              >
                <Home className="h-4 w-4" /> Back home
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border-2 border-accent bg-accent/10 px-6 py-3 text-sm font-semibold text-accent backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-white active:scale-95"
              >
                <FolderGit2 className="h-4 w-4" /> View projects
              </Link>
            </div>

            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" /> Learn more about Bimakshi
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-sm opacity-90 lg:max-w-md">
            <HeroIllustration className="w-full text-accent" />
          </div>
        </div>
      </section>
    </>
  );
}
