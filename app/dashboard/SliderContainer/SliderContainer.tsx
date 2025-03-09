"use client";

import { useContext } from "react"; 
import TimeContext from "./../Context/TimeContext";
import CowContext from "./../Context/CowContext"
import { SliderComponent } from "./Slider";

export default function SliderContainer() {
  const timeContext = useContext(TimeContext);
  const { time, setTime } = timeContext;

  const cows = useContext(CowContext);

  // max time for all cows
  const max = cows.length > 0
  ? Math.max(...cows.flatMap(cow => cow.positions.map(p => p.time)))
  : 0;

  return (
    <div className="border-1 border-white p-4 w-[900px] h-[80px] font-mono text-white bg-gray-900 mt-10">
    <SliderComponent className="mt-5 w-full"
      time={time} 
      setTime={setTime} 
      max={max} 
      step={1} 
    />
    </div>
  );
}
