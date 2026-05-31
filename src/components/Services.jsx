import { T, SERVICES, SP } from "../data";
import { Fade, Lift } from "./Animations";

export default function Services() {
  return (
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
  );
}
