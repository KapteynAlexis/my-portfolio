export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-16 border-t border-gray-200 mt-24"
    >
      <p className="text-gray-600 mb-4">
        Let’s build something meaningful.
      </p>

      <div className="flex gap-6 text-sm font-medium ">
        <a href="mailto:alexakosile1@gmail.com" className="hover:text-white hover:bg-red-500 rounded-md p-1">Email</a>
        <a href="https://github.com/KapteynAlexis?tab=repositories" className="hover:text-white hover:bg-black rounded-md p-1">GitHub</a>
        <a href="https://www.linkedin.com/in/alexander-akosile-6bb9ab218?originalSubdomain=ng" className="hover:text-white hover:bg-blue-500 rounded-md p-1">LinkedIn</a>
      </div>
    </footer>
  );
}
