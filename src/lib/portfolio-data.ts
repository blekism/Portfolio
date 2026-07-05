import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.jpg";
import shot1 from "../assets/project-1-shot-1.jpg";
import shot2 from "../assets/project-1-shot-2.jpg";
import cert1 from "../assets/cert-1.png";
import cert2 from "../assets/cert-2.png";
import cert3 from "../assets/cert-3.png";

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
    tagline:
      "A Content Management System with Project Management Features for Student Publications who are relying on Social Media Platforms to publish their Articles.",
    category: "Publication CMS",
    year: "2025",
    logo: project1,
    problem:
      "Student Publications were relying on fragmented tools to create their articles, and only Social Media to publish their works",
    solution:
      "Editorially centralizes the article creation lifecycle in one system, improving efficiency",
    techStack: ["React", "Javascript", "Supabase", "CSS3"],
    role: "Lead developer — owned architecture, data model, real-time sync, and UI.",
    challenges: [
      "Optimistic updates that reconcile cleanly on conflict.",
      "Sub-60ms input latency for the focus-mode shortcut layer.",
      "Fair-use API rate limiting without blocking power users.",
    ],
    screenshots: [
      { src: shot1, alt: "TaskFlow dashboard" },
      { src: shot2, alt: "TaskFlow mobile view" },
      { src: shot1, alt: "TaskFlow board view" },
      { src: shot2, alt: "TaskFlow settings" },
    ],
    liveDemoEmbed: "https://example.com",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/taskflow",
    builtFor: {
      name: "Northwind Studio",
      description: "A 40-person product studio shipping client work weekly.",
      url: "https://example.com",
    },
    reviews: [
      {
        name: "Priya R.",
        handle: "Engineering Lead",
        body: "Replaced three tools for our team. The focus mode alone is worth it.",
        rating: 5,
      },
      {
        name: "Marcus T.",
        handle: "Founder",
        body: "Fast, opinionated, and keyboard-friendly. Exactly what we needed.",
        rating: 5,
      },
      {
        name: "Elena V.",
        handle: "PM",
        body: "The 'blocked' view changed how our standups run.",
        rating: 4,
      },
    ],
  },
  {
    slug: "pulse",
    title: "Pulse",
    tagline:
      "Real-time analytics that read like a heartbeat. An event pipeline that streams from browser to dashboard in under two seconds with anomaly detection and Slack alerts baked in.",
    category: "Analytics",
    year: "2024",
    logo: project2,
    problem:
      "Existing analytics tools showed yesterday's data tomorrow. Operators needed a live read on what users were doing right now.",
    solution:
      "An event pipeline that streams from browser to dashboard in under two seconds, with anomaly detection and alerts.",
    techStack: ["Next.js", "ClickHouse", "Kafka", "Go", "Redis"],
    role: "Full-stack engineer — built the ingestion pipeline and the live dashboard.",
    challenges: [
      "Backpressure on the event pipeline during traffic spikes.",
      "Sub-second queries on a billion rows.",
    ],
    screenshots: [
      { src: shot1, alt: "Pulse dashboard" },
      { src: shot2, alt: "Pulse mobile" },
    ],
    liveDemoEmbed: "https://example.com",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/pulse",
    reviews: [
      {
        name: "Jordan S.",
        handle: "Head of Growth",
        body: "Finally analytics we can actually act on in real time.",
        rating: 5,
      },
    ],
  },
  // {
  //   slug: "shoply",
  //   title: "Shoply",
  //   tagline:
  //     "Headless commerce for indie brands. A storefront kit with a hosted admin, instant checkout, and a plugin marketplace built for makers who outgrew rigid platforms.",
  //   category: "E-commerce",
  //   year: "2024",
  //   logo: project3,
  //   problem:
  //     "Indie merchants were stuck choosing between rigid platforms and DIY stacks they couldn't maintain.",
  //   solution:
  //     "A headless storefront kit with a hosted admin, instant checkout, and a plugin marketplace.",
  //   techStack: ["Remix", "Stripe", "Postgres", "Edge Functions"],
  //   role: "Founding engineer — architecture, storefront kit, and developer experience.",
  //   challenges: [
  //     "Sub-200ms checkout TTFB globally.",
  //     "Sandboxed plugins so third-party code can't read other tenants' data.",
  //   ],
  //   screenshots: [{ src: shot1, alt: "Shoply storefront" }],
  //   liveDemoEmbed: "https://example.com",
  //   liveUrl: "https://example.com",
  //   repoUrl: "https://github.com/example/shoply",
  // },
  // {
  //   slug: "fittrack",
  //   title: "FitTrack",
  //   tagline:
  //     "A mobile companion for serious lifters. Plans, logs, and visualizes training cycles with progressive overload, deload weeks, and instant rest timers.",
  //   category: "Mobile / Fitness",
  //   year: "2023",
  //   logo: project4,
  //   problem:
  //     "Most fitness apps treat workouts as checklists. Serious lifters need progressive overload, deload weeks, and instant rest timers.",
  //   solution:
  //     "A native mobile app that plans, logs, and visualizes training cycles, with Apple Health and HealthConnect sync.",
  //   techStack: ["React Native", "Expo", "SQLite", "Reanimated"],
  //   role: "Solo developer — design, native modules, and App Store launch.",
  //   challenges: [
  //     "Offline-first sync with conflict resolution across devices.",
  //     "Smooth 60fps charts on five-year-old phones.",
  //   ],
  //   screenshots: [{ src: shot2, alt: "FitTrack workout screen" }],
  //   liveDemoEmbed: "https://example.com",
  //   liveUrl: "https://example.com",
  //   repoUrl: "https://github.com/example/fittrack",
  // },
];

export const skills = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "React Native",
    "Framer Motion",
  ],
  Backend: ["Node.js", "Go", "tRPC", "GraphQL", "REST", "WebSockets"],
  Database: ["PostgreSQL", "Redis", "ClickHouse", "Prisma", "Drizzle"],
  Tools: ["Git", "Docker", "Vercel", "AWS", "Figma", "Linear"],
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
    period: "2025 — 2026",
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
  { label: "Projects shipped", value: 2 },
  { label: "Github stars", value: 0 },
  { label: "Cups of coffee", value: 200 },
];

export const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Fast, accessible web apps with React, TypeScript, and modern edge-rendered frameworks.",
    icon: "Globe",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform Android apps with React Native and Expo, designed for native feel.",
    icon: "Smartphone",
  },
];

export const contact = {
  email: "cristianlaviano@gmail.com",
  github: "https://github.com/blekism",
  linkedin: "www.linkedin.com/in/cristian-blake-laviano-23a183285",
};
