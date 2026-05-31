import { T } from "../data";
import { Fade, Lift } from "./Animations";

export default function CTA() {
  const go = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
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
            <em style={{ fontStyle: "italic", color: T.blue }}>Exceptional?</em>
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
  );
}
