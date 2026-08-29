import {
  SiNextdotjs,
  SiReact,
  SiSpringboot,
  SiPostgresql,
  SiPrisma,
  SiRadixui,
  SiC,
  SiFigma,
  SiGithub,
} from "react-icons/si";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";
import TypescriptSvg from "@/public/icons/typescript.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import PythonSvg from "@/public/icons/python.svg";
import JavaSvg from "@/public/icons/java.svg";
import PhpSvg from "@/public/icons/php.svg";
import HtmlSvg from "@/public/icons/html.svg";
import CssSvg from "@/public/icons/css.svg";
import TailwindSvg from "@/public/icons/tailwindcss.svg";
import MysqlSvg from "@/public/icons/mysql.svg";
import GitSvg from "@/public/icons/git.svg";
import PostmanSvg from "@/public/icons/postman.svg";
import DockerSvg from "@/public/icons/docker.svg";
import SwaggerSvg from "@/public/icons/swagger.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Programming Languages",
    skills: [
      { name: "Java", icon: JavaSvg },
      { name: "C", icon: SiC },
      { name: "Python", icon: PythonSvg },
      { name: "JavaScript", icon: JavascriptSvg },
      { name: "TypeScript", icon: TypescriptSvg },
      { name: "PHP", icon: PhpSvg },
      { name: "SQL", icon: MysqlSvg },
    ],
  },
  {
    sectionName: "Frontend Development",
    skills: [
      { name: "HTML", icon: HtmlSvg },
      { name: "CSS", icon: CssSvg },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: TailwindSvg },
      { name: "shadcn/ui", icon: SiRadixui },
    ],
  },
  {
    sectionName: "Backend Development",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "RESTful APIs", icon: SwaggerSvg },
    ],
  },
  {
    sectionName: "Databases",
    skills: [
      { name: "MySQL", icon: MysqlSvg },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma ORM", icon: SiPrisma },
    ],
  },
  {
    sectionName: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: DockerSvg },
      { name: "Git", icon: GitSvg },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: PostmanSvg },
    ],
  },
  {
    sectionName: "UI/UX & Design",
    skills: [{ name: "Figma", icon: SiFigma }],
  },
];
