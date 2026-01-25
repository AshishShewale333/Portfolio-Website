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

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 flex justify-between items-center z-50 shadow-md">
      <div className="font-bold text-xl">Ashish Shewale</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
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
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center gap-4 p-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
