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
  (label: string, fill: string, textFill = "#ffffff") => {
    const TextIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    TextIcon.displayName = `${label.replace(/\W+/g, "")}Icon`;
    return TextIcon;
  };

const LaravelIcon = createTextIcon("Lv", "#ff2d20");
const PhpIcon = createTextIcon("PHP", "#777bb4");
const NestjsIcon = createTextIcon("Ns", "#e0234e");
const MongodbIcon = createTextIcon("DB", "#47a248");
const MysqlIcon = createTextIcon("SQL", "#4479a1");
const RedisIcon = createTextIcon("R", "#dc382d");
const StrapiIcon = createTextIcon("St", "#4945ff");
const CIcon = createTextIcon("C", "#00599c");
const CppIcon = createTextIcon("C++", "#004482");
const HtmlIcon = createTextIcon("H5", "#e34f26");
const JavascriptIcon = createTextIcon("JS", "#f7df1e", "#000000");
const JqueryIcon = createTextIcon("jQ", "#0769ad");
const CursorIcon = createTextIcon("Cu", "#111111");
const CodexIcon = createTextIcon("Cx", "#111827");
const ClaudeCodeIcon = createTextIcon("Cl", "#d97757");
const CopilotIcon = createTextIcon("Co", "#24292f");

export const DATA = {
  name: "Ravi Kant",
  initials: "RK",
  url: "https://topdogfound.vercel.app",
  location: "Rohru, Shimla, Himachal Pradesh, India",
  locationLink: "https://www.google.com/maps/place/Rohru,+Himachal+Pradesh",
  description:
    "Full-Stack PHP Software Engineer building production-grade backend and frontend applications.",
  summary:
    "I’m a Full-Stack PHP Software Engineer with 3+ years of experience building production-grade applications using PHP, Laravel, React, Next.js, and PostgreSQL. I specialize in REST APIs, third-party integrations, database optimization, microservices, and CI/CD. I also use AI-assisted development tools for debugging, documentation, test generation, and technical research while validating generated code for quality and security.",
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
    { name: "MongoDB", icon: MongodbIcon },
    { name: "MySQL", icon: MysqlIcon },
    { name: "Redis", icon: RedisIcon },
    { name: "Strapi", icon: StrapiIcon },
    { name: "Docker", icon: Docker },
    { name: "GitHub", icon: Icons.github },
    { name: "c", icon: CIcon },
    { name: "c++", icon: CppIcon },
    { name: "HTML", icon: HtmlIcon },
    { name: "JavaScript", icon: JavascriptIcon },
    { name: "jQuery", icon: JqueryIcon },
    { name: "Cursor", icon: CursorIcon },
    { name: "Codex", icon: CodexIcon },
    { name: "Claude code", icon: ClaudeCodeIcon },
    { name: "GitHub Copilot", icon: CopilotIcon },
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
      badges: [
        "Laravel",
        "Next.js",
        "React",
        "Strapi",
        "Core PHP",
        "Finvu APIs",
        "PyHanko",
        "Camunda",
        "Microservices",
      ],
      location: "Noida, India · Remote · Fixed-term contract",
      title: "Software Developer",
      logoUrl: "/valueresearch.jpg",
      start: "January 2026",
      end: "July 2026",
      description:
        "Rejoined Value Research on a fixed-term contract, contributing to frontend features, SDK development, and microservices. Built content-driven features using Next.js and Strapi, developed a reusable React-based Finvu Account Aggregator SDK and integrated it with a Core PHP application, created a Laravel digital-signature microservice using PyHanko, and supported Camunda-based workflow orchestration.",
    },
    {
      company: "Value Research",
      href: "https://www.valueresearchonline.com",
      badges: ["PHP", "Laravel", "PostgreSQL", "REST APIs", "Fintech"],
      location: "Noida, India · On-site",
      title: "Software Developer",
      logoUrl: "/valueresearch.jpg",
      start: "April 2023",
      end: "August 2025",
      description:
        "Migrated 10,000+ paid users from Premium to the Fund Advisor platform with 100% data integrity and seamless onboarding. Developed Buy, Sell, Switch, and SIP features using BSE APIs and webhooks, achieving a 99.9% transaction success rate. Implemented compliant KYC onboarding through DIGIO and BSE APIs, built a questionnaire-based risk assessment system, and optimized CAMS and Karvy MFC file parsing to reduce processing time by 50%.",
    },
    {
      company: "CodeQuotient",
      href: "https://codequotient.com",
      badges: ["Node.js", "Express", "MongoDB", "MySQL", "WebSocket"],
      location: "Mohali, India · On-site",
      title: "Software Developer - Training Program",
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
