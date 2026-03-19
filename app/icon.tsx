import { ImageResponse } from "next/og";

/** Tab favicon — matches navbar SN (white S, lime N on dark). */
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 19,
          fontWeight: 800,
          letterSpacing: "-0.08em",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <span style={{ color: "#f5f5f5" }}>S</span>
        <span style={{ color: "#CCFF00" }}>N</span>
      </div>
    ),
    { ...size }
  );
}
