export interface EducationItem {
  institution: string;
  program: string;
  detail?: string;
  duration: string;
  location: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
}

export interface ReferenceItem {
  name: string;
  title: string;
  organisation: string;
  email: string;
  phone: string;
}

export const PROFILE = {
  name: "Bimakshi Gunasekara",
  image: "/static/profile.png",
  title: "Software Engineering Intern",
  location: "Gampaha, Sri Lanka",
  email: "bimakshigunasekara@gmail.com",
  phone: "+94 76 051 1310",
  website: "https://bimakshi.me",
  github: "https://github.com/bimakshi",
  linkedin: "https://www.linkedin.com/in/bimakshi/",
  summary:
    "I'm an Information Technology & Management undergraduate at the University of Moratuwa with a strong interest in software engineering and hands-on experience in full-stack web development. I've built web applications, RESTful APIs and database-driven systems through academic and personal projects, and I'm currently looking for a Software Engineering Internship where I can contribute to real-world products.",
  focusAreas: [
    {
      heading: "Full-Stack Web Development",
      body: "Next.js, TypeScript and Tailwind CSS on the front end; Spring Boot and PHP on the back end.",
    },
    {
      heading: "RESTful APIs & Backend",
      body: "Designing and integrating REST APIs, authentication & authorization, and microservice-based systems.",
    },
    {
      heading: "Databases & Design",
      body: "Relational database design with MySQL and PostgreSQL, Prisma ORM, and clean data modelling.",
    },
  ],
} as const;

export const EDUCATION: EducationItem[] = [
  {
    institution: "University of Moratuwa, Sri Lanka",
    program: "B.Sc. (Hons) in Information Technology and Management",
    detail: "CGPA: 3.7 / 4.00",
    duration: "2024 - Present",
    location: "Sri Lanka",
  },
  {
    institution: "Rathnavali Balika Vidyalaya, Gampaha",
    program: "G.C.E. Advanced Level, Physical Science Stream",
    detail: "Z-score: 1.1551 · ICT (B), Combined Mathematics (C), Physics (C)",
    duration: "Jan 2023",
    location: "Gampaha, Sri Lanka",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  { name: "Mastering Next.js Bootcamp", issuer: "DevTown", date: "Jun 2026" },
  { name: "SQL Intermediate", issuer: "SoloLearn", date: "Mar 2025" },
  { name: "Introduction to SQL", issuer: "SoloLearn", date: "Mar 2025" },
  { name: "Web Development", issuer: "SoloLearn", date: "Mar 2025" },
  { name: "Introduction to C", issuer: "SoloLearn", date: "Mar 2025" },
  {
    name: "Web Design for Beginners",
    issuer: "University of Moratuwa",
    date: "Jan 2025",
  },
];
