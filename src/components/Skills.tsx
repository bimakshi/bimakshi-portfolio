"use client"

import { portfolioData } from "@/data/portfolio"
import { motion } from "framer-motion"

export default function Skills() {
  const { skills } = portfolioData

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto rounded-full" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <h3 className="mb-4 text-lg font-semibold text-primary">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-md bg-secondary/50 px-2.5 py-1 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
