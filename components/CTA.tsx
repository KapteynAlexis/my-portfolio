"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-24 text-black text-center"
    >
      <h2 className="text-3xl md:text-5xl font-bold">
        Let’s build something that actually works
      </h2>

      <p className="mt-6 text-lg max-w-2xl mx-auto">
        Whether it’s a landing page, product website, or MVP — I focus on clarity,
        speed, and results.
      </p>

      <a
        href="https://wa.me/2348033770253"
        target="_blank"
        className="inline-block mt-10 bg-[#040440] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
      >
        Let’s Talk
      </a>
    </motion.section>
  );
}
