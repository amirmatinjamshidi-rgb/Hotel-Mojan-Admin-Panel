"use client";
import dynamic from "next/dynamic";
export const BarChart = dynamic(
  () => import("@mui/x-charts/BarChart").then((m) => m.BarChart),
  { ssr: false },
);
import Box from "@mui/material/Box";
import { formatFaNumber } from "@/utils/formatFaNumber";

const pData: number[] = [40, 28, 85, 60, 72, 55, 63, 70, 68, 74, 80, 90];

const xLabels: string[] = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

export default function Occupancystatistics() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 508,
        height: 208,
        mx: "auto",
        border: 1,
        borderRadius: "8px",
        padding: "4px",
        borderColor: "#eaeaeb",
        "& .MuiBarElement-root": {
          fill: "url(#barGradient)",
          clipPath: "inset(0 round 12px 12px 0 0)",
        },
      }}
    >
      {" "}
      <p className="flex align-middle">میزان اشغال هتل</p>
      <BarChart
        skipAnimation
        series={[
          {
            data: pData,
            id: "occupancy",
            valueFormatter: (v) => (v == null ? "" : `٪${formatFaNumber(v)}`),
          },
        ]}
        xAxis={[
          {
            data: xLabels,
            scaleType: "band",
            height: 42,
            tickLabelStyle: {
              fontSize: 8,
            },
          },
        ]}
        yAxis={[
          {
            min: 0,
            max: 100,
            tickInterval: [0, 25, 50, 75, 100],
            valueFormatter: (v: number) => `٪${formatFaNumber(v)}`,
          },
        ]}
        grid={{ horizontal: true, vertical: false }}
        slots={{ legend: () => null }}
        sx={{
          "& .MuiBarElement-root": {
            fill: "url(#barGradient)",
          },

          "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
            display: "none",
          },

          "& .MuiChartsAxis-left .MuiChartsAxis-line": {
            display: "none",
          },

          "& .MuiChartsAxis-tick": {
            display: "none",
          },
        }}
      >
        <defs>
          <linearGradient id="barGradient" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="rgba(233, 184, 114, 0.7)" />
            <stop offset="100%" stopColor="#E9B872" />
          </linearGradient>
        </defs>
      </BarChart>
    </Box>
  );
}
