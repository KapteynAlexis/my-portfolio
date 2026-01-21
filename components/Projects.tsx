"use client";

import { motion } from "framer-motion";


const projects = [
  {
    title: "Elevate Academy Website",
    description:
      "A collaborative frontend project built with Next.js and Tailwind CSS, focused on responsive design, clean UI, and team-based development workflow.",
    link: "https://spent-digital-labs.vercel.app/",
    tag: "Team Project",
  },
  {
    title: "WorldClass Tech Academy",
    description:
      "A responsive landing page built with Next.js and Tailwind CSS for a tech training brand.",
    link: "https://worldclass-tech-academy.vercel.app/",
    tag: "Client Project",
  },
  {
    title: "StreamLite UI",
    description:
      "A Netflix-inspired streaming interface focused on layout structure and modern UI patterns.",
    link: "#",
    tag: "Personal Project",
  },
];

export default function Projects() {
  return (
    <motion.section
  id="projects"
  className="py-24"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
      <h2 className="text-3xl font-semibold mb-12">
        Selected Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.a
          key={project.title}
          href={project.link}
          target="_blank"
          className="group border border-gray-200 rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}>

            <span className="text-xs uppercase tracking-wide text-gray-500">
              {project.tag}
            </span>

            <h3 className="mt-2 font-semibold text-xl">
              {project.title}
            </h3>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              {project.description}
            </p>

            <p className="mt-6 text-sm font-medium underline underline-offset-4 group-hover:text-black">
              View Project →
            </p>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
