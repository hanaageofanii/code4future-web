import { T, SP } from "../data";
import { Fade, Lift } from "./Animations";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: SP, background: T.bg }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div
          className="contact-cols"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
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
                  ["Email", "code4futuree@gmail.com"],
                  ["WhatsApp", " +62 8953 3235 8853"],
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
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
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
  );
}
