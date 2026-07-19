import project1 from "../assets/ethics.jpg";
// import project2 from "../assets/project-2.jpg";
import arpeps from "../assets/arpepslogo.png";

// import project3 from "../assets/project-3.jpg";
// import project4 from "../assets/project-4.jpg";
import shot1 from "../assets/section page.jpg";
import shot2 from "../assets/logo.png";
import shot3 from "../assets/list.jpg";
import shot4 from "../assets/project.jpg";

import shot5 from "../assets/arpeps (1).jpg";
import shot6 from "../assets/arpeps (2).jpg";
import shot7 from "../assets/arpeps (3).jpg";
import shot8 from "../assets/arpeps (4).jpg";

import cert1 from "../assets/cert-1.png";
import cert2 from "../assets/cert-2.png";
// import cert3 from "../assets/cert-3.png";

export type Review = {
  name: string;
  handle?: string;
  body: string;
  rating?: number;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  logo: string;
  problem: string;
  solution: string;
  techStack: string[];
  role: string;
  challenges: string[];
  screenshots: { src: string; alt: string }[];
  liveDemoEmbed: string;
  liveUrl: string;
  repoUrl: string;
  builtFor?: { name: string; description: string; url: string };
  reviews?: Review[];
};

export const projects: Project[] = [
  {
    slug: "editorially",
    title: "Editorially",
    tagline: `A Content Management System with Project Management Features for Student 
      Publications who are relying on Social Media Platforms to publish their Articles. 
      Optimized the publication process of The Nuntium by centralizing all their content
      and project management in one platform.`,
    category: "Publication CMS",
    year: "2025",
    logo: shot2,
    problem:
      "Student Publications were relying on fragmented tools to create their articles, and only Social Media to publish their works",
    solution:
      "Editorially centralizes the article creation lifecycle in one system, improving efficiency",
    techStack: [
      "React",
      "Javascript",
      "Supabase",
      "CSS3",
      "Firebase Hosting",
      "Cloudflare",
    ],
    role: "Lead developer — owned architecture, data model, real-time sync, and UI.",
    challenges: [
      "Student Publications relying on Social Medial platforms to deliver their content",
      "Relying on fragmented tools and process just to track and manage their content",
      "No way to easily manage, update, or archive past posts",
    ],
    screenshots: [
      { src: project1, alt: "Homepage" },
      { src: shot1, alt: "Section Page" },
      { src: shot3, alt: "Projects" },
      { src: shot4, alt: "Project" },
    ],
    liveDemoEmbed: "https://editorially-3bc56.web.app",
    liveUrl: "https://editorially-3bc56.web.app",
    repoUrl: "https://github.com/hanadups04/Editorially",
    builtFor: {
      name: "The Nuntium",
      description:
        "National University Dasmarina's very own Student Publication",
      url: "https://www.facebook.com/NUDNUntium/",
    },
    reviews: [],
  },
  {
    slug: "arpeps",
    title: "Arpeps",
    tagline:
      "A tool for students to analyze and visualize their research paper's concepts. It's goal is to help you see where the holes are in your paper, fix it, and produce an overall better paper",
    category: "AI Tool",
    year: "2026",
    logo: arpeps,
    problem:
      "Students in Philippines needing to always print out copies of their paper for progress checking in their school",
    solution:
      "A system where Professors and Students can analyze and correct the softcopy of their Research Papers before being printed, reducing unnecessary waste of paper just for a one time checking",
    techStack: [
      "Next.js",
      "TailwindCSS",
      "Supabase",
      "OpenRouter",
      "Typescript",
    ],
    role: "Full-stack engineer - Planned the architecture of the system and developed the frontend following NextJs best practices",
    challenges: [
      "Relatively simple system, main challenge was learning how to use NextJs and TailwindCSS on a new project",
    ],
    screenshots: [
      { src: shot5, alt: "Pulse dashboard" },
      { src: shot6, alt: "Pulse mobile" },
      { src: shot7, alt: "Pulse mobile" },
      { src: shot8, alt: "Pulse mobile" },
    ],
    liveDemoEmbed: "https://example.com",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/blekism/Arpeps",
    reviews: [],
  },
  // {
  //   slug: "goober-academy",
  //   title: "Goober Academy - SIS",
  //   tagline:
  //     "A tool for students to analyze and visualize their research paper's concepts. It's goal is to help you see where the holes are in your paper, fix it, and produce an overall better paper",
  //   category: "AI Tool",
  //   year: "2026",
  //   logo: arpeps,
  //   problem:
  //     "Existing analytics tools showed yesterday's data tomorrow. Operators needed a live read on what users were doing right now.",
  //   solution:
  //     "An event pipeline that streams from browser to dashboard in under two seconds, with anomaly detection and alerts.",
  //   techStack: ["Next.js", "ClickHouse", "Kafka", "Go", "Redis"],
  //   role: "Full-stack engineer — built the ingestion pipeline and the live dashboard.",
  //   challenges: [
  //     "Backpressure on the event pipeline during traffic spikes.",
  //     "Sub-second queries on a billion rows.",
  //   ],
  //   screenshots: [
  //     { src: shot5, alt: "Pulse dashboard" },
  //     { src: shot6, alt: "Pulse mobile" },
  //     { src: shot7, alt: "Pulse mobile" },
  //     { src: shot8, alt: "Pulse mobile" },
  //   ],
  //   liveDemoEmbed: "https://example.com",
  //   liveUrl: "https://example.com",
  //   repoUrl: "https://github.com/blekism/Arpeps",
  //   reviews: [

  //   ],
  // },
  // {
  //   slug: "buslink",
  //   title: "Buslink",
  //   tagline:
  //     "A tool for students to analyze and visualize their research paper's concepts. It's goal is to help you see where the holes are in your paper, fix it, and produce an overall better paper",
  //   category: "AI Tool",
  //   year: "2026",
  //   logo: arpeps,
  //   problem:
  //     "Existing analytics tools showed yesterday's data tomorrow. Operators needed a live read on what users were doing right now.",
  //   solution:
  //     "An event pipeline that streams from browser to dashboard in under two seconds, with anomaly detection and alerts.",
  //   techStack: ["Next.js", "ClickHouse", "Kafka", "Go", "Redis"],
  //   role: "Full-stack engineer — built the ingestion pipeline and the live dashboard.",
  //   challenges: [
  //     "Backpressure on the event pipeline during traffic spikes.",
  //     "Sub-second queries on a billion rows.",
  //   ],
  //   screenshots: [
  //     { src: shot5, alt: "Pulse dashboard" },
  //     { src: shot6, alt: "Pulse mobile" },
  //     { src: shot7, alt: "Pulse mobile" },
  //     { src: shot8, alt: "Pulse mobile" },
  //   ],
  //   liveDemoEmbed: "https://example.com",
  //   liveUrl: "https://example.com",
  //   repoUrl: "https://github.com/blekism/Arpeps",
  //   reviews: [

  //   ],
  // },
];

