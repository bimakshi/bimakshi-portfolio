"use client"

import { portfolioData } from "@/data/portfolio"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Download, Mail } from "lucide-react"
import { Github, Linkedin } from "@/components/icons"

export default function Hero() {
  const { hero } = portfolioData

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl/none">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
                  {hero.name}
                </span>
              </h1>
              <h2 className="text-2xl font-semibold tracking-tight text-muted-foreground sm:text-3xl">
                {hero.title}
              </h2>
              <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl/relaxed">
                {hero.tagline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <Link
                href={hero.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center space-x-6"
            >
              <Link
                href={hero.social.github}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href={hero.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href={`mailto:${hero.social.email}`}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="grid grid-cols-2 gap-4">
              {hero.stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center space-y-2 rounded-xl border bg-card p-6 text-card-foreground shadow-sm"
                >
                  <span className="text-3xl font-bold tracking-tighter text-primary">
                    {stat.value}
                  </span>
                  <span className="text-center text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
