"use client"

import { portfolioData } from "@/data/portfolio"
import { motion } from "framer-motion"
import { Award } from "lucide-react"

export default function Certifications() {
  const { certifications } = portfolioData

  return (
    <section id="certifications" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Certifications</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto rounded-full" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start space-x-4 rounded-xl border bg-card p-5 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mt-1 rounded-full bg-primary/10 p-2 text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold leading-tight">{cert.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="mt-1 text-xs font-medium text-primary">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
