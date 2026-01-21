export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Git & GitHub",
    "REST APIs",
  ];

  return (
    <section className="py-24">
      <h2 className="text-3xl font-semibold mb-6">
        Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 text-sm border border-gray-300 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
