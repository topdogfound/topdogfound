import React from "react";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

const createTextIcon =
  (label: string, fill: string, textFill = "#ffffff") =>
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" role="img" aria-label={label} {...props}>
      <rect width="24" height="24" rx="5" fill={fill} />
      <text
        x="12"
        y="15"
        textAnchor="middle"
        fill={textFill}
        fontSize="8"
        fontWeight="700"
        fontFamily="Arial, sans-serif"
      >
        {label}
      </text>
    </svg>
  );

const LaravelIcon = createTextIcon("Lv", "#ff2d20");
const PhpIcon = createTextIcon("PHP", "#777bb4");
const NestjsIcon = createTextIcon("Ns", "#e0234e");
const MongodbIcon = createTextIcon("DB", "#47a248");
const CIcon = createTextIcon("C", "#00599c");
const CppIcon = createTextIcon("C++", "#004482");
const HtmlIcon = createTextIcon("H5", "#e34f26");
const JavascriptIcon = createTextIcon("JS", "#f7df1e", "#000000");
const JqueryIcon = createTextIcon("jQ", "#0769ad");
const CursorIcon = createTextIcon("Cu", "#111111");
const CodexIcon = createTextIcon("Cx", "#111827");
const ClaudeCodeIcon = createTextIcon("Cl", "#d97757");

export const DATA = {
  name: "Ravi Kant",
  initials: "RK",
  url: "https://topdogfound.vercel.app",
  location: "Rohru, Shimla, Himachal Pradesh, India",
  locationLink: "https://www.google.com/maps/place/Rohru,+Himachal+Pradesh",
  description:
    "Software Developer building scalable, real-world products across backend and frontend. Very active on github.",
  summary:
    "I’m a software developer with 2+ years of experience building production-grade applications, primarily in fintech. In the past, [I earned a Master’s degree in Data Science & Artificial Intelligence](/#education), [worked on large-scale fintech platforms at Value Research](/#work), and [built API-driven systems using PHP, Laravel, NestJS, and Node.js](/#skills). I’ve also transitioned into modern frontend development using [Next.js and Strapi](/#work), while continuously sharpening my backend, database, and DevOps skills.",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "Laravel", icon: LaravelIcon },
    { name: "PHP", icon: PhpIcon },
    { name: "NextJs", icon: NextjsIconDark },
    { name: "React", icon: ReactLight },
    { name: "Typescript", icon: Typescript },
    { name: "NodeJs", icon: Nodejs },
    { name: "NestJs", icon: NestjsIcon },
    { name: "Postgres", icon: Postgresql },
    { name: "mongodb", icon: MongodbIcon },
    { name: "Docker", icon: Docker },
    { name: "github", icon: Icons.github },
    { name: "c", icon: CIcon },
    { name: "c++", icon: CppIcon },
    { name: "HTML", icon: HtmlIcon },
    { name: "Javscript", icon: JavascriptIcon },
    { name: "Jquery", icon: JqueryIcon },
    { name: "Cursor", icon: CursorIcon },
    { name: "Codex", icon: CodexIcon },
    { name: "Claude code", icon: ClaudeCodeIcon },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blogs", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ravikantdev@hotmail.com",
    tel: "+918580881559",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/topdogfound",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ravikantdev/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/topdogfound",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@topdogfound",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Value Research (Contract)",
      href: "https://www.valueresearchonline.com",
      badges: ["Next.js", "Strapi", "JavaScript", "HTML", "CSS"],
      location: "Noida, India",
      title: "Software Developer",
      logoUrl: "/valueresearch.jpg",
      start: "January 2026",
      end: "Present",
      description:
        "Transitioned to frontend development to deliver content-driven features using Strapi CMS and Next.js. Worked closely with backend and product teams to integrate APIs, align UI components with business logic, and ship features under tight deadlines.",
    },
    {
      company: "Value Research",
      href: "https://www.valueresearchonline.com",
      badges: ["PHP", "Laravel", "PostgreSQL", "REST APIs", "Fintech"],
      location: "Noida, India",
      title: "Software Developer",
      logoUrl: "/valueresearch.jpg",
      start: "April 2023",
      end: "August 2025",
      description:
        "Built and maintained transaction-heavy fintech systems. Migrated 10,000+ paid users to a new platform with full data integrity. Developed core investment features including Buy, Sell, Switch, and SIP by integrating BSE APIs and webhooks. Implemented KYC onboarding via DIGIO and BSE APIs, built a risk assessment engine, optimized mutual fund file parsing (CAMS, Karvy) reducing processing time by 50%, and collaborated in an Agile setup.",
    },
    {
      company: "CodeQuotient",
      href: "https://codequotient.com",
      badges: ["Node.js", "Express", "MongoDB", "MySQL", "WebSocket"],
      location: "Mohali, India",
      title: "Software Developer Trainee",
      logoUrl: "/codequotient.jpeg",
      start: "December 2022",
      end: "March 2023",
      description:
        "Completed a full-stack training program focused on MERN and PHP. Built a real-time chat application using WebSocket and Node.js, developed REST APIs, implemented JWT-based authentication, and worked on database design and Git-based collaboration.",
    },
  ],
  education: [
    {
      school: "Himachal Pradesh University",
      href: "https://www.hpuniv.ac.in",
      degree: "M.Sc. in Data Science & Artificial Intelligence",
      logoUrl: "/hpu.jpg",
      start: "2021",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Pickly",
      href: "https://pickly-xi.vercel.app/", // replace if different
      dates: "2026",
      active: true,
      description:
        "Building a shared home for practical farming knowledge. We are focused on making farming knowledge and access easy, centralized, and useful in day-to-day field work. Pickly helps farmers and teams discover crop information quickly and use simple tools that support better decisions.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Drizzle ORM",
        "Better Auth",
        "Tan Stack Qury"
      ],
      links: [
        {
          type: "Website",
          href: "https://pickly-xi.vercel.app/", // or GitHub if repo-only
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/pickly-image.png",
      video: "",
    },
    {
      title: "VoiceFlow",
      href: "https://copyzen.vercel.app", // replace if different
      dates: "2026",
      active: true,
      description:
        "VoiceFlow is an offline-first voice dictation app that converts speech into polished text using the browser’s native Web Speech API and a fully rule-based grammar engine. It runs entirely in the browser with zero AI APIs, zero network calls, and complete privacy.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Web Speech API",
        "Tailwind CSS",
        "Lucide Icons",
        "LocalStorage",
      ],
      links: [
        {
          type: "Website",
          href: "https://copyzen.vercel.app", // or GitHub if repo-only
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/topdogfound/copyzen",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/copyzen.png",
      video: "",
    }
  ]
} as const;
