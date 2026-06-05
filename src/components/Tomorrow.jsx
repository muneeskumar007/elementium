import React from "react";

/* ─────────────────────────────────────────────
   Inline placeholder – swap <img> tag manually
───────────────────────────────────────────── */
function SectionImg({ size = 300 }) {
  return (
     <div
      style={{
        width: 500,
        height: 500,
        borderRadius: "50%",
        overflow: "hidden",
        position: "relative",
        zIndex: 2,
        background: "#e8e8e8",
        flexShrink: 0,
      }}
    >
      {/* ← drop your <img> here */}
      <img src="/images/person11.png" style={{
        width: 500,
        height: 500,
        borderRadius: "50%",
        overflow: "hidden",
        position: "relative",
        zIndex: 2,
        background: "#e8e8e8",
        flexShrink: 0,
      }} alt="Customer 5"  />
    </div>
  );
}

function SectionImg2({ size = 900 }) {
  return (
    <div
      style={{
        width: 500,
        height: 500,
        borderRadius: "50%",
        overflow: "hidden",
        position: "relative",
        zIndex: 2,
        background: "#e8e8e8",
        flexShrink: 0,
      }}
    >
      {/* ← drop your <img> here */}
      <img src="/images/person12.png" style={{
        width: 500,
        height: 500,
        borderRadius: "50%",
        overflow: "hidden",
        position: "relative",
        zIndex: 2,
        background: "#e8e8e8",
        flexShrink: 0,
      }} alt="Customer 5"  />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Shared wavy connector SVG (red line between
   the two circles, spans full width)
───────────────────────────────────────────── */
function WavyConnector() {
  return (
    <svg
      viewBox="0 0 1100 110"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        left: 1,
        right: 0,
        width: "100%",
        height: 390,
        bottom: -120,
        zIndex: 0,
        pointerEvents: "none",
      }}
      fill="none"
      
    >
      <path
        d="M820 10 Q700 80 550 60 Q400 40 260 100"
        stroke="#e8524a"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Red triangle helpers
───────────────────────────────────────────── */
function Triangle({ size = 80, style = {} }) {
  return (
    <div
      style={{
        width: 0,
        height: 0,
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        borderBottom: `${size}px solid #e8524a`,
        position: "absolute",
        ...style,
      }}
    />
  );
}

/* ─────────────────────────────────────────────
   SECTION 1 – Tomorrow should be better than today
───────────────────────────────────────────── */
function Tomorrow() {
  return (
    <section
      id="studio"
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "80px 40px 60px",
        display: "flex",
        alignItems: "center",
        gap: 64,
        position: "relative",
      }}
    >
      {/* ── Left: text ── */}
      <div style={{ flex: 1, position: "relative", zIndex: 2 }}>
        {/* Pink soft blob above headline */}
        <div
          style={{
            position: "absolute",
            width: 260,
            height: 200,
            background:
              "radial-gradient(ellipse at center, rgba(255,182,193,0.55) 0%, transparent 70%)",
            borderRadius: "50%",
            top: -60,
            left: -10,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(30px, 3.8vw, 48px)",
            lineHeight: 1.25,
            marginBottom: 22,
            color: "#1a1a1a",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* "Tomorrow" with gold underline */}
          <span
            style={{
              borderBottom: "2.5px solid #c9a84c",
              paddingBottom: 2,
            }}
          >
            Tomorrow
          </span>{" "}
          should
          <br />
          be better than{" "}
          {/* "today" with green-mint highlight pill */}
          <span
            style={{
              background: "#d6ead6",
              borderRadius: 6,
              padding: "0 8px",
            }}
          >
            today
          </span>
        </h2>

        <p
          style={{
            color: "#6b6b6b",
            fontSize: 13.5,
            lineHeight: 1.85,
            marginBottom: 28,
            maxWidth: 370,
          }}
        >
          We are a team of strategists, designers communicators, researchers.
          Togeather, we belive that progress only happens when you refuse to
          play things safe.
        </p>

        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontSize: 13,
            color: "#1a1a1a",
            textDecoration: "none",
            fontFamily: "sans-serif",
          }}
        >
          Read more
          <span
            style={{
              display: "inline-block",
              width: 60,
              height: 1,
              background: "#1a1a1a",
              verticalAlign: "middle",
            }}
          />
        </a>
      </div>

      {/* ── Right: circular image + decorations ── */}
      <div
        style={{
          flex: 1,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 360,
        }}
      >
        {/* Subtle pink glow behind image */}
        <div
          style={{
            position: "absolute",
            width: 280,
            height: 260,
            background:
              "radial-gradient(ellipse at center, rgba(255,182,193,0.4) 0%, transparent 70%)",
            borderRadius: "50%",
            top: "5%",
            left: "10%",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* Red square (top-right corner accent) */}
        <div
          style={{
            position: "absolute",
            width: 56,
            height: 56,
            background: "#e8524a",
            top: 14,
            right: "15%",
            zIndex: 1,
          }}
        />

        <SectionImg2 size={220} />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 2 – See how we can help you progress
───────────────────────────────────────────── */
function Progress() {
  return (
    <section
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "40px 40px 100px",
        display: "flex",
        alignItems: "center",
        gap: 64,
        position: "relative",
      }}
    >
      {/* ── Left: circular image + triangles ── */}
      <div
        style={{
          flex: 1,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 340,
        }}
      >
        {/* Large triangle top-left */}
        <Triangle size={90} style={{ top: 50, left: "2%" }} />

        {/* Smaller triangle bottom-centre */}
        <Triangle size={60} style={{ bottom: -1, left: "75%" }} />

        <SectionImg size={300} />
      </div>

      {/* ── Right: text ── */}
      <div style={{ flex: 1, position: "relative" }}>
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(28px, 3.5vw, 44px)",
            lineHeight: 1.25,
            marginBottom: 22,
            color: "#1a1a1a",
          }}
        >
          {/* "See" with mint highlight */}
          <span
            style={{
              background: "#d6ead6",
              borderRadius: 6,
              padding: "0 6px",
            }}
          >
            See
          </span>{" "}
          how we can
          <br />
          {/* "help you progress" with gold underline */}
          <span
            style={{
              borderBottom: "2.5px solid #c9a84c",
              paddingBottom: 2,
            }}
          >
            help you progress
          </span>
        </h2>

        <p
          style={{
            color: "#6b6b6b",
            fontSize: 13.5,
            lineHeight: 1.85,
            marginBottom: 28,
            maxWidth: 390,
          }}
        >
          We add a layer of fearless insights and action that allows change
          makers to accelerate their progress in areas such as brand, design
          digital, comms and social research.
        </p>

        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontSize: 13,
            color: "#1a1a1a",
            textDecoration: "none",
            fontFamily: "sans-serif",
          }}
        >
          Read more
          <span
            style={{
              display: "inline-block",
              width: 60,
              height: 1,
              background: "#1a1a1a",
              verticalAlign: "middle",
            }}
          />
        </a>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   COMBINED EXPORT – both sections + wavy line
───────────────────────────────────────────── */
export default function HeroSections() {
  return (
    <div
      style={{
        background: "#ffffff",
        fontFamily: "'DM Serif Display', serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Google Fonts import (add to your index.html if preferred) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
      `}</style>

      {/* Section 1 wrapper — relative so the wavy connector can bridge into section 2 */}
      <div style={{ position: "relative" }}>
        <Tomorrow />
        <WavyConnector />
      </div>

      {/* Section 2 */}
      <Progress />
    </div>
  );
}
