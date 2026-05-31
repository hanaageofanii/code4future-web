import { useState, useEffect } from "react";
import { T, NAV } from "../data";
import Logo from "./Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const match = NAV.find((n) => n.toLowerCase() === id);
            if (match) setActive(match);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );

    NAV.forEach((l) => {
      const el = document.getElementById(l.toLowerCase());
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", fn);
      observer.disconnect();
    };
  }, []);

  const go = (id) => {
    setMobOpen(false);
    setActive(id);
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Mencegah body di-scroll saat menu HP terbuka
  useEffect(() => {
    if (mobOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [mobOpen]);

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
              <div key={l} style={{ position: "relative" }}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="nl"
                  onClick={(e) => {
                    e.preventDefault();
                    go(l);
                  }}
                  style={{
                    color: active === l ? T.dark : undefined,
                    fontWeight: active === l ? 600 : 500,
                    transition: "all 0.2s",
                  }}>
                  {l}
                </a>
                {active === l && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: -8,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: T.blue,
                    }}
                  />
                )}
              </div>
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
              href="https://wa.me/6289332358853"
              target="_blank"
              rel="noopener noreferrer"
              className="bp"
              style={{ padding: "9px 20px", fontSize: 12 }}>
              WhatsApp
            </a>
          </div>

          {/* hamburger */}
          <button onClick={() => setMobOpen(true)} className="mob-ham">
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

      {/* ── MOBILE MENU OVERLAY ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: T.bg,
          zIndex: 998,
          display: "flex",
          flexDirection: "column",
          padding: "24px 6vw 40px",
          transition:
            "transform 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease",
          transform: mobOpen ? "translateY(0)" : "translateY(-20px)",
          opacity: mobOpen ? 1 : 0,
          pointerEvents: mobOpen ? "auto" : "none",
        }}>
        {/* Tombol Close Custom */}
        <div
          style={{ display: "flex", justifyContent: "flex-end", height: 40 }}>
          <button
            onClick={() => setMobOpen(false)}
            style={{
              background: "none",
              border: "none",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".1em",
              color: T.dark,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "'Poppins', sans-serif",
            }}>
            CLOSE &#x2715;
          </button>
        </div>

        {/* List Menu */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 20,
          }}>
          {NAV.map((l, i) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                go(l);
              }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
                textDecoration: "none",
                color: active === l ? T.blue : T.dark,
                // Animasi bergelombang per item menu
                transform: mobOpen ? "translateY(0)" : "translateY(24px)",
                opacity: mobOpen ? 1 : 0,
                transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.05 + 0.1}s`,
              }}>
              <span
                className="mono"
                style={{
                  fontSize: 12,
                  marginTop: 12,
                  color: active === l ? T.blue : T.muted,
                }}>
                0{i + 1}
              </span>
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "clamp(46px, 12vw, 64px)",
                  lineHeight: 1,
                  fontWeight: 400,
                  fontStyle: active === l ? "italic" : "normal",
                }}>
                {l}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Footer Area */}
        <div
          style={{
            borderTop: `1px solid ${T.line}`,
            paddingTop: 24,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            opacity: mobOpen ? 1 : 0,
            transition: "opacity 0.6s ease 0.4s",
          }}>
          <span className="mono">Ready to build?</span>
          <a
            href="https://wa.me/6289332358853"
            style={{
              fontSize: 15,
              fontWeight: 500,
              color: T.dark,
              textDecoration: "none",
            }}>
            +62 851 8321 9010
          </a>
          <a
            href="mailto:hello@code4future.id"
            style={{
              fontSize: 15,
              fontWeight: 500,
              color: T.dark,
              textDecoration: "none",
            }}>
            hello@code4future.id
          </a>
        </div>
      </div>
    </>
  );
}
