import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";

import ProjectBanner from "@/components/projects/project-banner";
import { GithubIcon } from "@/components/icons";
import { useAnimationGate } from "@/contexts/animation-gate";

export interface ProjectCardProps {
  slug?: string;
  name: string;
  favicon?: string;
  imageUrl?: string[];
  description: string;
  sourceCodeHref: string;
  liveWebsiteHref?: string;
  category: string;
  technologies: string[];
}

function CardBody(props: ProjectCardProps) {
  return (
    <>
      <ProjectBanner
        name={props.name}
        category={props.category}
        className="aspect-[1.9/1]"
      />
      <div className="flex grow flex-col p-4 text-foreground sm:p-6">
        <div className="flex items-center gap-3">
          {props.favicon && (
            <span className="relative h-6 w-6 text-2xl">{props.favicon}</span>
          )}
          <span className="text-lg font-semibold">{props.name}</span>
        </div>
        <p className="mt-3 line-clamp-4 text-sm text-muted-foreground md:text-base">
          {props.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {props.technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          {props.slug ? (
            <span className="flex items-center gap-1.5 text-sm font-semibold text-accent">
              View details <ArrowRight className="h-4 w-4" />
            </span>
          ) : (
            <span />
          )}
          {/* These sit above the stretched link so they stay independently clickable */}
          <div className="relative z-20 flex items-center gap-5">
            {props.sourceCodeHref && (
              <a
                href={props.sourceCodeHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code for ${props.name}`}
                className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                <GithubIcon className="h-5 w-5" /> Code
              </a>
            )}
            {props.liveWebsiteHref && (
              <a
                href={props.liveWebsiteHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live website for ${props.name}`}
                className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                <FiExternalLink className="h-5 w-5" /> Live
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default function ProjectCard(props: ProjectCardProps) {
  const { resolvedTheme } = useTheme();
  const { animationsReady } = useAnimationGate();

  const backgroundColor =
    resolvedTheme === "dark"
      ? "bg-black/20 backdrop-blur-lg"
      : "bg-white/20 backdrop-blur-lg";

  const className = `group relative flex h-full w-full flex-col overflow-hidden rounded-lg border border-accent/20 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/20 ${backgroundColor}`;

  const stretchedLink = props.slug && (
    <Link
      href={`/projects/${props.slug}`}
      aria-label={`View details for ${props.name}`}
      className="absolute inset-0 z-10 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    />
  );

  if (!animationsReady) {
    return (
      <div className={className}>
        {stretchedLink}
        <CardBody {...props} />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ ease: "easeOut", duration: 0.4 }}
      className={className}
    >
      {stretchedLink}
      <CardBody {...props} />
    </motion.div>
  );
}
