"use client";

import { useState, useContext } from "react";
import CowContext from "./../Context/CowContext";
import CowData from "../CowData";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"; // ChadCN/Recharts

export default function MooGuard() {
  const cows = useContext(CowContext);
  const [expandedCow, setExpandedCow] = useState<string | null>(null);

  const toggleDropdown = (cowId: string) => {
    setExpandedCow(expandedCow === cowId ? null : cowId);
  };

  return (
    <div className="border-1 border-white p-4 w-[1200px] h-[730px] font-mono text-white bg-gray-900">
      <p className="text-xl font-bold">MooGuard</p>
      <ScrollArea className="h-[650px] w-[1150px] rounded-md border p-4">
        {cows.map((cow) => (
          <div key={cow.id} className="transition duration-100">
            {/* Cow Basic Data (Clickable) */}
            <div
              className="hover:bg-gray-500/30 cursor-pointer p-2 rounded-md"
              onClick={() => toggleDropdown(cow.id)}
            >
              <CowData cow={cow} />
            </div>

            {expandedCow === cow.id && (
              <Card className="p-4 bg-gray-800 text-white mt-2 rounded-md">
                <p className="text-lg font-semibold">Movement v. Time</p>
                <CowChart positions={cow.positions} />
              </Card>
            )}

            <Separator />
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}

const calculateDailyDistances = (positions: { time: number; x: number; y: number }[]) => {
  if (positions.length < 2) return [];

  let distances = [];
  for (let i = 1; i < positions.length; i++) {
    const dx = positions[i].x - positions[i - 1].x;
    const dy = positions[i].y - positions[i - 1].y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    distances.push({ day: `Day ${i}`, distance: distance.toFixed(2) });
  }

  return distances;
};

function CowChart({ positions }: { positions: { time: number; x: number; y: number }[] }) {
  const data = calculateDailyDistances(positions);

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <XAxis dataKey="day" stroke="#ffffff" />
        <YAxis stroke="#ffffff" />
        <Tooltip />
        <Bar dataKey="distance" fill="#10b981" />
      </BarChart>
    </ResponsiveContainer>
  );
}
