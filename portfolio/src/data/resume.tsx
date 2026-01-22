import React from "react";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Ravi Kant",
  initials: "RK",
  url: "https://topdogfound.vercel.app",
  location: "Rohru, Shimla, Himachal Pradesh, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
      title: "VoiceFlow",
      href: "https://copyzen.vercel.app", // replace if different
      dates: "2026",
      active: true,
      description:
        "VoiceFlow is an offline-first voice dictation app that converts speech into polished text using the browser’s native Web Speech API and a fully rule-based grammar engine. It runs entirely in the browser with zero AI APIs, zero network calls, and complete privacy. Designed for speed, clarity, and accessibility, VoiceFlow helps users dictate naturally and refine text instantly.",
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
