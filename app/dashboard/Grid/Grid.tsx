"use client";

import { useContext, useState } from "react";
import CowPoint from "./CowPoint"; 
import { SliderComponent } from "./Slider";
import CowContext from "./../Context/CowContext"; 

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

  // what to do if null :skull:
  return {x: pos.x, y: pos.y};
};

export default function Grid() {
  const cows = useContext(CowContext);
  const [time, setTime] = useState(0);
  const [selectedCow, setSelectedCow] = useState<Cow | null>(null);

  // array of all cowpoint components
  const cowElements = cows.map(cow => {
    const position = getCowPos(cow, time);

    return (
      <CowPoint
        key={cow.id}
        x={position.x}
        y={position.y}
        onClick={() => {
          setSelectedCow(cow);
          console.log(`${cow.name}`);
        }}
      />
    );
  });

  // max time for all cows
  const max = cows.length > 0
    ? Math.max(...cows.flatMap(cow => cow.positions.map(p => p.time)))
    : 0;

  return (
    <>
      <SliderComponent
        time={time} 
        setTime={setTime} 
        max={max} 
        step={1} 
      />

      {/* this means that x and y range from 0 - 200 */}
      <div className="relative w-[200px] h-[200px] bg-gray-500 flex items-center justify-center">
        {cowElements}
      </div>
    </>
  );
}
