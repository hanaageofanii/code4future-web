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

  // Mencegah scroll di background saat menu HP terbuka
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
              href="https://wa.me/62895332358853"
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
          zIndex: 1000, // <-- Diubah jadi 1000 agar menutupi navbar dan bisa diklik
          display: "flex",
          flexDirection: "column",
          padding: "20px 6vw 40px",
          transition: "transform 0.4s ease, opacity 0.3s ease",
          transform: mobOpen ? "translateY(0)" : "translateY(-10px)",
          opacity: mobOpen ? 1 : 0,
          pointerEvents: mobOpen ? "auto" : "none",
        }}>
        {/* Tombol Close yang lama */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            height: 40,
            alignItems: "center",
          }}>
          <button
            onClick={() => setMobOpen(false)}
            style={{
              background: "none",
              border: "none",
              fontSize: 26,
              cursor: "pointer",
              color: T.mid,
              padding: 4,
            }}>
            &#x2715;
          </button>
        </div>

        {/* List Menu kembali ke Poppins */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
          }}>
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
                fontFamily: "'Poppins', sans-serif",
                color: active === l ? T.blue : T.dark,
                textDecoration: "none",
                transition: "color 0.2s",
              }}>
              {l}
            </a>
          ))}
        </div>

        {/* Kontak Mini di Bawah */}
        <div
          style={{
            borderTop: `1px solid ${T.line}`,
            paddingTop: 24,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}>
          <a
            href="https://wa.me/62895332358853"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: T.dark,
              textDecoration: "none",
            }}>
            +62 8953 3235 8853
          </a>
          <a
            href="mailto:hello@code4future.id"
            style={{ fontSize: 13, color: T.muted, textDecoration: "none" }}>
            code4futuree@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
