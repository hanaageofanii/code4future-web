import { T } from "../data";
import Logo from "./Logo";

export default function Footer() {
  // Fungsi scroll khusus untuk link di Footer
  const go = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: T.dark,
        borderTop: `1px solid rgba(255,255,255,.06)`,
      }}>
      <div
        style={{ maxWidth: 1160, margin: "0 auto", padding: "64px 6vw 40px" }}>
        <div
          className="footer-cols"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 56,
          }}>
          {/* brand */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <Logo size={22} light />
            </div>
            <p
              style={{
                fontSize: 13,
                color: "#7a756e",
                lineHeight: 1.8,
                maxWidth: 280,
                marginBottom: 28,
              }}>
              Building modern, performant websites for businesses that refuse to
              be average. Based in Indonesia, working worldwide.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {[
                ["IG", "#"],
                ["LI", "#"],
                ["WA", "https://wa.me/6285183219010"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: 9,
                    letterSpacing: ".14em",
                    color: "#7a756e",
                    textDecoration: "none",
                    border: "1px solid rgba(255,255,255,.08)",
                    padding: "6px 11px",
                    borderRadius: 4,
                    transition: "border-color .18s,color .18s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#F7F6F3";
                    e.target.style.borderColor = "rgba(255,255,255,.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#7a756e";
                    e.target.style.borderColor = "rgba(255,255,255,.08)";
                  }}>
                  {label}
                </a>
              ))}
            </div>
          </div>
          {/* cols */}
          {[
            ["Company", ["About", "Services", "Work", "Pricing"]],
            ["Support", ["Contact", "FAQ", "Privacy Policy", "Terms"]],
            ["Connect", ["Instagram", "LinkedIn", "WhatsApp", "Dribbble"]],
          ].map(([col, links]) => (
            <div key={col}>
              <div
                className="mono"
                style={{ color: "rgba(255,255,255,.25)", marginBottom: 20 }}>
                {col}
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map((l) => (
                  <a
                    key={l}
                    href={`#${l.toLowerCase()}`}
                    onClick={(e) => {
                      // Cek jika linknya adalah bagian dari section, gunakan smooth scroll
                      if (
                        ["services", "work", "pricing", "contact"].includes(
                          l.toLowerCase(),
                        )
                      ) {
                        e.preventDefault();
                        go(l);
                      }
                    }}
                    style={{
                      fontSize: 13,
                      color: "#7a756e",
                      textDecoration: "none",
                      transition: "color .18s",
                      padding: "2px 0",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#F7F6F3")}
                    onMouseLeave={(e) => (e.target.style.color = "#7a756e")}>
                    {l}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.06)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}>
          <span className="mono" style={{ color: "rgba(255,255,255,.2)" }}>
            &#169; 2026 code4future. All rights reserved.
          </span>
          <span className="mono" style={{ color: "rgba(255,255,255,.2)" }}>
            Based in Indonesia &mdash; Working worldwide
          </span>
        </div>
      </div>
    </footer>
  );
}