export const skills = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    // "React Native",
    // "Framer Motion",
  ],
  Backend: [
    // "Node.js",
    // "Go",
    // "tRPC",
    // "GraphQL",
    "REST",
    "PHP",
    //  "WebSockets"
  ],
  Database: [
    "Supabase",
    "PostgreSQL",
    "Firebase",
    "NoSQL",
    "SQL",
    //  "Redis",
    // "ClickHouse",
    //  "Prisma",
    // "Drizzle"
  ],
  Tools: [
    "Github",
    // "Docker",
    "Cloudflare",
    "Postman",
    "Vercel",
    //  "AWS",
    "Figma",
    //  "Linear",
  ],
};

export const experience = [
  {
    role: "Data Analyst Intern",
    company: "LBC Express INC",
    period: "2025 - 2026",
    summary:
      "Create dashboards using PowerBI to analyze the performance of Competitors on Different Social Media Platforms",
  },
  {
    role: "Software Quality Assurance Tester",
    company: "LBC Express Inc",
    period: "2025 - 2026",
    summary:
      "Tested and suggested improvements for LBC's revamped app, and documented and reported the findings to the Project Managers.",
  },
];

export const currentlyLearning = [
  {
    title: "Cloud Deployment",
    note: "How to properly deploy an E2E system from a plain Cloud Environment ",
  },
  {
    title: "Backend Development",
    note: "Understanding Backend Development beyond REST APIs",
  },
  {
    title: "Maintainable Clean Architecture",
    note: "Learning how to write clean and maintainable Frontend and Backend code",
  },
];

export const certifications = [
  {
    title: "Database IT Specialist — Certiport",
    issued: "June 2024",
    badge: cert1,
  },
  {
    title: "Cybersecurity Specialist - Certiport",
    issued: "June 2026",
    badge: cert2,
  },
];

export const stats = [
  { label: "Years building", value: 1 },
  { label: "Projects completed", value: 2 },
  { label: "Days since last Github Commit", value: 0 },
  { label: "Cups of coffee", value: 200 },
];

export const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Fast, accessible web apps with React, TypeScript, and modern edge-rendered frameworks.",
    icon: "Globe",
  },
  // {
  //   title: "Mobile App Development",
  //   description:
  //     "Cross-platform Android apps with React Native and Expo, designed for native feel.",
  //   icon: "Smartphone",
  // },
];

export const contact = {
  email: "cristianlaviano@gmail.com",
  github: "https://github.com/blekism",
  linkedin: "www.linkedin.com/in/cristian-blake-laviano-23a183285",
};
