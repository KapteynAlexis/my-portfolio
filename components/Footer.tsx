export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-16 border-t border-gray-200 mt-24"
    >
      <p className="text-gray-600 mb-4">
        Let’s build something meaningful.
      </p>

      <div className="flex gap-6 text-sm font-medium">
        <a href="mailto:your@email.com">Email</a>
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
      </div>
    </footer>
  );
}
