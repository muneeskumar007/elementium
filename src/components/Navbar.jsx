import { useState } from "react";

const NAV_LINKS = ["Home", "Studio", "Services", "Contact", "FAQs"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.96)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <span
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 21,
            letterSpacing: "-0.3px",
            color: "#1a1a1a",
          }}
        >
          Elementum
        </span>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            gap: 32,
            alignItems: "center",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="nav-link">
              {link}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
          }}
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "#fff",
            borderTop: "1px solid #f0f0f0",
            padding: "12px 24px 20px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="nav-link"
              style={{ display: "block", padding: "10px 0" }}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
