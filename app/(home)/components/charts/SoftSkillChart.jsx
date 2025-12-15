"use client";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const SoftArsenal = () => {
  const data = [
    { category: "Problem Solving", value: 85 },
    { category: "Communication", value: 80 },
    { category: "Learning Ability", value: 60 },
    { category: "Team Collaboration", value: 50 },
    { category: "Adaptability", value: 75 },
  ];

  return (
    <div className="w-full h-[420px]">
      <ResponsiveContainer>
        <RadarChart data={data} outerRadius="80%">
          <PolarGrid stroke="#27272a" />

          <PolarAngleAxis
            dataKey="category"
            tick={{
              fill: "#a1a1aa",
              fontSize: 12,
              fontWeight: 500,
            }}
          />

          {/* No numbers */}
          <PolarRadiusAxis tick={false} axisLine={false} />

          <Radar
            dataKey="value"
            stroke="#e5e7eb"
            fill="#e5e7eb"
            fillOpacity={0.15}
            dot={{
              r: 4,
              fill: "#ffffff",
              stroke: "#ffffff",
              strokeWidth: 0,
            }}
            activeDot={{
              r: 4,
              fill: "#b0b0b0ff",
              stroke: "#b0b0b0ff",
              strokeWidth: 2,
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SoftArsenal;
