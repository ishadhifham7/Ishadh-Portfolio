"use client";
import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import {
  HiCode,
  HiCube,
  HiDatabase,
  HiMail,
  HiBriefcase,
} from "react-icons/hi";

export const config = {
  developer: {
    name: "Ishadh ",
  },
  social: {
    github: "ishadhifham7",
    discord: "#",
  },
  NAV_ITEMS: [
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ],
  recentTracks: true, // Enable/disable Spotify recent tracks
  projects: [
    {
      id: 1,
      title: "MineO - Gamified Self-Growth & Journaling App",
      description:
        "A personal growth platform that gamifies journaling, goal tracking, and habit management. Users can track habits, write journal entries, visualize their life journey through an interactive map, and get structured goal plans powered by an AI planner.",
      image: "/projects/diary.jpg",
      technologies: [
        "React Native",
        "Node.js",
        "Express",
        "Firebase",
        "llama 3.1 Api",
        "GraphQL",
      ],
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "SaloBook - Salon Lead Management Platform",
      description:
        "A full-stack platform that streamlines lead management for salons. Admins and acquisition teams can record, track, and prioritize over 100 salon leads, centralize client data, and collaborate effectively, reducing manual onboarding time by 40%.",
      image: "/projects/client.jpg",
      technologies: [
        "TypeScript",
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Tailwind CSS",
        "Firebase Auth",
        "MVC",
      ],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Sri Lanka Travel Explorer",
      description:
        "A 24-hour hackathon-built travel app showcasing 200+ key Sri Lankan locations. Features an interactive map with hidden gems and scam-prone zones to enhance traveler discovery and safety, helping users explore confidently.",
      image: "/projects/tourist.jpg",
      technologies: ["JavaScript", "React.js", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Productivity Dashboard",
      description:
        "A React-based dashboard enabling users to manage project-based tasks in real-time. Supports secure authentication, task prioritization, and full CRUD operations using Firestore, helping users organize 30+ tasks per project efficiently.",
      image: "/projects/dashboard.jpg",
      technologies: ["React.js", "Tailwind CSS", "Firestore", "Firebase Auth"],
      github: "#",
      demo: "#",
    },
    {
      id: 5,
      title: "Habit Tracker Mobile App",
      description:
        "A mobile app that helps users build and track daily habits. Built with React Native and Appwrite, it supports real-time task tracking, secure authentication, and data storage with Node.js, Express, and MongoDB, all wrapped in a sleek NativeWind UI.",
      image: "/projects/habit tracker.jpg",
      technologies: [
        "React Native",
        "Node.js",
        "Express",
        "MongoDB",
        "Appwrite",
        "NativeWind",
      ],
      github: "#",
      demo: "#",
    },
    {
      id: 6,
      title: "E-Commerce Library",
      description:
        "A full-stack e-commerce platform for managing products, orders, and users. Built with React, Node.js, and MongoDB, it features REST APIs for seamless client-server interaction and a responsive UI for easy product browsing and management.",
      image: "/projects/library.jpg",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "REST API"],
      github: "#",
      demo: "#",
    },
    {
      id: 7,
      title: "SDG Zero Hunger Awareness Website",
      description:
        "A responsive website raising awareness for the Zero Hunger Sustainable Development Goal. Built with HTML, CSS, and JavaScript, it educates users on global hunger issues and promotes actions to support food security initiatives.",
      image: "/projects/zero-hunger.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "#",
    },
  ],
  skills: [
    {
      title: "Frontend",
      icon: <HiCode />,
      description: "Modern web interfaces",
      bgClass: "bg-blue-500/10",
      iconClass: "text-blue-500",
      skills: [
        { name: "Next.js 15", level: "Advanced", hot: true },
        { name: "React", level: "Advanced" },
        { name: "TailwindCSS", level: "Expert" },
        { name: "JavaScript", level: "Advanced" },
        { name: "Framer Motion", level: "Intermediate" },
      ],
    },
    {
      title: "Backend",
      icon: <HiDatabase />,
      description: "Server & Database",
      bgClass: "bg-emerald-500/10",
      iconClass: "text-emerald-500",
      skills: [
        { name: "Node.js", level: "Advanced", hot: true },
        { name: "MongoDB", level: "Advanced" },
        { name: "Express.js", level: "Advanced", hot: true },
      ],
    },
    {
      title: "Programs & Tools",
      icon: <HiCube />,
      description: "Development & Productivity Tools",
      bgClass: "bg-orange-500/10",
      iconClass: "text-orange-500",
      skills: [
        { name: "VS Code", level: "Expert", hot: true },
        { name: "Postman", level: "Advanced" },
        { name: "Photoshop", level: "Intermediate" },
        { name: "Git", level: "Advanced" },
      ],
    },
  ],
  experiences: [
    {
      position: "Frontend Developer",
      company: "SelectSkillSet",
      period: "2024 - Present",
      location: "Remote",
      description:
        "Developing modern, responsive frontend applications with focus on user experience and performance. Working with cutting-edge technologies to build scalable web solutions.",
      responsibilities: [
        "Building responsive and interactive user interfaces using React and Next.js",
        "Implementing modern UI/UX designs with TailwindCSS and Framer Motion",
        "Optimizing application performance and ensuring cross-browser compatibility",
        "Collaborating with design and backend teams to deliver high-quality features",
      ],
      technologies: [
        "React",
        "Next.js",
        "TailwindCSS",
        "JavaScript",
        "Framer Motion",
        "TypeScript",
      ],
    },
    {
      position: "Full Stack Developer",
      company: "Tekisky",
      period: "2023 - 2024",
      location: "Remote",
      description:
        "Developed and maintained full-stack web applications, working on both frontend and backend systems. Collaborated with cross-functional teams to deliver robust software solutions.",
      responsibilities: [
        "Developed and maintained full-stack web applications using React, Node.js, and MongoDB",
        "Implemented RESTful APIs and integrated third-party services",
        "Built responsive user interfaces and optimized application performance",
        "Worked on database design and backend architecture",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "JavaScript",
        "MERN Stack",
      ],
    },
  ],
  contactInfo: [
    {
      icon: <FaGithub className="w-5 h-5" />,
      label: "GitHub",
      value: "@huzaifahmedz",
      link: `https://github.com/huzaifahmedz`,
    },
    {
      icon: <HiMail className="w-5 h-5" />,
      label: "Email",
      value: "dev.huzaif@gmail.com",
      link: "mailto:dev.huzaif@gmail.com",
    },
    {
      icon: <FaMapPin className="w-5 h-5" />,
      label: "Location",
      value: "India",
      link: null,
    },
  ],
};
