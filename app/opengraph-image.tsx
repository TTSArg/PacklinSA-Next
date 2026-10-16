import { ImageResponse } from "next/og";

export const alt = "Packlin S.A. | Forjado y fundición de piezas de latón";
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
          justifyContent: "center",
          padding: "72px",
          color: "#f5f0e6",
          background: "#202825",
          borderLeft: "18px solid #b98245",
        }}
      >
        <div style={{ color: "#d5a86b", fontSize: 24, letterSpacing: 3 }}>
          PACKLIN S.A. · DESDE 2006
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.08,
          }}
        >
          Forjado y fundición
          <br />
          de piezas de latón
        </div>
        <div style={{ marginTop: 32, fontSize: 28, color: "#d6d5cc" }}>
          Soluciones industriales a medida · Buenos Aires, Argentina
        </div>
      </div>
    ),
    size,
  );
}