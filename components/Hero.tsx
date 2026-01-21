import AnimatedText from "./AnimatedText";
export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center">
      <AnimatedText
        text="Hi, I’m Alex."
        className="text-4xl md:text-6xl font-bold leading-tight"
      />

      <AnimatedText
        text="Frontend Developer building clean, scalable web interfaces with
        React and Next.js."
        className="mt-4 text-lg text-gray-600 max-w-xl"
      />
      

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-black text-white rounded-md text-sm font-medium"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-gray-300 rounded-md text-sm font-medium"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
