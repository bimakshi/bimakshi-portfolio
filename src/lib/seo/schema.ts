import { PROJECTS, type Project } from "@/data/projects";
import { PROFILE } from "@/data/profile";
import { siteMetadata } from "@/data/siteMetaData.mjs";

const personId = `${siteMetadata.siteUrl}/#person`;
const websiteId = `${siteMetadata.siteUrl}/#website`;

export function toJsonLd(schema: Record<string, unknown>): string {
  return JSON.stringify(schema);
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: siteMetadata.siteUrl,
    name: siteMetadata.siteName,
    inLanguage: siteMetadata.locale.replace("_", "-"),
    publisher: { "@id": personId },
    about: { "@id": personId },
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: siteMetadata.author,
    url: siteMetadata.siteUrl,
    image: `${siteMetadata.siteUrl}${siteMetadata.image}`,
    jobTitle: siteMetadata.description,
    email: `mailto:${siteMetadata.email}`,
    sameAs: [siteMetadata.github, siteMetadata.linkedin, PROFILE.website],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gampaha",
      addressCountry: "LK",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Moratuwa",
      sameAs: "https://uom.lk/",
    },
    knowsAbout: [
      "Full-Stack Web Development",
      "Next.js",
      "TypeScript",
      "Spring Boot",
      "RESTful API Development",
      "PostgreSQL",
      "MySQL",
      "Database Design",
    ],
  };
}

export function getAboutProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteMetadata.siteUrl}/about#profile-page`,
    url: `${siteMetadata.siteUrl}/about`,
    name: `About ${siteMetadata.author}`,
    isPartOf: { "@id": websiteId },
    about: { "@id": personId },
    mainEntity: { "@id": personId },
  };
}

export function getProjectsCollectionPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteMetadata.siteUrl}/projects#collection-page`,
    url: `${siteMetadata.siteUrl}/projects`,
    name: `${siteMetadata.author} - Projects`,
    isPartOf: { "@id": websiteId },
    about: { "@id": personId },
  };
}

export function getProjectsItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteMetadata.siteUrl}/projects#item-list`,
    itemListElement: PROJECTS.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteMetadata.siteUrl}/projects/${project.slug}`,
      name: project.name,
    })),
  };
}

export function getProjectSchema(project: Project) {
  const url = `${siteMetadata.siteUrl}/projects/${project.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#creativework`,
    name: project.name,
    headline: project.tagline,
    description: project.summary,
    url,
    keywords: project.technologies.join(", "),
    genre: project.category,
    creator: { "@id": personId },
    author: { "@id": personId },
    isPartOf: { "@id": websiteId },
    image: `${siteMetadata.siteUrl}${siteMetadata.image}`,
  };
}

function breadcrumb(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteMetadata.siteUrl}${item.path}`,
    })),
  };
}

export function getAboutBreadcrumbSchema() {
  return breadcrumb([
    { name: "Home", path: "" },
    { name: "About", path: "/about" },
  ]);
}

export function getProjectsBreadcrumbSchema() {
  return breadcrumb([
    { name: "Home", path: "" },
    { name: "Projects", path: "/projects" },
  ]);
}

export function getProjectBreadcrumbSchema(project: Project) {
  return breadcrumb([
    { name: "Home", path: "" },
    { name: "Projects", path: "/projects" },
    { name: project.name, path: `/projects/${project.slug}` },
  ]);
}
