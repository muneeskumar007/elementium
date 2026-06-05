// NewsletterAndFooter.jsx
// Exact pixel-match to Figma design screenshot

const FOOTER_COLS = [
  {
    heading: "Company",
    links: ["Home", "Studio", "Service", "Blog"],
  },
  {
    heading: "Terms & Policies",
    links: ["Privacy Policy", "Terms & Conditions", "Explore", "Accesibility"],
  },
  {
    heading: "Follow Us",
    links: ["Instagram", "LinkedIn", "Youtube", "Twitter"],
  },
  {
    heading: "Terms & Policies",
    address: "1498w Fluton ste, STE\n2D Chicago, IL 63867.",
    phone: "(123) 456789000",
    email: "info@elementum.com",
  },
];

export default function NewsletterAndFooter() {
  return (
    <div style={{ background: "#d6ead6", fontFamily: "'DM Sans', sans-serif" }}>
      {/* ═══════════════════════════════════
          NEWSLETTER SECTION
      ═══════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          textAlign: "center",
          padding: "72px 24px 80px",
          overflow: "hidden",
        }}
      >
        {/* ── Red arrow squiggles — top center ── */}
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-60%)",
            pointerEvents: "none",
          }}
          width="200"
          height="100"
          viewBox="0 0 200 100"
          fill="none"
        >
          {/* Left swoosh arrow */}
          <path
            d="M80 20 Q60 50 55 80"
            stroke="#f07070"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M50 72 L55 82 L62 74"
            stroke="#f07070"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Right swoosh arrow */}
          <path
            d="M120 10 Q140 45 138 80"
            stroke="#f07070"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M132 72 L138 83 L145 75"
            stroke="#f07070"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>

        {/* ── Purple teardrop / shield shape — right side ── */}
        <svg
          style={{
            position: "absolute",
            right: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
          }}
          width="110"
          height="160"
          viewBox="0 0 110 160"
          fill="none"
        >
          <path
            d="M108 10 Q112 80 55 158 Q-2 80 2 10 Q30 -10 55 2 Q80 -10 108 10Z"
            fill="#8b5cf6"
          />
        </svg>

        {/* ── Headline ── */}
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(52px, 7vw, 90px)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-1.5px",
            color: "#111",
            margin: "32px auto 20px",
            maxWidth: 780,
          }}
        >
          Subscribe to
          <br />
          our newsletter
        </h2>

        {/* ── Subtext ── */}
        <p
          style={{
            fontSize: 15,
            color: "#444",
            marginBottom: 36,
            letterSpacing: "0.1px",
          }}
        >
          To make your stay special and even more memorable
        </p>

        {/* ── Subscribe button ── */}
        <button
          style={{
            background: "#111",
            color: "#fff",
            fontSize: 15,
            fontWeight: 500,
            fontFamily: "'DM Sans', sans-serif",
            padding: "15px 48px",
            borderRadius: 50,
            border: "none",
            cursor: "pointer",
            letterSpacing: "0.2px",
            transition: "background 0.2s, transform 0.15s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#333";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#111";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Subscribe Now
        </button>
      </section>

      {/* ── Horizontal divider ── */}
      <div
        style={{
          maxWidth: "92%",
          margin: "0 auto",
          borderTop: "1px solid #b0c8b0",
        }}
      />

      {/* ═══════════════════════════════════
          FOOTER SECTION
      ═══════════════════════════════════ */}
      <footer
        style={{
          padding: "52px 80px 40px",
          maxWidth: 1320,
          margin: "0 auto",
        }}
      >
        {/* 4-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 48,
            marginBottom: 60,
          }}
        >
          {FOOTER_COLS.map((col, i) => (
            <div key={i}>
              {/* Column heading */}
              <p
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: "#111",
                  marginBottom: 22,
                  letterSpacing: "-0.2px",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {col.heading}
              </p>

              {/* Nav links */}
              {col.links &&
                col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      display: "block",
                      fontSize: 14,
                      color: "#444",
                      marginBottom: 14,
                      textDecoration: "none",
                      transition: "color 0.2s",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#111")}
                    onMouseLeave={(e) => (e.target.style.color = "#444")}
                  >
                    {link}
                  </a>
                ))}

              {/* Address / contact column */}
              {col.address && (
                <>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#333",
                      lineHeight: 1.7,
                      marginBottom: 16,
                      whiteSpace: "pre-line",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {col.address}
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#333",
                      marginBottom: 12,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {col.phone}
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#333",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {col.email}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: 13,
              color: "#666",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            ©2023 Elementum. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
