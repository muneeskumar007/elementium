// Services.jsx
// Exact match to Figma design screenshot

const SERVICES = [
  {
    tag: "Office of multiple\ninterest content",
    title: "Colaborative & partnership",
    hasCircleImg: false,
  },
  {
    tag: "The hanger US Air force\ndigital experimental",
    title: "We talk about our weight",
    hasCircleImg: false,
  },
  {
    tag: "Delta faucet content,\nsocial, digital",
    title: "Piloting digital confidence",
    hasCircleImg: true, // circular image overlaps this row's title
  },
];

/* Long flat arrow — matches the design exactly */
function LongArrow() {
  return (
    <svg
      width="60"
      height="16"
      viewBox="0 0 60 16"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <line x1="0" y1="8" x2="50" y2="8" stroke="#111" strokeWidth="1.5" />
      <path
        d="M44 2 L52 8 L44 14"
        stroke="#111"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      style={{
        width: "100%",
        background: "#fff",
        padding: "80px 80px 90px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* ══════════════════════════════════════
          DECORATIVE: large red S-curve top-right
          sweeps in from top-right off-screen
      ══════════════════════════════════════ */}
      <svg
        style={{
          position: "absolute",
          top: -20,
          right: -30,
          pointerEvents: "none",
        }}
        width="520"
        height="340"
        viewBox="0 0 520 340"
        fill="none"
      >
        <path
          d="M520 10 Q400 10 340 80 Q260 170 330 260 Q370 310 380 340"
          stroke="#f07070"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* ══════════════════════════════════════
          HEADLINE
      ══════════════════════════════════════ */}
      <div style={{ marginBottom: 52, maxWidth: 560 }}>
        <h2
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(52px, 6.5vw, 82px)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-1px",
            color: "#111",
            margin: 0,
          }}
        >
          {/* Line 1 */}
          <span style={{ display: "block" }}>
            What we{" "}
            {/* "can" — mint green rounded pill highlight */}
            <span
              style={{
                background: "#c8e8d0",
                borderRadius: 10,
                padding: "2px 14px 4px",
                display: "inline-block",
              }}
            >
              can
            </span>
          </span>

          {/* Line 2 — "offer you!" with double gold underline */}
          <span
            style={{
              display: "block",
              position: "relative",
              width: "fit-content",
            }}
          >
            offer you!
            {/* Double gold/yellow underline */}
            <span
              style={{
                position: "absolute",
                bottom: -10,
                left: 0,
                width: "88%",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span
                style={{
                  display: "block",
                  height: 2.5,
                  background: "#d4a017",
                  borderRadius: 2,
                }}
              />
              <span
                style={{
                  display: "block",
                  height: 2.5,
                  background: "#d4a017",
                  borderRadius: 2,
                }}
              />
            </span>
          </span>
        </h2>
      </div>

      {/* ══════════════════════════════════════
          SERVICE ROWS
      ══════════════════════════════════════ */}
      <div
        style={{
          borderTop: "1px solid #ddd",
          width: "100%",
        }}
      >
        {SERVICES.map((s, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "32px 0",
              borderBottom: "1px solid #ddd",
              gap: 32,
              position: "relative",
            }}
          >
            {/* LEFT: small grey tag */}
            <p
              style={{
                fontSize: 13,
                color: "#888",
                lineHeight: 1.6,
                whiteSpace: "pre-line",
                width: 200,
                flexShrink: 0,
                margin: 0,
              }}
            >
              {s.tag}
            </p>

            {/* CENTER: service title in large spaced font */}
            <p
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(24px, 3.2vw, 44px)",
                fontWeight: 400,
                letterSpacing: "0.5px",
                color: "#111",
                flex: 1,
                margin: 0,
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: 0,
              }}
            >
              {s.title}

              {/* ── Third row only: small circular image overlapping title ── */}
              {s.hasCircleImg && (
                <span
                  style={{
                    display: "inline-block",
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    overflow: "hidden",
                    background: "#e0e0e0",
                    flexShrink: 0,
                    verticalAlign: "middle",
                    marginLeft: -8,
                    position: "relative",
                    top: 0,
                  }}
                >
                  {/*
                    ── ADD YOUR IMAGE HERE ──
                    Replace src="" with your image path
                    e.g. src="/images/service-thumb.jpg"
                  */}
                  <img
                    src=""
                    alt="Service preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </span>
              )}
            </p>

            {/* RIGHT: long flat arrow */}
            <LongArrow />
          </div>
        ))}
      </div>
    </section>
  );
}
