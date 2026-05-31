import { useState, useEffect } from "react";
import "./index.css";
import {
  T,
  NAV,
  SERVICES,
  STEPS,
  WORKS,
  PKGS,
  TICKER,
  STATS,
  SP,
} from "./data";
import { Fade, Lift } from "./components/Animations";
import Counter from "./components/Counter";
import Logo from "./components/Logo";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => {
    setMobOpen(false);
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* NAV */}
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

      {/* ═══════════ HERO ═══════════ */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          padding: "0 6vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          background: T.white,
        }}>
        {/* grid lines background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(${T.faint} 1px,transparent 1px),linear-gradient(90deg,${T.faint} 1px,transparent 1px)`,
            backgroundSize: "72px 72px",
            opacity: 0.5,
            pointerEvents: "none",
          }}
        />
        {/* blue accent blobs */}
        <div
          style={{
            position: "absolute",
            width: 480,
            height: 480,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(37,99,235,.07),transparent 70%)",
            top: -80,
            right: -60,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 320,
            height: 320,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(37,99,235,.05),transparent 70%)",
            bottom: 40,
            left: -80,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            width: "100%",
            position: "relative",
            zIndex: 1,
            paddingTop: 100,
          }}>
          {/* top row: eyebrow + spinning badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 48,
            }}>
            <Fade delay={0}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#22C55E",
                    boxShadow: "0 0 0 2px rgba(34,197,94,.2)",
                  }}
                />
                <span className="mono">
                  Available for new projects &mdash; 2025
                </span>
              </div>
            </Fade>
            <div
              style={{
                width: 88,
                height: 88,
                position: "relative",
                flexShrink: 0,
              }}
              className="desktop">
              <svg
                viewBox="0 0 88 88"
                style={{
                  position: "absolute",
                  inset: 0,
                  animation: "spinSlow 14s linear infinite",
                }}>
                <path
                  id="cp"
                  d="M44,44 m-33,0 a33,33,0,1,1,66,0 a33,33,0,1,1,-66,0"
                  fill="none"
                />
                <text
                  fontSize="7.5"
                  fontFamily="'DM Mono',monospace"
                  fill={T.muted}
                  letterSpacing="3">
                  <textPath href="#cp">
                    WEB AGENCY · INDONESIA · EST 2022 ·{" "}
                  </textPath>
                </text>
              </svg>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: T.blue,
                  }}
                />
              </div>
            </div>
          </div>

          {/* headline */}
          <div style={{ marginBottom: 40 }}>
            <Lift delay={0.04}>
              <h1
                style={{
                  fontFamily: "'Instrument Serif',serif",
                  fontWeight: 400,
                  fontSize: "clamp(52px,8.5vw,112px)",
                  lineHeight: 1.0,
                  letterSpacing: "-.03em",
                  color: T.dark,
                }}>
                We Design
              </h1>
            </Lift>
            <Lift delay={0.12}>
              <h1
                style={{
                  fontFamily: "'Instrument Serif',serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(52px,8.5vw,112px)",
                  lineHeight: 1.0,
                  letterSpacing: "-.03em",
                  color: T.blue,
                }}>
                Websites
              </h1>
            </Lift>
            <Lift delay={0.2}>
              <h1
                style={{
                  fontFamily: "'Instrument Serif',serif",
                  fontWeight: 400,
                  fontSize: "clamp(52px,8.5vw,112px)",
                  lineHeight: 1.0,
                  letterSpacing: "-.03em",
                  color: T.dark,
                }}>
                That Last.
              </h1>
            </Lift>
          </div>

          {/* hero bottom row */}
          <div
            className="hero-cols"
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 48,
              paddingBottom: 72,
            }}>
            <Fade delay={0.3} style={{ maxWidth: 440 }}>
              <p
                style={{
                  fontSize: 15,
                  color: T.muted,
                  lineHeight: 1.85,
                  fontWeight: 400,
                  marginBottom: 32,
                }}>
                code4future crafts modern, fast, and SEO-ready websites that
                help Indonesian businesses stand out and grow in the digital
                era.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href="#services"
                  className="bp"
                  onClick={(e) => {
                    e.preventDefault();
                    go("services");
                  }}>
                  Explore Services &rarr;
                </a>
                <a
                  href="#work"
                  className="bo"
                  onClick={(e) => {
                    e.preventDefault();
                    go("work");
                  }}>
                  View Our Work
                </a>
              </div>
            </Fade>

            {/* hero right: 4 mini stat cards */}
            <Fade delay={0.38} style={{ flexShrink: 0 }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                  width: 300,
                }}>
                {STATS.map(([n, suf, label]) => (
                  <div
                    key={label}
                    style={{
                      background: T.bg,
                      border: `1px solid ${T.line}`,
                      borderRadius: 10,
                      padding: "18px 20px",
                    }}>
                    <div
                      style={{
                        fontFamily: "'Instrument Serif',serif",
                        fontSize: 34,
                        fontWeight: 400,
                        lineHeight: 1,
                        color: T.dark,
                        letterSpacing: "-.02em",
                      }}>
                      <Counter end={n} />
                      {suf}
                    </div>
                    <div
                      className="mono"
                      style={{ marginTop: 6, color: T.muted }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>

          {/* hero feature strip */}
          <Fade delay={0.44}>
            <div
              style={{
                display: "flex",
                borderTop: `1px solid ${T.line}`,
                paddingTop: 28,
                paddingBottom: 0,
                gap: 0,
              }}>
              {[
                ["Fast Delivery", "Websites done in 2–4 weeks"],
                ["SEO Optimised", "Score 90+ guaranteed"],
                ["Responsive", "Works on every device"],
                ["Post-launch Support", "We don't disappear after launch"],
              ].map(([title, desc], i) => (
                <div
                  key={title}
                  style={{
                    flex: 1,
                    padding: "0 28px",
                    borderRight: i < 3 ? `1px solid ${T.line}` : "none",
                    paddingLeft: i === 0 ? 0 : 28,
                  }}>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: T.dark,
                      marginBottom: 4,
                    }}>
                    {title}
                  </div>
                  <div
                    style={{ fontSize: 12, color: T.muted, lineHeight: 1.6 }}>
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>

        {/* ticker tape */}
        <div
          style={{
            borderTop: `1px solid ${T.line}`,
            overflow: "hidden",
            padding: "18px 0",
            position: "relative",
            zIndex: 1,
            marginTop: 28,
          }}>
          <div className="ticker">
            {[...TICKER, ...TICKER].map((t, i) => (
              <span key={i} className="ti">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section id="services" style={{ padding: SP, background: T.bg }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 52,
            }}>
            <Lift>
              <h2
                style={{
                  fontFamily: "'Instrument Serif',serif",
                  fontSize: "clamp(28px,4vw,46px)",
                  fontWeight: 400,
                  letterSpacing: "-.02em",
                  color: T.dark,
                }}>
                What We Do
              </h2>
            </Lift>
            <Fade>
              <span className="mono">04 services</span>
            </Fade>
          </div>
          {SERVICES.map((s, i) => (
            <Fade key={s.n} delay={i * 0.06}>
              <div className="srow">
                <span className="sn">{s.n}</span>
                <span className="stitle">{s.title}</span>
                <span className="sdesc">{s.desc}</span>
                <span className="stag">{s.tag}</span>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* ═══════════ PROCESS ═══════════ */}
      <section style={{ padding: SP, background: T.white }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 52,
            }}>
            <Lift>
              <h2
                style={{
                  fontFamily: "'Instrument Serif',serif",
                  fontSize: "clamp(28px,4vw,46px)",
                  fontWeight: 400,
                  letterSpacing: "-.02em",
                  color: T.dark,
                }}>
                Our Process
              </h2>
            </Lift>
            <Fade>
              <span
                className="mono"
                style={{ maxWidth: 240, textAlign: "right", lineHeight: 1.7 }}>
                transparent workflow from first call to launch
              </span>
            </Fade>
          </div>
          <div className="g4" style={{ gap: 1, background: T.line }}>
            {STEPS.map((s, i) => (
              <Fade key={s.n} delay={i * 0.07}>
                <div
                  style={{
                    background: T.white,
                    padding: "36px 32px",
                    height: "100%",
                  }}>
                  <div
                    className="mono"
                    style={{ color: T.blue, marginBottom: 20 }}>
                    {s.n}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Instrument Serif',serif",
                      fontSize: 20,
                      fontWeight: 400,
                      color: T.dark,
                      marginBottom: 12,
                    }}>
                    {s.title}
                  </div>
                  <div
                    style={{ fontSize: 13, color: T.muted, lineHeight: 1.75 }}>
                    {s.desc}
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ WORK ═══════════ */}
      <section id="work" style={{ padding: SP, background: T.bg }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 48,
            }}>
            <Lift>
              <h2
                style={{
                  fontFamily: "'Instrument Serif',serif",
                  fontSize: "clamp(28px,4vw,46px)",
                  fontWeight: 400,
                  letterSpacing: "-.02em",
                  color: T.dark,
                }}>
                Selected Work
              </h2>
            </Lift>
            <Fade>
              <a
                href="#contact"
                className="bo"
                style={{ fontSize: 12 }}
                onClick={(e) => {
                  e.preventDefault();
                  go("contact");
                }}>
                All projects &rarr;
              </a>
            </Fade>
          </div>
          <div className="g2">
            {WORKS.map((w, i) => (
              <Fade key={w.title} delay={i * 0.07}>
                <div className="wcard" style={{ height: "100%" }}>
                  {/* thumbnail */}
                  <div
                    style={{
                      height: 220,
                      background: w.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                    <div
                      style={{
                        width: "60%",
                        background: T.white,
                        borderRadius: 8,
                        padding: 16,
                        boxShadow: "0 4px 20px rgba(0,0,0,.07)",
                      }}>
                      <div
                        style={{ display: "flex", gap: 4, marginBottom: 10 }}>
                        {["#FF6B6B", "#FFD93D", "#6BCB77"].map((c) => (
                          <div
                            key={c}
                            style={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              background: c,
                            }}
                          />
                        ))}
                      </div>
                      <div
                        style={{
                          height: 5,
                          background: T.faint,
                          borderRadius: 3,
                          width: "78%",
                          marginBottom: 5,
                        }}
                      />
                      <div
                        style={{
                          height: 4,
                          background: T.faint,
                          borderRadius: 3,
                          width: "55%",
                          marginBottom: 14,
                        }}
                      />
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: 6,
                        }}>
                        <div
                          style={{
                            height: 40,
                            background: w.color,
                            borderRadius: 5,
                            opacity: 0.7,
                          }}
                        />
                        <div
                          style={{
                            height: 40,
                            background: w.color,
                            borderRadius: 5,
                            opacity: 0.4,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* info */}
                  <div
                    style={{
                      padding: "18px 22px 22px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}>
                    <div>
                      <span
                        className="mono"
                        style={{ marginBottom: 6, display: "block" }}>
                        {w.tag}
                      </span>
                      <div
                        style={{
                          fontFamily: "'Instrument Serif',serif",
                          fontSize: 18,
                          fontWeight: 400,
                          color: T.dark,
                        }}>
                        {w.title}
                      </div>
                    </div>
                    <span className="mono">{w.year}</span>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PRICING ═══════════ */}
      <section id="pricing" style={{ padding: SP, background: T.white }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 56,
            }}>
            <Lift>
              <h2
                style={{
                  fontFamily: "'Instrument Serif',serif",
                  fontSize: "clamp(28px,4vw,46px)",
                  fontWeight: 400,
                  letterSpacing: "-.02em",
                  color: T.dark,
                }}>
                Investment
              </h2>
            </Lift>
            <Fade>
              <p
                style={{
                  fontSize: 13,
                  color: T.muted,
                  maxWidth: 260,
                  lineHeight: 1.75,
                  textAlign: "right",
                }}>
                Pay after delivery. Quality guaranteed.
              </p>
            </Fade>
          </div>
          <div className="g3 geq">
            {PKGS.map((p, i) => (
              <Fade key={p.name} delay={i * 0.08}>
                <div
                  className={`pcard${p.featured ? " f" : ""}`}
                  style={{ height: "100%" }}>
                  {p.badge && (
                    <div
                      style={{
                        position: "absolute",
                        top: -1,
                        right: 24,
                        background: p.featured ? T.blue : T.mid,
                        color: "#fff",
                        fontSize: 9,
                        fontWeight: 700,
                        letterSpacing: ".12em",
                        textTransform: "uppercase",
                        padding: "4px 12px",
                        borderRadius: "0 0 6px 6px",
                      }}>
                      {p.badge}
                    </div>
                  )}
                  <div style={{ marginBottom: 28 }}>
                    <div
                      className="mono"
                      style={{ marginBottom: 12, color: T.muted }}>
                      {p.n}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Instrument Serif',serif",
                        fontWeight: 400,
                        fontSize: 24,
                        color: T.dark,
                        marginBottom: 4,
                      }}>
                      {p.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Instrument Serif',serif",
                        fontWeight: 400,
                        fontSize: "clamp(26px,3vw,34px)",
                        color: T.dark,
                        lineHeight: 1,
                        letterSpacing: "-.02em",
                      }}>
                      {p.price}
                    </div>
                    {p.price !== "Custom" && (
                      <div className="mono" style={{ marginTop: 6 }}>
                        /{p.note}
                      </div>
                    )}
                  </div>
                  <div
                    style={{ height: 1, background: T.line, marginBottom: 24 }}
                  />
                  <ul
                    style={{
                      listStyle: "none",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                      marginBottom: 32,
                    }}>
                    {p.feats.map((f) => (
                      <li
                        key={f}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          fontSize: 13,
                          color: T.mid,
                          lineHeight: 1.5,
                        }}>
                        <span
                          style={{
                            color: T.blue,
                            fontWeight: 700,
                            flexShrink: 0,
                            fontSize: 11,
                            marginTop: 2,
                          }}>
                          &#10003;
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/6285183219010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={p.featured ? "bp" : "bo"}
                    style={{ width: "100%" }}>
                    Get Started
                  </a>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section
        style={{
          padding: "100px 6vw",
          background: T.dark,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)`,
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(37,99,235,.12),transparent 65%)",
            top: -200,
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Lift>
            <h2
              style={{
                fontFamily: "'Instrument Serif',serif",
                fontWeight: 400,
                fontSize: "clamp(36px,6vw,80px)",
                letterSpacing: "-.03em",
                lineHeight: 1.0,
                color: "#F7F6F3",
                marginBottom: 20,
              }}>
              Ready to Build Something
              <br />
              <em style={{ fontStyle: "italic", color: T.blue }}>
                Exceptional?
              </em>
            </h2>
          </Lift>
          <Fade delay={0.2}>
            <p
              style={{
                fontSize: 15,
                color: "#7a756e",
                maxWidth: 380,
                margin: "0 auto 40px",
                lineHeight: 1.8,
              }}>
              Free consultation, zero commitment. Let's talk about your project.
            </p>
            <div
              style={{
                display: "flex",
                gap: 14,
                justifyContent: "center",
                flexWrap: "wrap",
              }}>
              <a
                href="https://wa.me/6285183219010"
                target="_blank"
                rel="noopener noreferrer"
                className="bp"
                style={{
                  background: T.blue,
                  padding: "13px 30px",
                  fontSize: 13,
                }}>
                Chat via WhatsApp
              </a>
              <a
                href="#contact"
                className="bo"
                onClick={(e) => {
                  e.preventDefault();
                  go("contact");
                }}
                style={{
                  color: "#7a756e",
                  borderColor: "rgba(255,255,255,.12)",
                  padding: "12px 28px",
                  fontSize: 13,
                }}>
                Send a Message
              </a>
            </div>
          </Fade>
        </div>
      </section>

      {/* ═══════════ CONTACT ═══════════ */}
      <section id="contact" style={{ padding: SP, background: T.bg }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div
            className="contact-cols"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
            }}>
            <div>
              <Lift>
                <h2
                  style={{
                    fontFamily: "'Instrument Serif',serif",
                    fontWeight: 400,
                    fontSize: "clamp(28px,4vw,46px)",
                    letterSpacing: "-.02em",
                    color: T.dark,
                    marginBottom: 20,
                    lineHeight: 1.1,
                  }}>
                  Start a<br />
                  Conversation
                </h2>
              </Lift>
              <Fade delay={0.1}>
                <p
                  style={{
                    fontSize: 14,
                    color: T.muted,
                    lineHeight: 1.85,
                    maxWidth: 320,
                    marginBottom: 40,
                  }}>
                  Tell us about your project and we'll respond within 24 hours.
                </p>
              </Fade>
              <Fade delay={0.15}>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {[
                    ["Email", "hello@code4future.id"],
                    ["WhatsApp", "+62 851 8321 9010"],
                    ["Based in", "Indonesia"],
                    ["Available", "Mon – Fri, 9am – 6pm WIB"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      style={{
                        display: "flex",
                        gap: 0,
                        alignItems: "baseline",
                        borderBottom: `1px solid ${T.line}`,
                        paddingBottom: 16,
                      }}>
                      <span
                        className="mono"
                        style={{ width: 100, flexShrink: 0 }}>
                        {k}
                      </span>
                      <span style={{ fontSize: 13, color: T.dark }}>{v}</span>
                    </div>
                  ))}
                </div>
              </Fade>
            </div>
            <Fade delay={0.12}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 24,
                  }}>
                  {[
                    ["Full Name", "Your name"],
                    ["Email", "you@company.com"],
                  ].map(([l, ph]) => (
                    <div key={l}>
                      <label
                        className="mono"
                        style={{ display: "block", marginBottom: 10 }}>
                        {l}
                      </label>
                      <input className="inp" placeholder={ph} />
                    </div>
                  ))}
                </div>
                <div>
                  <label
                    className="mono"
                    style={{ display: "block", marginBottom: 10 }}>
                    Website Type
                  </label>
                  <input
                    className="inp"
                    placeholder="Company Profile, E-Commerce, Landing Page..."
                  />
                </div>
                <div>
                  <label
                    className="mono"
                    style={{ display: "block", marginBottom: 10 }}>
                    Message
                  </label>
                  <textarea
                    className="inp"
                    rows={5}
                    placeholder="Tell us more about your project..."
                    style={{ resize: "vertical" }}
                  />
                </div>
                <div>
                  <button
                    className="bp"
                    style={{ width: "100%", padding: "14px", fontSize: 14 }}>
                    Send Message &rarr;
                  </button>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer
        style={{
          background: T.dark,
          borderTop: `1px solid rgba(255,255,255,.06)`,
        }}>
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "64px 6vw 40px",
          }}>
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
                Building modern, performant websites for businesses that refuse
                to be average. Based in Indonesia, working worldwide.
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
                      href="#"
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
              &#169; 2025 code4future. All rights reserved.
            </span>
            <span className="mono" style={{ color: "rgba(255,255,255,.2)" }}>
              Based in Indonesia &mdash; Working worldwide
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
