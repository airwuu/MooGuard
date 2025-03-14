"use client";

import { useState, useContext, useEffect } from "react";

import CowContext from "./../Context/CowContext";
import CowData from "../CowData";
import gemini from '@/components/ui/gemini'
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
  const [text, setText] = useState('');
  useEffect(() => {
    const fetchData = () => {
        return new Promise((resolve, reject) => {
          // Simulate a fetch request
          gemini("Please give me a summary of how my cows are doing.", "Bertha, Dead, Collapsed and has not moved for over a week || Bartha, Ill, Showing signs of fatigue and slow movements || Fred, Healthy, Actively grazing and moving around the field || Mooington, Healthy, Steady movement and consistent feeding observed || Daisy, Ill, Lethargic and avoiding food, reduced activity detected || Bessie, Healthy, Active and following herd with normal grazing behavior || Clarabelle, Healthy, Regular activity and no signs of distress || Otis, Ill, Moving inconsistently, possibly injured. Moolissa, Healthy, Consistently moving and grazing with the herd || Sir Moos-a-Lot, Ill, Sporadic movement, appearing fatigued || Spot, Healthy, Energetic and social, frequently moving with the herd || Mootilda, Dead, No signs of life, body remains in the same position || Big Mac, Healthy, High activity, constantly moving to graze ONLY SUMMARIZE UP TO 4 RANDOM COWS. Please give advice IN ONLY 2 SENTENCES. NO TEXT STYLING")
            .then((response) => response)
            .then((data) => resolve(data))
            .catch((error) => reject(error))
        })
      }
    fetchData()
    .then(async (result) => {
        
        const allText = String(result).split("\n")
        console.log(allText)



        setText(String(result));

    })
    .catch((error) => {
    console.error('Error fetching data:', error)
    })
    
    
}, []);
  return (
    <div className="flex flex-col">
    <div className="border-1 border-white p-4 max-w-[1050px] w-[1200px] h-[600px] font-mono text-white bg-gray-900 mr-45">
      <p className="text-xl font-bold">MooGuard</p>
      <ScrollArea className="h-[520px] w-[1000px] rounded-md border p-4">
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
    <div className="flex flex-col border-1 border-white p-4 max-w-[1050px] w-[1200px] h-[130px] font-mono text-white bg-gray-900">
    <p className="text-xl font-bold">Summary</p>
      {text}
    </div>
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
