"use client";
import React from "react";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import { Button } from "@/components/ui/button";

const containerAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const languageColors = {
  JavaScript: "#f1e05a",
  TypeScript: "#2b7489",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#079400ff",
};

const getProjectSize = (index) => {
  const sizes = [
    "col-span-2 sm:col-span-1 md:col-span-2 row-span-1",
    "col-span-1 sm:row-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ];
  return sizes[index % sizes.length];
};

// Static project data
const projects = [
  {
    id: 1,
    name: "MineO - Self-Growth App",
    description:
      "Gamified journaling and goal tracking app with interactive life map.",
    language: "JavaScript",
    topics: ["UI/UX", "Gamification", "Mobile", "AI Planning"],
  },
  {
    id: 2,
    name: "SaloBook - Salon Lead Platform",
    description:
      "Manage and prioritize salon leads efficiently, reducing onboarding time.",
    language: "TypeScript",
    topics: ["Backend", "Fullstack", "Data Management", "Collaboration"],
  },
  {
    id: 3,
    name: "Sri Lanka Travel Explorer",
    description:
      "Explore 200+ locations with interactive map highlighting hidden gems.",
    language: "TypeScript",
    topics: ["Frontend", "UI/UX", "Mapping", "Travel Experience"],
  },
  {
    id: 4,
    name: "Productivity Dashboard",
    description: "Manage tasks in real-time with authentication.",
    language: "JavaScript",
    topics: ["Frontend", "Backend", "Task Management", "Fullstack"],
  },
  {
    id: 5,
    name: "Habit Tracker Mobile App",
    description: "Track and build daily habits with real-time updates",
    language: "TypeScript",
    topics: ["Mobile", "Productivity", "Data Management", "UI/UX"],
  },
  {
    id: 6,
    name: "Task Manager App",
    description:
      "Desktop application to manage and prioritize daily tasks efficiently.",
    language: "Java",
    topics: ["Desktop App", "Backend", "Productivity", "OOP"],
  },
];

const ProjectCard = ({ project, size }) => (
  <motion.div
    variants={itemAnimation}
    className={`relative group ${size} cursor-pointer`}
  >
    <div
      className="
        bg-black border-white/30 border p-4 rounded-xl sm:rounded-2xl
        h-full w-full flex flex-col justify-between
        shadow-[0_4px_6px_rgba(0,0,0,0.5)]
        transition-all duration-300 transform
        group-hover:scale-[1.02] 
        group-hover:border-white/60
        group-hover:shadow-[0_6px_12px_rgba(0,0,0,0.6)]
      "
    >
      {/* Title & Description */}
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-white text-sm md:text-base truncate">
          {project.name}
        </h3>
        <p className="text-white/70 text-xs md:text-sm line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Topics & Language */}
      <div className="mt-4 flex flex-col gap-1">
        {project.topics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.topics.map((topic) => (
              <span
                key={topic}
                className="text-[9px] sm:text-[10px] md:text-xs bg-white/10 text-white px-2 py-0.5 rounded-full border border-white/20"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        {project.language && (
          <div className="flex items-center gap-1 mt-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: languageColors[project.language] || "#ccc",
              }}
            />
            <span className="text-white/70 text-xs">{project.language}</span>
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const StaticProjects = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold text-primary"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground mt-2"
          >
            A sneak peek of my projects. Click below to explore all of them.
          </motion.p>
        </div>

        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              size={getProjectSize(index)}
            />
          ))}
        </motion.div>

        <div className="flex justify-center mt-10">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="rounded-full px-8 py-4 text-base sm:text-lg"
          >
            <a href="/projects" className="flex items-center gap-2">
              View All Projects <HiExternalLink />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StaticProjects;
