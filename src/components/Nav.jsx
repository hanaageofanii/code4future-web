import { useState, useEffect } from "react";
import { T, NAV } from "../data";
import Logo from "./Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);

  // Deteksi scroll khusus untuk Nav
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Fungsi khusus Nav untuk scroll & tutup menu HP
  const go = (id) => {
    setMobOpen(false);
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          background: scrolled ? "rgba(247,246,243,.94)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: `1px solid ${scrolled ? T.line : "transparent"}`,
          transition: "all .3s",
          padding: "0 6vw",
        }}>
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <Logo size={24} />
          <div className="desktop" style={{ display: "flex", gap: 32 }}>
            {NAV.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="nl"
                onClick={(e) => {
                  e.preventDefault();
                  go(l);
                }}>
                {l}
              </a>
            ))}
          </div>
          <div className="desktop" style={{ display: "flex", gap: 10 }}>
            <a
              href="#contact"
              className="bo"
              onClick={(e) => {
                e.preventDefault();
                go("contact");
              }}
              style={{ padding: "9px 20px", fontSize: 12 }}>
              Get in Touch
            </a>
            <a
              href="https://wa.me/6285183219010"
              target="_blank"
              rel="noopener noreferrer"
              className="bp"
              style={{ padding: "9px 20px", fontSize: 12 }}>
              WhatsApp
            </a>
          </div>
          {/* hamburger */}
          <button
            onClick={() => setMobOpen(true)}
            style={{
              display: "none",
              flexDirection: "column",
              gap: 5,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
            }}
            className="mob-ham">
            <span
              style={{
                width: 22,
                height: 2,
                background: T.dark,
                display: "block",
                borderRadius: 2,
              }}
            />
            <span
              style={{
                width: 14,
                height: 2,
                background: T.dark,
                display: "block",
                borderRadius: 2,
              }}
            />
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {mobOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: T.bg,
            zIndex: 998,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
          }}>
          <button
            onClick={() => setMobOpen(false)}
            style={{
              position: "absolute",
              top: 20,
              right: 24,
              background: "none",
              border: "none",
              fontSize: 24,
              cursor: "pointer",
              color: T.mid,
            }}>
            &#x2715;
          </button>
          {NAV.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                go(l);
              }}
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: T.dark,
                textDecoration: "none",
              }}>
              {l}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
