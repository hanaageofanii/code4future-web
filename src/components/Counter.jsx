import { useState, useEffect, useRef } from "react";
import { useReveal } from "../hooks/useReveal";

export default function Counter({ end, suffix = "" }) {
  const [ref, on] = useReveal(0.5);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!on || started.current) return;
    started.current = true;
    const n = parseInt(end),
      step = Math.ceil(n / 36);
    let cur = 0;
    const t = setInterval(() => {
      cur = Math.min(cur + step, n);
      setVal(cur);
      if (cur >= n) clearInterval(t);
    }, 28);
  }, [on, end]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}
