import { useState } from "react";

const NAV_LINKS = ["Home", "Studio", "Services", "Contact", "FAQs"];

import { useState } from "react";

const NAV_LINKS = ["Home", "Studio", "Services", "Contact", "FAQs"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <span className="font-serif text-xl text-gray-900">Elementum</span>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="nav-link text-sm text-gray-600 hover:text-gray-900 transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Hamburger button – visible on mobile */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden focus:outline-none"
        >
          <span className="block w-5 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-5 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-5 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile menu – collapses with Tailwind transition */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="block text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
