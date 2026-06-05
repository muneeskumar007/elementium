/* ─────────────────────────────────────────
   PersonImg  — small circular person placeholder
   SectionImg — large circular section image placeholder
   Replace these by passing an `src` prop or swapping
   the component with your own <img> wrapped in circle-img
───────────────────────────────────────── */

/**
 * PersonImg
 * @param {number} size   - diameter in px  (default 100)
 * @param {string} src    - optional image URL
 * @param {string} alt    - alt text when src provided
 * @param {object} style  - extra inline styles on the wrapper
 */
export function PersonImg({ size = 100, src, alt = "Team member", style = {} }) {
  return (
    <div
      className="circle-img"
      style={{ width: size, height: size, ...style }}
    >
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <div className="circle-placeholder-inner">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#bbb"
            strokeWidth="1.4"
            style={{ opacity: 0.8 }}
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
          <span style={{ fontSize: 10, color: "#bbb" }}>Photo</span>
        </div>
      )}
    </div>
  );
}

/**
 * SectionImg
 * @param {number} size   - diameter in px  (default 340)
 * @param {string} src    - optional image URL
 * @param {string} alt    - alt text when src provided
 * @param {string} label  - placeholder label text
 */
export function SectionImg({
  size = 340,
  src,
  alt = "Section image",
  label = "Add image",
}) {
  return (
    <div
      className="circle-img"
      style={{ width: size, height: size, minWidth: size }}
    >
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <div className="circle-placeholder-inner">
          <svg
            width="38"
            height="38"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#bbb"
            strokeWidth="1.2"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <span style={{ fontSize: 12, color: "#bbb", marginTop: 8 }}>
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
