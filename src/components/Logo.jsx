import { T } from "../data";

export default function Logo({ size = 32, light = false }) {
  const ink = light ? "#FFFFFF" : T.dark;
  const accent = T.blue;
  return (
    <svg
      width={size * 5.2}
      height={size}
      viewBox="0 0 166 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      {/* bracket mark */}
      <rect x="0" y="4" width="3" height="24" rx="1.5" fill={accent} />
      <rect x="0" y="4" width="12" height="3" rx="1.5" fill={accent} />
      <rect x="0" y="25" width="12" height="3" rx="1.5" fill={accent} />
      <rect x="20" y="4" width="3" height="24" rx="1.5" fill={accent} />
      <rect x="11" y="4" width="12" height="3" rx="1.5" fill={accent} />
      <rect x="11" y="25" width="12" height="3" rx="1.5" fill={accent} />
      {/* wordmark */}
      <text
        x="34"
        y="23"
        fontFamily="Poppins, sans-serif"
        fontWeight="700"
        fontSize="17"
        fill={ink}
        letterSpacing="-0.3">
        code
      </text>
      <text
        x="85"
        y="23"
        fontFamily="Poppins, sans-serif"
        fontWeight="700"
        fontSize="17"
        fill={accent}
        letterSpacing="-0.3">
        4
      </text>
      <text
        x="97"
        y="23"
        fontFamily="Poppins, sans-serif"
        fontWeight="700"
        fontSize="17"
        fill={ink}
        letterSpacing="-0.3">
        future
      </text>
    </svg>
  );
}
