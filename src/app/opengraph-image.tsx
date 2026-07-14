import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  let playfairFont: ArrayBuffer | null = null;

  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112 Safari/537.36",
        },
      }
    ).then((r) => r.text());

    const url = css.match(
      /src: url\((.+?)\) format\('(opentype|truetype)'\)/
    )?.[1];
    if (url) playfairFont = await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    // falls back to system serif
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: "#1c1b1f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: playfairFont ? "Playfair Display" : "serif",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "5px",
            background: "linear-gradient(90deg, #c47a8a, #e8a0b0, #c47a8a)",
          }}
        />

        {/* Subtle corner ornaments */}
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 64,
            width: 40,
            height: 40,
            borderTop: "1px solid #4a3f45",
            borderLeft: "1px solid #4a3f45",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 48,
            right: 64,
            width: 40,
            height: 40,
            borderTop: "1px solid #4a3f45",
            borderRight: "1px solid #4a3f45",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 64,
            width: 40,
            height: 40,
            borderBottom: "1px solid #4a3f45",
            borderLeft: "1px solid #4a3f45",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 64,
            width: 40,
            height: 40,
            borderBottom: "1px solid #4a3f45",
            borderRight: "1px solid #4a3f45",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
          }}
        >
          {/* Label */}
          <p
            style={{
              color: "#c47a8a",
              fontSize: 18,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontFamily: "sans-serif",
              margin: "0 0 32px",
            }}
          >
            Salón de Belleza · Córdoba, Argentina
          </p>

          {/* Main title */}
          <h1
            style={{
              color: "#ece6f0",
              fontSize: 88,
              lineHeight: 1.05,
              margin: "0 0 28px",
              textAlign: "center",
              fontWeight: 400,
            }}
          >
            Secretos de Belleza
          </h1>

          {/* Divider */}
          <div
            style={{
              width: 60,
              height: 1,
              background: "#c47a8a",
              margin: "0 0 28px",
            }}
          />

          {/* Tagline */}
          <p
            style={{
              color: "#cac4d0",
              fontSize: 30,
              letterSpacing: "0.06em",
              margin: "0 0 56px",
              fontFamily: "sans-serif",
              fontWeight: 300,
            }}
          >
            Coloración · Corte · Tratamientos
          </p>

          {/* Instagram handle */}
          <p
            style={{
              color: "#6b6571",
              fontSize: 20,
              fontFamily: "sans-serif",
              margin: 0,
              letterSpacing: "0.05em",
            }}
          >
            @secretos_de_belleza_vcp
          </p>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, #4a3f45, transparent)",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: playfairFont
        ? [
            {
              name: "Playfair Display",
              data: playfairFont,
              style: "normal",
              weight: 400,
            },
          ]
        : [],
    }
  );
}
