import { T, WORKS, SP } from "../data";
import { Fade, Lift } from "./Animations";

export default function Work() {
  const go = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
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
                    <div style={{ display: "flex", gap: 4, marginBottom: 10 }}>
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
  );
}
