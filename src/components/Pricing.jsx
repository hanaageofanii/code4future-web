import { T, PKGS, SP } from "../data";
import { Fade, Lift } from "./Animations";

export default function Pricing() {
  return (
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
  );
}
