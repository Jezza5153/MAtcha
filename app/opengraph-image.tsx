import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Freddo Matcha — Single-origin Japanese matcha";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#fbf7ec",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Ambient corner accents */}
        <div
          style={{
            position: "absolute",
            top: 60,
            right: 80,
            width: 56,
            height: 56,
            borderRadius: 14,
            background: "#0d1f15",
            color: "#fbf7ec",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Georgia, serif",
            fontSize: 32,
            letterSpacing: "-0.02em",
          }}
        >
          F
        </div>

        {/* Eyebrow */}
        <div
          style={{
            fontSize: 20,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#2c5a36",
            fontFamily: "Inter, sans-serif",
            display: "flex",
          }}
        >
          Single-origin · Japan
        </div>

        {/* Wordmark + accent dot */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 24,
            fontFamily: "Georgia, serif",
            color: "#0d1f15",
            fontSize: 132,
            lineHeight: 1.0,
            letterSpacing: "-0.025em",
          }}
        >
          Freddo Matcha
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "#6f9342",
              display: "flex",
            }}
          />
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#4a5247",
            fontFamily: "Inter, sans-serif",
            maxWidth: 800,
            display: "flex",
          }}
        >
          Italian restraint. Japanese sourcing. Pre-orders opening soon.
        </div>
      </div>
    ),
    size,
  );
}
