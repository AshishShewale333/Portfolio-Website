import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  // ✅ CV link (GitHub Pages safe)
  const cvLink = "/Portfolio-Website/resume/Ashish_Shewale_Resume.pdf";

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center z-50 shadow-md">
      
      {/* Logo / Name */}
      <div className="font-bold text-xl text-sky-400">
        Ashish Shewale
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}

        {/* ✅ Download CV (Desktop) */}
        <li>
          <a
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            Download CV
          </a>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center gap-4 p-6 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-blue-400 transition-colors text-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* ✅ Download CV (Mobile) */}
          <li>
            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Download CV
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
