// Testimonials.jsx
// Exact match to Figma design — scattered circular photos around centered quote card
// Replace each src="" with your image path e.g. src="/images/person1.jpg"

export default function Testimonials() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: 780,
        background: "#fff",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* ════════════════════════════════════════
          SCATTERED PERSON PHOTOS
          Each <img> tag is left empty — add your
          src="/images/yourfile.jpg" manually
      ════════════════════════════════════════ */}

      {/* TOP-LEFT — medium circle */}
      <div style={circleStyle(160, { top: 80, left: 100 })}>
        <img src="/images/person1.png" alt="Customer 1" style={imgStyle} />
      </div>

      {/* MID-LEFT — small circle */}
      <div style={circleStyle(80, { top: 280, left: 40 })}>
        <img src="/images/person2.png" alt="Customer 2" style={imgStyle} />
      </div>

      {/* BOTTOM-LEFT LARGE — biggest circle on left */}
      <div style={circleStyle(240, { top: 340, left: 120 })}>
        <img src="/images/person3.png" alt="Customer 3" style={imgStyle} />
      </div>

      {/* BOTTOM-LEFT SMALL — small below mid-left */}
      <div style={circleStyle(78, { top: 530, left: 22 })}>
        <img src="/images/person5.png" alt="Customer 4" style={imgStyle} />
      </div>

      {/* TOP-RIGHT SMALL — upper right area */}
      <div style={circleStyle(100, { top: 100, right: 280 })}>
        <img src="/images/person5.png" alt="Customer 5" style={imgStyle} />
      </div>

      {/* TOP-RIGHT LARGE */}
      <div style={circleStyle(155, { top: 60, right: 80 })}>
        <img src="/images/person6.png" alt="Customer 6" style={imgStyle} />
      </div>

      {/* MID-RIGHT — medium circle */}
      <div style={circleStyle(110, { top: 310, right: 230 })}>
        <img src="/images/person2.png " alt="Customer 7" style={imgStyle} />
      </div>

      {/* BOTTOM-RIGHT LARGE — biggest circle on right */}
      <div style={circleStyle(190, { top: 430, right: 60 })}>
        <img src="/images/person1.png" alt="Customer 8" style={imgStyle} />
      </div>

      {/* ════════════════════════════════════════
          CENTER CONTENT — Headline + Quote card
      ════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "clamp(420px, 46%, 620px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
        }}
      >
        {/* ── Headline ── */}
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(32px, 3.8vw, 52px)",
            fontWeight: 400,
            lineHeight: 1.2,
            textAlign: "center",
            color: "#111",
            margin: 0,
            letterSpacing: "-0.5px",
          }}
        >
          {/* "What" with mint green highlight background */}
          <span
            style={{
              background: "#c8e8d8",
              borderRadius: 4,
              padding: "0 6px 2px",
            }}
          >
            What
          </span>{" "}
          our customer
          <br />
          says{" "}
          {/* "About Us" with orange/gold underline */}
          <span
            style={{
              borderBottom: "3px solid #d4a017",
              paddingBottom: 2,
            }}
          >
            About Us
          </span>
        </h2>

        {/* ── Quote card ── */}
        <div
          style={{
            background: "#eef6f1",
            borderRadius: 18,
            padding: "32px 36px 28px",
            position: "relative",
            width: "100%",
          }}
        >
          {/* Opening double quote mark — large grey, inline top-left */}
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 64,
              lineHeight: 0.6,
              color: "#bbb",
              display: "block",
              marginBottom: 12,
              userSelect: "none",
            }}
          >
            &#8220;
          </span>

          <p
            style={{
              fontSize: 15,
              color: "#333",
              lineHeight: 1.85,
              textAlign: "center",
              margin: 0,
            }}
          >
            Elementum &nbsp;delivered the site with inthe timeline as they
            requested. Inthe end, the client found a 50% increase in traffic
            with in days since its launch. They also had an impressive ability
            to use technologies that the company hasn&rsquo;t used, which have
            also proved to be easy to use and reliable
          </p>

          {/* Closing double quote mark — large grey, inline bottom-right */}
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 64,
              lineHeight: 0.3,
              color: "#bbb",
              display: "block",
              textAlign: "right",
              marginTop: 14,
              userSelect: "none",
            }}
          >
            &#8221;
          </span>
        </div>
      </div>
    </section>
  );
}

/* ── Helper: circular wrapper style ── */
function circleStyle(size, position) {
  return {
    position: "absolute",
    width: size,
    height: size,
    borderRadius: "50%",
    overflow: "hidden",
    background: "#e8e8e8",
    flexShrink: 0,
    ...position,
  };
}

/* ── Helper: image fills the circle ── */
const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};
