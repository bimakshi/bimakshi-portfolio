"use client"

import { portfolioData } from "@/data/portfolio"
import { motion } from "framer-motion"

export default function About() {
  const { about } = portfolioData

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl space-y-8"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto rounded-full" />
          </div>
          
          <div className="rounded-2xl border bg-card p-8 text-card-foreground shadow-sm">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {about.bio}
            </p>
            
            <div className="mt-8 flex flex-wrap gap-2">
              {about.highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
