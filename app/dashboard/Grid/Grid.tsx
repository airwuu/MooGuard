"use client";

import { useContext, useState } from "react";
import CowPoint from "./CowPoint"; 
import { SliderComponent } from "./Slider";
import CowContext from "./../Context/CowContext"; 
import TimeContext from "./../Context/TimeContext";

interface CowPosition {
  time: number;
  x: number;
  y: number;
}

interface Cow {
  id: string;
  name: string;
  positions: CowPosition[];
}

const getCowPos = (cow: Cow, time: number): { x: number; y: number } => {
  let pos = null;

  // search for matching time
  for (let i = 0; i < cow.positions.length; i++) {
    if (cow.positions[i].time === time) {
      pos = cow.positions[i];
      break;
    }
  }

  // fixed null pos :joy:
  if (!pos) {
    return { 
      x: 0, 
      y: 0 
    }; 
  }

  return { 
    x: pos.x, 
    y: pos.y 
  };
};

export default function Grid() {
  const cows = useContext(CowContext);
  const [selectedCow, setSelectedCow] = useState<Cow | null>(null);

  const timeContext = useContext(TimeContext);
  const { time, setTime } = timeContext;

  // cowElements is an array of cowpoints
  const cowElements = cows.map(cow => {
    const position = getCowPos(cow, time);

    return (
      <CowPoint
        key={cow.id}
        x={position.x}
        y={position.y}
        healthStatus={cow.healthStatus}
        onClick={() => {
          setSelectedCow(cow);
          console.log(`${cow.name}`);
        }}
      />
    );
  });

  return (
    <>
      {/* this means that x and y range from 0 - 200 */}
      <div className="relative w-[300px] h-[300px] bg-gray-500 flex items-center justify-center ml-5 mt-3">
        {cowElements}
      </div>
    </>
  );
}
