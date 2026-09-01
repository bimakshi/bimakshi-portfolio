import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  type: "Group Project" | "Personal Project";
  role: string;
  period: string;
  technologies: string[];
  summary: string;
  /** Concrete things Bimakshi built / owned on the project. */
  contributions: string[];
  /** Notable outcomes or interesting technical details. */
  highlights: string[];
  /**
   * Everything here is optional.
   * - `repos`: one or more GitHub repositories (e.g. frontend + backend).
   * - `live`: deployed URL.
   * - `articles`: external write-ups such as Medium posts.
   */
  links: {
    repos?: { label: string; url: string }[];
    live?: string;
    articles?: { title: string; url: string }[];
  };
  /** Optional screenshots shown as a gallery on the detail page. */
  gallery?: string[];
}

// Single source of truth for project content. Pages and cards derive from this.
export const PROJECTS: Project[] = [
  {
    slug: "durdans-hospital-lims",
    name: "Durdans Hospital LIMS",
    tagline:
      "A microservices Laboratory Information Management System for end-to-end lab workflows.",
    category: "Full Stack",
    type: "Group Project",
    role: "Full-Stack Developer",
    period: "Aug 2025 - Aug 2026",
    technologies: [
      "Next.js",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "Keycloak",
      "Microservices",
    ],
    summary:
      "A microservices-based Laboratory Information Management System (LIMS) designed to manage laboratory operations from order intake through to result delivery. The system is split into independent services communicating over RESTful APIs, with Keycloak handling authentication and authorization.",
    contributions: [
      "Built the Orders & Billing module end-to-end: order creation, multi-test selection, priority management, billing, and payment processing.",
      "Implemented sample collection, rejection and recollection flows, barcode generation, and collection history.",
      "Integrated the module with other services over RESTful APIs and handled PostgreSQL database operations.",
    ],
    highlights: [
      "Owned a full vertical slice of the product, from database schema to UI.",
      "Worked within a microservices architecture with shared authentication via Keycloak.",
    ],
    // TODO: replace with real URLs.
    links: {
      repos: [
        { label: "Frontend", url: "https://github.com/bimakshi/durdans-lims-web" },
        { label: "Orders Service", url: "https://github.com/bimakshi/durdans-lims-orders" },
      ],
    },
    gallery: [
      "/images/projects/durdans-hospital-lims/Create Order.png",
      "/images/projects/durdans-hospital-lims/Tests.png",
      "/images/projects/durdans-hospital-lims/Order Summary.png",
      "/images/projects/durdans-hospital-lims/Record Payment.png",
      "/images/projects/durdans-hospital-lims/Payment serach.png",
      "/images/projects/durdans-hospital-lims/Bills.png",
      "/images/projects/durdans-hospital-lims/Sample Collection.png",
      "/images/projects/durdans-hospital-lims/Collection history.png",
      "/images/projects/durdans-hospital-lims/Label Print.png",
      "/images/projects/durdans-hospital-lims/Supplies.png",
    ],
  },
  {
    slug: "expenseiq",
    name: "ExpenseIQ",
    tagline:
      "A full-stack expense tracker with analytics and category budgets.",
    category: "Full Stack",
    type: "Personal Project",
    role: "Full-Stack Developer",
    period: "Aug 2026 - Sep 2026",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "NextAuth.js",
      "Recharts",
    ],
    summary:
      "A full-stack expense tracking application that lets users log, categorize and analyze personal spending, and stay on top of budgets with real-time alerts.",
    contributions: [
      "Developed Next.js API routes for expense CRUD operations.",
      "Implemented authentication with NextAuth.js and type-safe PostgreSQL access through Prisma ORM.",
      "Built an interactive analytics dashboard with Recharts visualizing spending by category and over time.",
      "Implemented category-wise budget limits with real-time visual alerts.",
    ],
    highlights: [
      "End-to-end ownership: data model, API, auth, and dashboard UI.",
      "Type-safe database layer with Prisma across the whole app.",
    ],
    // TODO: replace with real URLs.
    links: {
      repos: [{ label: "Repository", url: "https://github.com/bimakshi/expenseiq" }],
      live: "https://expenseiq.bimakshi.me",
      articles: [
        {
          title: "Building ExpenseIQ: budgets and alerts with Prisma + Recharts",
          url: "https://medium.com/@bimakshi/expenseiq",
        },
      ],
    },
  },
  {
    slug: "blognest",
    name: "BlogNest",
    tagline:
      "A secure PHP & MySQL blogging platform with full CRUD and live search.",
    category: "Web App",
    type: "Personal Project",
    role: "Full-Stack Developer",
    period: "Dec 2025",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    summary:
      "A web-based blogging platform where users can securely create, explore, edit and manage blog content, built with a plain PHP/MySQL stack to focus on fundamentals and application security.",
    contributions: [
      "Developed user authentication and full CRUD functionality for blog creation, exploration, editing and deletion.",
      "Implemented CSRF protection, input sanitization and session management.",
      "Added flash messaging and live blog search to improve the user experience.",
    ],
    highlights: [
      "Security-first build: CSRF tokens, sanitization, and session hardening.",
      "No framework: direct PHP and SQL, to understand what frameworks abstract away.",
    ],
    // TODO: replace with real URLs.
    links: {
      repos: [{ label: "Repository", url: "https://github.com/bimakshi/Blog_App" }],
    },
    gallery: [
      "/images/projects/blogNest/home.png",
      "/images/projects/blogNest/explore.png",
      "/images/projects/blogNest/myblogs.png",
      "/images/projects/blogNest/recent.png",
    ],
  },
  {
    slug: "battery-vitals",
    name: "Battery Vitals",
    tagline:
      "A microcontroller battery monitoring system for Li-ion, Li-Po and lead-acid cells.",
    category: "Embedded Systems",
    type: "Group Project",
    role: "Embedded Systems Developer",
    period: "Aug 2024 - Aug 2025",
    technologies: ["Python", "ESP32", "ADS1115", "Embedded Systems"],
    summary:
      "A microcontroller-based battery monitoring system designed to evaluate the performance of Li-ion, Li-Po and lead-acid batteries through controlled charging and discharging cycles.",
    contributions: [
      "Implemented battery charging and discharging control logic.",
      "Integrated voltage sensors with the ESP32 and ADS1115 ADC to monitor battery voltage from 0-25V.",
      "Built data acquisition and transmission to a web platform for real-time voltage-time visualization.",
      "Integrated a 16x4 LCD to display voltage, current and State of Health (SoH).",
    ],
    highlights: [
      "Worked close to the hardware: ADC wiring, sampling, and control loops.",
      "Streamed live telemetry to a web dashboard for analysis.",
    ],
    links: {},
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = PROJECTS.slice(
  0,
  3
).map((project, index) => ({
  index,
  title: project.name,
  href: `/projects/${project.slug}`,
  tags: project.technologies.slice(0, 5),
}));

export const PROJECTS_CARD: ProjectCardProps[] = PROJECTS.map((project) => ({
  slug: project.slug,
  name: project.name,
  description: project.summary,
  sourceCodeHref: project.links.repos?.[0]?.url ?? "",
  liveWebsiteHref: project.links.live ?? "",
  category: project.category,
  technologies: project.technologies,
}));
