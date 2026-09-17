import { ImageResponse } from "next/og";

export const alt = "Anay Consultants & Engineers — Engineering Data You Can Build On.";
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
          background: "#2A1F1A",
          padding: "72px 80px",
          color: "#F8F4F0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 999,
              border: "1px solid #C9A66B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              color: "#C9A66B",
              fontWeight: 600,
            }}
          >
            A
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 18, letterSpacing: 6, color: "#C9A66B" }}>
              ACE
            </div>
            <div style={{ fontSize: 28, marginTop: 4 }}>Anay Consultants & Engineers</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.1,
              fontWeight: 600,
              maxWidth: 920,
            }}
          >
            Engineering Data You Can Build On.
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 22,
              letterSpacing: 3,
              color: "#C9A66B",
              textTransform: "uppercase",
            }}
          >
            Testing · Surveying · Inspection · Consultancy
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#D4C4B0",
          }}
        >
          <span>Formerly Volmaken · Est. 2016</span>
          <span>Agar-Malwa · Ujjain · Indore</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
