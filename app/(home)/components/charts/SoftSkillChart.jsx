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

const SoftArsenal = () => {
  const data = [
    { category: "Problem Solving", value: 80 },
    { category: "Communication", value: 80 },
    { category: "Learning Ability", value: 85 },
    { category: "Team Collaboration", value: 90 },
    { category: "Adaptability", value: 90 },
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
              fill: "#ffffffff",
              fontSize: isMobile ? 9 : 13,
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

export default SoftArsenal;
