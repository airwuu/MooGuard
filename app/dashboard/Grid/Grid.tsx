"use client";

import { useContext, useState } from "react";
import CowPoint from "./CowPoint"; 
import { SliderComponent } from "./Slider"; // cuz i cant name it Slider for some reason

// i think we should use useContext to show the current selected cow. so the cow component can find it 

// sample cow data

// this is the best way to store cow data i can think of
// each cow has an id, name, and the positions array
// the positions array includes the time, x, and y
  // to get the position you need id and time
    // might be a bit weird cuz you need to iterate through time instead of just looking it up
    // but the alternative is having the pos guaranteed when our CV sometimes doesn't know

const cowData: Cow[] = [
  {
    id: "1",
    name: "Bertha",
    positions: [
      { time: 0, x: 50, y: 50 },
      { time: 1, x: 100, y: 50 },
      { time: 2, x: 150, y: 100 },
    ],
  },
  {
    id: "2",
    name: "Bartha",
    positions: [
      { time: 0, x: 20, y: 100 },
      { time: 1, x: 50, y: 120 },
      { time: 2, x: 80, y: 140 },
    ],
  },
];

interface CowPointProps {
  x: number;
  y: number;
  onClick: () => void;
}

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

// communicates with slider to display the current position of cow
export default function Grid() {
  const [time, setTime] = useState(0);
  const [selectedCow, setSelectedCow] = useState([null]); 

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

  // cowElements is an array of cowpoints 
  const cowElements = cowData.map((cow) => {
    const position = getCowPos(cow, time);

    return (
      <CowPoint
        key={cow.id} x={position.x} y={position.y}
        onClick={() => {
          setSelectedCow(cow); 
          console.log(`${cow.name}`);
        }}
      />
    );
  });

  // maximum time
  const max = Math.max(...cowData.flatMap(cow => cow.positions.map(p => p.time)));

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