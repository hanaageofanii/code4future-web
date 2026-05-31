import { T, TICKER, STATS } from "../data";
import { Fade } from "./Animations";
import Counter from "./Counter";

export default function Hero() {
  const go = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @keyframes c4f-char-in {
          0%   { opacity: 0; transform: translateY(60px) rotate(6deg); }
          100% { opacity: 1; transform: translateY(0) rotate(0deg); }
        }
        @keyframes c4f-char-outline-in {
          0%   { opacity: 0; transform: translateY(60px) skewX(-8deg); }
          100% { opacity: 1; transform: translateY(0) skewX(0deg); }
        }
        @keyframes c4f-badge-pop {
          0%   { opacity: 0; transform: rotate(-3deg) scale(0.4); }
          65%  { transform: rotate(-3deg) scale(1.15); }
          100% { opacity: 1; transform: rotate(-3deg) scale(1); }
        }
        @keyframes c4f-accent-in {
          0%   { opacity: 0; transform: translateX(-32px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes c4f-presence-in {
          0%   { opacity: 0; transform: translateY(40px) scaleX(0.92); }
          100% { opacity: 1; transform: translateY(0) scaleX(1); }
        }
      `}</style>

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

          {/* ── ANIMATED HEADLINE ── */}
          <div style={{ marginBottom: 40 }}>
            {/* Row 1: WE BUILD ↗ Live */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                flexWrap: "wrap",
                marginBottom: 0,
                lineHeight: 1.0,
              }}>
              {/* WE — tiap huruf jatuh + rotate */}
              {"WE".split("").map((ch, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "'Instrument Serif',serif",
                    fontWeight: 400,
                    fontSize: "clamp(52px,8.5vw,112px)",
                    lineHeight: 1.0,
                    letterSpacing: "-.03em",
                    color: T.dark,
                    display: "inline-block",
                    opacity: 0,
                    animation: `c4f-char-in .55s cubic-bezier(.16,1,.3,1) ${0.04 + i * 0.07}s forwards`,
                  }}>
                  {ch}
                </span>
              ))}

              {/* space */}
              <span style={{ display: "inline-block", width: "0.25em" }} />

              {/* BUILD — outline + skew */}
              {"BUILD".split("").map((ch, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "'Instrument Serif',serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "clamp(52px,8.5vw,112px)",
                    lineHeight: 1.0,
                    letterSpacing: "-.03em",
                    color: T.blue,
                    display: "inline-block",
                    opacity: 0,
                    animation: `c4f-char-outline-in .55s cubic-bezier(.16,1,.3,1) ${0.18 + i * 0.06}s forwards`,
                  }}>
                  {ch}
                </span>
              ))}

              {/* ↗ Live badge — spring pop */}
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: T.blue,
                  color: "#fff",
                  fontFamily: "'DM Mono',monospace",
                  fontSize: 12,
                  fontWeight: 500,
                  padding: "8px 16px",
                  borderRadius: 99,
                  flexShrink: 0,
                  alignSelf: "center",
                  opacity: 0,
                  animation:
                    "c4f-badge-pop .6s cubic-bezier(.34,1.56,.64,1) .52s forwards",
                }}>
                ↗ Live
              </span>
            </div>

            {/* Row 2: DIGITAL — slide dari kiri per huruf */}
            <div style={{ overflow: "hidden" }}>
              {"DIGITAL".split("").map((ch, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "'Instrument Serif',serif",
                    fontWeight: 400,
                    fontSize: "clamp(52px,8.5vw,112px)",
                    lineHeight: 1.0,
                    letterSpacing: "-.03em",
                    color: T.dark,
                    display: "inline-block",
                    opacity: 0,
                    animation: `c4f-accent-in .5s cubic-bezier(.16,1,.3,1) ${0.5 + i * 0.04}s forwards`,
                  }}>
                  {ch}
                </span>
              ))}
            </div>

            {/* Row 3: PRESENCE. — scale in */}
            <div style={{ overflow: "hidden" }}>
              <span
                style={{
                  fontFamily: "'Instrument Serif',serif",
                  fontWeight: 400,
                  fontSize: "clamp(52px,8.5vw,112px)",
                  lineHeight: 1.0,
                  letterSpacing: "-.03em",
                  color: T.dark,
                  display: "inline-block",
                  opacity: 0,
                  transformOrigin: "left center",
                  animation:
                    "c4f-presence-in .75s cubic-bezier(.16,1,.3,1) .8s forwards",
                }}>
                PRESENCE.
              </span>
            </div>
          </div>
          {/* ── END HEADLINE ── */}

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
    </>
  );
}
