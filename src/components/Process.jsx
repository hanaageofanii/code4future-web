import { T, STEPS, SP } from "../data";
import { Fade, Lift } from "./Animations";

export default function Process() {
  return (
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
                <div style={{ fontSize: 13, color: T.muted, lineHeight: 1.75 }}>
                  {s.desc}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
