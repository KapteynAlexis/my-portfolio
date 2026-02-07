import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import React from "react";
import VideoBackground from "@/components/VideoBackground";

export default function Home() {
  return (
    <div>
      <VideoBackground />
      <main className="max-w-6xl mx-auto px-6 ">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
