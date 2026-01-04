"use client";

import Box from "@mui/material/Box";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { formatFaNumber } from "@/utils/formatFaNumber";

export default function OccupancyGauge() {
  const value = 80;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "end",
        justifyContent: "center",
        gap: { xs: 3, sm: 4 },
        width: "100%",
        maxWidth: 420,
        height: "100%",
        mx: "auto",
        p: 2,
        border: "1px solid #eaeaeb",
        borderRadius: "8px",
        bgcolor: "background.paper",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            "& div": { display: "flex", alignItems: "center", gap: 1 },
            "& .dot": { width: 10, height: 10, borderRadius: "50%" },
            "& span": { fontSize: "0.85rem" },
          }}
        >
          <div>
            <Box className="dot" sx={{ bgcolor: "#E9B872" }} />
            <span>انجام‌شده</span>
          </div>

          <div>
            <Box className="dot" sx={{ bgcolor: "#eee" }} />
            <span>باقی مانده</span>
          </div>
        </Box>
      </Box>

      <Box sx={{ position: "relative", width: 220, height: 140 }}>
        <Box
          component="p"
          sx={{
            position: "absolute",
            left: 260,
            transform: "translateX(-50%)",
            fontSize: "0.9rem",
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}
        >
          پیشرفت نظافت و بررسی طبقات
        </Box>

        <Gauge
          value={value}
          min={0}
          max={100}
          startAngle={-90}
          endAngle={90}
          innerRadius="70%"
          outerRadius="100%"
          text={({}) => `${formatFaNumber(value)}٪`}
          sx={{
            [`& .${gaugeClasses.valueArc}`]: { fill: "#E9B872" },
            [`& .${gaugeClasses.referenceArc}`]: { fill: "#eee" },
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: "1.5rem",
              fontWeight: "bold",
              fill: "#333",
            },
          }}
        />
      </Box>
    </Box>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box
        sx={{
          width: 16,
          height: 16,
          borderRadius: "50%",
          bgcolor: color,
        }}
      />
      <span>{label}</span>
    </Box>
  );
}
