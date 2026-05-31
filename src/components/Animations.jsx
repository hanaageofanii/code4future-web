import { useReveal } from "../hooks/useReveal";

export function Fade({ children, delay = 0, style = {} }) {
  const [ref, on] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: on ? 1 : 0,
        transform: on ? "translateY(0)" : "translateY(16px)",
        transition: `opacity .65s ease ${delay}s, transform .65s ease ${delay}s`,
        ...style,
      }}>
      {children}
    </div>
  );
}

export function Lift({ children, delay = 0 }) {
  const [ref, on] = useReveal();
  return (
    <div style={{ overflow: "hidden" }}>
      <div
        ref={ref}
        style={{
          transform: on ? "translateY(0)" : "translateY(100%)",
          transition: `transform .85s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        }}>
        {children}
      </div>
    </div>
  );
}
