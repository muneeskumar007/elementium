export default function Hero() {
  // Each avatar: src, size (px), left (% within 1100px row), top (px from row top)
  // Positions tuned to match Figma stagger: alternating high/low across the row
  const avatars = [
    { src: "/images/person13.png", size: 108, left: "0%",   top: 148 }, // 1 – tiny, near left edge, lowest
    { src: "/images/person2.png",  size: 152, left: "7%",   top: 62  }, // 2 – large, mid-height
    { src: "/images/person14.png", size: 144, left: "21%",  top: 0   }, // 3 – medium, highest
    { src: "/images/person12.png", size: 132, left: "31%",  top: 100 }, // 4 – medium, lower
    { src: "/images/person2.png",  size: 138, left: "48%",  top: 12  }, // 5 – medium, raised
    { src: "/images/person1.png",  size: 130, left: "58%",  top: 100 }, // 6 – medium, lower
    { src: "/images/person6.png",  size: 148, left: "73%",  top: 0   }, // 7 – large, raised
    { src: "/images/person5.png",  size: 120, left: "87%",  top: 88  }, // 8 – medium, lower right
  ];

  return (
    <section className="bg-white min-h-screen w-full relative overflow-hidden flex flex-col items-center">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
      `}</style>

      {/* ── Left double squiggle decoration ── */}
      <svg
        width="68"
        height="240"
        viewBox="0 0 68 240"
        fill="none"
        style={{ position: "absolute", left: 0, top: "26%", zIndex: 1 }}
      >
        {/* Outer pink/red squiggle */}
        <path
          d="M55 8 Q-5 58 55 108 Q115 158 55 208"
          stroke="#f06a6a"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Inner black squiggle */}
        <path
          d="M35 28 Q-18 75 35 122 Q88 169 35 218"
          stroke="#1a1a1a"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* ── Purple teardrop / leaf — top right ── */}
      <svg
        width="70"
        height="98"
        viewBox="0 0 70 98"
        fill="none"
        style={{ position: "absolute", right: "5.5%", top: "16%", zIndex: 1 }}
      >
        <path
          d="M35 0 C58 18 68 48 49 76 C37 93 19 96 9 83 C-5 66 2 37 19 17 C25 9 31 2 35 0Z"
          fill="#7c3aed"
          opacity="0.88"
        />
      </svg>

      {/* ── Pink bottom-centre glow ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 560,
          height: 220,
          background:
            "radial-gradient(ellipse at center, rgba(255,170,185,0.42) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── HEADLINE ── */}
      <div
        style={{
          textAlign: "center",
          padding: "72px 40px 0",
          maxWidth: 920,
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}
      >
        <h1
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(36px, 6.5vw, 88px)",
            lineHeight: 1.13,
            color: "#1a1a1a",
            margin: 0,
            letterSpacing: "-0.5px",
          }}
        >
          {/* Line 1 */}
          <span style={{ display: "block" }}>
            The{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              thinkers
              {/* Gold curved underline SVG */}
              <svg
                viewBox="0 0 200 16"
                preserveAspectRatio="none"
                style={{
                  position: "absolute",
                  bottom: -6,
                  left: -4,
                  width: "108%",
                  height: 14,
                }}
                fill="none"
              >
                <path
                  d="M2 11 Q100 1 198 9"
                  stroke="#e8b44b"
                  strokeWidth="3.8"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            and
          </span>

          {/* Line 2 */}
          <span style={{ display: "block", marginTop: 4 }}>
            doers were{" "}
            <span
              style={{
                background: "#f472b6",
                borderRadius: 14,
                padding: "2px 14px 6px",
                display: "inline-block",
              }}
            >
              changing
            </span>
          </span>

          {/* Line 3 */}
          <span style={{ display: "block", marginTop: 4 }}>
            the{" "}
            <span
              style={{
                background: "#c8ebc8",
                borderRadius: 10,
                padding: "2px 14px 6px",
                display: "inline-block",
              }}
            >
              status
            </span>{" "}
            Quo with
          </span>
        </h1>

        {/* Sub-copy */}
        <p
          style={{
            marginTop: 32,
            color: "#777",
            fontSize: 14.5,
            lineHeight: 1.78,
            maxWidth: 500,
            marginLeft: "auto",
            marginRight: "auto",
            fontFamily: "sans-serif",
            fontWeight: 400,
          }}
        >
          We are a team of strategists, designers communicators, researchers.
          Togeather,
          <br />
          we belive that progress only hghappens when you refuse to play things
          safe.
        </p>
      </div>

      {/* ── AVATAR ROW — absolute positioned for exact Figma stagger ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1100,
          /* height = tallest avatar (152) + max top offset (148) + small buffer */
          height: 320,
          marginTop: 48,
          marginBottom: 48,
          zIndex: 2,
          /* allow avatars near edges to overflow/clip naturally like Figma */
          overflow: "visible",
        }}
      >
        {avatars.map((av, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: av.left,
              top: av.top,
              width: av.size,
              height: av.size,
              borderRadius: "50%",
              overflow: "hidden",
              border: "3.5px solid #ffffff",
              boxShadow: "0 3px 18px rgba(0,0,0,0.11)",
              background: "#d4d4d4",
            }}
          >
            <img
              src={av.src}
              alt={`Team member ${i + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
