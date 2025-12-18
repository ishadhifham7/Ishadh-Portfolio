"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { itemAnimation } from "./Animations";

export const ProjectCard = ({ project, index }) => (
  <motion.div
    variants={itemAnimation}
    className="group flex flex-col lg:flex-row items-stretch gap-4 md:gap-6 bg-secondary/5 hover:bg-secondary/10 p-3 sm:p-4 md:p-6 rounded-lg md:rounded-xl transition-colors duration-300"
  >
    <div className="w-full lg:w-2/5">
      <div className="relative aspect-video lg:aspect-[4/3] rounded-lg overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
      </div>
    </div>

    <div className="w-full lg:w-3/5 flex flex-col justify-between py-0 lg:py-2">
      <div className="space-y-2 md:space-y-3">
        <div className="flex items-start md:items-center justify-between gap-2">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-primary">
            {project.title}
          </h3>
          <span className="text-xs text-muted-foreground flex-shrink-0">
            #{String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 md:line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 pt-3 md:pt-4 mt-3 md:mt-0">
        <Button
          size="sm"
          className="rounded-full h-8 px-3 md:px-4 text-xs"
          asChild
        >
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            Live Demo
            <FaExternalLinkAlt className="w-3 h-3" />
          </a>
        </Button>
      </div>
    </div>
  </motion.div>
);
