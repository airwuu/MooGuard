"use client"

import { useEffect, useState } from "react";

import { CowProvider } from "./Context/CowProvider"; 
import TimeProvider from "./Context/TimeProvider";

import Irregularities from "./Irregularities/Irregularities";
import GridContainer from "./Grid/GridContainer";
import MooGuard from "./MooGuard/MooGuard";
import SliderContainer from "./SliderContainer/SliderContainer";

export default function Dashboard() {
  const [showMooGuard, setShowMooGuard] = useState(false)
  const [showLeftSide, setShowLeftSide] = useState(false)

  // Trigger the animations after component mounts
  useEffect(() => {
    // Small delay to ensure the initial state is rendered first
    const timer = setTimeout(() => {
      setShowLeftSide(true)
      setShowMooGuard(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <CowProvider>
      <TimeProvider> 

        <div className="fixed inset-0 -z-100  bg-gradient-to-tr from-slate-600 via-slate-800 to-slate-950" />

        <p className="text-4xl ml-10 mt-5">Dashboard</p>

        <div className="flex justify-between px-10 mt-5 ml-10">
          {/* left should flex to be as tall as mooguard */}
          {/* also grid should flex to be as large as irregularities */}
          <div
            className={`flex flex-col gap-5 w-1/2 transform transition-transform duration-500 ease-out ${
              showLeftSide ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <Irregularities />
            <GridContainer />
          </div>

          <div
              className={`transform transition-transform duration-500 ease-out ${
                showMooGuard ? "translate-x-0" : "translate-x-full"
              }`}
            >
            <MooGuard />
            <SliderContainer /> 
          </div>
        </div>

      </TimeProvider>
    </CowProvider>
  )
}