import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

export const alt = `${site.name} — Frontend Engineer & Co-Founder`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(145deg, #080a0e 0%, #121821 55%, #0b1018 100%)",
          color: "#ebe8e1",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#8b93a1",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#d6ff4b",
            }}
          />
          <span style={{ display: "flex" }}>Portfolio · Available worldwide</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
            }}
          >
            <span style={{ display: "flex" }}>ALIAKBAR</span>
            <span style={{ display: "flex", color: "#d6ff4b" }}>ZOHOUR</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#8b93a1",
              maxWidth: 760,
              lineHeight: 1.35,
            }}
          >
            Frontend Engineer & Co-Founder — cinematic digital experiences with
            React, Next.js & motion.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "#8b93a1",
            borderTop: "1px solid rgba(235,232,225,0.12)",
            paddingTop: 28,
          }}
        >
          <span style={{ display: "flex" }}>aliakbarzohour.com</span>
          <span style={{ display: "flex", color: "#d6ff4b" }}>
            Hire · Collaborate · Build
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
