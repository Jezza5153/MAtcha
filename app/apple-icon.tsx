import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0d1f15",
          color: "#fbf7ec",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          fontSize: 130,
          letterSpacing: "-0.02em",
          position: "relative",
        }}
      >
        F
        <div
          style={{
            position: "absolute",
            right: 32,
            bottom: 32,
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "#95b067",
            display: "flex",
          }}
        />
      </div>
    ),
    size,
  );
}
