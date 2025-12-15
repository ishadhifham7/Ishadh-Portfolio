"use client";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const TechArsenal = () => {
  const data = [
    { category: "Frontend", value: 75 },
    { category: "Backend", value: 85 },
    { category: "Databases", value: 85 },
    { category: "Cloud", value: 65 },
    { category: "Tools", value: 80 },
  ];

  return (
    <div className="w-full h-[420px]">
      <ResponsiveContainer>
        <RadarChart data={data} outerRadius="80%">
          <PolarGrid stroke="#c1c1c1ff" />

          <PolarAngleAxis
            dataKey="category"
            tick={{
              fill: "#ffffffff",
              fontSize: 14,
              fontWeight: 500,
            }}
          />

          <PolarRadiusAxis tick={false} axisLine={false} />

          <Radar
            dataKey="value"
            stroke="#1E90FF"
            fill="#1E90FF"
            fillOpacity={0.25}
            dot={{
              r: 4,
              fill: "#0080ffff",
              stroke: "#1E90FF",
              strokeWidth: 1,
            }}
            activeDot={{
              r: 4,
              fill: "#63B3ED",
              stroke: "#ffffff",
              strokeWidth: 1,
            }}
            isAnimationActive={true}
            animationDuration={1200}
            animationEasing="ease-out"
          />
        </RadarChart>
      </ResponsiveContainer>

      {/* Remove all focus outlines inside the chart */}
      <style jsx>{`
        div :global(svg *:focus) {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default TechArsenal;

const data = [
  { category: "Frontend", value: 85 },
  { category: "Backend", value: 80 },
  { category: "Databases", value: 60 },
  { category: "Cloud", value: 50 },
  { category: "Tools", value: 75 },
];
