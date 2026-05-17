"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    subject: "Security",
    A: 85,
    fullMark: 100,
  },
  {
    subject: "Architecture",
    A: 90,
    fullMark: 100,
  },
  {
    subject: "FinOps",
    A: 75,
    fullMark: 100,
  },
  {
    subject: "Boardroom",
    A: 80,
    fullMark: 100,
  },
  {
    subject: "Strategy",
    A: 85,
    fullMark: 100,
  },
];

export function PerformanceRadar() {
  return (
    <div className="flex h-[300px] w-full flex-col items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#334155" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "#94a3b8", fontSize: 12 }}
          />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#020617",
              borderColor: "#1e293b",
              borderRadius: "8px",
              color: "#f8fafc",
              fontSize: "12px",
            }}
            itemStyle={{ color: "#fbbf24" }}
          />
          <Radar
            name="Readiness Score"
            dataKey="A"
            stroke="#f59e0b"
            strokeWidth={2}
            fill="#f59e0b"
            fillOpacity={0.2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
