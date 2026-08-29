import Head from "next/head";
import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import EducationCertifications from "@/components/education-certifications";
import SectionDivider from "@/components/section-divider";
import { EXPERIENCE } from "@/data/experience";
import { pageSeo } from "@/lib/seo/seo";
import {
  getAboutBreadcrumbSchema,
  getAboutProfilePageSchema,
  getPersonSchema,
  toJsonLd,
} from "@/lib/seo/schema";

export default function About() {
  return (
    <>
      <NextSeo
        {...pageSeo({
          title: "About Bimakshi Gunasekara - Software Engineering Intern",
          description:
            "The background, skills and student leadership journey of Bimakshi Gunasekara, a software engineering intern and full-stack developer from Gampaha, Sri Lanka.",
          path: "/about",
          type: "profile",
        })}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: toJsonLd(getAboutProfilePageSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: toJsonLd(getPersonSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: toJsonLd(getAboutBreadcrumbSchema()),
          }}
        />
      </Head>

      <AboutHero />
      <SectionDivider />
      <EducationCertifications />
      <SectionDivider />
      <ExperienceShowcaseList
        title="Leadership & Involvement"
        details={EXPERIENCE}
      />
    </>
  );
}
