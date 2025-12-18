"use client";
import { useEffect, useState } from "react";
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="w-full h-[280px] sm:h-[420px] overflow-hidden">
      <ResponsiveContainer>
        <RadarChart data={data} outerRadius={isMobile ? "65%" : "72%"}>
          <PolarGrid stroke="#c1c1c1ff" />

          <PolarAngleAxis
            dataKey="category"
            tick={{
              fill: "#ffffff",
              fontSize: isMobile ? 11 : 13,
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
              r: isMobile ? 3 : 4,
              fill: "#0080ff",
              stroke: "#1E90FF",
              strokeWidth: 1,
            }}
            activeDot={{
              r: isMobile ? 3 : 4,
              fill: "#63B3ED",
              stroke: "#ffffff",
              strokeWidth: 1,
            }}
            animationDuration={1200}
            animationEasing="ease-out"
          />
        </RadarChart>
      </ResponsiveContainer>

      <style jsx>{`
        div :global(svg *:focus) {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default TechArsenal;
