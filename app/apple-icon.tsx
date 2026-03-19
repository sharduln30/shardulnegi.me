import { ImageResponse } from "next/og";

/** Apple touch icon — same SN mark as navbar. */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          fontSize: 96,
          fontWeight: 800,
          letterSpacing: "-0.08em",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          borderRadius: 40,
        }}
      >
        <span style={{ color: "#f5f5f5" }}>S</span>
        <span style={{ color: "#CCFF00" }}>N</span>
      </div>
    ),
    { ...size }
  );
}
