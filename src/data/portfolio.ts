export const portfolioData = {
  hero: {
    name: "Bimakshi Gunasekara",
    title: "Software Engineer Intern",
    tagline: "IT & Management undergraduate at the University of Moratuwa, passionate about full-stack web development — building web applications, RESTful APIs, and database-driven systems, and currently seeking a Software Engineering Internship.",
    location: "Gampaha, Sri Lanka",
    stats: [
      { label: "CGPA", value: "3.7" },
      { label: "Projects", value: "4+" },
      { label: "Role", value: "Full-Stack Developer" },
      { label: "Status", value: "Actively seeking Internship" }
    ],
    social: {
      github: "https://github.com/bimakshi",
      linkedin: "https://linkedin.com/in/bimakshi",
      email: "bimakshigunasekara@gmail.com"
    }
  },
  about: {
    bio: "I'm an IT and Management undergraduate at the University of Moratuwa with hands-on experience across the full stack — from Next.js and TypeScript frontends to Spring Boot backends and PostgreSQL/MySQL databases. I enjoy building real, working systems: from a hospital lab management platform to an expense tracker with live analytics. I'm looking for an internship where I can contribute to real-world projects and keep growing as an engineer.",
    highlights: ["Full-Stack Development", "RESTful APIs", "Microservices", "Database Design", "Agile"]
  },
  education: [
    {
      degree: "B.Sc. (Hons) in Information Technology and Management",
      institution: "University of Moratuwa, Sri Lanka",
      period: "2024–Present",
      score: "CGPA: 3.7/4.00"
    },
    {
      degree: "G.C.E. Advanced Level, Physical Science Stream",
      institution: "Rathnavali Balika Vidyalaya, Gampaha",
      period: "Jan 2023",
      score: "Z-score: 1.1551 (ICT - B, Combined Maths - C, Physics - C)"
    }
  ],
  projects: [
    {
      title: "Durdans Hospital LIMS",
      role: "Full-Stack Developer, Group Project",
      date: "Aug 2025–Aug 2026",
      tech: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL", "Keycloak"],
      description: [
        "A microservices-based Laboratory Information Management System managing end-to-end lab workflows.",
        "Built the Orders & Billing module: order creation, multi-test selection, priority management, billing, and payment processing.",
        "Implemented sample collection, rejection/recollection, barcode generation, and collection history with REST API integration."
      ],
      github: "https://github.com/bimakshi/durdans-lims"
    },
    {
      title: "BlogNest",
      role: "Full-Stack Developer, Personal Project",
      date: "Dec 2025",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      description: [
        "A blogging platform for secure creation, exploration, editing, and management of blog content.",
        "Built authentication and full CRUD for posts; implemented CSRF protection, input sanitization, session management, flash messaging, and live search."
      ],
      github: "https://github.com/bimakshi/blognest"
    },
    {
      title: "ExpenseIQ",
      role: "Full-Stack Developer, Personal Project",
      date: "Aug 2026–Sep 2026",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth.js", "Recharts"],
      description: [
        "A full-stack expense tracker with categorization, budgets, and analytics.",
        "Built Next.js API routes for CRUD, NextAuth.js authentication, Prisma ORM; built an interactive Recharts dashboard with real-time budget alerts."
      ],
      github: "https://github.com/bimakshi/expenseiq"
    },
    {
      title: "Battery Vitals",
      role: "Embedded Systems Developer, Group Project",
      date: "Aug 2024–Aug 2025",
      tech: ["Python", "ESP32", "ADS1115", "Embedded Systems"],
      description: [
        "A microcontroller-based battery monitoring system for Li-ion, Li-Po, and lead-acid batteries.",
        "Implemented charge/discharge control logic and voltage sensing (0–25V) via ESP32 + ADS1115; real-time voltage-time visualization and a 16×4 LCD readout for voltage, current, and SoH."
      ],
      github: "https://github.com/bimakshi/battery-vitals"
    }
  ],
  skills: {
    "Programming Languages": ["Java", "C", "Python", "JavaScript", "TypeScript", "PHP", "SQL"],
    "Frontend": ["HTML", "CSS", "Next.js", "Tailwind CSS"],
    "Backend": ["Spring Boot", "RESTful APIs"],
    "Databases": ["MySQL", "PostgreSQL"],
    "DevOps & Tools": ["Docker", "Git", "Postman"],
    "UI/UX & Design": ["Figma"],
    "Concepts": ["OOP", "Agile Methodology", "Microservices Architecture", "Full-Stack Development", "Authentication & Authorization", "Database Design"]
  },
  certifications: [
    { title: "Mastering Next.js Bootcamp", issuer: "DevTown", date: "Jun 2026" },
    { title: "SQL Intermediate", issuer: "SoloLearn", date: "Mar 2025" },
    { title: "Introduction to SQL", issuer: "SoloLearn", date: "Mar 2025" },
    { title: "Web Development", issuer: "SoloLearn", date: "Mar 2025" },
    { title: "Introduction to C", issuer: "SoloLearn", date: "Mar 2025" },
    { title: "Web Design for Beginners", issuer: "University of Moratuwa", date: "Jan 2025" }
  ],
  leadership: [
    "Membership Development & Volunteer Coordination Committee Member — IEEE WIE Student Branch Affinity Group, University of Moratuwa (Term 25/26)",
    "Company Coordination Member & Editorial Committee Member — FIT Future Careers 2026, INTECS, University of Moratuwa",
    "Organizing Committee Member — Yeheli Phase 2, Leo Club, University of Moratuwa",
    "Organizing Committee Member — Gammaddata IEEE Api 4.0, IEEE RAS Student Branch Chapter",
    "Editorial Committee Member — HackElite 3.0, IEEE WIE Student Branch Affinity Group",
    "Batch Representative (Term 26–27) — Faculty of Information Technology, University of Moratuwa"
  ],
  contact: {
    email: "bimakshigunasekara@gmail.com",
    phone: "+94 76 051 1310",
    linkedin: "https://linkedin.com/in/bimakshi",
    github: "https://github.com/bimakshi",
    location: "Gampaha, Sri Lanka"
  }
};
